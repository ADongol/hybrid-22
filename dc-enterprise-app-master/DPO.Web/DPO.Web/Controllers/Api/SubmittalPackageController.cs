using DPO.Common;
using DPO.Domain;
using log4net; 
using System.Collections.Generic;
using System.Linq; 
using System.Web.Http; 
using System.IO.Compression;
using System;
using System.Web;
using System.Net.Http;
using System.Net;
using System.IO;
using System.Net.Http.Headers;
using DPO.Web.Helpers;

namespace DPO.Web.Controllers 
{
    [Authorize]
    public class SubmittalPackageController : BaseApiController
    {
        public ProjectServices projectService;
        public SubmittalPackageServices submittalService;
        public QuoteServices quoteService;
        public HtmlServices htmlService;

        public ILog log;

        public SubmittalPackageController()
        {
            projectService = new ProjectServices();
            quoteService = new QuoteServices();
            htmlService = new HtmlServices();
            submittalService = new SubmittalPackageServices();
            this.ServiceResponse = new ServiceResponse();            
        }
         
        [HttpGet]
        public ServiceResponse GetQuotePackage(long quoteId)
        {
            var model= new SubmittalPackageModel()
            {
                QuoteId = quoteId
            };

            this.ServiceResponse = submittalService.GetQuoteQuotePackage(this.CurrentUser, model);            

            return this.ServiceResponse;
        }        

        public HttpResponseMessage QuotePackageAttachFile()
        {
            var response = new HttpResponseMessage();        
            var httpRequest = HttpContext.Current.Request;

            if (!(httpRequest.Files.Count > 0))
            {
                response = Request.CreateResponse(HttpStatusCode.NotAcceptable);
                response.ReasonPhrase = "Import file is missing!";

                return response;
            }
            
            var file = httpRequest.Files[0];
            var submittalFile = new HttpPostedFileWrapper(file);

            if (submittalFileHasContent(submittalFile))
            {
                var quoteId = Convert.ToInt64(httpRequest.Form["QuoteId"]);
                var message = Utilities.SavePostedFile(submittalFile, Utilities.GetQuotePackageDirectory(quoteId), 25000);
                if (message != null)
                {
                    message += "Please select different file type";
                    response = Request.CreateResponse(HttpStatusCode.NotAcceptable);
                    response.ReasonPhrase = message;
                }
            }

            return response;
        }

        public bool submittalFileHasContent(HttpPostedFileWrapper submittalFile)
        {
            return submittalFile != null && submittalFile.ContentLength > 0;
        }
            
        [HttpGet]
        public ServiceResponse GetAttachedFiles(string quoteId)
        {
            var baseDirectory = Utilities.GetQuotePackageDirectory(quoteId.ToLong());
            var packagefiles = Directory.GetFiles(baseDirectory);

            var attachedfiles = Directory.GetFiles(baseDirectory).Where(f =>
            {
                var file = Path.GetFileName(f);
                var isSystemPackageFile = file.StartsWith("DPO_QuotePackage_");
                var isLock = file.EndsWith(".lck");
                return !isSystemPackageFile && !isLock;
            }).ToList();

            var attachedDocsModel = new List<DocumentModel>();  

            attachedDocsModel.AddRange(attachedfiles.Select(f =>
                    new DocumentModel
                    {
                        FileName = Path.GetFileName(f),
                        DocumentTypeId = (int)DocumentTypeEnum.QuotePackageAttachedFile,
                        Type = "QuotePackageAttachedFile",
                        Description = Path.GetFileName(f)
                    }).ToList());

            this.ServiceResponse.Model = attachedDocsModel;

            return this.ServiceResponse;
        }
 
        public ServiceResponse QuotePackageDeleteAttachFile(SubmittalPackageModel model)
        {
            var quotePackageDirectory = Utilities.GetQuotePackageDirectory(model.QuoteId.Value);

            if (model.QuoteId.HasValue)
            {
                var filename = model.QuotePackageAttachedFiles[0].FileName;

                var file = quotePackageDirectory + filename;

                if (File.Exists(file))
                {
                    File.Delete(file);
                }
            }

            model.QuotePackageAttachedFiles = submittalService.GetAllCustomAttachedFiles(quotePackageDirectory);

            this.ServiceResponse.Model = model;
            
            return this.ServiceResponse;
        }

        public HttpResponseMessage QuotePackageCreate(SubmittalPackageModel model)
        {
            var documents = new List<string>();
            var existingDocs = new List<string>();
            HttpResponseMessage zipResult = null;

            var submittalRequestModel = submittalService.GetQuoteQuotePackage(this.CurrentUser, model).Model as SubmittalPackageModel;
            var currentProject = projectService.GetProjectModel(this.CurrentUser, model.ProjectId).Model as ProjectModel; 

            //Create Cover Page Model
            var coverPageModel = new QuotePackageModel
            {
                Quote = quoteService.GetQuoteModel(this.CurrentUser, model.ProjectId, model.QuoteId).Model as QuoteModel
            };
            coverPageModel.Quote.Project = currentProject;
            coverPageModel.AttachedFiles = submittalRequestModel.QuotePackageAttachedFiles;
            coverPageModel.SelectedDocuments = new List<QuotePackageSelectedItemModel>();
            coverPageModel.BusinessLogoUrl = model.BusinessLogoUrl;

            //loop to get all the selected document types and its product numbers
            foreach (var doc in model.ProductsAndDocuments)
            {
                var item = submittalRequestModel.Items?.FirstOrDefault(x =>
                                    (long)(x.ProductId) == doc.ProductId.ToLong());

                if (item != null)
                {
                    var itemForCoverPage = new QuotePackageSelectedItemModel
                    {
                        ProductNumber = item.ProductNumber
                    };

                    itemForCoverPage.ProductNumber = (item.LineItemTypeId == (byte)LineItemTypeEnum.Configured) ?
                                                        itemForCoverPage.ProductNumber = item.CodeString :
                                                          itemForCoverPage.ProductNumber = item.ProductNumber;
                    
                    //Find the doc that matches the selection by the user (checked items)
                    var matchedDoc = item.Documents.FirstOrDefault(x =>
                                         (long)(x.DocumentTypeId) == doc.DocumentTypeId.ToLong());

                    if (matchedDoc != null)
                    {
                        var absolutePath = matchedDoc.AbsoultePath;
                        var fileName = matchedDoc.FileName;
                        var docType = matchedDoc.Type;

                        itemForCoverPage.Items.Add(Convert.ToInt32(doc.DocumentTypeId));
                        if (item.LineItemTypeId == (byte)LineItemTypeEnum.Configured)
                        {
                            documents.Add(item.CodeString + "@" + "Configured Submittl Datasheet" + "@" + absolutePath);
                        }
                        else
                        {
                            documents.Add(item.ProductNumber + "@" + docType + "@" + absolutePath);
                        }

                        existingDocs.Add(fileName);
                    }

                    if (itemForCoverPage.Items.Count > 0)
                    {
                        coverPageModel.SelectedDocuments.Add(itemForCoverPage);
                    }
                }
            }

            var quotePackageDirectory = Utilities.GetQuotePackageDirectory(model.QuoteId.Value);

            var quotePackageFilename = quotePackageDirectory + Utilities.QuotePackageFileName(model.QuoteId.Value);

            documents = documents.Distinct().ToList();

            if (documents.Count > 0 || submittalRequestModel.QuotePackageAttachedFiles.Count() > 0)
            {
                zipResult = CreateZippedFiles(quotePackageFilename, documents, quotePackageDirectory, 
                                                    currentProject, submittalRequestModel, coverPageModel);
            }

            return zipResult;
        }

        public HttpResponseMessage CreateZippedFiles(string quotePackageFilename, List<string> documents, 
                        string quotePackageDirectory, ProjectModel currentProject, 
                        SubmittalPackageModel submittalPackageModel, QuotePackageModel coverPageModel)
        {
            var lockFile = quotePackageFilename.Replace(".zip", ".lck");

            var currentProjectNameAsFileName = GetCurrentProjectName(currentProject); //get valid filename from project name
 
            if (File.Exists(quotePackageFilename)) File.Delete(quotePackageFilename);

            ///get all the attachments in pdf and zipped
            DynamicallyWriteToPdf(currentProjectNameAsFileName, quotePackageFilename, quotePackageDirectory, 
                                           currentProject, submittalPackageModel, documents);

            var htmlFromRazorView = ViewRenderer.RenderView("~//Views//ProjectDashboard//QuotePackageCoverPage.cshtml",
                                    coverPageModel);

            var coverPageFile = projectService.GenerateQuotePackageCoverPageFile((long)submittalPackageModel.QuoteId, htmlFromRazorView);
                                    //base.RenderViewToString("ProjectDashboardControllerQuotes", "QuotePackageCoverPage", coverPageModel));

            if (coverPageFile != null)
            {
                using (var zip = ZipFile.Open(quotePackageFilename, ZipArchiveMode.Update))
                {
                    zip.CreateEntryFromFile(coverPageFile, "CoverSheet_" + currentProjectNameAsFileName + ".pdf", CompressionLevel.Optimal);
                }
            }

            var result = new HttpResponseMessage(HttpStatusCode.OK);
            var stream = new FileStream(quotePackageFilename, FileMode.Open);
            result.Content = new StreamContent(stream);
            result.Content.Headers.ContentDisposition = new ContentDispositionHeaderValue("attachment")
            {
                FileName = "QuotePackage-" + currentProjectNameAsFileName + ".zip"
            };
            result.Content.Headers.ContentLength = stream.Length;
           
            result.Content.Headers.ContentType =
                new MediaTypeHeaderValue("application/octet-stream");

            return result;
        }

        public void DynamicallyWriteToPdf(string currentProjectNameAsFileName, string quotePackageFilename, string quotePackageDirectory, 
                            ProjectModel currentProject, SubmittalPackageModel submittalPackageModel, List<string> documents)
        {
            using (var zip = ZipFile.Open(quotePackageFilename, ZipArchiveMode.Create))
            {
                var productNumbers = "";

                foreach (var doc in documents)
                {
                    var split = doc.Split('@');

                    var productnumber = split[0];

                    var type = split[1];
                    var file = split[2];

                    if (type.ToLower().Contains("submittal"))
                    {
                        type = "Submittals Sheets";
                        productNumbers += (productNumbers.Length == 0) ? productnumber : ("," + productnumber);
                    }
                    else
                    {
                        var filename = Path.GetFileName(file).Replace("SDS-DC_", "");
                        var fileRef = (type + "\\" + filename);
                        if (File.Exists(file))
                        {
                            zip.CreateEntryFromFile(file, fileRef, CompressionLevel.Optimal);
                        }
                    }
                }

                if (productNumbers.Length > 0)
                {
                    var sdsfile = quotePackageDirectory + "DPO_QuotePackage_SubmittalDataSheets.pdf";

                    var pdf = new PdfConvertor();
                    using (var productService = new ProductServices())
                    {
                        foreach (var productNumber in productNumbers.Split(','))
                        {
                            //add product tags, project info and user info to header of each submittal sheet
                            //if no specific template type if given, add in the external submittal sheet(if it exists)
                            var product = submittalPackageModel.Items.FirstOrDefault(x => x.ProductNumber == productNumber);

                            if (product.GetSubmittalSheetTemplateName != "SubmittalTemplate")
                            {
                                var file =
                                    productService.GenerateSubmittalDataFileForPackage(productNumber,
                                                                        product.QuoteItemId, currentProject.ProjectId);

                                if (file != null)
                                {
                                    pdf.AppendHtml(file);
                                }
                            }
                            else
                            {
                                var submittalDocument = product.Documents
                                                         .FirstOrDefault(d => d.DocumentTypeId == (int)DocumentTypeEnum.SubmittalData);

                                var fullFile = Utilities.GetSubmittalDirectory() + submittalDocument.FileName + @".pdf";

                                if (File.Exists(fullFile))
                                {
                                    pdf.AppendFile(fullFile);
                                }
                            }
                        }

                        pdf.WriteToFile(sdsfile);

                        if (File.Exists(sdsfile))
                        {
                            zip.CreateEntryFromFile(sdsfile, "Submittals Sheets\\SDS_" + currentProjectNameAsFileName + ".pdf", CompressionLevel.Optimal);
                        }
                    }
                }

                foreach (var doc in submittalPackageModel.QuotePackageAttachedFiles.ToList())
                {
                    var fullFile = quotePackageDirectory + doc.FileName;

                    if (File.Exists(fullFile))
                    {
                        var filename = Path.GetFileName(fullFile);

                        zip.CreateEntryFromFile(fullFile, "AttachedFiles\\" + filename, CompressionLevel.Optimal);
                    }
                }
            }
        }

        public string GetCurrentProjectName(ProjectModel currentProject)
        {
            var currentProjectNameAsFileName = currentProject.Name;

            //create valid filename out of project name
            foreach (char c in Path.GetInvalidFileNameChars())
            {
                currentProjectNameAsFileName = currentProjectNameAsFileName.Replace(c, '_');
            }

            return currentProjectNameAsFileName;
        }
    }
}

 
