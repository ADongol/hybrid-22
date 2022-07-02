import {
    Component,
    OnDestroy,
    ContentChild,
    ElementRef,
    TemplateRef,
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Input,
    Output, 
    EventEmitter,
    HostListener,
} from '@angular/core';

import { QuotePackageGridComponent } from '../../submittal-package/quote-package-grid.component';
import { SubmittalPackageService } from '../../submittal-package/services/submittal-package.service';

@Component({
    selector: 'modal',
    templateUrl: 'app/shared/modal/modal.component.html',
    styleUrls: ['app/shared/modal/modal.component.css'] 
})
export class ModalComponent implements OnDestroy {
    @ContentChild('modalHeader') header: TemplateRef<any>;
    @ContentChild('modalBody') body: TemplateRef<any>;
    @ContentChild('modalFooter') footer: TemplateRef<any>;
    @Input() closeOnOutsideClick = true;
    @Input() title;    
    @Input() quoteIdentifier;
    @Output() notifyParent: EventEmitter<any> = new EventEmitter();

    public quoteValue: string;
    public attachedFiles: any;

    public visible = false;
    public visibleAnimate = false;

    constructor(
        private elementRef: ElementRef,
        private changeDetectorRef: ChangeDetectorRef,
        private submittalService: SubmittalPackageService)
    {       
    }

    ngOnInit() {
        this.quoteValue = this.quoteIdentifier;
    }

    ngOnDestroy() {
        this.close();
    }

    open(): void {
        document.body.classList.add('modal-open');        

        this.visible = true;
        setTimeout(() => {
            this.visibleAnimate = true;
        });
    }

    close(): void {
        document.body.classList.remove('modal-open');

        this.visibleAnimate = false;
        setTimeout(() => {
            this.visible = false;
            this.changeDetectorRef.markForCheck();
        }, 200);

        if (jQuery(".k-upload-files").length > 0) {
            this.submittalService.getAttachedFiles(this.quoteValue)
                .subscribe(data => {
                    console.log(data);
                    this.attachedFiles = data;
                    this.notifyParent.emit(this.attachedFiles);
                });                   
        }
    }

    @HostListener('click', ['$event'])
    onContainerClicked(event: MouseEvent): void {
        if ((<HTMLElement>event.target).classList.contains('modal') && this.isTopMost() && this.closeOnOutsideClick) {
            this.close();
        }
    }

    @HostListener('document:keydown', ['$event'])
    onKeyDownHandler(event: KeyboardEvent) {
        // If ESC key and TOP MOST modal, close it.
        if (event.key === 'Escape' && this.isTopMost()) {
            this.close();
        }
    }

    /**
     * Returns true if this modal is the top most modal.
     */
    isTopMost(): boolean {
        return !this.elementRef.nativeElement.querySelector(':scope modal > .modal');
    }

    ngAfterViewChecked() {
        jQuery(".k-upload .k-dropzone").css("height", "100px");
        //jQuery(".k-button .k-upload-button").css({ "width": "250px", "position": "absolute", "left": "0", "top": "0" });
    }
}