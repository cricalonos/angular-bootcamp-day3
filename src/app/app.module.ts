import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from "@angular/common/http";

import { YesnoService } from "./services/yesno.service";

import { AppComponent } from './app.component';
import { YesnoComponent } from './components/yesno/yesno.component';


@NgModule({
  declarations: [
    AppComponent,
    YesnoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    YesnoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
