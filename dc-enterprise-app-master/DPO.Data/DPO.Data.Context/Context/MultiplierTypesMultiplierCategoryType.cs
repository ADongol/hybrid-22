
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
    
public partial class MultiplierTypesMultiplierCategoryType
 : IConcurrency 
{

    public int MultiplierTypeMultiplierCategoryTypeId { get; set; }

    public int MultiplierTypeId { get; set; }

    public DPO.Common.MultiplierCategoryTypeEnum MultiplierCategoryTypeId { get; set; }

    public System.DateTime Timestamp { get; set; }



    public virtual MultiplierType MultiplierType { get; set; }

}

}
