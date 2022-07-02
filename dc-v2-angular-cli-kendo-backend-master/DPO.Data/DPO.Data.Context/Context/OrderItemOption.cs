
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
    
public partial class OrderItemOption
 : IConcurrency 
{

    public long OrderItemOptionId { get; set; }

    public long OrderItemId { get; set; }

    public string CodeString { get; set; }

    public long OrderId { get; set; }

    public long BaseProductId { get; set; }

    public long OptionProductId { get; set; }

    public string OptionProductNumber { get; set; }

    public string OptionProductDescription { get; set; }

    public int RequiredQuantity { get; set; }

    public int Quantity { get; set; }

    public decimal ListPrice { get; set; }

    public byte LineItemOptionTypeId { get; set; }

    public System.DateTime Timestamp { get; set; }



    public virtual LineItemOptionType LineItemOptionType { get; set; }

    public virtual OrderItem OrderItem { get; set; }

    public virtual Order Order { get; set; }

    public virtual Product Product { get; set; }

    public virtual Product Product1 { get; set; }

}

}
