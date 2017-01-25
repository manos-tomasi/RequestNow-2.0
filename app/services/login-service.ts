import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { EmitterService } from '../services/emitter-service';

@Injectable()
export class LoginService
{
    private authenticate : boolean = false;

    private activeUser : User;

    constructor( private router : Router ){}

    login( user : User )
    {
        this.authenticate = user.password === 'admin' &&
                            user.name     === 'artur.tomasi';

        this.activeUser = this.authenticate ? user : null;

        this.redirect();
    }

    logout()
    {
        this.activeUser = null;

        this.authenticate = false;

        this.redirect();
    }

    redirect()
    {
        EmitterService.on( EmitterService.ON_LOGIN ).emit( this.activeUser );

        if ( this.isAuthenticate() )
        {
            this.router.navigate( ['/home'] );
        }

        else
        {
            this.router.navigate( ['/'] );
        }
    }

    isAuthenticate()
    {
        return this.authenticate;
    }
}
