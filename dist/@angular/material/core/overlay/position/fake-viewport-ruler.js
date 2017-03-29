"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FakeViewportRuler = (function () {
    function FakeViewportRuler() {
    }
    FakeViewportRuler.prototype.getViewportRect = function () {
        return {
            left: 0, top: 0, width: 1014, height: 686, bottom: 686, right: 1014
        };
    };
    FakeViewportRuler.prototype.getViewportScrollPosition = function () {
        return { top: 0, left: 0 };
    };
    return FakeViewportRuler;
}());
exports.FakeViewportRuler = FakeViewportRuler;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/core/overlay/position/fake-viewport-ruler.js.map