import {LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_LOCALE } from '@angular/material/core';

import { AppComponent } from './app.component';
import { APP_CONFIG } from './config/app.config';
import { AppRoutingModule } from './modules/app-routing.module';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: APP_CONFIG.locale },
    { provide: MAT_DATE_LOCALE, useValue: APP_CONFIG.locale },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
