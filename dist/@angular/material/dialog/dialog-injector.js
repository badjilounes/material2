"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var dialog_ref_1 = require("./dialog-ref");
/** Custom injector type specifically for instantiating components with a dialog. */
var DialogInjector = (function () {
    function DialogInjector(_dialogRef, _parentInjector) {
        this._dialogRef = _dialogRef;
        this._parentInjector = _parentInjector;
    }
    DialogInjector.prototype.get = function (token, notFoundValue) {
        if (token === dialog_ref_1.MdDialogRef) {
            return this._dialogRef;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return DialogInjector;
}());
exports.DialogInjector = DialogInjector;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/dialog/dialog-injector.js.map