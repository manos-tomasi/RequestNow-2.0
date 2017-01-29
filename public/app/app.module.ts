import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { LoginService } from './login/login.service';
import { AppGuard } from './app.guard';

import { Routing } from './app.routes';
import { HomeButtonComponent } from './home-button/home-button.component';
import { RequestComponent } from './request/request.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { UserComponent } from './user/user.component';
import { ListComponent } from './list/list.component';
import { ApplicationButtonComponent } from './application-button/application-button.component';

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
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing
  ],
  providers: [
    LoginService,
    AppGuard
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
