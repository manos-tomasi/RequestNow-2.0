import { Injectable } from '@angular/core';
import { User } from '../data/user';

@Injectable()
export class LoginService
{
    validLogin( user : User )
    {
        return user.password === 'admin' &&
               user.name     === 'artur.tomasi';
    }
}
