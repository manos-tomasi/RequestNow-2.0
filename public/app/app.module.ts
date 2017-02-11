import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { LoginService } from './login/login.service';
import { UserService } from './user/user.service';
import { SectorService } from './sector/sector.service';
import { AppGuard } from './app.guard';

import { Routing } from './app.routes';
import { HomeButtonComponent } from './home-button/home-button.component';
import { RequestComponent } from './request/request.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { UserComponent } from './user/user.component';
import { UserForm } from './user/user.form';
import { ListComponent } from './list/list.component';
import { ApplicationButtonComponent } from './application-button/application-button.component';
import { SectorComponent } from './sector/sector.component';
import { SectorForm } from './sector/sector.form';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HomeButtonComponent,
    RequestComponent,
    DispatchComponent,
    UserComponent,
    ListComponent,
    ApplicationButtonComponent,
    UserForm,
    SectorComponent,
    SectorForm
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    Routing
  ],
  providers: [
    LoginService,
    UserService,
    SectorService,
    AppGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
