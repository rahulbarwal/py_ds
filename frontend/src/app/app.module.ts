import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgFor  } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconRegistry } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { InputAwesomeComponent } from './input-awesome/input-awesome.component';
import { AppRoutingModule } from './app-routing.module';
import { DatasourceService } from './services/datasource.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InputAwesomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule, // include it after BrowserModule
    AppRoutingModule
  ],
  providers: [DatasourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
