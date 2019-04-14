import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgFlowComponent } from './content/ng-flow/ng-flow.component';

import * as $ from "jquery";
@NgModule({
  declarations: [
    AppComponent,
    NgFlowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
