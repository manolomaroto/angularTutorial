import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OtroComponenteComponent } from './otro-componente/otro-componente.component';
import { Modulo01Module } from './modulo01/modulo01.module';

@NgModule({
  declarations: [
    AppComponent,
    OtroComponenteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Modulo01Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
