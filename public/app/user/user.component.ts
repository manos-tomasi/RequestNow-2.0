import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserList } from './user.list';
import { User } from './user';
import { UserService} from './user.service';
import { ApplicationButton } from '../application-button/application-button';

declare var Message : any;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})

export class UserComponent
{
    constructor( private service : UserService, private router : Router )
    {
        service.getAll().subscribe(
            users => this.list.setItems( users )
        );
    }

    add( self : this )
    {
        self.router.navigate( [ '/user-form' ] );
    }

    delete( self : this )
    {
        let item = self.list.getSelectedItem();

        if ( item )
        {
            Message.confirm( "Tem certeza que deseja deletar " + item.name, function()
            {
                self.list.removeItem( item );

                self.service.delete( item );
            } );
        }

        else
        {
            Message.alert( "Selecione um usuário!" );
        }
    }

    edit( self : this )
    {
    }

    private list : UserList = new UserList();

    private addAction    : ApplicationButton = new ApplicationButton( this, "fa-plus",   "Adicionar Usuário", this.add );
    private editAction   : ApplicationButton = new ApplicationButton( this, "fa-edit",   "Editar Usuário",    this.edit );
    private deleteAction : ApplicationButton = new ApplicationButton( this, "fa-remove", "Deletar Usuário",   this.delete );

    private actions : Array<ApplicationButton> =
    [
        this.addAction,
        this.editAction,
        this.deleteAction
    ]
}
