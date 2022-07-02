using DPO.Common;
using DPO.Data; 
using DPO.Model.Light;
using System;
using System.Collections.Generic;
using System.Linq; 
using System.Xml;

namespace DPO.Domain 
{
    public class ERPServiceProvider :  BaseServices, IERPServiceProvider
    {
        public ServiceResponse CheckPONumber(string poNumber, string erpAccountId)
        {
            var count = (from o in this.Context.Orders
                         from b in this.Context.Businesses
                         where b.BusinessId == o.BusinessId && b.ERPAccountId == erpAccountId
                         select o).Count(o => o.PONumber == poNumber);

            if (count > 0)
            {
                this.Response.AddError(Resources.ResourceModelBusiness.BM011);
            }

            return this.Response;
        }

        public ServiceResponse CheckPONumberExist(string erpAccountId, string poNumber)
        {
            var count = (from o in this.Context.Orders select o).Count(o => o.PONumber == poNumber
                            && o.Quote.Project.Owner.Business.ERPAccountId == erpAccountId);

            if (count > 0)
            {
                Response.Messages.AddError("PONumber", "PO number already exists");
                return Response;
            }
            else
            {
                using (var erpClient = new ERPClient())
                {
                    Response = erpClient.GetOrderInfoFromMapicsAsync(erpAccountId, poNumber); //connect to mapics web api call
                }
                
                return Response;
            }
        }

        public ServiceResponse SaveOrderDetailsToMapics(List<OrderItemsViewModel> orderItemsVm, Order order,
            OrderViewModelLight model, Address address)
        {
            var orderDetailList = new List<OrderDetail>(); // array of order detail to send it to mapics            

            var increment = 1;
            foreach (var item in orderItemsVm)
            {
                var orderDetail = new OrderDetail()
                {
                    LineSeq = increment,
                    ProductNumber = item.ProductNumber,
                    CustomerProductNo = "",
                    Quantity = item.Quantity,
                    NetPrice = item.NetPrice,
                    ExtendedNetPrice = item.ExtendedPrice,
                    ProductDescription = "",
                    DiscountPercent = item.DiscountPercentage,
                    CompanyNo = 1,
                };
                increment++;

                orderDetailList.Add(orderDetail);
            }

            var state = Db.States.FirstOrDefault(x => x.StateId == address.StateId);

            //for each oderdetaillist //add shipment date to each quantitu
            //construct json array to post it to mapics
            var jsonData = new ERPOrderInfo
            {
                CustomerNumber = !string.IsNullOrWhiteSpace(model.ERPAccountId) ? Convert.ToInt32(model.ERPAccountId) : 0,
                PONo = model.PONumber,
                PODate = DateTime.Today,
                RequestDate = model.OrderReleaseDate,
                TermsCode = "",
                OrderType = "DK",
                ShipToName = model.ShipToName,
                ShipToAddress1 = address?.AddressLine1,
                ShipToAddress2 = address?.AddressLine2,
                ShipToCity = address?.Location,
                ShipToState = state?.Code,
                ShipToZip = address?.PostalCode,
                ShipToInstruction = order.Comments,  ///From Delivery notes
                ContactName = model.DeliveryContactName,
                ContactPhone = model.DeliveryContactPhone,
                TotalAmount = model.TotalNetPrice,
                OrderCode = "DK",
                Status = model.ERPStatus,
                ShipToNumber = null,
                CompanyNo = 1,
                BusinessID = model.BusinessId.GetValueOrDefault(),
                BusinessName = model.BusinessName,
                ProjectID = model.ProjectId,
                ProjectName = model.ProjectName,
                ProjectRefID = null,
                QuoteID = model.QuoteId,
                QuoteRefID = null,
                Comments = model.Comments,
                DiscountPercent = 0,
                Details = orderDetailList?.ToArray()
            };

            using (var erpClient = new ERPClient())
            {
                this.Response = erpClient.PostOrderToMapicsAsync(jsonData);
            }

            return this.Response;
        }

        public string SendOrderRequestToMapics(string xmlRequest)
        {
            //Call Mapics Web Service 
            var input = new MapicsOrderService.cfg001RInput();
            input.PORDERREQ = new MapicsOrderService.porderreq(); //INORDERREQ/PORDERREQ
            input.PORDERREQ.@string = xmlRequest;
            input.PORDERREQ.length = input.PORDERREQ.@string.Length;

            var req = new MapicsOrderService.cfg001rRequest()
            {
                arg0 = input
            };

            //Request
            //MapicsOrderService.CFG001RPortType client = new MapicsOrderService.CFG001RPortTypeClient("CFG001RHttpSoap11Endpoint");
            MapicsOrderService.CFG001RServicesClient client = new MapicsOrderService.CFG001RServicesClient();
            MapicsOrderService.cfg001RResult res = client.cfg001r(input);

            //Response
            var xmlResponseString = res.PORDERREQ.@string;

            return xmlResponseString;

            //=============================
        }

        public ServiceResponse ProcessMapicsOrderSeriveResponse(string xmlResponse)
        {
            var xmlDoc = new XmlDocument();
            xmlDoc.LoadXml(xmlResponse);
            var root = xmlDoc.DocumentElement;

            var exception1 = root.SelectSingleNode("/OrderResponse/Exception");
            var exception2 = root.SelectSingleNode("/OrderResponse/MapicsModel/Exception");

            if (exception1 != null)
            {
                this.Response.AddError(exception1.InnerText);
            }
            else if (exception2 != null)
            {
                this.Response.AddError(exception2.InnerText);
            }
            else
            {
                var status = root.SelectSingleNode("/OrderResponse/MapicsModel/BomCreation/Status");
                if (status != null)
                {
                    if (status.InnerText.ToLower() == "successful" || status.InnerText.ToLower() == "created" || status.InnerText.ToLower() == "pending")
                    {
                        this.Response.AddSuccess("Order has been submitted successfully");
                    }
                    else
                    {
                        var error = root.SelectSingleNode("/OrderResponse/MapicsModel/BomCreation/Error");
                        this.Response.AddError(error.InnerText);
                    }
                }
            }

            return this.Response;
        }
    }
}
