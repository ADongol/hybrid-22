
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
    
public partial class BrandCompetitorType

{

    public BrandCompetitorType()
    {

        this.DiscountRequestsBrandApproved = new HashSet<DiscountRequest>();

        this.DiscountRequestsBrandCompetitor = new HashSet<DiscountRequest>();

        this.CommissionRequestsBrandApproved = new HashSet<CommissionRequest>();

        this.CommissionRequestsBrandCompetitor = new HashSet<CommissionRequest>();

    }


    public byte BrandCompetitorTypeId { get; set; }

    public string Description { get; set; }



    public virtual ICollection<DiscountRequest> DiscountRequestsBrandApproved { get; set; }

    public virtual ICollection<DiscountRequest> DiscountRequestsBrandCompetitor { get; set; }

    public virtual ICollection<CommissionRequest> CommissionRequestsBrandApproved { get; set; }

    public virtual ICollection<CommissionRequest> CommissionRequestsBrandCompetitor { get; set; }

}

}
