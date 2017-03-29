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
 * Exception thrown when cols property is missing from grid-list
 */
var MdGridListColsError = (function (_super) {
    __extends(MdGridListColsError, _super);
    function MdGridListColsError() {
        return _super.call(this, "md-grid-list: must pass in number of columns. Example: <md-grid-list cols=\"3\">") || this;
    }
    return MdGridListColsError;
}(core_1.MdError));
exports.MdGridListColsError = MdGridListColsError;
/**
 * Exception thrown when a tile's colspan is longer than the number of cols in list
 */
var MdGridTileTooWideError = (function (_super) {
    __extends(MdGridTileTooWideError, _super);
    function MdGridTileTooWideError(cols, listLength) {
        return _super.call(this, "md-grid-list: tile with colspan " + cols + " is wider than grid with cols=\"" + listLength + "\".") || this;
    }
    return MdGridTileTooWideError;
}(core_1.MdError));
exports.MdGridTileTooWideError = MdGridTileTooWideError;
/**
 * Exception thrown when an invalid ratio is passed in as a rowHeight
 */
var MdGridListBadRatioError = (function (_super) {
    __extends(MdGridListBadRatioError, _super);
    function MdGridListBadRatioError(value) {
        return _super.call(this, "md-grid-list: invalid ratio given for row-height: \"" + value + "\"") || this;
    }
    return MdGridListBadRatioError;
}(core_1.MdError));
exports.MdGridListBadRatioError = MdGridListBadRatioError;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/grid-list/grid-list-errors.js.map