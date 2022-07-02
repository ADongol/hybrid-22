using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DPO.Common
{
    public class LmsCourseListModel : SearchLmsCourse
    {
        public Messages Messages { get; set; }
        public int? ModelSaveState { get; set; }
        public PagedList<LmsCourseSessionViewModel> Items { get; set; }

        public LmsCourseListModel()
        {
            Items = new PagedList<LmsCourseSessionViewModel>(new List<LmsCourseSessionViewModel>(), 1, 25);
        }

    }
}
