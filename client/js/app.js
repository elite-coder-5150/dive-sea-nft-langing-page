System.register("app", [], function (exports_1, context_1) {
    "use strict";
    var App;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            App = /** @class */ (function () {
                function App() {
                    this.cacheDom();
                    this.initEvents();
                }
                App.prototype.cacheDom = function () {
                };
                App.prototype.initEvents = function () { };
                return App;
            }());
            exports_1("App", App);
        }
    };
});
