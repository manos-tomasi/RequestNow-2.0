import { Observable } from 'rxjs/Observable';
import { Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export class AbstractService
{
    headers = new Headers({ 'Content-Type': 'application/json' });

    options = new RequestOptions({ headers: this.headers });

    extractData( res: Response )
    {
        if ( res )
        {
            let body = res.json();

            return body || { };
        }

        return {}
    }

    handleError ( error: Response | any )
    {
        let errMsg: string;

        if ( error instanceof Response )
        {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
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
