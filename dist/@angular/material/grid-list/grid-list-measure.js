"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Converts values into strings. Falsy values become empty strings.
 * TODO: internal
 */
function coerceToString(value) {
    return "" + (value || '');
}
exports.coerceToString = coerceToString;
/**
 * Converts a value that might be a string into a number.
 * TODO: internal
 */
function coerceToNumber(value) {
    return typeof value === 'string' ? parseInt(value, 10) : value;
}
exports.coerceToNumber = coerceToNumber;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/grid-list/grid-list-measure.js.map