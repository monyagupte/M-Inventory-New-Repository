//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace M_Inventory_Web_API_NEW_
{
    using System;
    using System.Collections.Generic;
    
    public partial class NewUnit
    {
        public int Id { get; set; }
        public string FromQuantity { get; set; }
        public Nullable<int> FromUnit { get; set; }
        public string ToQuantity { get; set; }
        public Nullable<int> ToUnit { get; set; }
        public Nullable<bool> Status { get; set; }
    
        public virtual Unit Unit { get; set; }
        public virtual Unit Unit1 { get; set; }
    }
}