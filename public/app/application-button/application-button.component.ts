import { Component, OnInit, Input } from '@angular/core';
import { ApplicationButton } from './application-button';

@Component({
  selector: 'application-button',
  templateUrl: './application-button.component.html'
})
export class ApplicationButtonComponent
    implements
      OnInit
{
    @Input() actions : Array<ApplicationButton>;

    constructor() { }

    ngOnInit()
    {
    }
}
