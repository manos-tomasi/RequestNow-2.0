System.register(['@angular/core', './services/login-service', './data/user', './JS'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, login_service_1, user_1, JS_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (login_service_1_1) {
                login_service_1 = login_service_1_1;
            },
            function (user_1_1) {
                user_1 = user_1_1;
            },
            function (JS_1_1) {
                JS_1 = JS_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(loginService) {
                    this.user = new user_1.User();
                    this.service = loginService;
                }
                AppComponent.prototype.valid = function (user) {
                    return this.service.validLogin(user);
                };
                AppComponent.prototype.login = function (u) {
                    if (this.valid(u)) {
                        JS_1.JS.Message.success("Login Correto");
                    }
                    else {
                        JS_1.JS.Message.error("Login Incorreto");
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        providers: [login_service_1.LoginService],
                        template: "\n      <div id=\"login\" class=\"container login-center\" style=\"width: 500px; margin: auto\">\n          <form class=\"form-signin\">\n              <h2 class=\"form-signin-heading title-login\">RequestNow</h2>\n              <label for=\"inputLogin\">Login</label>\n              <input [(ngModel)]=\"user.name\" name=\"username\" type=\"text\" id=\"inputLogin\" class=\"form-control\" placeholder=\"Digite seu Login\" autofocus required>\n              <label for=\"inputPassword\">Senha</label>\n              <input [(ngModel)]=\"user.password\" name=\"password\" type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Digite sua Senha\" required>\n\n              <button class=\"btn btn-lg btn-login btn-block\" type=\"button\" (click)=\"login( user )\"> Sign in</button>\n          </form>\n          <div id=\"error-login\" class=\"alert-danger\" style=\"display: none\">\n              ERRO: Login ou senha incorretos\n          </div>\n      </div>"
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app-component.js.map