﻿
using System.Web.Mvc;

namespace DPO.Web.Controllers
{
    public class VerifyAddressController : BaseController
    {
        #region VerifyAddressWindow
        //[HttpGet]
        public ActionResult VerifyAddressWindow()
        {
            return View("VerifyAddressWindow");
        }

        #endregion
    }
}