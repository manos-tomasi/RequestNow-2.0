import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';

@Injectable()
export class LoginService
{
    constructor( private router : Router ){}

    validLogin( user : User )
    {
        return user.password === 'admin' &&
               user.name     === 'artur.tomasi' ?
               user : null;
    }

    redirect()
    {
        this.router.navigate( ['/home'] );
    }
}
