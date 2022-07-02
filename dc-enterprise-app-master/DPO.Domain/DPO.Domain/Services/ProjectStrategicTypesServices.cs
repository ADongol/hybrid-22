using DPO.Common;
using DPO.Data;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;

namespace DPO.Domain
{
    public class ProjectStrategicTypesServices: BaseServices
    {
        public ProjectStrategicTypesServices()
            : base(){
        }

        public ProjectStrategicTypesServices(DPOContext context)
            : base(context)
        {
        }

        public List<ProjectStrategicType> GetStrategicTypesByProjectId(long projectId) {
            var types = this.Db.ProjectStrategicTypeQueryByProjectId(projectId).ToList();
            return types;
        }

        public void RemoveStrategicTypesByProjectId(long projectId) {
            List<ProjectStrategicType> strategicTypes = this.Db.ProjectStrategicTypeQueryByProjectId(projectId).ToList();
            foreach (ProjectStrategicType type in strategicTypes) {
                this.Context.Entry(type).State = EntityState.Deleted;
            }
            //return this.Response;
        }

        public ServiceResponse ProjectStrategicTypeInsert(UserSessionModel user, long projectId, long strategicTypeId) {
            var newEntity = this.Db.ProjectStrategicTypeCreate(user, projectId, strategicTypeId);
            this.Response.Model = newEntity;
            return this.Response;
        }
    }
}
