using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common.DaikinUniversity
{
    public class LearningObject
    {
        public LearningObject()
        {
            //Subjects = new List<SubjectItem>();
            //AvailableLanguages = new List<AvailableLanguageItem>();
        }
        //Cornerstone’s LO ID.
        public string ObjectId { get; set; }

        //Comma Separated list of Training Type
        //Course - Event - Session - Material - Curriculum - Test Where Course = Online Class
        public string Type { get; set; }

        //LO Title
        public string Title { get; set; }

        //The name of the LO provider.
        public string Provider { get; set; }

        //Description that is found in the catalog
        public string Descr { get; set; }
        
        //The full path of the Deeplink URL
        public string DeepLinkURL { get; set; }

        //List of Subjects.
        public List<SubjectItem> Subjects { get; set; }
        public List<AvailableLanguageItem> AvailableLanguages { get; set; }

        public List<RecommendedTrainingDetails> Recommendations { get; set; }

        public string EventNumber { get; set; }

        public string Objectives { get; set; }


        public string Duration { get; set; }

        public string PriceCurrency { get; set; }


        public decimal PriceAmount { get; set; }

        public List<SessionDetail> Sessions { get; set; }

        public List<Field> Fields { get; set; }
    }
 
 
}
    

  