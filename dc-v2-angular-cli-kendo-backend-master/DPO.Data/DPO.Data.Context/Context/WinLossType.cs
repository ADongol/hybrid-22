
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
    
public partial class WinLossType

{

    public WinLossType()
    {

        this.CommissionRequests = new HashSet<CommissionRequest>();

    }


    public int WinLossTypeId { get; set; }

    public string WinLossTypeDescription { get; set; }



    public virtual ICollection<CommissionRequest> CommissionRequests { get; set; }

}

}
