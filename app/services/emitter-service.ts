import {Injectable, EventEmitter} from '@angular/core';

@Injectable()
export class EmitterService
{
    static ON_LOGIN = 'onLogin';

    // Event store
    private static _emitters: { [ID: string]: EventEmitter<any> } = {};

    static on( ID: string ): EventEmitter<any>
    {
        if ( !this._emitters[ID] )
        {
            this._emitters[ID] = new EventEmitter();
        }

        return this._emitters[ID];
    }
}
