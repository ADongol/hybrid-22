import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { SubmittalPackageService } from '../services/submittal-package.service';
import { SubmittalPackageModel } from '../../submittal/models/submittal-package';
import { DocumentModel } from '../models/document';

declare var jQuery: any; 

@Component({
    selector: 'attached-files',
    templateUrl: './attached-files.component.html',
    styleUrls: ['./attached-files.component.css']
})
export class AttachedFilesComponent implements OnInit {

    @ViewChild("attachedFileListTable") tblAttachedFileList;
    @Input() quoteId: string;
    @Input() hasAttachedFiles: boolean;
    @Input() quotePackageAttachedFiles: any = [];
    @Output() deleteFileClick: EventEmitter<any> = new EventEmitter();

    public attachedFileList: any = [];

    constructor(private http: Http,
                private submittalService: SubmittalPackageService)
    { }

    ngOnInit() { }

    public checkAllFileRows(event: any) {
 
        var checkBoxes = this.tblAttachedFileList.nativeElement.querySelectorAll('input');

        if (event.target.checked) {
            Array.prototype.forEach.call(checkBoxes, function (value, index) {
                if (value.name === "chkFileRow") {
                    value.checked = true;
                }
            });
        }
        else {
            Array.prototype.forEach.call(checkBoxes, function (value, index) {
                if (value.name === "chkFileRow") {
                    value.checked = false;
                }
            });
        }
    }

    public isAllFilesChecked() {

        //if (this.quotePackageAttachedFiles.length > 0 )
        //    return this.quotePackageAttachedFiles.every(_ => _.isFileRow);
    }

    public onDeleteFile(filename: string): void {
        //this.blockUI.start('Loading...');

        var submittalModel = new SubmittalPackageModel();
        submittalModel.quoteId = this.quoteId;

        let documentModel: Array<DocumentModel> = [
            {
                fileName: filename,
                absoultePath: null,
                description: null,
                documentId: null,
                documentTypeId: 5,
                productId: null,
                productNumber: null,
                hasImage: null,
                url: null,
                siteFinityUrl: null,
                name: null,
                rank: 0,
                fileExtension: null
            }
        ];

        submittalModel.quotePackageAttachedFiles = documentModel;

        this.submittalService.deleteFile(submittalModel)
            .subscribe((data: any) => {
                this.attachedFileList = data.model

                this.deleteFileClick.emit(this.attachedFileList);
            },
            (err: any) => {
                console.log(err);
            }
        )
    }
}
