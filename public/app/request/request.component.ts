import { Component, OnInit } from '@angular/core';
import { RequestList } from './request.list';
import { Request } from './request';
import { ApplicationButton } from '../application-button/application-button';

declare var Message : any;

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html'
})

export class RequestComponent
{
    constructor()
    {
        this.list.setItems( [
          new Request( "Solicitação de Férias" ),
          new Request( "Aumento Salárial" )
        ] );

        this.list.addItem( new Request() );
    }

    add()
    {
        
        console.log( this.list );

        this.list.addItem( new Request() );

        Message.alert( this.list.getItems() );
    }

    private list : RequestList = new RequestList();

    private addAction : ApplicationButton = new ApplicationButton( "fa-plus", "Editar Requisição", this.add );

    private actions : Array<ApplicationButton> =
    [
        this.addAction
    ]
}
