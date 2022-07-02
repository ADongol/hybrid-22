using System;
 
namespace DPO.Domain
{
   [Serializable]
   public class DomainServicesException : Exception
   {
      public DomainServicesException()
         : base()
      {
      }

      public DomainServicesException(string message)
         : base(message)
      {
      }

      public DomainServicesException(string message, Exception innerException)
         : base(message, innerException)
      {
      }
   }
}