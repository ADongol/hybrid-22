//===================================================================================
// Delphinium Limited 2014 - Alan Machado (Alan.Machado@delphinium.co.uk)
//
//===================================================================================
// Copyright © Delphinium Limited , All rights reserved.
//===================================================================================

using DPO.Common;
using DPO.Common.DaikinUniversity;
using DPO.Domain.DaikinUniversity;
using Newtonsoft.Json;
using NUnit.Framework;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using CsvHelper;

namespace DaikinProjectOffice.Tests
{
    [TestFixture]
    public partial class TestDaikinUniversityApiServices : TestAdmin
    {
        private UserSessionModel model = new UserSessionModel();

        private DaikinUniversityApiServices service;

        public TestDaikinUniversityApiServices()
        {
            service = new DaikinUniversityApiServices(this.TContext);
        }

        [Test]
        public void TestDaikinUniversityApiServices_AuthenticateApi()
        {
            var resp = service.AuthenticateApi();
        }

        [Test]
        public void TestDaikinUniversityApiServices_SearchCatalog()
        {
            ServicePointManager.Expect100Continue = true;
            ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;

            TextWriter csvWriter = new StreamWriter("C:\\temp\\GetSessionDetails.csv");
            csvWriter.WriteLine("{0},{1},{2},{3},{4},{5},{6},{7},{8},{9},{10},{11},{12}", "Title", "SessionLOID", "SessionLocatorNumber", "SessionSeats", "SessionWaitlist",
                                "SessionDuration", "SessionLocation", "SessionStartDate", "SessionStartTime",
                                "SessionEndDate", "SessionEndTime", "SessionTimeZone", "TimezoneDescription");

            for (int pgNum = 1; pgNum < 3; pgNum++)
            {
                var search = new SearchGlobalCatalog()
                {
                    Provider = "Daikin (DKN) Technical Training (ILT)",
                    //Provider =  "Daikin (DKN) Technical Training",
                    //OuId = new List<string> { "DKN_EXT_DKN_DCY" },
                    //OuType = new List<string> { "Division" },
                    Format = "json"
                };
                search.PageNumber = pgNum;
                var resp = service.SearchCatalog(search);
                var model = resp.Model as DaikinUniversityApiResponse<GlobalSearchTrainingItem>;
                foreach (var i in model.Data)
                {
                    SearchLearningObject search3 = new SearchLearningObject()
                    {
                        ObjectID = i.ObjectId
                    };
                    var response1 = service.GetLearningObject(search3);
                    var modelLearningObject = response1.Model as DaikinUniversityApiResponse<LearningObjectResponse>;
                    var sb = new StringBuilder();

                    if (response1.IsOK)
                    {
                        foreach (var obj in modelLearningObject.Data)
                        {
                            //csvWritter.WriteLine("{0}", obj.Object.Title);
                            foreach (var obj1 in obj.Object.Sessions)
                            {
                                csvWriter.WriteLine("{0},{1},{2},{3},{4},{5},{6},{7},{8},{9},{10},{11},{12}",
                                    obj.Object.Title, obj1.SessionLOID, obj1.SessionLocatorNumber, obj1.SessionSeats, obj1.SessionWaitlist,
                                    obj1.SessionDuration, obj1.SessionLocation.Replace(",", ""), obj1.SessionStartDate, obj1.SessionStartTime,
                                    obj1.SessionEndDate, obj1.SessionEndTime, obj1.SessionTimeZone, obj1.TimezoneDescription
                                    );
                            }
                        }
                    }
                    else
                    {
                        var frstMsg = response1.Messages.Items.FirstOrDefault();
                        var msg = frstMsg != null ? frstMsg.Text : String.Empty;

                        csvWriter.WriteLine("{0},{1},,,,,,,,,,,", i.Title, msg);
                    }
                }
            }

            //Direct call to   LO/GetDetails - 1
            //SessionDetail sd = new SessionDetail();
            //SearchLearningObject search2 ;
            //for (int i = 0; i < strArray.Length; i++)
            //    {
            //        search2 = new SearchLearningObject();
            //        search2.ObjectID = strArray[i];
            //        var resp2 = service.GetLearningObject(search2);
            //        var model = resp2.Model as DaikinUniversityApiResponse<LearningObjectResponse>;
            //        var jsonRsp = JsonConvert.SerializeObject(model.Data);
            //    }

            //var account1 = JsonConvert.SerializeObject(model);

            //Direct call to   LO/GetDetails

            //Filter Code -2
            //var filterModel = new DaikinUniversityApiResponse<GlobalSearchTrainingItem>()
            //{ Data = new List<GlobalSearchTrainingItem>() };

            //foreach (var i in model.Data)
            //{
            //    foreach (var j in i.Availabilities)
            //    {
            //        if (j.Id == "DKN") { filterModel.Data.Add(i); }
            //    }
            //}

            //var account1 = JsonConvert.SerializeObject(filterModel);
            //Filter Code

            //Assert to return test status.  -3
            //Assert.IsNotNull(resp.Model);
            // var tempStr = DaikinUniversityUtilities.ConvertObjectToString(model);
            //Assert.IsNotNull(model);
            //Assert.IsNull(model.Error);

            ////Uncomment in final code
            //string queryString = DaikinUniversityUtilities.ConvertObjectToQueryString(search);
            //Assert.IsNotNull(queryString);
            //Assert.IsNotEmpty(queryString);
        }

        [Test]
        public void TestDaikinUniversityApiServices_RegisterUser()
        {
            var resp = service.UserRegistration(new UserModel()
            {
                FirstName = "Charles",
                LastName = "Teel",
                Email = "charles.teel@daikincomfort.com"
            });
            int x = 1;
        }
    }
}
