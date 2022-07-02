using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DPO.Common;

namespace DPO.Data
{
    public partial class Repository
    {
        public IQueryable<StrategicType> StrategicTypes
        {
            get { return this.GetDbSet<StrategicType>(); }
        }
        public IQueryable<ProjectStrategicType> ProjectStrategicTypes
        {
            get { return this.GetDbSet<ProjectStrategicType>(); }
        }

        public ProjectStrategicType ProjectStrategicTypeCreate(UserSessionModel user, long projectId, long strategicTypeId)
        {
            var entity = new ProjectStrategicType()
            {
                ProjectStrategicTypeId = this.Context.GenerateNextLongId(),
                ProjectId = projectId,
                StrategicTypeId = strategicTypeId,
                CreatedBy = user.UserId,
                CreatedOn = DateTime.Now,
                ModifiedBy = user.UserId,
                ModifiedOn = DateTime.Now
            };

            this.Context.ProjectStrategicTypes.Add(entity);

            return entity;
        }

        public IQueryable<ProjectStrategicType> ProjectStrategicTypeQueryByProjectId(long projectId)
        {
            var query = from pst in this.ProjectStrategicTypes
                        where pst.ProjectId == projectId
                        select pst;

            return query;
        }

        public ProjectStrategicType GetProjectStrategicTypeById(long projectStrategicTypeId)
        {
            var result = from pst in this.ProjectStrategicTypes
                        where pst.ProjectStrategicTypeId == projectStrategicTypeId
                        select pst;

            return result.FirstOrDefault();
        }

        //public void RemoveProjectStrategicType(long projectId, long strategicTypeId) {

        //}

    }
}
