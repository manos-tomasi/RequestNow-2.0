import {Component} from '@angular/core';
import {User} from './user/user';
import {LoginService} from './login/login.service';
import {Emitter} from './util/emitter';

@Component({
    selector: 'my-app',
    templateUrl:  './app.component.html'
} )

export class AppComponent
{
    private user:User;

    constructor ( private loginService : LoginService )
    {
        Emitter.on( Emitter.ON_LOGIN ).subscribe(

            user => this.onLogin( user )

        );
    }

    logout()
    {
        this.loginService.logout();

        this.onLogin( null );
    }

    onLogin( evt )
    {
        this.user = evt;
    }

    hasLogin()
    {
        return this.user;
    }

    userName()
    {
        return this.user ? this.user.name : 'n/d';
    }
}
