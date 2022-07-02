using System;
using System.Collections.Generic;
using System.Linq; 

namespace DPO.Common 
{
    public class SubmittalPackageModel : SearchQuote
    {
        public string ProjectName { get; set; }
        public string BusinessLogoUrl { get; set; }

        public bool HasConfiguredItem { get; set; }

        public List<ProductsAndDocumentsModel> ProductsAndDocuments { get; set; }

        public List<QuoteItemListModel> Items { get; set; }

        public List<DocumentModel> QuotePackage { get; set; }

        public List<DocumentModel> QuotePackageAttachedFiles { get; set; }

        public SubmittalFileInfo fileInfo { get; set; }
    }
}
