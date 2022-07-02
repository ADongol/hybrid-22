
using System.Linq;
using DPO.Common;
using DPO.Data;
using log4net;

namespace DPO.Domain
{
   public class BasketServices : BaseServices
   {
       public ILog log;
      public BasketServices() : base(true) { }

      public BasketServices(DPOContext context) : base(context) {
           if(Log == null)
            {
                Log = log4net.LogManager.GetLogger(typeof(BasketServices));
            }

           if (this.log == null && Log != null)
             this.log = Log;
        }

      public ServiceResponse GetUserBasketModel(UserSessionModel user)
      {
          this.Response = new ServiceResponse();

          if (user == null) return null;

          var model = new UserBasketModel();

          if (user.BasketQuoteId != null)
          {
              var quoteInfo = Db.QueryQuoteViewableByQuoteId(user, user.BasketQuoteId).Select(q => new { q.ProjectId, q.Title, ItemCount = q.QuoteItems.Count() }).FirstOrDefault();
              if (quoteInfo != null)
              {
                  model.Description = quoteInfo.Title;
                  model.ProjectId = quoteInfo.ProjectId;
                  model.QuoteItemCount = quoteInfo.ItemCount;
                  model.QuoteId = user.BasketQuoteId.Value;
              }
          }

         // model.Items = Db.UserBasketItemsByUser(user).Select(u => new BasketItemModel { ItemId = u.ItemId, Quantity = u.Quantity }).ToList();

          this.Response.Model = model;

          return this.Response;
      }

      public ServiceResponse UpdateBasketItem(UserSessionModel user, BasketItemModel item)
      {
          this.Response = new ServiceResponse();

          var basket = GetUserBasketModel(user);

          if (item == null)
          {
              this.Response.Model = basket;
              return this.Response;
          }

          var basketItem = Db.UserBasketItems.Where(i=>i.UserId == user.UserId && i.ItemId == item.ItemId).FirstOrDefault();

          if (basketItem == null)
          {
              basketItem = Db.BasketItemCreate(user.UserId, item.ItemId, "", item.Quantity);
          }
          else
          {
              basketItem.Quantity += item.Quantity;
          }

          if (basketItem.Quantity <= 0)
          {
              Db.Context.UserBasketItems.Remove(basketItem);
          }

          Db.SaveChanges();

          return GetUserBasketModel(user);
      }

      public ServiceResponse RemoveItem(UserSessionModel user, BasketItemModel item)
      {
          this.Response = new ServiceResponse();

          var basket = GetUserBasketModel(user);

          if (item == null || item.ItemId <= 0)
          {
              this.Response.Model = basket;
              return this.Response;
          }

          var basketItem = Db.UserBasketItems.Where(i => i.ItemId == item.ItemId).FirstOrDefault();

          if (basketItem != null)
          {
              Db.Context.UserBasketItems.Remove(basketItem);

              Db.SaveChanges();
          }

          return GetUserBasketModel(user);
      }

      public ServiceResponse Clear(UserSessionModel user)
      {
          this.Response = new ServiceResponse();

          Db.Context.UserBasketItems.RemoveRange(Db.UserBasketItemsByUser(user));

          Db.SaveChanges();

          return GetUserBasketModel(user);
      }
   }
}
