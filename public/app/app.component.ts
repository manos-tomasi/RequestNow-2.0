import {Component} from '@angular/core';
import {LoginService} from './login/login.service';

declare var Session;

@Component({
    selector: 'my-app',
    templateUrl:  './app.component.html'
} )

export class AppComponent
{
    constructor ( private loginService : LoginService ){}

    logout()
    {
        this.loginService.logout();
    }

    hasLogin()
    {
        return Session.get( "ActiveUser" );
    }
}
