
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
    
public partial class ProjectOpenStatusType

{

    public ProjectOpenStatusType()
    {

        this.Projects = new HashSet<Project>();

    }


    public byte ProjectOpenStatusTypeId { get; set; }

    public string Description { get; set; }

    public byte Order { get; set; }



    public virtual ICollection<Project> Projects { get; set; }

}

}