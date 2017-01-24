import { Injectable, EventEmitter } from '@angular/core';
import { User } from '../model/user';

@Injectable()
export class LoginService
{
    public onLogin :EventEmitter<User>;

    constructor()
    {
      this.onLogin =  new EventEmitter();
    }

    validLogin( user : User )
    {
        let valid:boolean = user.password === 'admin' &&
                            user.name     === 'artur.tomasi';

        this.onLogin.emit( valid ? user : null );

        return valid;
    }
}
