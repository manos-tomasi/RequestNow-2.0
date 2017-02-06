import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Model } from '../util/model';

import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class AbstractService<T extends Model>
{
    public _options : RequestOptions;

    constructor( public _url : string, public _http : Http )
    {
        let headers = new Headers();

        headers.append( 'Content-Type', 'application/json' );

        this._options = new RequestOptions( { headers: headers } );
    }

    public getAll()
    {
        return this._http.get( this._url, this._options )
                         .map( this.extractData )
                         .catch( this.handleError );
    }

    public getOne( id : number )
    {
        return this._http.get( this._url + id, this._options )
                         .map( this.extractData )
                         .catch( this.handleError );
    }

    public save( item : T )
    {
        if ( item.id && item.id !== 0 )
        {
            return this._http.put( this._url, JSON.stringify( item ), this._options )
                             .map( this.extractData )
                             .catch( this.handleError );

        }

        else
        {
            return this._http.post( this._url, JSON.stringify( item ), this._options )
                             .map( this.extractData )
                             .catch( this.handleError );
        }
    }

    public delete( item : T )
    {
        return this._http.delete( this._url + item.id, this._options )
                         .map( this.extractData )
                         .catch( this.handleError );
    }

    extractData( res: Response )
    {
        if ( res )
        {
            let body = res.json();

            console.log( body );
            
            return body || { };
        }

        return {};
    }

    handleError ( error: Response | any )
    {
        let errMsg: string;

        if ( error instanceof Response )
        {
            const body = error.json() || '';

            const err = body.error || JSON.stringify( body );

            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        }

        else
        {
            errMsg = error.message ? error.message : error.toString();
        }

        console.error( errMsg );

        return Observable.throw(errMsg);
    }
}
