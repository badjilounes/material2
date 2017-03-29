// Due to a bug in the ChromeDriver, Angular 2 keyboard events are not triggered by `sendKeys`
// during E2E tests when using dot notation such as `(keydown.rightArrow)`. To get around this,
// we are temporarily using a single (keydown) handler.
// See: https://github.com/angular/angular/issues/9419
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UP_ARROW = 38;
exports.DOWN_ARROW = 40;
exports.RIGHT_ARROW = 39;
exports.LEFT_ARROW = 37;
exports.PAGE_UP = 33;
exports.PAGE_DOWN = 34;
exports.HOME = 36;
exports.END = 35;
exports.ENTER = 13;
exports.SPACE = 32;
exports.TAB = 9;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/core/keyboard/keycodes.js.map