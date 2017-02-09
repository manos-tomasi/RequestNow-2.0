import {Component} from '@angular/core';
import {LoginService} from './login/login.service';

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
        return this.loginService.user();
    }

    getName()
    {
        return this.loginService.user().name;
    }
}
