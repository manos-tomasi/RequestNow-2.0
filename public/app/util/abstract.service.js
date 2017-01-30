System.register(["rxjs/Observable", "@angular/http", "rxjs/add/operator/catch", "rxjs/add/operator/map"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Observable_1, http_1, AbstractService;
    return {
        setters: [
            function (Observable_1_1) {
                Observable_1 = Observable_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (_1) {
            },
            function (_2) {
            }
        ],
        execute: function () {
            AbstractService = (function () {
                function AbstractService() {
                    this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
                    this.options = new http_1.RequestOptions({ headers: this.headers });
                }
                AbstractService.prototype.extractData = function (res) {
                    if (res) {
                        var body = res.json();
                        return body || {};
                    }
                    return {};
                };
                AbstractService.prototype.handleError = function (error) {
                    var errMsg;
                    if (error instanceof http_1.Response) {
                        var body = error.json() || '';
                        var err = body.error || JSON.stringify(body);
                        errMsg = error.status + " - " + (error.statusText || '') + " " + err;
                    }
                    else {
                        errMsg = error.message ? error.message : error.toString();
                    }
                    console.error(errMsg);
                    return Observable_1.Observable.throw(errMsg);
                };
                return AbstractService;
            }());
            exports_1("AbstractService", AbstractService);
        }
    };
});
//# sourceMappingURL=abstract.service.js.map