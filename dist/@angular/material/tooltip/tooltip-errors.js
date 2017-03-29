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
/** Exception thrown when a tooltip has an invalid position. */
var MdTooltipInvalidPositionError = (function (_super) {
    __extends(MdTooltipInvalidPositionError, _super);
    function MdTooltipInvalidPositionError(position) {
        return _super.call(this, "Tooltip position \"" + position + "\" is invalid.") || this;
    }
    return MdTooltipInvalidPositionError;
}(core_1.MdError));
exports.MdTooltipInvalidPositionError = MdTooltipInvalidPositionError;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/tooltip/tooltip-errors.js.map