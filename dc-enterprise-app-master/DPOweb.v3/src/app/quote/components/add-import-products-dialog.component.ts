import { Component, OnInit, Input, Output, EventEmitter, Inject } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable } from 'rxjs/Rx';

import { ToastrService } from '../../shared/services/toastr.service';
import { UserService } from '../../shared/services/user.service'; 
import { Enums } from '../../shared/enums/enums';
import { AccountService } from '../../account/services/account.service';
import { QuoteService } from '../services/quote.service';
import { ProductService } from '../../product/services/product.service';

declare var jQuery: any;

@Component({
    selector: "add-import-products-dialog",
    templateUrl: "./add-import-products-dialog.component.html"
})
export class AddImportProductsDialogComponent implements OnInit {

    constructor(private router: Router, private route: ActivatedRoute,
        private toastrSvc: ToastrService, private userSvc: UserService,
        private accountSvc: AccountService, private quoteSvc: QuoteService,
        private productSvc: ProductService,
        private enums: Enums) {
    }

    @Input() user: any;
    @Input() quote: any;
    @Input() recordState: any;
    public dialogOpen: any = true;

    ngOnInit() { }

    public closeDialog() {
        this.dialogOpen = false;
    }

    public browseProductsWithQuoteId() {
        this.productSvc.browseProductsWithQuoteId(this.quote.quoteId).then((resp: any) => {
            if (resp.isok) {
                //self.quoteItems = resp.model;
                window.location.href = "/v3/#/product";
            }
        }).catch(error => {
            //console.log('Retrieval error: ${error}');
            console.log(error);
        });
    }
}