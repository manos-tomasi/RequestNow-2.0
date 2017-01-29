import { Routes, CanActivate, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { UserComponent } from './user/user.component';

import { AppGuard } from './app.guard';

const APP_ROUTES: Routes =
[
    { path: '',         component : LoginComponent },
    { path: 'home',     component : HomeComponent,     canActivate: [AppGuard] },
    { path: 'user',     component : UserComponent,     canActivate: [AppGuard] },
    { path: 'request',  component : RequestComponent,  canActivate: [AppGuard] },
    { path: 'dispatch', component : DispatchComponent, canActivate: [AppGuard] }
];

export const Routing : ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
