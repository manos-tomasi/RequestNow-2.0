import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractList } from './abstract.list';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit
{
    @Input() model : AbstractList<any>;

    constructor()
    {
    }

    ngOnInit()
    {
    }

    select( item )
    {
        this.model.setSelectedItem( item );
    }
}
