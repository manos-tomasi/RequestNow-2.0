import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { User } from '../user/user';
import { Emitter } from '../util/emitter';
import { AbstractService } from '../util/abstract.service';

@Injectable()
export class LoginService
    extends
        AbstractService
{
    private activeUser : User;

    constructor( private router : Router , private http : Http )
    {
        super();
    }


    /*login( user : User )
    {
      console.log( user );
      console.log(" user" );

        this.http.post( "/api/login/", user, this.options )
                 .map( this.extractData )
                 .catch( this.handleError ).subscribe( user => this.activeUser = user );
    }*/

    login( user : User )
    {
        let authenticate = user.password === 'admin' &&
                           user.name     === 'artur.tomasi';

        user.name = "Artur Tomasi";
        user.login = "artur.tomasi";
        user.mail ="tomasi.artur@gmail.com";
        user.password = "admin";

        this.activeUser = authenticate ? user : null;

        this.redirect();
    }

    logout()
    {
        this.activeUser = null;

        this.redirect();
    }

    redirect()
    {
        Emitter.on( Emitter.ON_LOGIN ).emit( this.activeUser );

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
        return this.activeUser !== null;
    }
}
