import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Sector } from './sector';
import { SectorService } from './sector.service';

declare var Materialize : any;
declare var Message : any;

@Component({
  selector: 'sector-form',
  templateUrl: './sector.form.html'
})

export class SectorForm
{
    public sectorForm = this.fb.group(
    {
      'name': [ null, Validators.compose( [ Validators.required, Validators.maxLength( 80 ) ] ) ]
    } );

    constructor( private router : Router, public fb: FormBuilder, public service : SectorService )
    {

    }

    cancel()
    {
        this.router.navigate( [ 'sector' ] );
    }

    save()
    {
        console.log( this.sectorForm );

        if ( this.sectorForm.valid )
        {
            console.log( this.sectorForm.value );

            this.service.save( this.sectorForm.value );

            Materialize.toast( 'Salvo com sucesso!', 2000, 'rounded' );

            this.router.navigate( [ 'sector' ] );
        }

        else
        {
            Message.alert( "Preencha todos os campos" );
        }


    }
}
