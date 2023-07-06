System.register("create-nft-form", [], function (exports_1, context_1) {
    "use strict";
    var CreateNftForm, createNftForm;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            CreateNftForm = /** @class */ (function () {
                function CreateNftForm() {
                }
                CreateNftForm.prototype.init = function () {
                    this.cacheDom();
                    this.initEvents();
                };
                CreateNftForm.prototype.cacheDom = function () { };
                CreateNftForm.prototype.initEvents = function () { };
                return CreateNftForm;
            }());
            exports_1("CreateNftForm", CreateNftForm);
            createNftForm = new CreateNftForm();
            createNftForm.init();
        }
    };
});
