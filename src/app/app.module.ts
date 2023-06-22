import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BabyinfoComponent } from './babyinfo/babyinfo.component';
import { VacinfoComponent } from './vacinfo/vacinfo.component';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BabyinfoComponent,
    VacinfoComponent,
   
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
