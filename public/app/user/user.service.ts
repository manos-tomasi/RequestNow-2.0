import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { AbstractService } from '../util/abstract.service';

@Injectable()
export class UserService
    extends
        AbstractService<User>
{
    constructor( _http : Http )
    {
        super( 'api/users/', _http );
    }
}
