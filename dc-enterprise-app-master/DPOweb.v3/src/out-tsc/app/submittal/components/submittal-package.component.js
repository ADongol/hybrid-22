"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var submittal_package_service_1 = require("../services/submittal-package.service");
var SubmittalPackageComponent = /** @class */ (function () {
    function SubmittalPackageComponent(router, route, http, submittalPackageSvc) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.submittalPackageSvc = submittalPackageSvc;
        this.hasAttachedFiles = false;
        this.quoteItemsList = [];
        this.quotePackageAttachedFiles = [];
        //array of column headers that could be repeated across as td 
        this.possibleDocsList = [
            { colId: 2, name: "submittalSheets", inputname: "chkSubmittalSheetsHeader", label: "Submittal Sheets" },
            { colId: 3, name: "installationManual", inputname: "chkInstallationManualHeader", label: "Installation Manual" },
            { colId: 4, name: "operationManual", inputname: "chkOperationManualHeader", label: "Operation Manual" },
            { colId: 5, name: "guideSpecs", inputname: "chkGuideSpecsHeader", label: "Guide Specs" },
            { colId: 6, name: "productBrochure", inputname: "chkProductBrochureHeader", label: "Product Brochure" },
            { colId: 7, name: "revitDrawing", inputname: "chkRevitDrawingHeader", label: "Revit Drawing" },
            { colId: 8, name: "cadDrawing", inputname: "chkCadDrawingHeader", label: "CAD Drawing" },
            { colId: 9, name: "productFlyer", inputname: "chkProductFlyerHeader", label: "Product Flyer" },
        ];
        this.action = this.route.snapshot.url[0].path;
        this.user = this.route.snapshot.data['currentUser'].model;
        this.quote = this.route.snapshot.data['quoteModel'].model;
    }
    SubmittalPackageComponent.prototype.ngOnInit = function () {
        this.loadItems();
    };
    SubmittalPackageComponent.prototype.loadItems = function () {
        var _this = this;
        return this.submittalPackageSvc.getQuotePackage(this.quote.quoteId)
            .subscribe(function (data) {
            _this.quoteItemsList = data.items;
            _this.quotePackageAttachedFiles = data.quotePackageAttachedFiles;
            if (_this.quotePackageAttachedFiles.length > 0)
                _this.hasAttachedFiles = true;
            //loop through again to set the values and ids for checkboxes
            _this.quoteItemsList.forEach(function (quote, index) {
                //configured items
                if (quote.lineItemTypeId === 2) {
                    quote.hasSubmittalSheets = true;
                    if (quote.documents.length > 0) {
                        quote.documents.forEach(function (doc, index) {
                            quote.submittalSheetsDocId = doc.productId + "-" + doc.documentTypeId;
                            quote.submittalSheetUrl = doc.url;
                        });
                    }
                }
                //non-configured items
                else {
                    if (quote.documents.length > 0) {
                        //back-end might send documenttypeid that is not needed to show in UI like Dimensional Drawing 100000010
                        var quoteWithRequiredDocumentLinks = quote.documents.filter(function (item) {
                            return (item.documentTypeId === 100000000) ||
                                (item.documentTypeId === 100000001) ||
                                (item.documentTypeId === 100000002) ||
                                (item.documentTypeId === 100000003) ||
                                (item.documentTypeId === 100000008) ||
                                (item.documentTypeId === 100000009) ||
                                (item.documentTypeId === 100000011) ||
                                (item.documentTypeId === 100000012);
                        });
                        if (quoteWithRequiredDocumentLinks.length > 0) {
                            quoteWithRequiredDocumentLinks.forEach(function (doc, index) {
                                //set values for each checkboxes/document links
                                //Submittal Sheets 
                                if (doc.productId === quote.productId && doc.documentTypeId === 100000008) {
                                    quote.hasSubmittalSheets = true;
                                    quote.submittalSheetsDocObj = doc;
                                    if (quote.submittalSheetsDocObj != null) {
                                        quote.submittalSheetsDocId =
                                            quote.submittalSheetsDocObj.productId + "-" + quote.submittalSheetsDocObj.documentTypeId;
                                        quote.submittalSheetUrl = doc.url;
                                    }
                                    quote.documents.splice(index, 1);
                                }
                                //Installation Manual
                                if (doc.productId === quote.productId && doc.documentTypeId === 100000002) {
                                    quote.hasInstallationManual = true;
                                    quote.installationManualDocObj = doc;
                                    if (quote.installationManualDocObj != null) {
                                        quote.installationManualDocId =
                                            quote.installationManualDocObj.productId + "-" + quote.installationManualDocObj.documentTypeId;
                                        quote.installationManualUrl = doc.url;
                                    }
                                    quote.documents.splice(index, 1);
                                }
                                //Operation Manual
                                if (doc.productId === quote.productId && doc.documentTypeId === 100000003) {
                                    quote.hasOperationManual = true;
                                    quote.operationManualDocObj = doc;
                                    if (quote.operationManualDocObj != null) {
                                        quote.operationManualDocId =
                                            quote.operationManualDocObj.productId + "-" + quote.operationManualDocObj.documentTypeId;
                                        quote.operationalManualUrl = doc.url;
                                    }
                                    quote.documents.splice(index, 1);
                                }
                                //Guide Specs
                                if (doc.productId === quote.productId && doc.documentTypeId === 100000009) {
                                    quote.hasGuideSpecs = true;
                                    quote.guideSpecsDocObj = doc;
                                    if (quote.guideSpecsDocObj != null) {
                                        quote.guideSpecsDocId =
                                            quote.guideSpecsDocObj.productId + "-" + quote.guideSpecsDocObj.documentTypeId;
                                        quote.guideSpecsUrl = doc.url;
                                    }
                                    quote.documents.splice(index, 1);
                                }
                                //Product Brochure
                                if (doc.productId === quote.productId && doc.documentTypeId === 100000001) {
                                    quote.hasProductBrochure = true;
                                    quote.productBrochureDocObj = doc;
                                    if (quote.productBrochureDocObj != null) {
                                        quote.productBrochureDocId =
                                            quote.productBrochureDocObj.productId + "-" + quote.productBrochureDocObj.documentTypeId;
                                        quote.productBrochureUrl = doc.url;
                                    }
                                    quote.documents.splice(index, 1);
                                }
                                //Revit Drawing
                                if (doc.productId === quote.productId && doc.documentTypeId === 100000012) {
                                    quote.hasRevitDrawing = true;
                                    quote.revitDrawingDocObj = doc;
                                    if (quote.revitDrawingDocObj != null) {
                                        quote.revitDrawingDocId =
                                            quote.revitDrawingDocObj.productId + "-" + quote.revitDrawingDocObj.documentTypeId;
                                        quote.revitDrawingUrl = doc.url;
                                    }
                                    quote.documents.splice(index, 1);
                                }
                                //CAD Drawing
                                if (doc.productId === quote.productId && doc.documentTypeId === 100000011) {
                                    quote.hasCadDrawing = true;
                                    quote.cadDrawingDocObj = doc;
                                    if (quote.cadDrawingDocObj != null) {
                                        quote.cadDrawingDocId =
                                            quote.cadDrawingDocObj.productId + "-" + quote.cadDrawingDocObj.documentTypeId;
                                        quote.cadDrawingUrl = doc.url;
                                    }
                                    quote.documents.splice(index, 1);
                                }
                                //Product Flyer
                                if (doc.productId === quote.productId && doc.documentTypeId === 100000000) {
                                    quote.hasProductFlyer = true;
                                    quote.productFlyerDocObj = doc;
                                    if (quote.productFlyerDocObj != null) {
                                        quote.productFlyerDocId =
                                            quote.productFlyerDocObj.productId + "-" + quote.productFlyerDocObj.documentTypeId;
                                        quote.productFlyerUrl = doc.url;
                                    }
                                    quote.documents.splice(index, 1);
                                }
                            });
                        }
                    }
                }
            });
        });
    };
    SubmittalPackageComponent = __decorate([
        core_1.Component({
            selector: 'submittal-package',
            templateUrl: './submittal-package.component.html',
            styleUrls: ['./submittal-package.component.css']
        }),
        __metadata("design:paramtypes", [router_1.Router, router_1.ActivatedRoute,
            http_1.Http, submittal_package_service_1.SubmittalPackageService])
    ], SubmittalPackageComponent);
    return SubmittalPackageComponent;
}());
exports.SubmittalPackageComponent = SubmittalPackageComponent;
//# sourceMappingURL=submittal-package.component.js.map