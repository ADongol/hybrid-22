//===================================================================================
// Delphinium Limited 2014 - Alan Machado (Alan.Machado@delphinium.co.uk)
// 
//===================================================================================
// Copyright © Delphinium Limited , All rights reserved.
//===================================================================================

using DPO.Common;
using DPO.Data;
using DPO.Model.Light;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;

namespace DPO.Domain
{

    public partial class DocumentServices : BaseServices
    {
        public DocumentServices() : base() { }

        public DocumentServices(DPOContext context) : base(context) { }

        //public List<DocumentProductLinkModel> QueryToModel(IQueryable<DocumentProductLinkModel> query)
        //{
        //    var result = from e in query
        //                 select new DocumentProductLinkModel { };
        //    return result.ToList();

        //}

        public ServiceResponse GetAllDocuments(DocumentQueryModel model) {
            var query = this.Db.GetDocumentsQueryBySearch(model);
            string documentLocationUrl = Utilities.Config("sitefinity.documents.location");

            var result = query.Select(d => new DocumentModel {
                DocumentId = d.DocumentId,
                DocumentTypeId = d.DocumentTypeId,
                Type = d.DocumentType.Description,
                Name = d.Name,
                FileName = d.FileName,
                FileExtension = d.FileExtension,
                //FileSize not available yet

            }).ToList();

            model.Documents = result;
            model.TotalRecords = result.Count();

            this.Response.Model = model;

            return this.Response;
        }
    }

}