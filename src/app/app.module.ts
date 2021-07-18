import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';
import { ColorCaseComponent } from './color-case/color-case.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // form module for input box
import { MatSliderModule } from '@angular/material/slider'; //mat


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TestComponent,
    ColorCaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, //form
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
