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
/**
 * Exception thrown when menu trigger doesn't have a valid md-menu instance
 */
var MdMenuMissingError = (function (_super) {
    __extends(MdMenuMissingError, _super);
    function MdMenuMissingError() {
        return _super.call(this, "md-menu-trigger: must pass in an md-menu instance.\n\n    Example:\n      <md-menu #menu=\"mdMenu\"></md-menu>\n      <button [md-menu-trigger-for]=\"menu\"></button>\n    ") || this;
    }
    return MdMenuMissingError;
}(core_1.MdError));
exports.MdMenuMissingError = MdMenuMissingError;
/**
 * Exception thrown when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 */
var MdMenuInvalidPositionX = (function (_super) {
    __extends(MdMenuInvalidPositionX, _super);
    function MdMenuInvalidPositionX() {
        return _super.call(this, "x-position value must be either 'before' or after'.\n      Example: <md-menu x-position=\"before\" #menu=\"mdMenu\"></md-menu>\n    ") || this;
    }
    return MdMenuInvalidPositionX;
}(core_1.MdError));
exports.MdMenuInvalidPositionX = MdMenuInvalidPositionX;
/**
 * Exception thrown when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 */
var MdMenuInvalidPositionY = (function (_super) {
    __extends(MdMenuInvalidPositionY, _super);
    function MdMenuInvalidPositionY() {
        return _super.call(this, "y-position value must be either 'above' or below'.\n      Example: <md-menu y-position=\"above\" #menu=\"mdMenu\"></md-menu>\n    ") || this;
    }
    return MdMenuInvalidPositionY;
}(core_1.MdError));
exports.MdMenuInvalidPositionY = MdMenuInvalidPositionY;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/menu/menu-errors.js.map