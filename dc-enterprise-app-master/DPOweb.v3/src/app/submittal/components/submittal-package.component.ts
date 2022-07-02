import { Component, OnInit, Input, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
 
import { UserService } from '../../shared/services/user.service';
import { SubmittalPackageService } from '../services/submittal-package.service';
import { SubmittalPackageModel } from '../models/submittal-package';
import { QuoteItemListModel } from '../models/quoteItemList';
import { User } from '../../shared/models/user';

declare var jQuery: any;

@Component({
    selector: 'submittal-package',
    templateUrl: './submittal-package.component.html',
    styleUrls: ['./submittal-package.component.css']
})
export class SubmittalPackageComponent implements OnInit {
 
    public action: any;
    public user: User;
    public quote: any;
    public hasConfiguredItem: boolean;  
    public hasAttachedFiles: boolean = false;
 
    public quoteItemsList: QuoteItemListModel[] = [];    
    public quotePackageAttachedFiles: any = [];

    //array of column headers that could be repeated across as td 
    public possibleDocsList: any = [       
        { colId: 2, name: "submittalSheets", inputname: "chkSubmittalSheetsHeader", label: "Submittal Sheets" },
        { colId: 3, name: "installationManual", inputname: "chkInstallationManualHeader", label: "Installation Manual" },
        { colId: 4, name: "operationManual", inputname: "chkOperationManualHeader", label: "Operation Manual" },
        { colId: 5, name: "guideSpecs", inputname: "chkGuideSpecsHeader", label: "Guide Specs" },
        { colId: 6, name: "productBrochure", inputname: "chkProductBrochureHeader", label: "Product Brochure" },
        { colId: 7, name: "revitDrawing", inputname: "chkRevitDrawingHeader", label: "Revit Drawing" },
        { colId: 8, name: "cadDrawing", inputname: "chkCadDrawingHeader", label: "CAD Drawing" },
        { colId: 9, name: "productFlyer", inputname: "chkProductFlyerHeader", label: "Product Flyer" },
    ];
    
    constructor(private router: Router, private route: ActivatedRoute,
            private http: Http, private submittalPackageSvc: SubmittalPackageService
    )
    {
        this.action = this.route.snapshot.url[0].path;
        this.user = this.route.snapshot.data['currentUser'].model;
        this.quote = this.route.snapshot.data['quoteModel'].model;                
    }

    ngOnInit() {
        this.loadItems();        
    }    

    private loadItems(): any { 
                
        return this.submittalPackageSvc.getQuotePackage(this.quote.quoteId)
            .subscribe(data => {
                
                this.quoteItemsList = data.items;
                this.quotePackageAttachedFiles = data.quotePackageAttachedFiles;
                if (this.quotePackageAttachedFiles.length > 0)
                    this.hasAttachedFiles = true;

                //loop through again to set the values and ids for checkboxes
                this.quoteItemsList.forEach((quote, index) => {
                    //configured items
                    if (quote.lineItemTypeId === 2) {
                        quote.hasSubmittalSheets = true;

                        if (quote.documents.length > 0) {
                            quote.documents.forEach((doc, index) => {
                                quote.submittalSheetsDocId = doc.productId + "-" + doc.documentTypeId;
                                quote.submittalSheetUrl = doc.url;
                            });
                        }
                    }
                    //non-configured items
                    else {
                        if (quote.documents.length > 0) {
                              //back-end might send documenttypeid that is not needed to show in UI like Dimensional Drawing 100000010
                            let quoteWithRequiredDocumentLinks = quote.documents.filter(item =>
                                (item.documentTypeId === 100000000) ||
                                (item.documentTypeId === 100000001) ||
                                (item.documentTypeId === 100000002) ||
                                (item.documentTypeId === 100000003) ||
                                (item.documentTypeId === 100000008) ||
                                (item.documentTypeId === 100000009) ||
                                (item.documentTypeId === 100000011) ||
                                (item.documentTypeId === 100000012)
                            );

                            if (quoteWithRequiredDocumentLinks.length > 0) {

                                quoteWithRequiredDocumentLinks.forEach((doc, index) => {
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
                })                   
            });
    }

}
