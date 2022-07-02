import { DocumentModel } from '../models/document';

export class QuoteItemListModel {
    public accessories: string;
    public airFlowRateHighCooling: string;
    public airFlowRateHighHeating: string;
    public benefits: object[];
    public cabinetFeatures: object[];
    public description: string;
    public documents: DocumentModel[];
    public extendedNet: number;
    public getSubmittalSheetTemplateName: string;
    public getSubmittalSheetTemplateNameV2: string;
    public inventoryStatusDescription: string;
    public inventoryStatusId: number;
    public isCommissionable: boolean;
    public isSystem: boolean;
    public isSystemTemplate: boolean;
    public lineItemTypeId: number;
    public multiplierTypeId: number;
    public priceList: number;
    public priceNet: number;
    public productClassCode: number;
    public productId: string;
    public productNumber: string;
    public productStatusTypeDescription: string;
    public productStatusTypeId: number;
    public productSubFamilyId: number;
    public productTypeId: number;
    public quantity: number;
    public quoteItemId: number;
    public totalListPriceUnitary: number;
    public totalCommissionUnitary: number;
    public quoteId: number; 

    public submittalSheetsDocId: string;
    public operationManualDocId: string;
    public installationManualDocId: string;
    public guideSpecsDocId: string;
    public productBrochureDocId: string;
    public revitDrawingDocId: string;
    public cadDrawingDocId: string;
    public productFlyerDocId: string;

    public hasSubmittalSheets: boolean = false;
    public hasInstallationManual: boolean = false;
    public hasOperationManual: boolean = false;
    public hasGuideSpecs: boolean = false;
    public hasProductBrochure: boolean = false;
    public hasRevitDrawing: boolean = false;
    public hasCadDrawing: boolean = false; 
    public hasProductFlyer: boolean = false; 

    public submittalSheetsDocObj: DocumentModel;
    public installationManualDocObj: DocumentModel;
    public operationManualDocObj: DocumentModel;
    public guideSpecsDocObj: DocumentModel;
    public productBrochureDocObj: DocumentModel;
    public revitDrawingDocObj: DocumentModel;
    public cadDrawingDocObj: DocumentModel;
    public productFlyerDocObj: DocumentModel;

    public submittalSheetUrl: string;
    public installationManualUrl: string;
    public operationalManualUrl: string;
    public guideSpecsUrl: string;
    public productBrochureUrl: string;
    public revitDrawingUrl: string;
    public cadDrawingUrl: string;
    public productFlyerUrl: string;
}