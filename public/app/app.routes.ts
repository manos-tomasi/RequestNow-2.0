import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, Routes, CanActivate, RouterModule } from '@angular/router';
import { ModuleWithProviders, Injectable } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login/login.service';

const APP_ROUTES: Routes =
[
    { path: '',     component : LoginComponent },
    { path: 'home', component : HomeComponent, canActivate: [AuthGuard] }
];

export const Routing : ModuleWithProviders = RouterModule.forRoot( APP_ROUTES );


@Injectable()
export class AuthGuard implements CanActivate
{
    constructor( private service: LoginService, private router: Router ) { }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ) : boolean
    {
        if ( this.service.isAuthenticate() )
        {
            return true;
        }

        this.router.navigate( [ '/' ] );

        return false;
    }
}
