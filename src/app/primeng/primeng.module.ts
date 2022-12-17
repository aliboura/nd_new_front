import { NgModule } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {RatingModule} from "primeng/rating";
import {TabViewModule} from "primeng/tabview";
import {CalendarModule} from "primeng/calendar";
import {AutoCompleteModule} from "primeng/autocomplete";
import {ChipsModule} from "primeng/chips";
import {DropdownModule} from "primeng/dropdown";
import {InputMaskModule} from "primeng/inputmask";
import {InputNumberModule} from "primeng/inputnumber";
import {CascadeSelectModule} from "primeng/cascadeselect";
import {MultiSelectModule} from "primeng/multiselect";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {CardModule} from "primeng/card";
import {GMapModule} from "primeng/gmap";
import {ScrollTopModule} from "primeng/scrolltop";
import {BreadcrumbModule} from "primeng/breadcrumb";



@NgModule({
  declarations: [],
  imports: [
    ButtonModule,RatingModule, TabViewModule,
     CalendarModule ,
    AutoCompleteModule,

    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    CardModule ,
    GMapModule,ScrollTopModule,BreadcrumbModule
  ],
  exports :[
    ButtonModule,RatingModule, TabViewModule,
    CalendarModule ,
    AutoCompleteModule,

    CalendarModule,
    ChipsModule,
    DropdownModule,
    InputMaskModule,
    InputNumberModule,
    CascadeSelectModule,
    MultiSelectModule,
    InputTextareaModule,
    InputTextModule,
    CardModule,
    GMapModule ,ScrollTopModule,BreadcrumbModule
  ]
})
export class PrimengModule { }
