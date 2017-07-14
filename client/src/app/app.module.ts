import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './routing/routing.module';

import { ValuesComponent } from './values/values.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';

import * as services from './shared/services';

@NgModule({
  declarations: [
    AppComponent,
    ValuesComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [services.ErrorParserService, services.AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
