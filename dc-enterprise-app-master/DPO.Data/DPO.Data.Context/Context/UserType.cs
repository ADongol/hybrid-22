
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
    
public partial class UserType

{

    public UserType()
    {

        this.Users = new HashSet<User>();

    }


    public DPO.Common.UserTypeEnum UserTypeId { get; set; }

    public string Description { get; set; }



    public virtual ICollection<User> Users { get; set; }

}

}