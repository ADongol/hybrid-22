
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
    
public partial class PermissionAudit

{

    public int Id { get; set; }

    public Nullable<long> PermissionId { get; set; }

    public Nullable<long> ParentPermissionId { get; set; }

    public Nullable<long> ObjectId { get; set; }

    public Nullable<byte> PermissionTypeId { get; set; }

    public Nullable<int> ReferenceId { get; set; }

    public Nullable<int> ObjectEntityId { get; set; }

    public Nullable<int> ReferenceEntityId { get; set; }

    public Nullable<long> ModifyByUserId { get; set; }

    public Nullable<System.DateTime> ModifyDate { get; set; }

    public Nullable<int> ModifyByUserTypeId { get; set; }

    public Nullable<long> EffectedUserId { get; set; }

    public Nullable<int> EffectedUserTypeId { get; set; }

    public string TypeOfAction { get; set; }

    public Nullable<long> BusinessId { get; set; }

}

}
