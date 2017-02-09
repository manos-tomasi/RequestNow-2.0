import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sector } from './sector';

declare var Materialize : any;

@Component({
  selector: 'sector-form',
  templateUrl: './sector.form.html'
})

export class SectorForm
{
    constructor( private router : Router )
    {

    }

    cancel()
    {
        this.router.navigate( [ 'sector' ] );
    }

    save()
    {
         Materialize.toast( 'Salvo com sucesso!', 40000, 'rounded' );

         this.router.navigate( [ 'sector' ] );
    }
}
