System.register(['angular2/core', 'app/data/foo'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, foo_1;
    var FooController;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (foo_1_1) {
                foo_1 = foo_1_1;
            }],
        execute: function() {
            FooController = (function () {
                function FooController() {
                    this.selected = new core_1.EventEmitter();
                    this.foos = Array();
                    this.foos =
                        [
                            new foo_1.Foo(0, "Teste 01", "www.google.com", ""),
                            new foo_1.Foo(1, "Teste 02", "www.google.com", "")
                        ];
                }
                FooController.prototype.onSelect = function (foo) {
                    this.selected.next(foo);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FooController.prototype, "name", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FooController.prototype, "selected", void 0);
                FooController = __decorate([
                    core_1.Component({
                        selector: 'foo-list',
                        templateUrl: 'app/html/components/foo-list.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], FooController);
                return FooController;
            })();
            exports_1("FooController", FooController);
        }
    }
});
//# sourceMappingURL=foo-controller.js.map