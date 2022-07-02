import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderButtonsComponent } from './header/header-buttons.component';


@NgModule({
    imports: [CommonModule,
        FormsModule, ReactiveFormsModule,
    ],
    declarations: [HeaderButtonsComponent],
    exports: [CommonModule,
        FormsModule, ReactiveFormsModule,
        HeaderButtonsComponent],
    providers: []
})

export class SharedModule {
};