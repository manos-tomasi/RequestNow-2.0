import {Component} from '@angular/core';
import {LoginComponent} from './login/login.component';
import {User} from './login/user';
import {LoginService} from './login/login.service';
import {Emitter} from './util/emitter';

@Component({
    selector: 'my-app',
    template:  `<nav *ngIf="hasLogin()" class="navbar navbar-default">
                    <div class="container-fluid">
                      <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                            <img style="height: 40px; margin-right: 10px; margin-top: -8px; float: left;" src="logo.png"/>
                              RequestNow
                          </a>
                      </div>
                      <div class="nav navbar-nav navbar-right dropdown">
                        <a data-toggle="dropdown" class="dropdown-toggle navbar-brand" style="cursor: pointer;">
                          &nbsp;<i class="fa fa-user" aria-hidden="true"></i>
                          {{userName()}}
                        </a>
                        <ul class="dropdown-menu">
                          <li>
                            <a style="cursor: pointer;" (click)="logout()">
                              <i class="fa fa-sign-out" aria-hidden="true"></i>
                              Logout
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
                  <div class="center-content">
                      <div *ngIf="hasLogin()" class="content col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <a class="btn btn-strom btn-block">
                          <i class="fa fa-home menu-icon" aria-hidden="true"></i>
                          Home
                        </a>
                      </div>
                      <router-outlet></router-outlet>
                </div>`
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
