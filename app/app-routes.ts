import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app-component';
import { HomeComponent } from './components/home-component';
import { LoginComponent } from './components/login-component';

const APP_ROUTES: Routes =
[
    { path: '', component : LoginComponent },
    { path: 'home', component : HomeComponent }
];

export const routing : ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
