// TODO(kara): Revisit why error messages are not being properly set.
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
/**
 * Wrapper around Error that sets the error message.
 */
var MdError = (function (_super) {
    __extends(MdError, _super);
    function MdError(value) {
        var _this = _super.call(this) || this;
        _this.message = value;
        return _this;
    }
    return MdError;
}(Error));
exports.MdError = MdError;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/core/errors/error.js.map