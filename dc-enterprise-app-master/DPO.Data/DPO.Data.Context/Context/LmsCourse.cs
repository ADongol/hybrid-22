
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
    
public partial class LmsCourse

{

    public LmsCourse()
    {

        this.LmsCourseSessions = new HashSet<LmsCourseSession>();

    }


    public long LmsCourseId { get; set; }

    public string LmsObjectId { get; set; }

    public string Title { get; set; }

    public string Description { get; set; }

    public string Location { get; set; }

    public Nullable<System.DateTime> LmsCreateDate { get; set; }

    public Nullable<System.DateTime> LmsUpdateDate { get; set; }



    public virtual ICollection<LmsCourseSession> LmsCourseSessions { get; set; }

}

}
