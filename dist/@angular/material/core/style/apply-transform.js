"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Applies a CSS transform to an element, including browser-prefixed properties.
 * @param element
 * @param transformValue
 */
function applyCssTransform(element, transformValue) {
    // It's important to trim the result, because the browser will ignore the set operation
    // if the string contains only whitespace.
    var value = transformValue.trim();
    element.style.transform = value;
    element.style.webkitTransform = value;
}
exports.applyCssTransform = applyCssTransform;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/core/style/apply-transform.js.map