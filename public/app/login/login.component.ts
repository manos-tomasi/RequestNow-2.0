import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { LoginService } from './login.service';

declare var $;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit
{
    private user : User;

    constructor ( private loginService : LoginService ){}

    login( u : User )
    {
        this.loginService.login( u );

        if ( ! this.loginService.isAuthenticate() )
        {
            this.ngOnInit();

            $( '#inputLogin' ).focus();

            $( '#login' ).effect( "bounce", "swith", function()
            {
                $( '#error-login' ).show( 'fade' );

                setTimeout( function()
                {
                    $( '#error-login' ).hide( 'fade' );
                }, 3000 );
            } );
        }
    }

    ngOnInit()
    {
       this.user = new User();
    }
}
