import { Routes, CanActivate, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { AppGuard } from './app.guard';

const APP_ROUTES: Routes =
[
    { path: '',     component : LoginComponent },
    { path: 'home', component : HomeComponent, canActivate: [AppGuard] }
];

export const Routing : ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
