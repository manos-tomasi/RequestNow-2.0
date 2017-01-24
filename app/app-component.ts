import {Component,OnInit} from '@angular/core';
import {LoginComponent} from './components/login-component';
import {User} from './model/user';

@Component({
    selector: 'my-app',
    template:  `<login-component *ngIf="!hasLogin()" (onLogin)="onLogin( $event )" ><router-outlet></router-outlet></login-component>
                <div *ngIf="hasLogin()">
                  <nav class="navbar navbar-default">
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
                          {{user.name}}
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
                      <div class="content col-xs-2 col-sm-2 col-md-2 col-lg-2">
                        <a class="btn btn-strom btn-block">
                          <i class="fa fa-home menu-icon" aria-hidden="true"></i>
                          Home
                        </a>
                      </div>
                      <router-outlet></router-outlet>
                  </div>
                </div>`
} )

export class AppComponent implements OnInit
{
    private user:User;

    constructor()
    {
    }

    ngOnInit()
    {
    }

    hasLogin()
    {
        return this.user;
    }

    logout()
    {
        this.onLogin( null );
    }

    onLogin( evt )
    {
        this.user = evt;
    }
}
