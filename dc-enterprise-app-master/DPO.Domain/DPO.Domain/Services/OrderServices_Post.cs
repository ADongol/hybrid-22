using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using DPO.Resources;
using DPO.Common;
using DPO.Data;
using DPO.Model.Light;
using System.Xml.Serialization;
using System.IO;
using Renci.SshNet;

namespace DPO.Domain
{
    public partial class OrderServices : BaseServices, IOrderServices
    {
        public ServiceResponse Delete(UserSessionModel user, OrderViewModelLight model)
        {
            //return ChangeStatus(user, model, OrderStatusTypeEnum.Deleted);
            return null;
        }

        public ServiceResponse Approve(UserSessionModel user, OrderViewModelLight model)
        {
            return ChangeStatus(user, model, OrderStatusTypeEnum.InProcess);
        }

        public ServiceResponse Reject(UserSessionModel user, OrderViewModelLight model)
        {
            return ChangeStatus(user, model, OrderStatusTypeEnum.Canceled);
        }

        /*this service function will be calling by the UpdateOrderStatus API ONLY. It have no business logic checkin at all.
        We can call this as Exception function to Update the Order Status and bypass all the business logic at this time. */
        public ServiceResponse ChangeOrderStatus(UserSessionModel user, OrderViewModelLight model, OrderStatusTypeEnum orderStatus)
        {
            this.Db.ReadOnly = false;

            var entity = GetEntity(user, model);

            if (this.Response.IsOK)
            {
                entity.OrderStatusTypeId = (byte)orderStatus;
                Entry = Db.Entry(entity);
            }

            if (this.Response.IsOK)
            {
                base.SaveToDatabase(model, entity, "Order Status updated");
            }

            var newModel = GetOrderModel(user, model).Model as OrderViewModelLight;
            this.Response.Model = newModel;

            return this.Response;
        }

        public ServiceResponse ChangeStatus(UserSessionModel user, OrderViewModelLight model, OrderStatusTypeEnum status)
        {
            this.Db.ReadOnly = false;
            var entity = GetEntity(user, model);

            if (this.Response.IsOK)
            {
                entity.OrderStatusTypeId = (byte)status;
                Entry = Db.Entry(entity);

                RulesOnEdit(user, entity);
            }

            if (this.Response.IsOK)
            {
                base.SaveToDatabase(model, entity, "Order Request");
            }

            var newModel = GetOrderModel(user, model).Model as OrderViewModelLight;
            this.Response.Model = newModel;

            return this.Response;
        }

        #region Post Orders
        public ServiceResponse PostModel(UserSessionModel admin, OrderViewModelLight model)
        {
            this.Db.ReadOnly = false;

            try
            {
                Order order = null;

                // Validate Model 
                RulesOnValidateModel(model);

                // Map to Entity
                if (this.Response.IsOK)
                {
                    order = ModelToEntity(admin, model);
                }

                // Validate Entity
                if (this.Response.IsOK)
                {
                    this.Response.PropertyReference = "";

                    ApplyBusinessRules(admin, order);
                }

                if (this.Response.IsOK)
                {
                    if (model.OrderId == 0)
                    {
                        model.OrderId = order.OrderId;
                    }
                    
                    //order Items break down 
                    var orderItemsVM = this.GetOrderItems(admin, model.QuoteId).Model as List<OrderItemsViewModel>;

                    var results = orderItemsVM.ToList();

                    ///Refactored - Anand
                    //Group by productId (and CodeString)  
                    var newResult = GetNewResultList(results);

                    if (order != null && newResult != null)
                    {
                        //main submit process - handles both configured and non-configured
                        this.Response = SaveOrderAndOrderDetailsToDC(newResult, order, model, admin); 
                    }
                }
            }
            catch (Exception e)
            {
                this.Response.AddError(e.Message);
                this.Response.Messages.AddAudit(e);
            }

            finaliseModelSvc.FinaliseOrderModel(this.Response.Messages, admin, model);//TODO: do we need this here?
            this.Response.Model = model;

            return this.Response;
        }

        public List<OrderItemsViewModel> GetNewResultList(List<OrderItemsViewModel> results)
        {
            return (from result in results
                    group result by new { result.ProductId, result.CodeString, result.ModelId } into temp
                    select new OrderItemsViewModel
                    {
                        OrderId = temp.First().OrderId,
                        ProductId = temp.Key.ProductId,
                        ProductNumber = temp.First().ProductNumber,
                        LineSequence = temp.First().LineSequence,
                        ParentProductId = temp.First().ParentProductId,
                        AccountMultiplierId = temp.First().AccountMultiplierId,
                        ParentProductNumber = temp.First().ParentProductNumber,
                        Quantity = temp.Sum(sm => sm.Quantity),
                        ListPrice = temp.First().ListPrice,
                        Multiplier = temp.First().Multiplier,
                        NetPrice = temp.First().NetPrice,
                        ExtendedPrice = temp.Sum(sm => sm.ExtendedPrice),
                        DiscountPercentage = temp.First().DiscountPercentage,
                        CodeString = temp.Key.CodeString,
                        ModelId = temp.Key.ModelId,
                        EfficiencyTypeId = temp.First().EfficiencyTypeId,
                        LineItemTypeId = temp.First().LineItemTypeId,
                        ConfigType = temp.First().ConfigType,
                        QuoteItemId = temp.First().QuoteItemId
                    }).ToList();
        }

        public void IterateOrderItemsIntoTempList(List<OrderItemsViewModel> newResult, Order order, UserSessionModel admin)
        {
            for (var i = 0; i < newResult.Count(); i++)
            {
                var item = newResult[i];

                var orderItem = Db.OrderItemCreate(order.OrderId);
                orderItem.LineSequence = i + 1;
                orderItem.ParentProductId = item.ParentProductId;
                orderItem.ProductId = item.ProductId;
                orderItem.AccountMultiplierId = (item.AccountMultiplierId > 0) ? item.AccountMultiplierId : 0;
                orderItem.ParentProductNumber = item.ParentProductNumber;
                orderItem.ProductNumber = item.ProductNumber;
                orderItem.Quantity = item.Quantity;
                orderItem.ListPrice = item.ListPrice;
                orderItem.Multiplier = item.Multiplier;
                orderItem.NetPrice = item.NetPrice;
                orderItem.ExtendedNetPrice = item.ExtendedPrice;
                orderItem.DiscountPercentage = (item.DiscountPercentage > 0) ? item.DiscountPercentage : 0;
                orderItem.CodeString = item.CodeString;
                orderItem.ModelId = item.ModelId;
                orderItem.EfficiencyTypeId = item.EfficiencyTypeId;
                orderItem.LineItemTypeId = item.LineItemTypeId;
                orderItem.ConfigType = item.ConfigType;

                //Add OrderItemOptions
                if (orderItem.LineItemTypeId == (byte?)LineItemTypeEnum.Configured)
                {
                    var quoteItemOptions = Db.QuoteItemOptionsByQuoteItemId(admin, item.QuoteItemId).ToList();

                    foreach (var quoteItemOption in quoteItemOptions)
                    {
                        //add orderItemOption entity
                        var orderItemOption = Db.OrderItemOptionCreate(orderItem);
                        orderItemOption.CodeString = quoteItemOption.CodeString;
                        orderItemOption.OptionProductId = quoteItemOption.OptionProductId;
                        orderItemOption.OptionProductNumber = quoteItemOption.OptionProductNumber;
                        orderItemOption.OptionProductDescription = quoteItemOption.OptionProductDescription;
                        orderItemOption.RequiredQuantity = quoteItemOption.RequiredQuantity;
                        orderItemOption.Quantity = quoteItemOption.Quantity;
                        orderItemOption.ListPrice = quoteItemOption.ListPrice;
                        //Multiplier?
                        orderItemOption.LineItemOptionTypeId = quoteItemOption.LineItemOptionTypeId;
                        orderItem.OrderItemOptions.Add(orderItemOption);

                        //add OrderItemOption View Model to build Submittal XML
                        var orderItemOptionModel = new OrderItemOptionViewModel
                        {
                            //OrderItemOptionId = quoteItemOption.OrderItemOptionId,
                            //OrderItemId = quoteItemOption.OrderItemId,
                            BaseProductId = quoteItemOption.BaseProductId,
                            OptionProductId = quoteItemOption.OptionProductId,
                            OptionProductNumber = quoteItemOption.OptionProductNumber,
                            Quantity = quoteItemOption.Quantity,
                            ListPrice = quoteItemOption.ListPrice,
                            CodeString = quoteItemOption.CodeString,
                            LineItemOptionTypeId = quoteItemOption.LineItemOptionTypeId
                        };
                        newResult[i].OrderItemOptions.Add(orderItemOptionModel);
                    }
                }

                this.Db.Context.OrderItems.Add(orderItem);
            }
        }

        public ServiceResponse SaveOrderAndOrderDetailsToDC(List<OrderItemsViewModel> newResult, Order order, 
            OrderViewModelLight model, UserSessionModel admin)
        {
            var mapicsSvcResp = new ServiceResponse();

            //check if we have correct state value
            var address = Db.Addresses.FirstOrDefault(x => x.AddressId == model.ShipToAddressId);
            var state = Db.States.FirstOrDefault(x => x.StateId == address.StateId);

            //Added this block to stop from submitting orders if shipping state comes null somehow
            if (state != null && string.IsNullOrEmpty(state.Code))
            {
                this.Response.AddError("State is empty. Please provide appropriate shipping state again.");
                return this.Response;
            }

            using (var quoteService = new QuoteServices())
            {
                if (!quoteService.HasConfiguredModel(model.QuoteId)) // Regular Order
                {
                    //create a json array and call mapics to receive ok or not ok response
                    mapicsSvcResp = erpServiceProvider.SaveOrderDetailsToMapics(newResult, order, model, address);

                    IterateOrderItemsIntoTempList(newResult, order, admin);  //loop through newResult;

                    if (!mapicsSvcResp.IsOK)
                    {
                        this.Response.Messages
                            .AddError($"Order submission {order.OrderId} failed due to: '{mapicsSvcResp.Messages?.Items[0]?.Text}'");
                        return this.Response;
                    }
                }
                else// Order Has Configured Model
                {
                    IterateOrderItemsIntoTempList(newResult, order, admin);

                    model.ConfigOrderNumber = GetConfiguredOrderNumber();

                    order.ConfigOrderNumber = model.ConfigOrderNumber;

                    //Upload PO File to FTP Server
                    //var sftpResp = UploadPOAttachmentToFTPServer(model.QuoteId, model.ConfigOrderNumber, model.POAttachmentFileName);
                    //model.POAttachmentFileLocation = sftpResp.Model as String;

                    //example: http://www.daikincity.com/ProjectDashboard/GetPOAttachment?quoteId=730406767837577216&poAttachmentFileName=test%20PO.txt
                    model.POAttachmentFileLocation = Utilities.Config("dpo.base.url") +"ProjectDashboard/GetPOAttachment?quoteId=" + model.QuoteId + "&poAttachmentFileName=" + model.POAttachmentFileName;

                    //Send order request to Mapics
                    var xmlRequest = this.BuildSubmittalOrderXMLString(model, newResult);
                    var xmlResponse = erpServiceProvider.SendOrderRequestToMapics(xmlRequest);
                    mapicsSvcResp = erpServiceProvider.ProcessMapicsOrderSeriveResponse(xmlResponse);

                    if (!mapicsSvcResp.IsOK)
                    {
                        //return general error message
                        //this.Response.AddError("Request to Mapics web service failed!");
                        //return this.Response;

                        return mapicsSvcResp;
                    }
                }

                if (mapicsSvcResp.IsOK)
                {
                    ////Uncomment this block once expedite info functionality is ok to be put back on the order form
                    //if (model.IsExpedite == true)
                    //{
                    //    var orderExpediteEntity = Db.OrderExpediteCreate(order.OrderId);
                    //    orderExpediteEntity.OrderExpediteReasons = model.OrderExpediteInfo.OrderExpediteReasons;

                    //    this.Db.Context.OrderExpediteInfoes.Add(orderExpediteEntity);
                    //}
                  
                   var orderAttachmentEntity = Db.OrderAttachmentCreate(order.OrderId);
                   orderAttachmentEntity.FileName = model.POAttachmentFileName ?? "No File Name";
                   orderAttachmentEntity.OrderAttachmentTypeId = 1;
                   this.Context.OrderAttachments.Add(orderAttachmentEntity);

                   if (model.AdditionalDocsAttachment != null && model.AdditionalDocsAttachment.Count() > 0)
                   {
                       foreach (var additionalDoc in model.AdditionalDocsAttachment)
                       {
                           var orderAdditionalDocsEntity = Db.OrderAttachmentCreate(order.OrderId);
                           orderAdditionalDocsEntity.FileName = additionalDoc ?? "No Additional Doc File Name";
                           orderAdditionalDocsEntity.OrderAttachmentTypeId = 2;
                           
                           this.Context.OrderAttachments.Add(orderAdditionalDocsEntity);
                        }
                   }
                    this.Db.SaveChanges();

                   this.Response.Messages.AddInformation(ResourceUI.OrderSubmitInformationMessage);
                }
            }

            return this.Response;
        }

        #endregion

        #region Post Model To Entity
        public Order ModelToEntity(UserSessionModel admin, OrderViewModelLight model)
        {
            var entity = GetEntity(admin, model);

            if (this.Response.HasError) return null;

            entity.BusinessId = (model.BusinessId != null) ? model.BusinessId.Value : 0;
            entity.ShipToAddressId = (model.ShipToAddressId != null) ? model.ShipToAddressId.Value : 0;
            entity.PricingTypeId = (byte)model.PricingTypeId;
            entity.PONumber = model.PONumber;
            entity.TotalDiscountPercent = 0;
            entity.EstimatedReleaseDate = model.EstimatedReleaseDate ?? DateTime.UtcNow;
            entity.DeliveryAppointmentRequired = (!string.IsNullOrEmpty(model.DeliveryAppointmentRequired.ToString())) && model.DeliveryAppointmentRequired;
            entity.DeliveryContactName = model.DeliveryContactName;
            entity.DeliveryContactPhone = model.DeliveryContactPhone;
            entity.OrderReleaseDate = model.OrderReleaseDate;
            entity.SubmittedByUserId = (!string.IsNullOrEmpty(model.SubmittedByUserId.ToString())) ?
                                         model.SubmittedByUserId : admin.UserId;
            //entity.SubmitDate = model.SubmitDate ?? DateTime.UtcNow;
            entity.SubmitDate = (DateTime)model.SubmitDate;
            entity.CreatedByUserId = (!string.IsNullOrEmpty(model.CreatedByUserId.ToString())) ?
                                       model.CreatedByUserId : admin.UserId;
            entity.UpdatedByUserId = (!string.IsNullOrEmpty(model.UpdatedByUserId.ToString())) ?
                                     model.UpdatedByUserId : admin.UserId;
            entity.DiscountRequestId = (model.DiscountRequestId > 0) ? model.DiscountRequestId : 0;
            entity.CommissionRequestId = (model.CommissionRequestId > 0) ? model.CommissionRequestId : 0;
            entity.ERPOrderNumber = (model.ERPOrderNumber != null) ? model.ERPOrderNumber : null;
            entity.ERPPOKey = (model.ERPPOKey != null) ? model.ERPPOKey : (int?)null;
            entity.ERPStatus = (model.ERPStatus != null) ? model.ERPStatus : null;
            entity.Comments = model.Comments;
            entity.ERPComment = (model.ERPComments != null) ? model.ERPComments : null;
            entity.ERPOrderDate = (model.ERPOrderDate != null & model.ERPOrderDate != DateTime.MinValue) ?
                                   model.ERPOrderDate : (System.DateTime?)null;
            entity.ERPInvoiceDate = (model.ERPInvoiceDate != null & model.ERPOrderDate != DateTime.MinValue) ?
                                   model.ERPInvoiceDate : (System.DateTime?)null;
            entity.ERPShipDate = (model.ERPShipDate != null & model.ERPOrderDate != DateTime.MinValue) ?
                                   model.ERPOrderDate : (System.DateTime?)null;
            entity.ERPInvoiceNumber = (model.ERPInvoiceNumber != null) ? model.ERPInvoiceNumber : null;

            if (entity.Quote == null)
            {
                entity.Quote = this.Context.Quotes.FirstOrDefault(q => q.QuoteId == entity.QuoteId);
            }

            if (entity.Quote.Project == null)
            {
                entity.Quote.Project = this.Context.Projects.FirstOrDefault(p => p.ProjectId == entity.Quote.ProjectId);
            }

            ModelToEntityConcurrenyProcessing(entity as IConcurrency, model as IConcurrency);

            return entity;
        }
        #endregion

        #region AddOrderItems
        public ServiceResponse GetOrderItems(UserSessionModel user, long quoteId)
        {
            this.Response = new ServiceResponse();

            this.Context.ReadOnly = false;

            // Pull all products that have standard child items (system breakdown, multi-module breakdown)
            var childProductQuery = from q in this.Context.Quotes
                                    where q.QuoteId == quoteId
                                    join qi in this.Context.QuoteItems.Where(qi => qi.Quantity > 0)
                                    on q.QuoteId equals qi.QuoteId
                                    join pp in this.Context.Products
                                    on qi.ProductId equals pp.ProductId
                                    join pa in this.Context.ProductAccessories
                                    on pp.ProductId equals pa.ParentProductId
                                    where pa.RequirementTypeId == (int)RequirementTypeEnums.Standard
                                    join cp in this.Context.Products
                                    on pa.ProductId equals cp.ProductId
                                    where cp.ProductModelTypeId == (int)ProductModelTypeEnum.Indoor || cp.ProductModelTypeId == (int)ProductModelTypeEnum.Outdoor
                                    #region Remove after 10/31/2017
                                    //join dar in this.Context.DiscountRequests
                                    //on q.QuoteId equals dar.QuoteId into rt
                                    //from r in rt.DefaultIfEmpty()
                                    #endregion Remove after 10/31/2017
                                    select new OrderItemsViewModel
                                    {
                                        ParentProductId = (!string.IsNullOrEmpty(pa.ParentProductId.ToString())) ?
                                                            pa.ParentProductId : 0,
                                        ProductId = (!string.IsNullOrEmpty(cp.ProductId.ToString())) ?
                                                      cp.ProductId : 0,
                                        AccountMultiplierId = (long)cp.MultiplierTypeId.Value,
                                        ParentProductNumber = pp.ProductNumber,
                                        ProductNumber = cp.ProductNumber,
                                        Quantity = pa.Quantity * qi.Quantity,
                                        ListPrice = cp.ListPrice,
                                        Multiplier = qi.Multiplier,
                                        NetPrice = qi.Multiplier * cp.ListPrice,
                                        ExtendedPrice = cp.ListPrice * qi.Multiplier * pa.Quantity * qi.Quantity,
                                        MultiplierCategoryTypeId = cp.MultiplierType.MultiplierTypesMultiplierCategoryTypes.Select(mct => mct.MultiplierCategoryTypeId).FirstOrDefault(),
                                        CodeString = qi.CodeString,
                                        ModelId = qi.ModelId,
                                        EfficiencyTypeId = qi.EfficiencyTypeId,
                                        LineItemTypeId = qi.LineItemTypeId,
                                        ConfigType = qi.ConfigType,
                                        QuoteItemId = qi.QuoteItemId

                                        
                                    };

            // Pull all products that do not have standard child items (so no systems or multi-module units)
            var nonChildProductQuery = from q in this.Context.Quotes
                                       where q.QuoteId == quoteId
                                       join qi in this.Context.QuoteItems.Where(qi => qi.Quantity > 0)
                                       on q.QuoteId equals qi.QuoteId
                                       join pp in this.Context.Products
                                       on qi.ProductId equals pp.ProductId
                                       where !childProductQuery.Any(a => a.ParentProductId == qi.ProductId)
                                       select new OrderItemsViewModel
                                       {
                                           ParentProductId = 0,
                                           ProductId = pp.ProductId,
                                           AccountMultiplierId = (long)pp.MultiplierTypeId.Value,
                                           ParentProductNumber = pp.ProductNumber,
                                           ProductNumber = pp.ProductNumber,
                                           Quantity = qi.Quantity,
                                           ListPrice = qi.ListPrice,
                                           Multiplier = qi.Multiplier,
                                           NetPrice = qi.Multiplier * qi.ListPrice,
                                           ExtendedPrice = qi.ListPrice * qi.Multiplier * qi.Quantity,
                                           MultiplierCategoryTypeId = pp.MultiplierType.MultiplierTypesMultiplierCategoryTypes.Select(mct => mct.MultiplierCategoryTypeId).FirstOrDefault(),
                                           CodeString = qi.CodeString,
                                           ModelId = qi.ModelId,
                                           EfficiencyTypeId = qi.EfficiencyTypeId,
                                           LineItemTypeId = qi.LineItemTypeId,
                                           ConfigType = qi.ConfigType,
                                           QuoteItemId = qi.QuoteItemId

                                          

                                       };

            var query = childProductQuery.Concat(nonChildProductQuery);
            query = ApplyOrderItemDiscounts(query, quoteId);
            this.Response.Model = query.OrderBy(x => x.ProductNumber).ToList();

            return this.Response;
        }

        public IQueryable<OrderItemsViewModel> GetOrderItemsBrokenDown(long orderId)
        {
            var orderItemQuery = from orderItem in this.Context.OrderItems
                                 where orderItem.OrderId == orderId
                                 select new OrderItemsViewModel
                                 {
                                     OrderItemId = orderItem.OrderItemId,
                                     OrderId = orderItem.OrderId,
                                     LineSequence = orderItem.LineSequence,
                                     ParentProductId = (long)orderItem.ParentProductId,
                                     ParentProductNumber = orderItem.ParentProductNumber,
                                     ProductId = orderItem.ProductId,
                                     ProductNumber = orderItem.ProductNumber,
                                     Quantity = orderItem.Quantity,
                                     ListPrice = orderItem.ListPrice,
                                     Multiplier = orderItem.Multiplier,
                                     NetPrice = orderItem.NetPrice,
                                     DiscountPercentage = orderItem.DiscountPercentage,
                                     CodeString = orderItem.CodeString,
                                     LineItemTypeId = orderItem.LineItemTypeId

                                 };
            return orderItemQuery;
        }

        public IQueryable<OrderItemOptionViewModel> GetOrderItemOptions(long orderId)
        {
            var orderItemOptionQuery = from optionItem in this.Context.OrderItemOptions
                                       where optionItem.OrderId == orderId
                                       select new OrderItemOptionViewModel
                                       {
                                           OrderItemOptionId = optionItem.OrderItemOptionId,
                                           OrderItemId = optionItem.OrderItemId,
                                           BaseProductId = optionItem.BaseProductId,
                                           OptionProductId = optionItem.OptionProductId,
                                           OptionProductNumber = optionItem.OptionProductNumber,
                                           Quantity = optionItem.Quantity,
                                           ListPrice = optionItem.ListPrice,
                                           CodeString = optionItem.CodeString,
                                           LineItemOptionTypeId = optionItem.LineItemOptionTypeId
                                       };
            return orderItemOptionQuery;
        }

        public IQueryable<OrderItemOptionViewModel> GetOrderItemOptionsByOrderItemId(long orderId, long orderItemId)
        {
            var orderItemOptionQuery = from optionItem in this.Context.OrderItemOptions
                                       where optionItem.OrderId == orderId && optionItem.OrderItemId == orderItemId
                                       select new OrderItemOptionViewModel
                                       {
                                           OrderItemOptionId = optionItem.OrderItemOptionId,
                                           OrderItemId = optionItem.OrderItemId,
                                           BaseProductId = optionItem.BaseProductId,
                                           OptionProductId = optionItem.OptionProductId,
                                           OptionProductNumber = optionItem.OptionProductNumber,
                                           Quantity = optionItem.Quantity,
                                           ListPrice = optionItem.ListPrice,
                                           CodeString = optionItem.CodeString,
                                           LineItemOptionTypeId = optionItem.LineItemOptionTypeId
                                       };
            return orderItemOptionQuery;
        }

        public IQueryable<OrderItemsViewModel> ApplyOrderItemDiscounts(IQueryable<OrderItemsViewModel> query, long quoteId)
        {
            // Apply appropriate DAR discounts for items if needed
            var currApprovedDar = (from d in this.Context.DiscountRequests
                                   where d.QuoteId == quoteId
                                     && d.DiscountRequestStatusTypeId == (byte)DiscountRequestStatusTypeEnum.Approved
                                   select d).FirstOrDefault();


            if (currApprovedDar == null)
            {
                return query;
            }

            var orderItems = query.ToArray();

            // Apply line item discount
            foreach (var orderItem in orderItems)
            {
                if (orderItem.MultiplierCategoryTypeId != null)
                {

                    decimal lineItemDiscount = 0;
                    switch (orderItem.MultiplierCategoryTypeId)
                    {
                        case MultiplierCategoryTypeEnum.VRV:
                            lineItemDiscount = currApprovedDar.ApprovedDiscountVRV;
                            break;
                        case MultiplierCategoryTypeEnum.Unitary:
                            lineItemDiscount = currApprovedDar.ApprovedDiscountUnitary.HasValue ? currApprovedDar.ApprovedDiscountUnitary.Value : 0;
                            break;
                        case MultiplierCategoryTypeEnum.Split:
                            lineItemDiscount = currApprovedDar.ApprovedDiscountSplit;
                            break;
                        case MultiplierCategoryTypeEnum.LCPackage:
                            lineItemDiscount = currApprovedDar.ApprovedDiscountLCPackage.HasValue ? currApprovedDar.ApprovedDiscountLCPackage.Value : 0;
                            break;
                    }

                    // TODO: We need to standardize percentages... we should probably standard on decimals not percentage
                    // Convert decimal to a percentage value
                    orderItem.DiscountPercentage = lineItemDiscount * 100;
                }
            }

            return orderItems.AsQueryable();
        }

        public void AdjustOrderItems(UserSessionModel user, OrderViewModelLight model, List<OrderItem> OrderItemUpdates, bool isAdd, Order entity = null)
        {
            this.Context.ReadOnly = false;

            var order = entity;

            if (order == null)
            {
                order = GetEntity(user, model);
            }

            if (order != null && OrderItemUpdates != null && OrderItemUpdates.Count > 0)
            {

                this.Context.Entry(order).State = EntityState.Modified;

                ApplyBusinessRules(user, order);

                if (this.Response.IsOK)
                {
                    base.SaveToDatabase(model, order, string.Format("Order '{0}'", order.OrderId));
                }
            }

            return;
        }

        public OrderOptionsModel GetOrderOptionsModel(UserSessionModel user, long? projectId, long? currentQuoteId)
        {
            OrderOptionsModel orderOptions = new OrderOptionsModel();

            //========= No ShowPrices ================
            if (user.ShowPrices == false)
            {
                orderOptions.CanSubmitOrder = false;
                orderOptions.CanViewSubmittedOrder = false;
                orderOptions.CanViewOrders = false;
                return orderOptions;
            }

            if (user.HasAccess(SystemAccessEnum.SubmitOrder))
            {
                //============Submit Order is not allowed when there is no products in quote================
                var queryQuoteItems = from quoteItem in this.Context.QuoteItems
                                      where quoteItem.QuoteId == currentQuoteId
                                      select quoteItem;
                var productList = queryQuoteItems.ToList();
                if (productList == null || productList.Count == 0)
                {
                    orderOptions.CanSubmitOrder = false;
                    orderOptions.CanViewSubmittedOrder = false;

                    return orderOptions;
                }
                //==========================================================================================

                //============Hide Submit Order button when quote is Commission or quote is Deleted=================
                var queryQuote = from quote in this.Context.Quotes
                                 where quote.QuoteId == currentQuoteId
                                 select quote;

                var currentquote = queryQuote.FirstOrDefault();
                if (currentquote.IsCommission || currentquote.Deleted)
                {
                    orderOptions.CanSubmitOrder = false;
                    orderOptions.CanViewSubmittedOrder = false;
                    orderOptions.CanViewOrders = true;// can see Orders Tab 

                    return orderOptions;
                }
                //==============================================================================

                //============Check Discount Request Status===============================
                var queryDARrequest = from dar in this.Context.DiscountRequests
                                      where dar.QuoteId == currentQuoteId
                                      select dar;
                var quoteDAR = queryDARrequest.FirstOrDefault();
                if (quoteDAR != null && quoteDAR.DiscountRequestStatusTypeId == 2)
                {//========= DAR pending======
                    orderOptions.CanSubmitOrder = false;
                    orderOptions.CanViewSubmittedOrder = false;

                    return orderOptions;
                }
                //========================================================================

                //===========Check Commission Request Status==============================
                var queryCOMrequest = from com in this.Context.CommissionRequests
                                      where com.QuoteId == currentQuoteId
                                      select com;
                var quoteCOM = queryCOMrequest.FirstOrDefault();

                if (quoteCOM != null && quoteCOM.CommissionRequestStatusTypeId == 2)
                {//========= COM pending======
                    orderOptions.CanSubmitOrder = false;
                    orderOptions.CanViewSubmittedOrder = false;

                    return orderOptions;
                }
                //========================================================================

                //======== DAR/COM approved  or  No DAR/COM ==============================
                var queryOrderInProject = from order in this.Context.Orders
                                          join quote in this.Context.Quotes on order.QuoteId equals quote.QuoteId
                                          where quote.ProjectId == projectId
                                          select order;
                var existedOrder = queryOrderInProject.FirstOrDefault();

                if (existedOrder != null)/*=== Order existed =====*/
                {
                    if (existedOrder.OrderStatusTypeId == 1 || existedOrder.OrderStatusTypeId == 2 || existedOrder.OrderStatusTypeId == 3) // New Record/ Submitted/ Awaiting CSR
                    {
                        orderOptions.CanSubmitOrder = false;
                    }
                    else
                    {
                        if (existedOrder.OrderStatusTypeId == 4) // Accepted 
                        {
                            if (existedOrder.QuoteId == currentQuoteId)
                            {
                                orderOptions.CanSubmitOrder = false;
                            }
                            else // this is to allow many orders in one project 
                            {
                                orderOptions.CanSubmitOrder = true;
                            }
                        }
                        else if (existedOrder.OrderStatusTypeId == 5) //InProcess
                        {
                            orderOptions.CanSubmitOrder = false;
                        }
                        else if (existedOrder.OrderStatusTypeId == 6) //Picked
                        {
                            orderOptions.CanSubmitOrder = false;
                        }
                        else if (existedOrder.OrderStatusTypeId == 7) //Shipped
                        {
                            orderOptions.CanSubmitOrder = false;
                        }
                        else if (existedOrder.OrderStatusTypeId == 8)// Canceled
                        {
                            orderOptions.CanSubmitOrder = true;
                        }
                    }
                    orderOptions.CanViewSubmittedOrder = true;
                }
                else                  /*===== Order not existed ====*/
                {
                    orderOptions.CanSubmitOrder = true;
                    orderOptions.CanViewSubmittedOrder = false;
                }

                orderOptions.CanViewOrders = true;

                return orderOptions;

                //========End of DAR/COM approved  or  No DAR/COM ========================
            }
            else /***** when user doesn't have permission to Submit Order *****/
            {
                orderOptions.CanSubmitOrder = false;
                if (user.HasAccess(SystemAccessEnum.ViewOrder))
                {
                    orderOptions.CanViewOrders = true;

                    var queryOrderInProject = from order in this.Context.Orders
                                              join quote in this.Context.Quotes on order.QuoteId equals quote.QuoteId
                                              where quote.ProjectId == projectId
                                              select order;
                    var existedOrder = queryOrderInProject.FirstOrDefault();

                    if (existedOrder != null)
                    {
                        orderOptions.CanViewSubmittedOrder = true;
                    }
                    else
                    {
                        orderOptions.CanViewSubmittedOrder = false;
                    }

                }
                else
                { //=== user doesn't have permission to Submit Order  && View Order
                    orderOptions.CanViewSubmittedOrder = false;
                    orderOptions.CanViewOrders = false;
                }

                return orderOptions;
            }
        }// end of GetOrderOptionsModel

        public ServiceResponse SubmitOrderToMapics(long orderId)
        {
            return this.Response;
        }

        public MfgModel BuildMfgModel(OrderItemsViewModel configOrderItem)
        {
            MfgModel Model = new MfgModel()
            {
                ConfigType = configOrderItem.ConfigType,
                CodeString = configOrderItem.CodeString,
                ModelNumber = (configOrderItem.EfficiencyTypeId == (byte)EfficiencyTypeEnum.High) ? configOrderItem.ModelId : configOrderItem.CodeString,
                Quantity = (int)configOrderItem.Quantity,
                BaseModel = new MfgBaseModel()
                {
                    BaseModelNumber = configOrderItem.ProductNumber,
                    Efficiency = (configOrderItem.EfficiencyTypeId == (byte)EfficiencyTypeEnum.High) ? "High": "Standard",

                },
                Accessories = new List<MfgAccessory>()
            };

            //Get FactoryInstalled Items
            foreach (var orderItemOption in configOrderItem.OrderItemOptions)
            {
                if (orderItemOption.LineItemOptionTypeId == (byte)LineItemOptionTypeEnum.FactoryInstalled)
                {
                    MfgAccessory accessory = new MfgAccessory()
                    {
                        AccessoryItemNumber = orderItemOption.OptionProductNumber
                    };
                    Model.Accessories.Add(accessory);
                }
            }

            return Model;
        }       

        public string BuildSubmittalOrderXMLString(OrderViewModelLight orderModel, List<OrderItemsViewModel> orderItems)
        {
            //var configOrderNumber = GetConfiguredOrderNumber();

            var ShipToAddress = this.Db.GetAddressByAddressId(orderModel.ShipToAddressId);

            //=======GET SUBMITTAL ORDER INFO======
            var SubmittalOrder = new SubmittalOrder()
            {
                CompanyNumber = "01",
                CustomerNumber = orderModel.ERPAccountId,
                ConfigOrder = orderModel.ConfigOrderNumber.ToString("D6"),
                SalesOrder = new SalesOrder()
                {
                    PONumber = orderModel.PONumber,
                    POFile = orderModel.POAttachmentFileLocation,
                    PODate = orderModel.SubmitDate.ToString("yyyy-MM-dd"),
                    RequestDate = orderModel.EstimatedDeliveryDate.ToString("yyyy-MM-dd"),
                    OrderType = "PC",// get from LCST
                    ShipTo = new ShipTo()
                    {
                        Name = orderModel.ShipToName,
                        Address1 = ShipToAddress.AddressLine1,
                        Address2 = ShipToAddress.AddressLine2,
                        Address3 = ShipToAddress.AddressLine3,
                        State = ShipToAddress.State.Code,
                        City = ShipToAddress.Location,
                        Zip = ShipToAddress.PostalCode
                    },
                    Comments = orderModel.Comments,
                    BusinessID = (long)orderModel.BusinessId,
                    ProjectID = orderModel.ProjectId,
                    QuoteID = orderModel.QuoteId,
                    LineItems = new List<LineItem>()
                },
                MfgOrder = new MfgOrder()
                {
                    //OrderType = "Customer",
                    Models = new List<MfgModel>()
                }
            };

            //=============BUILD SALESORDER LINE ITEMS=========

            var nextLineSequence = orderItems.Select(i => i.LineSequence).Max() + 1;

            foreach (var orderItem in orderItems)
            {
                //Get standard items
                if (orderItem.LineItemTypeId == (byte)LineItemTypeEnum.Standard)
                {
                    var lineItem = new LineItem()
                    {
                        LineSequence = orderItem.LineSequence * 10,
                        SKU = orderItem.ProductNumber,
                        Quantity = (int)orderItem.Quantity,
                        Price = orderItem.NetPrice,
                        Discount = orderItem.DiscountPercentage,
                        CodeString = orderItem.CodeString
                    };

                    SubmittalOrder.SalesOrder.LineItems.Add(lineItem);
                }
                //Get configured items (Base Model)
                if (orderItem.LineItemTypeId == (byte)LineItemTypeEnum.Configured)
                {
                    var lineItem = new LineItem()
                    {
                        LineSequence = orderItem.LineSequence * 10,
                        SKU = (orderItem.EfficiencyTypeId == (byte)EfficiencyTypeEnum.High)? orderItem.ModelId : orderItem.CodeString,
                        Quantity = (int)orderItem.Quantity,
                        Price = orderItem.NetPrice,
                        Discount = orderItem.DiscountPercentage,
                        CodeString = orderItem.CodeString,
                        BaseModel = orderItem.ProductNumber
                    };

                    SubmittalOrder.SalesOrder.LineItems.Add(lineItem);

                    //===Add MFG MODELS===
                    var Model = BuildMfgModel(orderItem);
                    SubmittalOrder.MfgOrder.Models.Add(Model);
                }
            }// end of foreach orderItems

            var serializer = new XmlSerializer(SubmittalOrder.GetType());
            var xmlStringWriter = new System.IO.StringWriter();
            serializer.Serialize(xmlStringWriter, SubmittalOrder);

            return xmlStringWriter.ToString();
        }

        public int GetConfiguredOrderNumber()
        {
            return this.Db.GetConfigOrderNumber();
        }
        #endregion

        //protected void ZipAdditionalDocs(long quoteId)
        //{
        //    var baseDirectory = Utilities.GetAdditionalOrderDocsDirectory(quoteId);
        //    var directoryInfo = new DirectoryInfo(baseDirectory);

        //    using (var zip = new ZipFile())
        //    {
        //        //Zip the folder with the files in it
        //        zip.AddFiles(Directory.GetFiles(baseDirectory, "packed"));

        //        zip.Save(baseDirectory + "additional-docs.zip");  // SAVE THE ZIP FILE.
        //    }
        //}

        public string GetEncodedPOAttachment(long quoteId, string fileName)
        {
            string base64FileStr = "";
            var directory = Utilities.GetPOAttachmentDirectory(quoteId);
            var fullFileName = directory + "\\" + fileName;
            try
            {
                var file = new FileInfo(fullFileName);
                if (file.Exists)
                {
                    Byte[] bytes = File.ReadAllBytes(fullFileName);
                    base64FileStr = Convert.ToBase64String(bytes);
                }
            }
            catch (Exception e)
            {
                Log.Error(e.Message);
            }

            return base64FileStr;
        }

        public ServiceResponse UploadPOAttachmentToFTPServer(long quoteId, int configOrderNumber, string fileName)
        {
            var fileLocation = string.Empty;

            try
            {
                var directory = Utilities.GetPOAttachmentDirectory(quoteId);
                var sourceFileName = Path.Combine(directory, fileName);

                using (SftpClient sftpClient = CreatePIMSftp())
                {
                    sftpClient.Connect();
                    using (FileStream fileStream = new FileStream(sourceFileName, FileMode.Open))
                    {
                        sftpClient.BufferSize = 1024;
                        var newName = configOrderNumber.ToString("D6") + "-" + fileName;
                        var destination = Path.Combine(Utilities.Config("dpo.sys.sftp.daikincity.poAttachments"), newName);
                        sftpClient.UploadFile(fileStream, destination, null);
                        fileLocation = Utilities.Config("dpo.sys.sftp.host") + destination;
                    }
                    sftpClient.Dispose();
                }

                this.Response.Model = fileLocation;

            }
            catch (Exception e)
            {
                Log.Error("UploadPOAttachmentToFTPServer: " + e.Message);
            }

            return this.Response;
        }

        public SftpClient CreatePIMSftp()
        {
            var hostName = Utilities.Config("dpo.sys.sftp.host");
            var username = Utilities.Config("dpo.sys.sftp.username");
            var password = Utilities.Config("dpo.sys.sftp.password");
            var portString = Utilities.Config("dpo.sys.sftp.port");

            int port;
            if (!Int32.TryParse(portString, out port))
            {
                port = 22; // Default SSH Port
            }

            return new SftpClient(hostName, port, username, password);
        }
    }
}
