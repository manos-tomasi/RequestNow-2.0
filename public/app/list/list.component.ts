import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractList } from './abstract.list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit
{
    @Input() model : AbstractList<any>;

    public filter : string;

    constructor()
    {
    }

    ngOnInit()
    {
    }

    getItems()
    {
        if ( this.model.getItems() )
        {
            return this.model.getItems().filter( item =>
            {
                if ( ! this.filter ) return true;

                for ( var key in item )
                {
                    if ( ! item.hasOwnProperty( key ) ) continue;

                    var value = item[ key ];

                    if( value && String( value ).toLowerCase().indexOf( this.filter.toLowerCase() ) != -1 )
                    {
                        return true;
                    }
                }

                return false;
            } );
        }
    }

    select( item )
    {
        this.model.setSelectedItem( item );
    }
}
