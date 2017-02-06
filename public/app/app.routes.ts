import { Routes, CanActivate, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RequestComponent } from './request/request.component';
import { DispatchComponent } from './dispatch/dispatch.component';
import { UserComponent } from './user/user.component';
import { UserForm } from './user/user.form';
import { SectorComponent } from './sector/sector.component';
import { SectorForm } from './sector/sector.form';

import { AppGuard } from './app.guard';

const APP_ROUTES: Routes =
[
    { path: '',         component : LoginComponent },
    { path: 'home',     component : HomeComponent,     canActivate: [AppGuard] },
    { path: 'user',     component : UserComponent,     canActivate: [AppGuard] },
    { path: 'sector',     component : SectorComponent,     canActivate: [AppGuard] },
    { path: 'user-form',component : UserForm, canActivate: [AppGuard] },
    { path: 'sector-form',component : SectorForm, canActivate: [AppGuard] },
    { path: 'request',  component : RequestComponent,  canActivate: [AppGuard] },
    { path: 'dispatch', component : DispatchComponent, canActivate: [AppGuard] }
];

export const Routing : ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
