System.register(['@angular/router', './app-component', './components/home-component'], function(exports_1) {
    var router_1, app_component_1, home_component_1;
    var APP_ROUTES, routing;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            APP_ROUTES = [
                { path: '', component: app_component_1.AppComponent },
                { path: 'home', component: home_component_1.HomeComponent }
            ];
            exports_1("routing", routing = router_1.RouterModule.forRoot(APP_ROUTES));
        }
    }
});
//# sourceMappingURL=app-routes.js.map