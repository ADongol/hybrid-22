
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
    
public partial class SystemBasisDesignType

{

    public SystemBasisDesignType()
    {

        this.DiscountRequests = new HashSet<DiscountRequest>();

        this.CommissionRequestSystemBasis = new HashSet<CommissionRequest>();

    }


    public byte SystemBasisDesignTypeId { get; set; }

    public string Description { get; set; }



    public virtual ICollection<DiscountRequest> DiscountRequests { get; set; }

    public virtual ICollection<CommissionRequest> CommissionRequestSystemBasis { get; set; }

}

}
