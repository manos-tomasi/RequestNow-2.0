import {Component} from 'angular2/core';
import {Config} from 'app/config-service';
import {FooController} from 'app/ts/controllers/foo-controller';

@Component({
    selector: 'meu-app',
    templateUrl: '/app/html/app-component.html',
    directives: [FooController]
} )

export class AppComponent
{
	appName = Config.APP_NAME;
}