"use strict";
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
exports.__esModule = true;
var core_1 = require("@angular/core");
var MyTest = /** @class */ (function () {
    function MyTest() {
    }
    MyTest.decorators = [
        { type: core_1.Component, args: [{
                    selector: 'test',
                    template: '<span>My component</span>'
                },] },
    ];
    MyTest.propDecorators = {
        element: [{ type: core_1.Input }]
    };
    return MyTest;
}());
exports.MyTest = MyTest;
if (false) {
    /** @type {?} */
    MyTest.prototype.element;
}
var MyModule = /** @class */ (function () {
    function MyModule() {
    }
    MyModule.decorators = [
        { type: core_1.NgModule, args: [{
                    declarations: [MyTest],
                },] },
    ];
    return MyModule;
}());
exports.MyModule = MyModule;
