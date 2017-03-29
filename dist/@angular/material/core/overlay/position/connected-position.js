"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/** The points of the origin element and the overlay element to connect. */
var ConnectionPositionPair = (function () {
    function ConnectionPositionPair(origin, overlay) {
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
exports.ConnectionPositionPair = ConnectionPositionPair;
/** The change event emitted by the strategy when a fallback position is used. */
var ConnectedOverlayPositionChange = (function () {
    function ConnectedOverlayPositionChange(connectionPair) {
        this.connectionPair = connectionPair;
    }
    return ConnectedOverlayPositionChange;
}());
exports.ConnectedOverlayPositionChange = ConnectedOverlayPositionChange;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/core/overlay/position/connected-position.js.map