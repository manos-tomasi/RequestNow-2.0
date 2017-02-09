import { Router, RouterStateSnapshot, ActivatedRouteSnapshot, Routes, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login/login.service';

@Injectable()
export class AppGuard implements CanActivate
{
    constructor( private service: LoginService, private router: Router ) { }

    canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot )
    {
        if ( this.service.isAuthenticate() )
        {
            return true;
        }

        this.router.navigate( [ '/' ] );

        window.location.reload();

        return false;
    }
}
