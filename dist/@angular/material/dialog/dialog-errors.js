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
/** Exception thrown when a ComponentPortal is attached to a DomPortalHost without an origin. */
var MdDialogContentAlreadyAttachedError = (function (_super) {
    __extends(MdDialogContentAlreadyAttachedError, _super);
    function MdDialogContentAlreadyAttachedError() {
        return _super.call(this, 'Attempting to attach dialog content after content is already attached') || this;
    }
    return MdDialogContentAlreadyAttachedError;
}(core_1.MdError));
exports.MdDialogContentAlreadyAttachedError = MdDialogContentAlreadyAttachedError;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/dialog/dialog-errors.js.map