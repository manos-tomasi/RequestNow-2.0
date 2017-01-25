import {Component} from '@angular/core';
import {LoginService} from '../services/login-service';
import {User} from '../model/user';
import {JS} from '../JS';

@Component({
    selector: 'login-component',
    providers: [LoginService],
    templateUrl: 'app/components/login-component.html'
} )

export class LoginComponent
{
    private user : User;

    constructor ( private loginService : LoginService )
    {
        this.init();
    }

    login( u : User )
    {
        this.loginService.login( u );

        if ( ! this.loginService.isAuthenticate() )
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
    }

    init()
    {
       this.user = new User();
    }
}
