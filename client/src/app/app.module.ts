import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule }     from './routing/routing.module';

import { ValuesService } from './values/values.service';
import { ValuesComponent } from './values/values.component';
import { RegisterComponent } from './account/register/register.component';
import { LoginComponent } from './account/login/login.component';
import { ErrorParserService } from './errors/error-parser.service';

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
  providers: [ValuesService, ErrorParserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
