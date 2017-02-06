import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Sector } from './sector';
import { AbstractService } from '../util/abstract.service';

@Injectable()
export class SectorService
    extends
        AbstractService<Sector>
{
    constructor( _http : Http )
    {
        super( 'api/sectors/', _http );
    }
}
