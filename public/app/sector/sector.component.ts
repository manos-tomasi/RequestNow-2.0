import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SectorList } from './sector.list';
import { Sector } from './sector';
import { SectorService} from './sector.service';
import { ApplicationButton } from '../application-button/application-button';

declare var Message : any;

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html'
})
export class SectorComponent
{
    constructor( private service : SectorService, private router : Router )
    {
        service.getAll().subscribe(
            sectors => this.list.setItems( sectors )
        );
    }

  add( self : this )
  {
      self.router.navigate( [ '/sector-form' ] );
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
          Message.alert( "Selecione um setor!" );
      }
  }

  edit( self : this )
  {
  }

  private list : SectorList = new SectorList();

  private addAction    : ApplicationButton = new ApplicationButton( this, "fa-plus",   "Adicionar Setor", this.add );
  private editAction   : ApplicationButton = new ApplicationButton( this, "fa-edit",   "Editar Setor",    this.edit );
  private deleteAction : ApplicationButton = new ApplicationButton( this, "fa-remove", "Deletar Setor",   this.delete );

  private actions : Array<ApplicationButton> =
  [
      this.addAction,
      this.editAction,
      this.deleteAction
  ]
}
