
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
    
public partial class PIMAttributeValueMap

{

    public int PIMAttributeValueMapId { get; set; }

    public Nullable<int> PIMAttributeMapId { get; set; }

    public string PIMValue { get; set; }

    public string DaikinCityValue { get; set; }

    public DPO.Common.PIMMapTypeEnum MapTypeId { get; set; }



    public virtual PIMMapType PIMMapType { get; set; }

    public virtual PIMAttributeMap PIMAttributeMap { get; set; }

}

}
