webpackJsonp(["discount.module"],{

/***/ "../../../../../src/app/discount/components/discount-request.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".discountRequestForm {\r\n    background-color: #E5F2FA;\r\n}\r\n\r\n/*Desktop*/\r\n@media (min-width: 1200px) {\r\n    .discountRequestForm {\r\n        padding: 20px 100px;\r\n    }\r\n}\r\n\r\n\r\n@media (max-width: 576px) {\r\n    /*.discountRequestForm {\r\n        padding: 20px 100px;\r\n    }*/\r\n}\r\n\r\nhr {\r\n    /*border-top-color: #d5d5d5;*/\r\n    border-top-color:#a6d7ef;\r\n}\r\n\r\nlegend {\r\n    border-bottom-color: #a0a0a0;\r\n    color: #00a1e4;\r\n    font-weight: bold;\r\n}\r\n\r\nh5 {\r\n    color: #00A1E4;\r\n    text-transform: uppercase;\r\n    font-family: \"museo-sans\", sans-serif;\r\n    font-weight: 600;\r\n}\r\n\r\n.dactbl-heading {\r\n    background-color: #E6EEF1;\r\n    text-transform: uppercase;\r\n    padding-top: 20px;\r\n    padding-bottom: 20px;\r\n    text-align: center;\r\n    font-size: 15px;\r\n}\r\n\r\n.bluecell {\r\n    background-color: #DFF6FE;\r\n    color: #00A1E4;\r\n}\r\n\r\n.lightbluecell {\r\n    background-color: #EAF9FE;\r\n    color: #00A1E4;\r\n}\r\n\r\n.lightgreycell {\r\n    background-color:#E6EEF1;\r\n    color:black;\r\n}\r\n\r\n.border-top-bottom {\r\n    border-top: 1px solid #a6d7ef;\r\n    border-bottom: 1px solid #a6d7ef;\r\n}\r\n\r\n.border-bottom {\r\n    border-bottom: 1px solid #a6d7ef;\r\n}\r\n\r\n.padding-15 {\r\n    padding: 15px;\r\n}\r\n\r\n@media (min-width: 1000px) {\r\n    .discount-row {\r\n        height: 76px;\r\n    }\r\n}\r\n\r\n.total-discount-row {\r\n    /*font-size:20px;*/\r\n}\r\n.totalcell {\r\n    font-size:24px;\r\n}\r\n\r\n.black-label {\r\n    /*color: black;*/\r\n}\r\n\r\n\r\n/*moved stop daikin-misc*/\r\n/*.grey-text-italic {\r\n    font-size: smaller;\r\n    font-style: italic;\r\n    color: grey;\r\n}*/\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/discount/components/discount-request.component.html":
/***/ (function(module, exports) {

module.exports = "<project-tabs [user]=\"user\"></project-tabs>\r\n\r\n<div id=\"main-container\" class='container-fluid'>\r\n   \r\n    <ul *ngIf=\"discountRequest\" class=\"breadcrumbs\">\r\n        <li><a href=\"/v2/#/project/projectList\">Projects</a></li>\r\n        <li><a href=\"/v2/#/project/project/{{discountRequest.projectId}}\">{{discountRequest.project.name}}</a></li>\r\n        <li><a href=\"/v2/#/quote/quote/{{discountRequest.quoteId}}/existingRecord\">{{discountRequest.quote.title}}</a></li>\r\n        <li>Discount Authorization Request (DAR)</li>\r\n    </ul>\r\n    <div>\r\n        <div class=\"pull-right\">\r\n            <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#printModal\"><span class=\"glyphicon glyphicon-print\"></span> Print Request</button>\r\n            <button class=\"btn btn-default\" data-toggle=\"modal\" data-target=\"#exportModal\"><span class=\"k-icon k-i-file-excel\"></span> Export Request</button>\r\n        </div>\r\n        <h3>DISCOUNT AUTHORIZATION REQUEST</h3>\r\n    </div>\r\n    <div *ngIf=\"discountRequest\">\r\n        \r\n        <h4 [ngSwitch]=\"discountRequest.discountRequestStatusTypeId\">\r\n            <span *ngSwitchCase=\"0\">NEW REQUEST</span>\r\n            <span *ngSwitchCase=\"2\">STATUS: PENDING</span>\r\n            <span *ngSwitchCase=\"4\">STATUS: REJECTED</span>\r\n            <span *ngSwitchCase=\"6\">STATUS: APPROVED</span>\r\n            <span *ngSwitchCase=\"8\">STATUS: DELETED</span>\r\n\r\n        </h4>\r\n\r\n    </div>\r\n\r\n    <div *ngIf=\"!discountRequest\">\r\n        <!--<span class=\"k-icon k-i-loading\" style=\"width:100%; font-size:32px;\"></span>-->\r\n    </div>\r\n\r\n    <div *ngIf=\"discountRequest\" class=\"discountRequestForm\">\r\n        <form id=\"discountRequestForm\" #discountRequestForm=\"ngForm\" novalidate>\r\n            <fieldset>\r\n                <legend>PROJECT SYSTEMS AND COMPETITIVE POSITION OF OPPORTUNITY</legend>\r\n\r\n                <!--Project Details-->\r\n                <div class=\"row no-gutters\">\r\n                    <!--<div class=\"hidden-xs col-md-1\"></div>-->\r\n                    <div class=\"col-md-11 col-xs-12\">\r\n                        <h5>Project Details</h5>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row no-gutters\">\r\n                    <!--<div class=\"hidden-xs col-md-1\"></div>-->\r\n                    <div class=\"col-md-6 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Name: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.name}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Reference: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.projectId}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Registration Date: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.projectDate  | date: 'shortDate'}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Bid Date: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.bidDate | date: 'shortDate'}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Estimated Close: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.estimatedClose | date: 'shortDate'}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Estimated Delivery: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.estimatedDelivery | date: 'shortDate'}}</div>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-xs-12\">\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Construction Type: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.constructionTypeDescription}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Status: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.projectStatusDescription}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Type: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.projectTypeDescription}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Open Status: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.projectOpenStatusDescription}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Vertical Market: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.verticalMarketDescription}}</div>\r\n                        <div class=\"col-md-6 col-xs-12 as-lnk\">Project Status Notes: </div> <div class=\"col-md-6 col-xs-12\">{{discountRequest.project.description}}</div>\r\n                    </div>\r\n\r\n                    <!--<div class=\"hidden-xs col-md-1\"></div>-->\r\n                </div>\r\n\r\n                <hr />\r\n\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label required\">Project System Basis Of Design</label>\r\n                        <select class=\"form-control\" required\r\n                                [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                [(ngModel)]=\"discountRequest.systemBasisDesignTypeId\" name=\"systemBasisDesignType\">\r\n                            <option [value]=\"null\" selected disabled>Select ...</option>\r\n                            <option *ngFor=\"let item of discountRequest.systemBasisDesignTypes.items\"\r\n                                    [value]=\"item.value\">\r\n                                {{item.text}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label required\">Zone Strategy</label>\r\n                        <select class=\"form-control\" required\r\n                                [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                [(ngModel)]=\"discountRequest.zoneStrategyTypeId\" name=\"zoneStrategyType\">\r\n                            <option [value]=\"null\" selected disabled>Select ...</option>\r\n                            <option *ngFor=\"let item of discountRequest.zoneStrategyTypes.items\"\r\n                                    [value]=\"item.value\">\r\n                                {{item.text}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label required\">Select Brand Specified</label>\r\n                        <select class=\"form-control\" required\r\n                                [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                [(ngModel)]=\"discountRequest.brandSpecifiedTypeId\" name=\"brandSpecifiedType\">\r\n                            <option [value]=\"null\" selected disabled>Select ...</option>\r\n                            <option *ngFor=\"let item of discountRequest.brandSpecifiedTypes.items\"\r\n                                    [value]=\"item.value\">\r\n                                {{item.text}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label required\">Select Approved Equals</label>\r\n                        <select class=\"form-control\" required\r\n                                [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                [(ngModel)]=\"discountRequest.brandApprovedTypeId\" name=\"brandApprovedType\">\r\n                            <option [value]=\"null\" selected disabled>Select ...</option>\r\n                            <option *ngFor=\"let item of discountRequest.brandApprovedTypes.items\"\r\n                                    [value]=\"item.value\">\r\n                                {{item.text}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <hr />\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <p class=\"control-label\">Is a copy of competitors price to customer available?</p>\r\n                        <kendo-switch [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                      [(ngModel)]=\"discountRequest.hasCompetitorPrice\"\r\n                                      [onLabel]=\"'Yes'\"\r\n                                      [offLabel]=\"'No'\"\r\n                                      (ngModelChange)=\"hasCompetitorPriceChange($event)\"\r\n                                      name=\"hasCompetitorPrice\"></kendo-switch>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label\" [ngClass]=\"{'required': discountRequest.hasCompetitorPrice}\">Enter Competitor Price</label>\r\n                        <!--<input type=\"number\" class=\"form-control\" [(ngModel)]=\"discountRequest.competitorPrice\" name=\"competitorPrice\" />-->\r\n                        <kendo-numerictextbox id=\"competitorPrice\" class=\"form-control\"\r\n                                              [disabled]=\"!discountRequest.hasCompetitorPrice\"\r\n                                              [required]=\"discountRequest.hasCompetitorPrice\"\r\n                                              [format]=\"'c0'\"\r\n                                              [min]=\"0\"\r\n                                              [(ngModel)]=\"discountRequest.competitorPrice\" name=\"competitorPrice\">\r\n                        </kendo-numerictextbox>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr />\r\n                <!--Competitor Quote File-->\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <p class=\"control-label\">Is a copy of competitors quote to customer available?</p>\r\n                        <kendo-switch [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                      [(ngModel)]=\"discountRequest.hasCompetitorQuote\"\r\n                                      [onLabel]=\"'Yes'\"\r\n                                      [offLabel]=\"'No'\"\r\n                                      (ngModelChange)=\"hasCompetitorQuoteChange($event)\"\r\n                                      name=\"hasCompetitorQuote\"></kendo-switch>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"discountRequest.discountRequestStatusTypeId == 0\">\r\n                        <label class=\"control-label\" [ngClass]=\"{'required': discountRequest.hasCompetitorQuote}\">Attach Copy Of Competitors Quote</label>\r\n                        <!--<input type=\"file\" [disabled]=\"!discountRequest.hasCompetitorQuote\"\r\n                        [required]=\"discountRequest.hasCompetitorQuote\"\r\n                        (change)=\"competitorQuoteFileChange($event)\"\r\n                        name=\"competitorQuoteFile\" />-->\r\n\r\n                        <kendo-upload [disabled]=\"!discountRequest.hasCompetitorQuote\"\r\n                                      [required]=\"discountRequest.hasCompetitorQuote\"\r\n                                      [autoUpload]=\"true\"\r\n                                      [saveUrl]=\"'/api/DiscountRequest/UploadCompetitorQuoteFile'\"\r\n                                      [multiple]=\"false\"\r\n                                      [(ngModel)]=\"competitorQuoteFiles\"\r\n                                      name=\"competitorQuoteFile\"\r\n                                      (select)=\"selectCompetitorQuoteFile($event)\"\r\n                                      (upload)=\"uploadEventHandler($event)\"\r\n                                      [withCredentials]=\"true\"\r\n                                      (success)=\"successEventHandler($event)\"\r\n                                      (error)=\"errorEventHandler($event)\">\r\n                        </kendo-upload>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"discountRequest.discountRequestStatusTypeId != 0 && discountRequest.hasCompetitorQuote\">\r\n                        <label class=\"control-label\">Competitors quote attached</label>\r\n                        <div>\r\n                            <a href=\"/document/dar/{{discountRequest.quoteId}}/?filename={{discountRequest.competitorQuoteFileName}}\" target=\"_blank\">\r\n                                {{discountRequest.competitorQuoteFileName}}\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr />\r\n                <!--Competitor Line by Line Comparison File-->\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <p class=\"control-label\">Was a line by line comparison of competitor to Daikin completed?</p>\r\n                        <kendo-switch [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                      [(ngModel)]=\"discountRequest.hasCompetitorLineComparsion\"\r\n                                      [onLabel]=\"'Yes'\"\r\n                                      [offLabel]=\"'No'\"\r\n                                      (ngModelChange)=\"hasCompetitorLineComparsionChange($event)\"\r\n                                      name=\"hasCompetitorLineComparsion\">\r\n                        </kendo-switch>\r\n                    </div>\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"discountRequest.discountRequestStatusTypeId == 0\">\r\n                        <label class=\"control-label\" [ngClass]=\"{'required': discountRequest.hasCompetitorLineComparsion}\">Attach Line By Line</label>\r\n\r\n                        <kendo-upload [disabled]=\"!discountRequest.hasCompetitorLineComparsion\"\r\n                                      [autoUpload]=\"true\"\r\n                                      [saveUrl]=\"'/api/DiscountRequest/UploadCompetitorLineComparsionFile'\"\r\n                                      [multiple]=\"false\"\r\n                                      name=\"competitorLineComparsionFile\"\r\n                                      (select)=\"selectLineComparsionFile($event)\"\r\n                                      (upload)=\"uploadEventHandler($event)\"\r\n                                      [withCredentials]=\"true\"\r\n                                      (success)=\"successEventHandler($event)\"\r\n                                      (error)=\"errorEventHandler($event)\">\r\n                        </kendo-upload>\r\n                    </div>\r\n\r\n                    <div class=\"form-group col-md-6\" *ngIf=\"discountRequest.discountRequestStatusTypeId != 0 && discountRequest.hasCompetitorLineComparsion\">\r\n                        <label class=\"control-label\">Competitors line By line comparison file attached</label>\r\n                        <div>\r\n                            <a href=\"/document/dar/{{discountRequest.quoteId}}/?filename={{discountRequest.competitorLineComparsionFileName}}\" target=\"_blank\">\r\n                                {{discountRequest.competitorLineComparsionFileName}}\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr />\r\n\r\n                <div class=\"row no-gutters\">\r\n                    <div class=\"form-group col-md-6\">\r\n                        <label class=\"control-label required\">Is Daikin Equipment at an Advantage/Disadvantage?</label>\r\n                        <select class=\"form-control\" required\r\n                                [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                [(ngModel)]=\"discountRequest.daikinEquipmentAtAdvantageTypeId\" name=\"daikinEquipmentAtAdvantageType\">\r\n                            <option [value]=\"null\" selected disabled>Select ...</option>\r\n                            <option *ngFor=\"let item of discountRequest.daikinEquipmentAtAdvantageTypes.items\"\r\n                                    [value]=\"item.value\">\r\n                                {{item.text}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </fieldset>\r\n\r\n            <!--Standard Discount-->\r\n            <fieldset>\r\n                <legend>REP/DISTRIBUTOR AND DAIKIN INFORMATION AND COSTING FOR OPPORTUNITY</legend>\r\n\r\n                <div class=\"dactbl-heading border-bottom\">TOTAL NET PRICE BASED ON STANDARD MULTIPLIER(S)</div>\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"col-md-7 col-xs-12 padding-15\">Total Listed Value Of This Project Offering</div>\r\n                    <div class=\"col-md-5 col-xs-12 padding-15 bluecell\">{{discountRequest.standardTotals.totalList | currency:'USD':true:'1.2-2'}}</div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"col-md-7 col-xs-12 padding-15\">Total Net (VRV-GNA + RA-QA + Unitary + LC Package)</div>\r\n                    <div class=\"col-md-5 col-xs-12 padding-15 bluecell\">\r\n                        {{discountRequest.standardTotals.totalNet | currency:'USD':true:'1.2-2'}}\r\n                        ({{discountRequest.standardTotals.totalNetVRV | currency:'USD':true:'1.2-2'}} +\r\n                        {{discountRequest.standardTotals.totalNetSplit | currency:'USD':true:'1.2-2'}} +\r\n                        {{discountRequest.standardTotals.totalNetUnitary | currency:'USD':true:'1.2-2'}} +\r\n                        {{discountRequest.standardTotals.totalNetLCPackage | currency:'USD':true:'1.2-2'}})\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"col-md-7 col-xs-12 padding-15\">Freight Costs</div>\r\n                    <div class=\"col-md-5 col-xs-12 padding-15 bluecell\">{{discountRequest.quote.totalFreight | currency:'USD':true:'1.2-2'}}</div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"col-md-7 col-xs-12 padding-15\">Start up / Commissioning costs</div>\r\n                    <div class=\"col-md-5 col-xs-12 padding-15 bluecell\">\r\n                        <!--<input type=\"number\" [(ngModel)]=\"discountRequest.StartUpCosts\"\r\n                        name=\"startupcost\" />-->\r\n\r\n                        <kendo-numerictextbox [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                              [format]=\"'c0'\"\r\n                                              [min]=\"0\"\r\n                                              [(ngModel)]=\"discountRequest.startUpCosts\" name=\"startUpCosts\"\r\n                                              (ngModelChange)=\"startupCostChange()\">\r\n                        </kendo-numerictextbox>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"col-md-7 col-xs-12 no-padding\">\r\n                        <div class=\"col-md-10 padding-15\">Rep/Distributor Gross Profit on Opportunity</div>\r\n                        <!--<div class=\"col-md-2 padding-15 lightbluecell\">{{discountRequest.standardTotals.totalCommissionPercentage  | percent:'1.2-3'}}</div>-->\r\n                        <div class=\"col-md-2 padding-15 lightbluecell\">{{discountRequest.standardTotals.grossMarginMarkUp  | percent:'1.2-3'}}</div>\r\n                    </div>\r\n                    <!--<div class=\"col-md-5 col-xs-12 padding-15 bluecell\">{{discountRequest.approvedTotals.totalCommissionAmount | currency:'USD':true:'1.2-2'}}</div>-->\r\n                    <div class=\"col-md-5 col-xs-12 padding-15 bluecell\">{{discountRequest.standardTotals.totalCommissionAmount | currency:'USD':true:'1.2-2'}}</div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"col-md-7 col-xs-12 padding-15\">Total standard sales value of this opportunity from Rep/Dist to customer</div>\r\n                    <!--<div class=\"col-md-5 col-xs-12 padding-15 bluecell\">{{(discountRequest.approvedTotals.totalSell + discountRequest.startUpCosts + discountRequest.quote.totalFreight + discountRequest.standardTotals.totalCommissionAmount) | currency:'USD':true:'1.2-2'}}</div>-->\r\n                    <div class=\"col-md-5 col-xs-12 padding-15 lightgreycell\">{{(discountRequest.standardTotals.totalNet + discountRequest.startUpCosts + discountRequest.quote.totalFreight + discountRequest.standardTotals.totalCommissionAmount) | currency:'USD':true:'1.2-2'}}</div>\r\n                </div>\r\n            </fieldset>\r\n\r\n\r\n            <!--Request Discount-->\r\n            <fieldset>\r\n                <legend>OPPORTUNITY DISCOUNT AMOUNT REQUESTED</legend>\r\n                <div class=\"dactbl-heading border-bottom\">TOTAL NET PRICE BASED ON REQUESTED DISCOUNTS</div>\r\n                <!--VRV-->\r\n                <div *ngIf=\"discountRequest.quote.totalListVRV > 0\" class=\"row no-gutters border-bottom\">\r\n                    <!--Request-->\r\n                    <div class=\"col-md-6 col-xs-12 padding-15\">\r\n                        <!--<div>Discount being requested for VRV - GNA in this opportunity?</div>-->\r\n                        <!--new request-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 0\">\r\n                            <!--<p>{{discountRequest.requestedDiscountVRV | percent:'1.2-2' }}</p>-->\r\n                            <!--<kendo-numerictextbox [(ngModel)]=\"discountRequest.requestedDiscountVRV\"\r\n                                                  name=\"requestedDiscountVRV\"\r\n                                                  [min]=\"0\" [max]=\"1\" [step]=\"0.01\" [decimals]=\"2\" [format]=\"'p'\" [autoCorrect]=\"true\"\r\n                                                  (ngModelChange)=\"calculateDiscountAmountVRV($event)\">\r\n                            </kendo-numerictextbox>\r\n\r\n                            <div class=\"grey-text-italic\">Enter value from 0.01 to 1.00</div>-->\r\n\r\n                            <div>Discount being requested for VRV - GNA in this opportunity?</div>\r\n\r\n                            <input type=\"number\" min=\"0\" max=\"100\"\r\n                                   #requestedDiscountVRV\r\n                                   [value]=\"discountRequest.requestedDiscountVRV*100 | number:'1.0-2'\"\r\n                                   name=\"requestedDiscountVRV\"\r\n                                   (keyup)=\"calculateDiscountAmountVRV(requestedDiscountVRV.value)\"\r\n                                   (change)=\"calculateDiscountAmountVRV(requestedDiscountVRV.value)\" />%\r\n                        </div>\r\n\r\n                        <!--pending-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 2 || discountRequest.discountRequestStatusTypeId == 4\">\r\n                            <div *ngIf=\"canApproveDiscounts; else elseBlock\">\r\n                                <div>Discount being requested for VRV - GNA in this opportunity?</div>\r\n                                <div>{{discountRequest.requestedDiscountVRV | percent:'1.2-2' }}</div>\r\n\r\n                                <div>Discount approved for VRV - GNA in this opportunity?</div>\r\n                                <input type=\"number\" min=\"0\" max=\"100\"\r\n                                       #approvedDiscountVRV\r\n                                       [value]=\"discountRequest.approvedDiscountVRV*100 | number:'1.0-2'\"\r\n                                       name=\"approvedDiscountVRV\"\r\n                                       (keyup)=\"calculateApprovedDiscountAmountVRV(approvedDiscountVRV.value)\"\r\n                                       (change)=\"calculateApprovedDiscountAmountVRV(approvedDiscountVRV.value)\" />%\r\n                            </div>\r\n                            <ng-template #elseBlock>\r\n                                <div>Discount being requested for VRV - GNA in this opportunity.</div>\r\n                                <div>{{discountRequest.requestedDiscountVRV | percent:'1.2-2' }}</div>\r\n                            </ng-template>\r\n                        </div>\r\n\r\n                        <!--approved-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 6\">\r\n\r\n                            <div>Discount being requested for VRV - GNA in this opportunity.</div>\r\n                            <div>{{discountRequest.requestedDiscountVRV | percent:'1.2-2' }}</div>\r\n\r\n                            <div>Discount approved for VRV - GNA in this opportunity.</div>\r\n                            <div>{{discountRequest.approvedDiscountVRV | percent:'1.2-2' }}</div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-xs-12 padding-15 bluecell discount-row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Discount Amount</div>\r\n                            <div>{{discountRequest.approvedTotals.totalDiscountAmountVRV | currency:'USD':true:'1.2-2'}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Net Multiplier</div>\r\n                            <div>{{discountRequest.approvedTotals.netMultiplierVRV | number:'1.3-3'}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Net Material Value</div>\r\n                            <div>{{discountRequest.approvedTotals.netMaterialValueVRV | currency:'USD':true:'1.2-2'}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--Slpit-->\r\n                <div *ngIf=\"discountRequest.quote.totalListSplit > 0\" class=\"row no-gutters border-bottom\">\r\n                    <!--Request-->\r\n                    <div class=\"col-md-6 col-xs-12 padding-15\">\r\n                        <!--<div>Discount being requested for RA-QA in this opportunity?</div>-->\r\n                        <!--new request-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 0\">\r\n                            <!--<kendo-numerictextbox [(ngModel)]=\"discountRequest.requestedDiscountSplit\"\r\n                                                  name=\"requestedDiscountSplit\"\r\n                                                  [min]=\"0\" [max]=\"1\" [step]=\"0.01\" [decimals]=\"2\" [format]=\"'p'\" [autoCorrect]=\"true\"\r\n                                                  (ngModelChange)=\"calculateDiscountAmountSplit($event)\">\r\n                            </kendo-numerictextbox>\r\n                            <div class=\"grey-text-italic\">Enter value from 0.01 to 1.00</div>-->\r\n\r\n                            <div>Discount being requested for RA-QA in this opportunity?</div>\r\n\r\n                            <input type=\"number\" min=\"0\" max=\"100\"\r\n                                   #requestedDiscountSplit\r\n                                   [value]=\"discountRequest.requestedDiscountSplit*100 | number:'1.0-2'\"\r\n                                   name=\"requestedDiscountSplit\"\r\n                                   (keyup)=\"calculateDiscountAmountSplit(requestedDiscountSplit.value)\"\r\n                                   (change)=\"calculateDiscountAmountSplit(requestedDiscountSplit.value)\" />%\r\n                        </div>\r\n\r\n                        <!--pending-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 2 || discountRequest.discountRequestStatusTypeId == 4\">\r\n                            <div *ngIf=\"canApproveDiscounts; else elseBlock\">\r\n                                <div>Discount being requested for RA-QA in this opportunity?</div>\r\n                                <div>{{discountRequest.requestedDiscountSplit | percent:'1.2-2' }}</div>\r\n\r\n                                <div>Discount approved for RA-QA in this opportunity?</div>\r\n                                <input type=\"number\" min=\"0\" max=\"100\"\r\n                                       #approvedDiscountSplit\r\n                                       [value]=\"discountRequest.approvedDiscountSplit*100 | number:'1.0-2'\"\r\n                                       name=\"approvedDiscountSplit\"\r\n                                       (keyup)=\"calculateApprovedDiscountAmountSplit(approvedDiscountSplit.value)\"\r\n                                       (change)=\"calculateApprovedDiscountAmountSplit(approvedDiscountSplit.value)\" />%\r\n                            </div>\r\n\r\n                            <ng-template #elseBlock>\r\n                                <div>Discount being requested for RA-QA in this opportunity</div>\r\n                                <div>{{discountRequest.requestedDiscountSplit | percent:'1.2-2' }}</div>\r\n                            </ng-template>\r\n                        </div>\r\n\r\n                        <!--approved-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 6\">\r\n\r\n                            <div>Discount being requested for RA-QA in this opportunity.</div>\r\n                            <div>{{discountRequest.requestedDiscountSplit | percent:'1.2-2' }}</div>\r\n\r\n                            <div>Discount approved for RA-QA in this opportunity.</div>\r\n                            <div>{{discountRequest.approvedDiscountSplit | percent:'1.2-2' }}</div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-xs-12 padding-15 bluecell discount-row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Discount Amount</div>\r\n                            <div>{{discountRequest.approvedTotals.totalDiscountAmountSplit | currency:'USD':true:'1.2-2'}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Net Multiplier</div>\r\n                            <div>{{discountRequest.approvedTotals.netMultiplierSplit | number:'1.3-3'}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Net Material Value</div>\r\n                            <div>{{discountRequest.approvedTotals.netMaterialValueSplit | currency:'USD':true:'1.2-2'}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--Unitary-->\r\n                <div *ngIf=\"discountRequest.quote.totalListUnitary > 0\" class=\"row no-gutters border-bottom\">\r\n                    <!--Request-->\r\n                    <div class=\"col-md-6 col-xs-12 padding-15\">\r\n                        <!--<div>Discount being requested for Unitary in this opportunity?</div>-->\r\n                        <!--new request-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 0\">\r\n                            <!--<kendo-numerictextbox [(ngModel)]=\"discountRequest.requestedDiscountUnitary\"\r\n                                                  name=\"requestedDiscountUnitary\"\r\n                                                  [min]=\"0\" [max]=\"1\" [step]=\"0.01\" [decimals]=\"2\" [format]=\"'p'\" [autoCorrect]=\"true\"\r\n                                                  (ngModelChange)=\"calculateDiscountAmountUnitary($event)\">\r\n                            </kendo-numerictextbox>\r\n                            <div class=\"grey-text-italic\">Enter value from 0.01 to 1.00</div>-->\r\n\r\n                            <div>Discount being requested for Unitary in this opportunity?</div>\r\n                            <input type=\"number\" min=\"0\" max=\"100\"\r\n                                   #requestedDiscountUnitary\r\n                                   [value]=\"discountRequest.requestedDiscountUnitary*100 | number:'1.0-2'\"\r\n                                   name=\"requestedDiscountUnitary\"\r\n                                   (keyup)=\"calculateDiscountAmountUnitary(requestedDiscountUnitary.value)\"\r\n                                   (change)=\"calculateDiscountAmountUnitary(requestedDiscountUnitary.value)\" />%\r\n\r\n                        </div>\r\n\r\n                        <!--pending-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 2 || discountRequest.discountRequestStatusTypeId == 4\">\r\n                            <div *ngIf=\"canApproveDiscounts; else elseBlock\">\r\n                                <div>Discount being requested forUnitary in this opportunity?</div>\r\n                                <div>{{discountRequest.requestedDiscountUnitary | percent:'1.2-2' }}</div>\r\n\r\n                                <div>Discount approved for Unitary in this opportunity?</div>\r\n                                <input type=\"number\" min=\"0\" max=\"100\"\r\n                                       #approvedDiscountUnitary\r\n                                       [value]=\"discountRequest.approvedDiscountUnitary*100 | number:'1.0-2'\"\r\n                                       name=\"approvedDiscountUnitary\"\r\n                                       (keyup)=\"calculateApprovedDiscountAmountUnitary(approvedDiscountUnitary.value)\"\r\n                                       (change)=\"calculateApprovedDiscountAmountUnitary(approvedDiscountUnitary.value)\" />%\r\n                            </div>\r\n\r\n                            <ng-template #elseBlock>\r\n                                <div>Discount being requested for Unitary in this opportunity.</div>\r\n                                <div>{{discountRequest.requestedDiscountUnitary | percent:'1.2-2' }}</div>\r\n                            </ng-template>\r\n                        </div>\r\n\r\n\r\n\r\n                        <!--approved-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 6\">\r\n\r\n                            <div>Discount being requested for Unitary in this opportunity.</div>\r\n                            <div>{{discountRequest.requestedDiscountUnitary | percent:'1.2-2' }}</div>\r\n\r\n                            <div>Discount approved for Unitary in this opportunity.</div>\r\n                            <div>{{discountRequest.approvedDiscountUnitary | percent:'1.2-2' }}</div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-xs-12 padding-15 bluecell discount-row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Discount Amount</div>\r\n                            <div>{{discountRequest.approvedTotals.totalDiscountAmountUnitary | currency:'USD':true:'1.2-2'}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Net Multiplier</div>\r\n                            <div>{{discountRequest.approvedTotals.netMultiplierUnitary | number:'1.3-3'}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Net Material Value</div>\r\n                            <div>{{discountRequest.approvedTotals.netMaterialValueUnitary | currency:'USD':true:'1.2-2'}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--LCPackage-->\r\n                <div *ngIf=\"discountRequest.quote.totalListLCPackage > 0\" class=\"row no-gutters border-bottom\">\r\n                    <!--Request-->\r\n                    <div class=\"col-md-6 col-xs-12 padding-15\">\r\n                        <!--<div>Discount being requested for LC Package in this opportunity?</div>-->\r\n                        <!--New Request-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 0\">\r\n                            <!--<kendo-numerictextbox [(ngModel)]=\"discountRequest.requestedDiscountLCPackage\"\r\n                                                  name=\"requestedDiscountLCPackage\"\r\n                                                  [min]=\"0\" [max]=\"1\" [step]=\"0.01\" [decimals]=\"2\" [format]=\"'p'\" [autoCorrect]=\"true\"\r\n                                                  (ngModelChange)=\"calculateDiscountAmountLCPackage($event)\">\r\n                            </kendo-numerictextbox>\r\n                            <div class=\"grey-text-italic\">Enter value from 0.01 to 1.00</div>-->\r\n\r\n                            <div>Discount being requested for LC Package in this opportunity?</div>\r\n                            <input type=\"number\" min=\"0\" max=\"100\"\r\n                                   #requestedDiscountLCPackage\r\n                                   [value]=\"discountRequest.requestedDiscountLCPackage*100 | number:'1.0-2'\"\r\n                                   name=\"requestedDiscountUnitary\"\r\n                                   (keyup)=\"calculateDiscountAmountLCPackage(requestedDiscountLCPackage.value)\"\r\n                                   (change)=\"calculateDiscountAmountLCPackage(requestedDiscountLCPackage.value)\" />%\r\n\r\n                        </div>\r\n\r\n                        <!--Pending-->\r\n\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 2 || discountRequest.discountRequestStatusTypeId == 4\">\r\n                            <div *ngIf=\"canApproveDiscounts; else elseBlock\">\r\n                                <div>Discount being requested for LC Package in this opportunity?</div>\r\n                                <div>{{discountRequest.requestedDiscountLCPackage | percent:'1.2-2' }}</div>\r\n\r\n                                <div>Discount approved for LCPackage in this opportunity?</div>\r\n                                <input type=\"number\" min=\"0\" max=\"100\"\r\n                                       #approvedDiscountLCPackage\r\n                                       [value]=\"discountRequest.approvedDiscountLCPackage*100 | number:'1.0-2'\"\r\n                                       name=\"approvedDiscountLCPackage\"\r\n                                       (keyup)=\"calculateApprovedDiscountAmountLCPackage(approvedDiscountLCPackage.value)\"\r\n                                       (change)=\"calculateApprovedDiscountAmountLCPackage(approvedDiscountLCPackage.value)\" />%\r\n                            </div>\r\n\r\n                            <ng-template #elseBlock>\r\n                                <div>Discount being requested for LC Package in this opportunity.</div>\r\n                                <div>{{discountRequest.requestedDiscountLCPackage | percent:'1.2-2' }}</div>\r\n                            </ng-template>\r\n                        </div>\r\n\r\n\r\n                        <!--approved-->\r\n                        <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 6\">\r\n\r\n                            <div>Discount being requested for LCPackage in this opportunity.</div>\r\n                            <div>{{discountRequest.requestedDiscountLCPackage | percent:'1.2-2' }}</div>\r\n\r\n                            <div>Discount approved for Unitary in this opportunity.</div>\r\n                            <div>{{discountRequest.approvedDiscountLCPackage | percent:'1.2-2' }}</div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-6 col-xs-12 padding-15 bluecell discount-row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Discount Amount</div>\r\n                            <div>{{discountRequest.approvedTotals.totalDiscountAmountLCPackage | currency:'USD':true:'1.2-2'}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Net Multiplier</div>\r\n                            <div>{{discountRequest.approvedTotals.netMultiplierLCPackage | number:'1.3-3'}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div class=\"black-label\">Net Material Value</div>\r\n                            <div>{{discountRequest.approvedTotals.netMaterialValueLCPackage | currency:'USD':true:'1.2-2'}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--Total Discount-->\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <!--Left-->\r\n                    <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 0\" class=\"col-md-6 col-xs-12 padding-15\">\r\n                        <div>Total Discount being requested in this opportunity</div>\r\n                        <div>\r\n                            {{discountRequest.requestedDiscount | percent:'1.2-3'}}\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 2 || discountRequest.discountRequestStatusTypeId == 4\" class=\"col-md-6 col-xs-12 padding-15\">\r\n                        <div>Total Discount being requested in this opportunity</div>\r\n                        <div>\r\n                            {{discountRequest.requestedDiscount | percent:'1.2-3'}}\r\n                        </div>\r\n                        <div *ngIf=\"canApproveDiscounts\">\r\n                            <div>Total Discount being approved in this opportunity</div>\r\n                            <div>\r\n                                {{discountRequest.approvedDiscount | percent:'1.2-3'}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 6\" class=\"col-md-6 col-xs-12 padding-15\">\r\n                        <div>Total Discount being requested in this opportunity</div>\r\n                        <div>\r\n                            {{discountRequest.requestedDiscount | percent:'1.2-3'}}\r\n                        </div>\r\n                        <div>\r\n                            <div>Total Discount being approved in this opportunity</div>\r\n                            <div>\r\n                                {{discountRequest.approvedDiscount | percent:'1.2-3'}}\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!--Right-->\r\n                    <div class=\"col-md-6 col-xs-12 padding-15 lightgreycell total-discount-row\">\r\n                        <div class=\"col-md-4\">\r\n                            <div>Discount Amount</div>\r\n                            <div>{{discountRequest.approvedTotals.totalDiscountAmount | currency:'USD':true:'1.2-2'}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div>Net Multiplier</div>\r\n                            <div>{{discountRequest.approvedTotals.netMultiplier | number:'1.3-3'}}</div>\r\n                        </div>\r\n                        <div class=\"col-md-4\">\r\n                            <div>Net Material Value</div>\r\n                            <div>{{discountRequest.approvedTotals.netMaterialValue | currency:'USD':true:'1.2-2'}}</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"col-md-6 col-xs-12 padding-15\">Freight Costs</div>\r\n                    <div class=\"col-md-6 col-xs-12 padding-15 bluecell\" style=\"padding-left:30px;\">\r\n                        {{discountRequest.quote.totalFreight | currency:'USD':true:'1.2-2'}}\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"col-md-6 col-xs-12 padding-15\">Start up / Commissioning costs</div>\r\n                    <div class=\"col-md-6 col-xs-12 padding-15 bluecell\" style=\"padding-left:30px;\">\r\n                        {{discountRequest.startUpCosts | currency:'USD':true:'1.2-2'}}\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"col-md-6 col-xs-12 padding-15\">\r\n                        <div>Rep/Distributor revised gross profit on opportunity?</div>\r\n                        <!--Request-->\r\n                        <!--Is this the same as discountRequest.standardTotals.totalCommissionPercentage or different ? ==> It's different -->\r\n                        <div>\r\n                            <!--<kendo-numerictextbox [(ngModel)]=\"discountRequest.grossMarginMarkUp\"\r\n                                                  name=\"grossMarginMarkUp\"\r\n                                                  [min]=\"0\" [max]=\"1\" [step]=\"0.01\" [decimals]=\"2\" [format]=\"'p'\" [autoCorrect]=\"true\"\r\n                                                  (ngModelChange)=\"calculateRevisedGrossProfit($event)\">\r\n                            </kendo-numerictextbox>\r\n                            <div class=\"grey-text-italic\">Enter value from 0.01 to 1.00</div>-->\r\n\r\n                            <input type=\"number\" min=\"0\" max=\"100\"\r\n                                   #grossMarginMarkUp\r\n                                   [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                   [value]=\"discountRequest.grossMarginMarkUp*100 | number:'1.0-3'\"\r\n                                   name=\"grossMarginMarkUp\"\r\n                                   (keyup)=\"recalculateRevisedGrossProfit(grossMarginMarkUp.value)\"\r\n                                   (change)=\"recalculateRevisedGrossProfit(grossMarginMarkUp.value)\" />%\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6 col-xs-12 padding-15 bluecell discount-row\" style=\"padding-left:30px;\">\r\n                        <div class=\"black-label\">Revised Gross</div>\r\n                        <div>{{discountRequest.approvedTotals.totalCommissionAmount | currency:'USD':true:'1.2-2'}}</div>\r\n                        <!--<div>{{grossMarginMarkUp * discountRequest.approvedTotals.netMaterialValue | currency:'USD':true:'1.2-2'}}</div>-->\r\n                    </div>\r\n                </div>\r\n\r\n                <!--Total Sell-->\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"col-md-6 col-xs-12 padding-15\">Total revised Rep/Dist selling price as a result of Discount</div>\r\n                    <div class=\"col-md-6 col-xs-12 padding-15 lightgreycell totalcell\" style=\"padding-left:30px;\">\r\n                        {{discountRequest.approvedTotals.totalSell | currency:'USD':true:'1.2-2'}}\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\" style=\"height:50px;\">\r\n\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom \">\r\n                    <div class=\"form-group col-md-6 padding-15\">\r\n                        <label class=\"control-label required\">Probability of close:</label>\r\n                        <select class=\"form-control\" required style=\"width:175px;\"\r\n                                [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                [(ngModel)]=\"discountRequest.probabilityOfCloseTypeId\" name=\"probabilityOfClose\">\r\n                            <option [value]=\"null\" selected disabled>Select ...</option>\r\n                            <option *ngFor=\"let item of discountRequest.probabilityOfCloseTypes.items\"\r\n                                    [value]=\"item.value\">\r\n                                {{item.text}}\r\n                            </option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"form-group col-md-6 padding-15\">\r\n                        <label class=\"control-label required\">If approved, when will the order be issued to Daikin?</label>\r\n                        <div>\r\n                            <kendo-datepicker #datepicker id=\"orderIssueDate\"\r\n                                              required name=\"orderIssueDate\"\r\n                                              [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                              [(ngModel)]=\"discountRequest.orderPlannedFor\" placeholder=\"select...\">\r\n                            </kendo-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"form-group col-md-6 padding-15\">\r\n                        <label class=\"control-label required\">What is the approximate delivery date for required equipment?</label>\r\n                        <div>\r\n                            <kendo-datepicker id=\"estimatedDeliveryDate\"\r\n                                              required name=\"estimatedDeliveryDate\"\r\n                                              [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                              [(ngModel)]=\"discountRequest.project.estimatedDelivery\" placeholder=\"select...\">\r\n                            </kendo-datepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom\">\r\n                    <div class=\"form-group col-md-12 padding-15\">\r\n                        <label class=\"control-label required\">Any further information or reason for discount request</label>\r\n                        <textarea class=\"form-control\" required name=\"notes\"\r\n                                  [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                  [(ngModel)]=\"discountRequest.notes\" rows=\"2\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 2 || discountRequest.discountRequestStatusTypeId == 4 || discountRequest.discountRequestStatusTypeId == 6\" class=\"row no-gutters border-bottom\">\r\n                    <div class=\"form-group col-md-12 padding-15\">\r\n                        <label class=\"control-label required\">Response from approval team:</label>\r\n                        <textarea class=\"form-control\" required name=\"responseNotes\"\r\n                                  [attr.disabled]=\"!canApproveDiscounts ? 'disabled' : null\"\r\n                                  [(ngModel)]=\"discountRequest.responseNotes\" rows=\"2\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row no-gutters border-bottom \">\r\n                    <div class=\"form-group col-md-12 padding-15\">\r\n                        <label class=\"control-label\">Enter Daikin City users' emails you want to notify about this request. Place commas between each email</label>\r\n                        <textarea class=\"form-control\" name=\"emailsList\"\r\n                                  [attr.disabled]=\"discountRequest.discountRequestStatusTypeId != 0 ? 'disabled' : null\"\r\n                                  [(ngModel)]=\"discountRequest.emailsList\" rows=\"2\"></textarea>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n            </fieldset>\r\n\r\n            <!--Submit-->\r\n            <fieldset>\r\n                <!--New Request-->\r\n                <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 0\" class=\"text-center\" style=\"padding-top:20px;\">\r\n                    <a class=\"btn btn-default\" href=\"/v2/#/quote/quote/{{discountRequest.quoteId}}/existingRecord\" style=\"width:70px;\">Cancel</a>\r\n                    <button class=\"btn btn-primary\" style=\"width:70px;\" [disabled]=\"discountRequestForm.invalid\" (click)=\"submit()\">Submit</button>\r\n                </div>\r\n\r\n                <!--Pending-->\r\n                <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 2\" class=\"text-center\" style=\"padding-top:20px;\">\r\n                    <div *ngIf=\"canApproveDiscounts; else elseBlock\">\r\n                        <button class=\"btn btn-default\" (click)=\"reject()\">Reject Request</button>\r\n                        <button class=\"btn btn-primary\" [disabled]=\"discountRequestForm.invalid\" (click)=\"approve()\">Approve Request</button>\r\n                    </div>\r\n                    <ng-template #elseBlock>\r\n                        <a class=\"btn btn-default\" href=\"/v2/#/quote/quote/{{discountRequest.quoteId}}/existingRecord\">Back To Quote</a>\r\n                    </ng-template>\r\n                </div>\r\n\r\n                <!--Rejected-->\r\n                <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 4\" class=\"text-center\" style=\"padding-top:20px;\">\r\n                    <div *ngIf=\"canApproveDiscounts\">\r\n                        <button class=\"btn btn-primary\" [disabled]=\"discountRequestForm.invalid\" (click)=\"approve()\">Approve Request</button>\r\n                    </div>\r\n                </div>\r\n\r\n                <!--Approved-->\r\n                <div *ngIf=\"discountRequest.discountRequestStatusTypeId == 6\" class=\"text-center\" style=\"padding-top:20px;\">\r\n                    <div *ngIf=\"canApproveDiscounts; else elseBlock\">\r\n                        <button class=\"btn btn-default\" (click)=\"reject()\">Reject Request</button>\r\n                    </div>\r\n                    <ng-template #elseBlock>\r\n                        <a class=\"btn btn-default\" href=\"/v2/#/quote/quote/{{discountRequest.quoteId}}/existingRecord\">Back To Quote</a>\r\n                    </ng-template>\r\n                </div>\r\n\r\n            </fieldset>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<!--Print Modal -->\r\n<div *ngIf=\"discountRequest\" id=\"printModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">SHOW COST PRICING</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Should cost pricing be included in this print report?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <!--<button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>-->\r\n                <a href=\"/Document/DiscountRequestPrint/{{discountRequest.discountRequestId}}?QuoteId={{discountRequest.quoteId}}&ProjectId={{discountRequest.projectId}}\" target=\"_blank\" onclick=\"$('#printModal').modal('hide')\" class=\"btn btn-default\">No</a>\r\n                <a href=\"/Document/DiscountRequestPrintWithCostPricing/{{discountRequest.discountRequestId}}?QuoteId={{discountRequest.quoteId}}&ProjectId={{discountRequest.projectId}}\" target=\"_blank\" onclick=\"$('#printModal').modal('hide')\" class=\"btn btn-default\">Yes</a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n<!--Export Modal -->\r\n<div *ngIf=\"discountRequest\" id=\"exportModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n\r\n        <!-- Modal content-->\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                <h4 class=\"modal-title\">SHOW COST PRICING</h4>\r\n            </div>\r\n            <div class=\"modal-body\">\r\n                <p>Should cost pricing be included in this export?</p>\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <a href=\"/ProjectDashboard/DiscountRequestExport?DiscountRequestId={{discountRequest.discountRequestId}}&ProjectId={{discountRequest.projectId}}&QuoteId={{discountRequest.quoteId}}\" target=\"_blank\" onclick=\"$('#exportModal').modal('hide')\" class=\"btn btn-default\">No</a>\r\n                <a href=\"/ProjectDashboard/DiscountRequestExportWithCostPricing?DiscountRequestId={{discountRequest.discountRequestId}}&ProjectId={{discountRequest.projectId}}&QuoteId={{discountRequest.quoteId}}\" target=\"_blank\" onclick=\"$('#exportModal').modal('hide')\" class=\"btn btn-default\">Yes</a>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/discount/components/discount-request.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountRequestComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_block_ui__ = __webpack_require__("../../../../ng-block-ui/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_index__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_discountRequest_service__ = __webpack_require__("../../../../../src/app/discount/services/discountRequest.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DiscountRequestComponent = /** @class */ (function () {
    function DiscountRequestComponent(router, route, toastrSvc, userSvc, systemAccessEnum, enums, discountRequestSvc) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.toastrSvc = toastrSvc;
        this.userSvc = userSvc;
        this.systemAccessEnum = systemAccessEnum;
        this.enums = enums;
        this.discountRequestSvc = discountRequestSvc;
        this.user = this.route.snapshot.data['currentUser'].model;
        this.quoteId = this.route.snapshot.paramMap.get('quoteId');
        this.projectId = this.route.snapshot.paramMap.get('projectId');
        this.discountRequestId = this.route.snapshot.paramMap.get('discountRequestId');
        this.discountRequestSvc.getDiscountRequest(this.discountRequestId, this.projectId, this.quoteId).subscribe(function (resp) {
            if (resp.isok) {
                _this.discountRequest = resp.model;
                //if (this.discountRequest.discountRequestStatusTypeId != 0) {
                //    this.viewOnly = true;
                //}
                //this.discountRequest.grossMarginMarkUp = this.discountRequest.standardTotals.totalCommissionPercentage;
                _this.discountRequest.grossMarginMarkUp = _this.discountRequest.standardTotals.grossMarginMarkUp;
                _this.calculateStandardGrossProfit();
                _this.calculateRevisedGrossProfit();
                if (_this.discountRequest.discountRequestStatusTypeId == 0) {
                    _this.discountRequest.orderPlannedFor = null;
                }
                else {
                    _this.discountRequest.orderPlannedFor = new Date(Date.parse(_this.discountRequest.orderPlannedFor));
                }
                _this.discountRequest.project.estimatedDelivery = new Date(Date.parse(_this.discountRequest.project.estimatedDelivery));
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    }
    DiscountRequestComponent.prototype.ngOnInit = function () {
        this.canApproveDiscounts = this.userSvc.hasAccess(this.user, this.enums.SystemAccessEnum.ApproveDiscounts);
    };
    DiscountRequestComponent.prototype.hasCompetitorPriceChange = function (event) {
        if (event == false) {
            this.discountRequest.competitorPrice = null;
        }
    };
    DiscountRequestComponent.prototype.hasCompetitorQuoteChange = function (event) {
    };
    DiscountRequestComponent.prototype.hasCompetitorLineComparsionChange = function (event) {
    };
    DiscountRequestComponent.prototype.selectCompetitorQuoteFile = function (e) {
        //this.competitorQuoteFiles = e.files;
        //this.discountRequest.competitorQuoteFile = e.files[0];
        this.discountRequest.competitorQuoteFileName = e.files[0].name;
    };
    DiscountRequestComponent.prototype.selectLineComparsionFile = function (e) {
        //this.discountRequest.competitorLineComparsionFile = e.files[0];
        this.discountRequest.competitorLineComparsionFileName = e.files[0].name;
    };
    DiscountRequestComponent.prototype.uploadEventHandler = function (e) {
        console.log("File Upload");
        e.data = {
            QuoteId: this.discountRequest.quoteId,
        };
    };
    DiscountRequestComponent.prototype.successEventHandler = function (e) {
        var self = this;
        if (e.response.ok == true) {
            console.log("The " + e.operation + " was successful!");
        }
    };
    DiscountRequestComponent.prototype.errorEventHandler = function (e) {
        console.log("Error: " + e.response.statusText);
        this.toastrSvc.ErrorFadeOut(e.response.statusText);
    };
    //competitorQuoteFileChange(e: any) {
    //    //var files = e.srcElement.files;
    //    this.discountRequest.competitorQuoteFile = e.srcElement.files[0];
    //    //let formData: FormData = new FormData();
    //    //formData.append('competitorQuoteFile', e.srcElement.files[0], e.srcElement.files[0].name);
    //}
    //public test(event: any) {
    //    this.discountRequest.requestedDiscountVRV = event / 100;
    //}
    DiscountRequestComponent.prototype.startupCostChange = function () {
        this.calculateRevisedTotalSell();
    };
    //Kendo numeric input
    //calculateDiscountAmountVRV(event: any) {
    //    //update Net Material 
    //    this.discountRequest.approvedTotals.netMaterialValueVRV = this.discountRequest.approvedTotals.totalNetVRV * (1 - this.discountRequest.requestedDiscountVRV);
    //    //update Net Multiplier
    //    this.discountRequest.approvedTotals.netMultiplierVRV = this.discountRequest.approvedTotals.netMaterialValueVRV / this.discountRequest.approvedTotals.totalListVRV;
    //    //show/update Discount Ammount
    //    this.discountRequest.approvedTotals.totalDiscountAmountVRV = this.discountRequest.approvedTotals.totalNetVRV - this.discountRequest.approvedTotals.netMaterialValueVRV;
    //    this.calculateTotalDiscount();
    //}
    //HTML numeric input
    DiscountRequestComponent.prototype.calculateDiscountAmountVRV = function (value) {
        this.discountRequest.requestedDiscountVRV = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueVRV = this.discountRequest.standardTotals.totalNetVRV * (1 - this.discountRequest.requestedDiscountVRV);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierVRV = this.discountRequest.approvedTotals.netMaterialValueVRV / this.discountRequest.standardTotals.totalListVRV;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountVRV = this.discountRequest.standardTotals.totalNetVRV - this.discountRequest.approvedTotals.netMaterialValueVRV;
        this.calculateTotalDiscount();
    };
    DiscountRequestComponent.prototype.calculateApprovedDiscountAmountVRV = function (value) {
        this.discountRequest.approvedDiscountVRV = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueVRV = this.discountRequest.standardTotals.totalNetVRV * (1 - this.discountRequest.approvedDiscountVRV);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierVRV = this.discountRequest.approvedTotals.netMaterialValueVRV / this.discountRequest.standardTotals.totalListVRV;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountVRV = this.discountRequest.standardTotals.totalNetVRV - this.discountRequest.approvedTotals.netMaterialValueVRV;
        this.calculateTotalApprovedDiscount();
    };
    DiscountRequestComponent.prototype.calculateDiscountAmountSplit = function (value) {
        this.discountRequest.requestedDiscountSplit = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueSplit = this.discountRequest.standardTotals.totalNetSplit * (1 - this.discountRequest.requestedDiscountSplit);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierSplit = this.discountRequest.approvedTotals.netMaterialValueSplit / this.discountRequest.standardTotals.totalListSplit;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountSplit = this.discountRequest.standardTotals.totalNetSplit - this.discountRequest.approvedTotals.netMaterialValueSplit;
        this.calculateTotalDiscount();
    };
    DiscountRequestComponent.prototype.calculateApprovedDiscountAmountSplit = function (value) {
        this.discountRequest.approvedDiscountSplit = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueSplit = this.discountRequest.standardTotals.totalNetSplit * (1 - this.discountRequest.approvedDiscountSplit);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierSplit = this.discountRequest.approvedTotals.netMaterialValueSplit / this.discountRequest.standardTotals.totalListSplit;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountSplit = this.discountRequest.standardTotals.totalNetSplit - this.discountRequest.approvedTotals.netMaterialValueSplit;
        this.calculateTotalApprovedDiscount();
    };
    DiscountRequestComponent.prototype.calculateDiscountAmountUnitary = function (value) {
        this.discountRequest.requestedDiscountUnitary = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueUnitary = this.discountRequest.standardTotals.totalNetUnitary * (1 - this.discountRequest.requestedDiscountUnitary);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierUnitary = this.discountRequest.approvedTotals.netMaterialValueUnitary / this.discountRequest.standardTotals.totalListUnitary;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountUnitary = this.discountRequest.standardTotals.totalNetUnitary - this.discountRequest.approvedTotals.netMaterialValueUnitary;
        this.calculateTotalDiscount();
    };
    DiscountRequestComponent.prototype.calculateApprovedDiscountAmountUnitary = function (value) {
        this.discountRequest.approvedDiscountUnitary = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueUnitary = this.discountRequest.standardTotals.totalNetUnitary * (1 - this.discountRequest.approvedDiscountUnitary);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierUnitary = this.discountRequest.approvedTotals.netMaterialValueUnitary / this.discountRequest.standardTotals.totalListUnitary;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountUnitary = this.discountRequest.standardTotals.totalNetUnitary - this.discountRequest.approvedTotals.netMaterialValueUnitary;
        this.calculateTotalApprovedDiscount();
    };
    DiscountRequestComponent.prototype.calculateDiscountAmountLCPackage = function (value) {
        this.discountRequest.requestedDiscountLCPackage = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueLCPackage = this.discountRequest.standardTotals.totalNetLCPackage * (1 - this.discountRequest.requestedDiscountLCPackage);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierLCPackage = this.discountRequest.approvedTotals.netMaterialValueLCPackage / this.discountRequest.standardTotals.totalListLCPackage;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountLCPackage = this.discountRequest.standardTotals.totalNetLCPackage - this.discountRequest.approvedTotals.netMaterialValueLCPackage;
        this.calculateTotalDiscount();
    };
    DiscountRequestComponent.prototype.calculateApprovedDiscountAmountLCPackage = function (value) {
        this.discountRequest.approvedDiscountLCPackage = value / 100;
        //update Net Material 
        this.discountRequest.approvedTotals.netMaterialValueLCPackage = this.discountRequest.standardTotals.totalNetLCPackage * (1 - this.discountRequest.approvedDiscountLCPackage);
        //update Net Multiplier
        this.discountRequest.approvedTotals.netMultiplierLCPackage = this.discountRequest.approvedTotals.netMaterialValueLCPackage / this.discountRequest.standardTotals.totalListLCPackage;
        //show/update Discount Ammount
        this.discountRequest.approvedTotals.totalDiscountAmountLCPackage = this.discountRequest.standardTotals.totalNetLCPackage - this.discountRequest.approvedTotals.netMaterialValueLCPackage;
        this.calculateTotalApprovedDiscount();
    };
    DiscountRequestComponent.prototype.calculateTotalDiscount = function () {
        this.discountRequest.approvedTotals.totalDiscountAmount =
            this.discountRequest.approvedTotals.totalDiscountAmountVRV +
                this.discountRequest.approvedTotals.totalDiscountAmountSplit +
                this.discountRequest.approvedTotals.totalDiscountAmountUnitary +
                this.discountRequest.approvedTotals.totalDiscountAmountLCPackage;
        this.discountRequest.approvedTotals.netMaterialValue =
            this.discountRequest.approvedTotals.netMaterialValueVRV +
                this.discountRequest.approvedTotals.netMaterialValueSplit +
                this.discountRequest.approvedTotals.netMaterialValueUnitary +
                this.discountRequest.approvedTotals.netMaterialValueLCPackage;
        this.discountRequest.approvedTotals.netMultiplier = this.discountRequest.approvedTotals.netMaterialValue / this.discountRequest.standardTotals.totalList;
        this.discountRequest.requestedDiscount = this.discountRequest.approvedTotals.totalDiscountAmount / this.discountRequest.standardTotals.totalNet;
        this.calculateRevisedGrossProfit();
        this.calculateRevisedTotalSell();
    };
    DiscountRequestComponent.prototype.calculateTotalApprovedDiscount = function () {
        this.discountRequest.approvedTotals.totalDiscountAmount =
            this.discountRequest.approvedTotals.totalDiscountAmountVRV +
                this.discountRequest.approvedTotals.totalDiscountAmountSplit +
                this.discountRequest.approvedTotals.totalDiscountAmountUnitary +
                this.discountRequest.approvedTotals.totalDiscountAmountLCPackage;
        this.discountRequest.approvedTotals.netMaterialValue =
            this.discountRequest.approvedTotals.netMaterialValueVRV +
                this.discountRequest.approvedTotals.netMaterialValueSplit +
                this.discountRequest.approvedTotals.netMaterialValueUnitary +
                this.discountRequest.approvedTotals.netMaterialValueLCPackage;
        this.discountRequest.approvedTotals.netMultiplier = this.discountRequest.approvedTotals.netMaterialValue / this.discountRequest.standardTotals.totalList;
        this.discountRequest.approvedDiscount = this.discountRequest.approvedTotals.totalDiscountAmount / this.discountRequest.standardTotals.totalNet;
        this.calculateRevisedGrossProfit();
        this.calculateRevisedTotalSell();
    };
    DiscountRequestComponent.prototype.calculateStandardGrossProfit = function () {
        //this.discountRequest.approvedTotals.totalCommissionAmount = this.discountRequest.standardTotals.totalCommissionPercentage * this.discountRequest.standardTotals.totalNet;
        //this.discountRequest.standardTotals.totalCommissionAmount = this.discountRequest.standardTotals.totalCommissionPercentage * this.discountRequest.standardTotals.totalNet;
        this.discountRequest.standardTotals.totalCommissionAmount = this.discountRequest.standardTotals.grossMarginMarkUp * this.discountRequest.standardTotals.totalNet;
    };
    DiscountRequestComponent.prototype.calculateRevisedGrossProfit = function () {
        this.discountRequest.approvedTotals.totalCommissionAmount = this.discountRequest.grossMarginMarkUp * this.discountRequest.approvedTotals.netMaterialValue;
        this.calculateRevisedTotalSell();
    };
    DiscountRequestComponent.prototype.recalculateRevisedGrossProfit = function (value) {
        this.discountRequest.grossMarginMarkUp = value / 100;
        this.discountRequest.approvedTotals.totalCommissionAmount = this.discountRequest.grossMarginMarkUp * this.discountRequest.approvedTotals.netMaterialValue;
        this.calculateRevisedTotalSell();
    };
    DiscountRequestComponent.prototype.calculateRevisedTotalSell = function () {
        this.discountRequest.approvedTotals.totalSell =
            this.discountRequest.quote.totalFreight +
                this.discountRequest.startUpCosts +
                this.discountRequest.approvedTotals.totalCommissionAmount +
                this.discountRequest.approvedTotals.netMaterialValue;
    };
    DiscountRequestComponent.prototype.submit = function () {
        var _this = this;
        var self = this;
        //self.loadingIconSvc.Start(jQuery("#main-container"));
        this.blockUI.start('Loading...');
        this.discountRequestSvc.postDiscountRequest(this.discountRequest).subscribe(function (resp) {
            if (resp.isok) {
                //this.discountRequest = resp.model;
                _this.blockUI.stop();
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.toastrSvc.displayResponseMessages(resp);
                //send Email notification
                self.discountRequestSvc.sendDiscountRequestEmail(self.discountRequest).subscribe();
                self.router.navigateByUrl("/quote/quote/" + self.discountRequest.quoteId + "/existingRecord");
            }
            else {
                _this.blockUI.stop();
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    DiscountRequestComponent.prototype.approve = function () {
        var _this = this;
        var self = this;
        this.blockUI.start('Loading...');
        //self.loadingIconSvc.Start(jQuery("#main-container"));
        this.discountRequestSvc.approveDiscountRequest(this.discountRequest).subscribe(function (resp) {
            if (resp.IsOK) {
                _this.blockUI.stop();
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.toastrSvc.displayResponseMessages(resp);
                window.location.href = "/Userdashboard/DiscountRequests";
            }
            else {
                _this.blockUI.stop();
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    DiscountRequestComponent.prototype.reject = function () {
        var _this = this;
        var self = this;
        this.blockUI.start('Loading...');
        //self.loadingIconSvc.Start(jQuery("#main-container"));
        this.discountRequestSvc.rejectDiscountRequest(this.discountRequest).subscribe(function (resp) {
            if (resp.IsOK) {
                _this.blockUI.stop();
                ///self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.toastrSvc.displayResponseMessages(resp);
                window.location.href = "/Userdashboard/DiscountRequests";
            }
            else {
                _this.blockUI.stop();
                //self.loadingIconSvc.Stop(jQuery("#main-container"));
                self.toastrSvc.displayResponseMessages(resp);
            }
        }, function (error) {
            console.log("Error: " + error);
        });
    };
    DiscountRequestComponent.prototype.delete = function () {
    };
    DiscountRequestComponent.prototype.print = function () {
    };
    DiscountRequestComponent.prototype.export = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3_ng_block_ui__["BlockUI"])(),
        __metadata("design:type", Object)
    ], DiscountRequestComponent.prototype, "blockUI", void 0);
    DiscountRequestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'discount-request',
            template: __webpack_require__("../../../../../src/app/discount/components/discount-request.component.html"),
            styles: [__webpack_require__("../../../../../src/app/discount/components/discount-request.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["h" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["i" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_4__shared_index__["k" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["h" /* SystemAccessEnum */],
            __WEBPACK_IMPORTED_MODULE_4__shared_index__["e" /* Enums */],
            __WEBPACK_IMPORTED_MODULE_5__services_discountRequest_service__["a" /* DiscountRequestService */]])
    ], DiscountRequestComponent);
    return DiscountRequestComponent;
}());



/***/ }),

/***/ "../../../../../src/app/discount/discount-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountRequestRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_discount_request_component__ = __webpack_require__("../../../../../src/app/discount/components/discount-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__ = __webpack_require__("../../../../../src/app/shared/services/common/user-resolver.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var discountRequestRoutes = [
    {
        path: ':discountRequestId/:projectId/:quoteId',
        component: __WEBPACK_IMPORTED_MODULE_2__components_discount_request_component__["a" /* DiscountRequestComponent */],
        resolve: { user: __WEBPACK_IMPORTED_MODULE_3__shared_services_common_user_resolver_service__["a" /* CurrentUserResolver */] }
    },
];
var DiscountRequestRoutingModule = /** @class */ (function () {
    function DiscountRequestRoutingModule() {
    }
    DiscountRequestRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["i" /* RouterModule */].forChild(discountRequestRoutes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["i" /* RouterModule */]],
        })
    ], DiscountRequestRoutingModule);
    return DiscountRequestRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/discount/discount.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountRequestModule", function() { return DiscountRequestModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_inputs__ = __webpack_require__("../../../../@progress/kendo-angular-inputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_upload__ = __webpack_require__("../../../../@progress/kendo-angular-upload/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dateinputs__ = __webpack_require__("../../../../@progress/kendo-angular-dateinputs/dist/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_discount_request_component__ = __webpack_require__("../../../../../src/app/discount/components/discount-request.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_discountRequest_service__ = __webpack_require__("../../../../../src/app/discount/services/discountRequest.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__discount_routing_module__ = __webpack_require__("../../../../../src/app/discount/discount-routing.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var DiscountRequestModule = /** @class */ (function () {
    function DiscountRequestModule() {
    }
    DiscountRequestModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__progress_kendo_angular_inputs__["a" /* InputsModule */],
                __WEBPACK_IMPORTED_MODULE_3__progress_kendo_angular_dateinputs__["a" /* DateInputsModule */],
                __WEBPACK_IMPORTED_MODULE_2__progress_kendo_angular_upload__["a" /* UploadModule */],
                __WEBPACK_IMPORTED_MODULE_4__shared_shared_module__["a" /* SharedModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__discount_routing_module__["a" /* DiscountRequestRoutingModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_5__components_discount_request_component__["a" /* DiscountRequestComponent */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__components_discount_request_component__["a" /* DiscountRequestComponent */]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__services_discountRequest_service__["a" /* DiscountRequestService */]
            ]
        })
    ], DiscountRequestModule);
    return DiscountRequestModule;
}());



/***/ }),

/***/ "../../../../../src/app/discount/services/discountRequest.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DiscountRequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("../../../../rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_common_toastr_service__ = __webpack_require__("../../../../../src/app/shared/services/common/toastr.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DiscountRequestService = /** @class */ (function () {
    function DiscountRequestService(toastrSvc, http) {
        this.toastrSvc = toastrSvc;
        this.http = http;
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json',
            // 'dataType': 'json',
            'Accept': 'application/json'
        });
    }
    DiscountRequestService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    DiscountRequestService.prototype.extractHtml = function (res) {
        return res._body;
    };
    DiscountRequestService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        console.error(error); // log to console instead
        this.toastrSvc.Error(error.statusText);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["a" /* Observable */].throw(error.statusText);
    };
    DiscountRequestService.prototype.getDiscountRequest = function (discountRequestId, projectId, quoteId) {
        return this.http.get("/api/DiscountRequest/GetDiscountRequest?discountRequestId=" + discountRequestId + "&projectId=" + projectId + "&quoteId=" + quoteId)
            .map(this.extractData)
            .catch(this.handleError);
    };
    DiscountRequestService.prototype.postDiscountRequest = function (discountRequest) {
        //API Controller
        return this.http.post("/api/DiscountRequest/PostDiscountRequest", discountRequest, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
        //MVC Controller
        //return this.http.post("/ProjectDashboard/DiscountRequest", discountRequest, { headers: this.headers })
        //    .map(this.extractData)
        //    .catch(this.handleError);
        //let _headers = new Headers({
        //    'Content-Type': 'multipart/form-data',
        //    'Accept': 'application/json'
        //});
        //return this.http.post("/api/DiscountRequest/PostDiscountRequest", discountRequest, { headers: _headers })
        //    .map(this.extractData)
        //    .catch(this.handleError);
    };
    DiscountRequestService.prototype.sendDiscountRequestEmail = function (discountRequest) {
        return this.http.post("/ProjectDashboard/SendDiscountRequestEmail", discountRequest, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    DiscountRequestService.prototype.approveDiscountRequest = function (discountRequest) {
        //MVC Controller
        return this.http.post("/ProjectDashboard/DiscountRequestApprove", discountRequest, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    DiscountRequestService.prototype.rejectDiscountRequest = function (discountRequest) {
        //MVC Controller
        return this.http.post("/ProjectDashboard/DiscountRequestReject", discountRequest, { headers: this.headers })
            .map(this.extractData)
            .catch(this.handleError);
    };
    DiscountRequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_services_common_toastr_service__["a" /* ToastrService */], __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], DiscountRequestService);
    return DiscountRequestService;
}());



/***/ })

});
//# sourceMappingURL=discount.module.chunk.js.map