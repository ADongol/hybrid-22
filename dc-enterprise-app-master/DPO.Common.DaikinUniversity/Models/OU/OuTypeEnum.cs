using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DPO.Common.DaikinUniversity
{
    public enum OuTypeEnum
    {
        None = 0,
        Division = 2,
        Position = 4,
        Grade = 8,
        CostCenter = 16,
        PhysicalLocation = 32,
        Group = 128,
        SocialTeam = 300,
        CohortRoster = 301,
        ClientAccount = 302,
        SelfRegistrationGroup = 524288,
        DAARepDist = 524289,
        DaikinCity = 524290,
        PartnerLink = 524291,
        DaikinLearningInstitute = 524292,
        CustomOUE = 524293
    }
}
