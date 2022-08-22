import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataBrPipe} from "./pipes/data-br.pipe";



@NgModule({
    declarations: [
        DataBrPipe
    ],
    exports: [
        DataBrPipe
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
