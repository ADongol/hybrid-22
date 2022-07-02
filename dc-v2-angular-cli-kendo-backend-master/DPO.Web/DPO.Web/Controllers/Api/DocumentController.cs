﻿ 
using DPO.Domain;
using DPO.Model.Light; 
using System.Web.Http; 

namespace DPO.Web.Controllers
{
    [Authorize]
    [UserActionFilter]
    public class DocumentController : BaseApiController
    {
        DocumentServices documentServices = new DocumentServices();
        //Daikin Equip App
        [HttpPost]
        public ServiceResponse GetAllDocuments(DocumentQueryModel queryModel)
        {
            if (queryModel == null)
            {
                queryModel = new DocumentQueryModel();
            }
            return documentServices.GetAllDocuments(queryModel);
            
        }
    }
}