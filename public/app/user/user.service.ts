import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { AbstractService } from '../util/abstract.service';

@Injectable()
export class UserService
  extends
    AbstractService
{
    constructor( private http : Http )
    {
        super();
    }

    users()
    {
       return this.http.get( "/api/users" )
                       .map( this.extractData )
                       .catch( this.handleError );
    }
}
