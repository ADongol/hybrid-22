
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
    
public partial class PIMMapType

{

    public PIMMapType()
    {

        this.PIMAttributeValueMaps = new HashSet<PIMAttributeValueMap>();

        this.PIMAttributeMaps = new HashSet<PIMAttributeMap>();

    }


    public DPO.Common.PIMMapTypeEnum PIMMapTypeId { get; set; }

    public string Name { get; set; }



    public virtual ICollection<PIMAttributeValueMap> PIMAttributeValueMaps { get; set; }

    public virtual ICollection<PIMAttributeMap> PIMAttributeMaps { get; set; }

}

}
