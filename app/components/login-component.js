System.register(['@angular/core', '../services/login-service', '../model/user', '../JS'], function(exports_1) {
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
    var LoginComponent;
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
            LoginComponent = (function () {
                function LoginComponent(loginService) {
                    this.loginService = loginService;
                    this.onLogin = new core_1.EventEmitter();
                }
                LoginComponent.prototype.ngOnInit = function () {
                    this.init();
                };
                LoginComponent.prototype.login = function (u) {
                    u = this.loginService.validLogin(u);
                    if (u) {
                        this.loginService.redirect();
                    }
                    else {
                        this.init();
                        JS_1.JS.$('#inputLogin').focus();
                        JS_1.JS.$('#login').effect("bounce", "swith", function () {
                            JS_1.JS.$('#error-login').show('fade');
                            setTimeout(function () {
                                JS_1.JS.$('#error-login').hide('fade');
                            }, 3000);
                        });
                    }
                    this.onLogin.emit(u);
                };
                LoginComponent.prototype.init = function () {
                    this.user = new user_1.User();
                };
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], LoginComponent.prototype, "onLogin", void 0);
                LoginComponent = __decorate([
                    core_1.Component({
                        selector: 'login-component',
                        providers: [login_service_1.LoginService],
                        templateUrl: 'app/components/login-component.html'
                    }), 
                    __metadata('design:paramtypes', [login_service_1.LoginService])
                ], LoginComponent);
                return LoginComponent;
            })();
            exports_1("LoginComponent", LoginComponent);
        }
    }
});
//# sourceMappingURL=login-component.js.map