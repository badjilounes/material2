"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("../core");
var MdSnackBarContentAlreadyAttached = (function (_super) {
    __extends(MdSnackBarContentAlreadyAttached, _super);
    function MdSnackBarContentAlreadyAttached() {
        return _super.call(this, 'Attempting to attach snack bar content after content is already attached') || this;
    }
    return MdSnackBarContentAlreadyAttached;
}(core_1.MdError));
exports.MdSnackBarContentAlreadyAttached = MdSnackBarContentAlreadyAttached;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/snack-bar/snack-bar-errors.js.map