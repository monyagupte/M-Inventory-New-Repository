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
    
    public partial class SP_SelectDateWiseData_Result
    {
        public int Id { get; set; }
        public int SalesInvoiceId { get; set; }
        public string CustomerName { get; set; }
        public Nullable<System.DateTime> InvoiceDate { get; set; }
        public string ContactNumber { get; set; }
        public Nullable<double> SalesReturn { get; set; }
        public Nullable<double> NetAmount { get; set; }
        public Nullable<double> RoundOff { get; set; }
        public Nullable<double> Amount { get; set; }
        public Nullable<double> ShippingCost { get; set; }
        public Nullable<double> TotalTaxAmount { get; set; }
        public Nullable<System.DateTime> DueDate { get; set; }
        public string Ref { get; set; }
        public int TransactionId { get; set; }
        public string PaymentType { get; set; }
        public string ChequeNumber { get; set; }
        public Nullable<System.DateTime> PaymentDate { get; set; }
        public Nullable<double> TotalAmount { get; set; }
        public Nullable<double> PaidAmount { get; set; }
        public Nullable<double> BalanceAmount { get; set; }
        public Nullable<System.DateTime> DepositeDate { get; set; }
        public string BankName { get; set; }
        public string DepositeTo { get; set; }
        public Nullable<bool> Status { get; set; }
    }
}
