
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
    
public partial class ProjectLeadStatusType

{

    public ProjectLeadStatusType()
    {

        this.Projects = new HashSet<Project>();

    }


    public DPO.Common.ProjectLeadStatusTypeEnum ProjectLeadStatusTypeId { get; set; }

    public string Name { get; set; }

    public string Description { get; set; }

    public int DisplayOrder { get; set; }

    public bool UserEditable { get; set; }



    public virtual ICollection<Project> Projects { get; set; }

}

}