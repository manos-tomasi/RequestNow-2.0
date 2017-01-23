import {Component} from '@angular/core';
import {LoginService} from './services/login-service';
import {User} from './data/user';
import {JS} from './JS';

@Component({
    selector: 'my-app',
    providers: [LoginService],
    template:  `
      <div id="login" class="container login-center" style="width: 500px; margin: auto">
          <form class="form-signin">
              <h2 class="form-signin-heading title-login">RequestNow</h2>
              <label for="inputLogin">Login</label>
              <input [(ngModel)]="user.name" name="username" type="text" id="inputLogin" class="form-control" placeholder="Digite seu Login" autofocus required>
              <label for="inputPassword">Senha</label>
              <input [(ngModel)]="user.password" name="password" type="password" id="inputPassword" class="form-control" placeholder="Digite sua Senha" required>

              <button class="btn btn-lg btn-login btn-block" type="button" (click)="login( user )"> Sign in</button>
          </form>
          <div id="error-login" class="alert-danger" style="display: none">
              ERRO: Login ou senha incorretos
          </div>
      </div>`
} )

export class AppComponent
{
    service : LoginService;

    user : User = new User();

    constructor ( loginService : LoginService )
    {
        this.service = loginService;
    }

    valid( user : User )
    {
      return this.service.validLogin( user );
    }

    login( u : User )
    {
        if ( this.valid( u ) )
        {
           JS.Message.success( "Login Correto" );
        }

        else
        {
           JS.Message.error( "Login Incorreto" );
        }
    }

}
