import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {DashboardModule} from "./dashboard/dashboard.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {HttpClientModule} from "@angular/common/http";
import {StoreModule} from "@ngrx/store";
import {counterReducer} from "./store/srore";
import {siteReducer} from "./store/siteState/siteStateStore";
import {NOTYF, notyfFactory} from "./shared/tools/notyf.token";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";
import { TestComponent } from './level3/test/test.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponent,

  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,ReactiveFormsModule,

    BrowserAnimationsModule,HttpClientModule ,
    StoreModule.forRoot({counter:counterReducer,siteState:siteReducer}),



  ],
  providers: [{provide: NOTYF, useFactory: notyfFactory},
    {provide: LocationStrategy, useClass: HashLocationStrategy},

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
