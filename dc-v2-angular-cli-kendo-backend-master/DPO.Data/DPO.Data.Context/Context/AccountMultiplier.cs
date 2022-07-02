
//------------------------------------------------------------------------------
// <auto-generated>
//    This code was generated from a template.
//
//    Manual changes to this file may cause unexpected behavior in your application.
//    Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------


namespace DPO.Data
{

using System;
    using System.Collections.Generic;
    using DPO.Common;
    
public partial class AccountMultiplier
 : IConcurrency 
{

    public AccountMultiplier()
    {

        this.OrderItems = new HashSet<OrderItem>();

        this.QuoteItems = new HashSet<QuoteItem>();

    }


    public long AccountMultiplierId { get; set; }

    public long BusinessId { get; set; }

    public string ProductClassCode { get; set; }

    public decimal Multiplier { get; set; }

    public System.DateTime Timestamp { get; set; }

    public int MultiplierTypeId { get; set; }



    public virtual Business Business { get; set; }

    public virtual ICollection<OrderItem> OrderItems { get; set; }

    public virtual ICollection<QuoteItem> QuoteItems { get; set; }

}

}