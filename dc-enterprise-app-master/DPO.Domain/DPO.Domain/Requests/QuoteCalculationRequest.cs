
namespace DPO.Domain
{
    public class QuoteCalculationRequest
    {
        public decimal CommissionPercentage { get; set; }
        public decimal GrossMarginMarkUp { get; set; }
        public decimal DiscountPercentage { get; set; }
        public decimal DiscountPercentageSplit { get; set; }
        public decimal DiscountPercentageVRV { get; set; }
        public decimal DiscountPercentageUnitary { get; set; }
        public decimal DiscountPercentageLCPackage { get; set; }
        public bool IsGrossMargin { get; set; }
        public decimal TotalList { get; set; }
        public decimal TotalListSplit { get; set; }
        public decimal TotalListVRV { get; set; }
        public decimal TotalListUnitary { get; set; }
        public decimal TotalListLCPackage { get; set; }
        public decimal TotalNet { get; set; }
        public decimal TotalNetSplit { get; set; }
        public decimal TotalNetVRV { get; set; }
        public decimal TotalNetUnitary { get; set; }
        public decimal TotalNetLCPackage { get; set; }
    }

    public class QuoteCalculateModel
    {
        //public decimal CommissionPercentage { get; set; }
        public decimal GrossMarginMarkUp { get; set; }
        public decimal DiscountPercentage { get; set; }
        public decimal DiscountPercentageSplit { get; set; }
        public decimal DiscountPercentageVRV { get; set; }
        public decimal DiscountPercentageUnitary { get; set; }
        public decimal DiscountPercentageLCPackage { get; set; }
        public bool IsGrossMargin { get; set; }
        public decimal TotalList { get; set; }
        public decimal TotalListSplit { get; set; }
        public decimal TotalListVRV { get; set; }
        public decimal TotalListUnitary { get; set; }
        public decimal TotalListLCPackage { get; set; }
        public decimal TotalNet { get; set; }
        public decimal TotalNetSplit { get; set; }
        public decimal TotalNetVRV { get; set; }
        public decimal TotalNetUnitary { get; set; }
        public decimal TotalNetLCPackage { get; set; }
    }
}
