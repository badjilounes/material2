"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
;
/**
 * Configuration for opening a modal dialog with the MdDialog service.
 */
var MdDialogConfig = (function () {
    function MdDialogConfig() {
        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Whether the user can use escape or clicking outside to close a modal. */
        this.disableClose = false;
        /** Width of the dialog. */
        this.width = '';
        /** Height of the dialog. */
        this.height = '';
        // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    }
    return MdDialogConfig;
}());
exports.MdDialogConfig = MdDialogConfig;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/dialog/dialog-config.js.map