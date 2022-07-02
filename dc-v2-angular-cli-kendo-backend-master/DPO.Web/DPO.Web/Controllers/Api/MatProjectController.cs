using DPO.Common;
using DPO.Domain;
using System;
using System.Collections.Generic;
using System.Web.Http;
using DPO.Model.Light;
using DPO.Services.Light;
using DPO.Web.Controllers.Api.Filters;

namespace DPO.Web.Controllers
{
    //[Authorize]
    //[AuthenticationFilter]
    public class MatProjectController : BaseApiController
    {
        public ProjectServices projectService = new ProjectServices();
        public ProjectServiceLight projectServiceLight = new ProjectServiceLight();

        //[HttpGet]
        //public ServiceResponse GetProject(long? projectId = null) {
        //    return projectService.GetProjectModel( this.CurrentUser, projectId);
        //    //return null;
        //}

        [HttpGet]
        public ServiceResponse GetProjects()
        {
            ProjectsGridViewModel model = new ProjectsGridViewModel();

            //if (queryInfo.Filter != null && queryInfo.Filter.Filters.Find(x => x.Field == "alert") != null && queryInfo.Filter.Filters.Find(x => x.Field == "expirationDays") != null)
            //{
            //    model.ExpirationDays = Int32.Parse(queryInfo.Filter.Filters.Find(x => x.Field == "expirationDays").Value);
            //}

            return projectService.GetAllProjects(CurrentUser, model, null);
        }
    }
}
