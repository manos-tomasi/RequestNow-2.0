import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { AppComponent } from './app-component';
import { HomeComponent } from './components/home-component';

const APP_ROUTES: Routes =
[
    { path: '', component : AppComponent },
    { path: 'home', component : HomeComponent }
];

export const routing : ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );
