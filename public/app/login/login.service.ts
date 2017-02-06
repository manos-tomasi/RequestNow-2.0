import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { User } from '../user/user';
import { Emitter } from '../util/emitter';
import { AbstractService } from '../util/abstract.service';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

declare var Session;

@Injectable()
export class LoginService
    extends
      AbstractService<User>
{
    constructor( private router : Router, _http : Http)
    {
        super( '/api/login/', _http );
    }

    login( user : User, callback : Function )
    {
        let data = {
          username : user.login,
          password : user.password
        };

        return this._http.post( this._url, data )
                         .map( this.extractData )
                         .catch( ( res ) =>
                         {
                            callback();

                            return Observable.throw( "Login Incorreto" );
                         } )
                         .subscribe( ( user : User ) =>
                         {
                             this.user( user );

                             this.redirect();
                         } );
    }


    logout()
    {
        this.user( null );

        return this._http.post( "api/logout/", this.user() )
                         .map( this.extractData )
                         .catch( this.handleError )
                         .subscribe( (user) => this.redirect() );
    }

    user( user: User = undefined )
    {
        if ( user === undefined )
        {
            return Session.get( "ActiveUser" );
        }

        Session.put( "ActiveUser", user );
    }

    redirect()
    {
        Emitter.on( Emitter.ON_LOGIN ).emit( this.user() );

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
        return this.user();
    }
}
