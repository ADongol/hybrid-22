
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
    
public partial class Tool
 : IConcurrency 
{

    public int ToolId { get; set; }

    public string Name { get; set; }

    public System.DateTime Timestamp { get; set; }

    public string Filename { get; set; }

    public string Description { get; set; }

    public Nullable<byte> Order { get; set; }

    public Nullable<bool> AddToQuote { get; set; }

    public string AccessUrl { get; set; }

}

}
