import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {LoginService} from '../services/login-service';
import {User} from '../model/user';
import {JS} from '../JS';

@Component({
    selector: 'login-component',
    providers: [LoginService],
    templateUrl: 'app/components/login-component.html'
} )

export class LoginComponent implements OnInit
{
    private user : User;

    @Output()  onLogin = new EventEmitter<User>();

    constructor ( private loginService : LoginService ){}

    ngOnInit()
    {
       this.init();
    }

    login( u : User )
    {
        u = this.loginService.validLogin( u );

        if ( u )
        {
            this.loginService.redirect();
        }

        else
        {
            this.init();

            JS.$( '#inputLogin' ).focus();

            JS.$( '#login' ).effect( "bounce", "swith", function()
            {
                JS.$( '#error-login' ).show( 'fade' );

                setTimeout( function()
                {
                    JS.$( '#error-login' ).hide( 'fade' );
                }, 3000 );
              } );
        }

        this.onLogin.emit( u );
    }

    init()
    {
       this.user = new User();
    }
}
