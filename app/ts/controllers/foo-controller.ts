import {Component, Input, Output, EventEmitter } from 'angular2/core';
import {Foo} from 'app/data/foo';

@Component( {
		selector : 'foo-list',
		templateUrl: 'app/html/components/foo-list.html'
} )

export class FooController
{
	@Input() name;

	@Output() selected = new EventEmitter();

	foos = Array<Foo>();

	constructor()
	{
		this.foos = 
		[
			new Foo( 0, "Teste 01", "www.google.com" , "" ),
			new Foo( 1, "Teste 02", "www.google.com" , "" )
		];
	}

	onSelect( foo : Foo )
	{
		this.selected.next( foo );
	}
}