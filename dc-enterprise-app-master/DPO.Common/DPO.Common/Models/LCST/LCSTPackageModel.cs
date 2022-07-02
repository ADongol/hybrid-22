
using System.Collections.Generic;

namespace DPO.Common
{
    
    public class LCSTPackageModel
    {
        public LCSTPackageModel()
        {
            //Accessories = new List<string>();
            Accessories = new List<LCSTAccessory>();
        }
        public string ConfigType { get; set; }
        public string SubmittalPdf { get; set; }
        public string BaseModel { get; set; }
        /// <summary>
        /// Model is mapped to QuoteItem.CodeString
        /// </summary>
        /// <remarks>
        /// Only available when QuoteItem.LineItemTypeId = 2 (Configured Item)
        /// </remarks>
        public string Model { get; set; }
        /// <summary>
        /// ModelID is mapped to QuoteItem.ModelId  and sent to Mapics as ModelNumber
        /// </summary>
        public string ModelId { get; set; }
        /// <summary>
        /// High/Standard. This is mapped to QuoteItem.EfficencyTypeId as tinyInt.
        /// </summary>
        public string Efficiency { get; set; }
        /// <summary>
        /// SystemId is imported as Product Tag (Quote Items Tags) in DaikinCity
        /// </summary>
        public string SystemId { get; set; }
        //public string AccessoriesJSONString { get; set; }
        //public List<String> Accessories { get; set; }

        public List<LCSTAccessory> Accessories { get; set; }
    }
}
