import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app-component';
import { LoginComponent }  from './components/login-component';
import { HomeComponent }  from './components/home-component';

import { routing } from './app-routes';

@NgModule({
    imports: [
       BrowserModule,
       FormsModule ,
       HttpModule,
       routing
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        HomeComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {}
