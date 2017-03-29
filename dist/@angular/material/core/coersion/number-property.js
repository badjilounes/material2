"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** Coerces a data-bound value (typically a string) to a number. */
function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return isNaN(parseFloat(value)) || isNaN(Number(value)) ? fallbackValue : Number(value);
}
exports.coerceNumberProperty = coerceNumberProperty;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/core/coersion/number-property.js.map