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

    add( self : this )
    {
        self.list.addItem( new Request( new Date().toDateString() ) );
    }

    delete( self : this )
    {

        let item = self.list.getSelectedItem();

        if ( item )
        {
            Message.confirm( "Tem cer", function()
            {
                self.list.removeItem( item );
            } );
        }

        else
        {
            Message.alert( "Selecione uma Requisição!" );
        }
    }

    edit( self : this )
    {
        self.list.addItem( new Request( new Date().toDateString() ) );
    }

    private list : RequestList = new RequestList();

    private addAction    : ApplicationButton = new ApplicationButton( this, "fa-plus",   "Adicionar Requisição", this.add );
    private editAction   : ApplicationButton = new ApplicationButton( this, "fa-edit",   "Editar Requisição",    this.edit );
    private deleteAction : ApplicationButton = new ApplicationButton( this, "fa-remove", "Deletar Requisição",   this.delete );

    private actions : Array<ApplicationButton> =
    [
        this.addAction,
        this.editAction,
        this.deleteAction
    ]
}
