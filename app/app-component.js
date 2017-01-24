System.register(['@angular/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                }
                AppComponent.prototype.ngOnInit = function () {
                };
                AppComponent.prototype.hasLogin = function () {
                    return this.user;
                };
                AppComponent.prototype.logout = function () {
                    this.onLogin(null);
                };
                AppComponent.prototype.onLogin = function (evt) {
                    this.user = evt;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "<login-component *ngIf=\"!hasLogin()\" (onLogin)=\"onLogin( $event )\" ><router-outlet></router-outlet></login-component>\n                <div *ngIf=\"hasLogin()\">\n                  <nav class=\"navbar navbar-default\">\n                    <div class=\"container-fluid\">\n                      <div class=\"navbar-header\">\n                        <a class=\"navbar-brand\" href=\"#\">\n                            <img style=\"height: 40px; margin-right: 10px; margin-top: -8px; float: left;\" src=\"logo.png\"/>\n                              RequestNow\n                          </a>\n                      </div>\n                      <div class=\"nav navbar-nav navbar-right dropdown\">\n                        <a data-toggle=\"dropdown\" class=\"dropdown-toggle navbar-brand\" style=\"cursor: pointer;\">\n                          &nbsp;<i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                          {{user.name}}\n                        </a>\n                        <ul class=\"dropdown-menu\">\n                          <li>\n                            <a style=\"cursor: pointer;\" (click)=\"logout()\">\n                              <i class=\"fa fa-sign-out\" aria-hidden=\"true\"></i>\n                              Logout\n                            </a>\n                          </li>\n                        </ul>\n                      </div>\n                    </div>\n                  </nav>\n                  <div class=\"center-content\">\n                      <div class=\"content col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n                        <a class=\"btn btn-strom btn-block\">\n                          <i class=\"fa fa-home menu-icon\" aria-hidden=\"true\"></i>\n                          Home\n                        </a>\n                      </div>\n                      <router-outlet></router-outlet>\n                  </div>\n                </div>"
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map