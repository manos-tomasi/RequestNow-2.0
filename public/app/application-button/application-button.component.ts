import { Component, Input } from '@angular/core';
import { ApplicationButton } from './application-button';

declare var $;

@Component({
  selector: 'application-button',
  templateUrl: './application-button.component.html'
})
export class ApplicationButtonComponent
{
    @Input() actions : Array<ApplicationButton>;

    constructor() { }

    hover()
    {
        $( '.tooltipped' ).tooltip( { delay: 0 } );
    }

    click( action : ApplicationButton )
    {
        $( '.tooltipped' ).tooltip( "remove" );

        action.onAction( action.parent );
    }
}
