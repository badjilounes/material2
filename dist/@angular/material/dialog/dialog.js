"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
var dialog_config_1 = require("./dialog-config");
var dialog_ref_1 = require("./dialog-ref");
var dialog_injector_1 = require("./dialog-injector");
var dialog_container_1 = require("./dialog-container");
var object_extend_1 = require("../core/util/object-extend");
var dialog_config_2 = require("./dialog-config");
exports.MdDialogConfig = dialog_config_2.MdDialogConfig;
var dialog_ref_2 = require("./dialog-ref");
exports.MdDialogRef = dialog_ref_2.MdDialogRef;
// TODO(jelbourn): add support for opening with a TemplateRef
// TODO(jelbourn): dialog content directives (e.g., md-dialog-header)
// TODO(jelbourn): animations
/**
 * Service to open Material Design modal dialogs.
 */
var MdDialog = (function () {
    function MdDialog(_overlay, _injector) {
        this._overlay = _overlay;
        this._injector = _injector;
        /** Keeps track of the currently-open dialogs. */
        this._openDialogs = [];
    }
    /**
     * Opens a modal dialog containing the given component.
     * @param component Type of the component to load into the load.
     * @param config
     */
    MdDialog.prototype.open = function (component, config) {
        var _this = this;
        config = _applyConfigDefaults(config);
        var overlayRef = this._createOverlay(config);
        var dialogContainer = this._attachDialogContainer(overlayRef, config);
        var dialogRef = this._attachDialogContent(component, dialogContainer, overlayRef);
        this._openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(function () { return _this._removeOpenDialog(dialogRef); });
        return dialogRef;
    };
    /**
     * Closes all of the currently-open dialogs.
     */
    MdDialog.prototype.closeAll = function () {
        var i = this._openDialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            this._openDialogs[i].close();
        }
    };
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param dialogConfig The dialog configuration.
     * @returns A promise resolving to the OverlayRef for the created overlay.
     */
    MdDialog.prototype._createOverlay = function (dialogConfig) {
        var overlayState = this._getOverlayState(dialogConfig);
        return this._overlay.create(overlayState);
    };
    /**
     * Attaches an MdDialogContainer to a dialog's already-created overlay.
     * @param overlay Reference to the dialog's underlying overlay.
     * @param config The dialog configuration.
     * @returns A promise resolving to a ComponentRef for the attached container.
     */
    MdDialog.prototype._attachDialogContainer = function (overlay, config) {
        var viewContainer = config ? config.viewContainerRef : null;
        var containerPortal = new core_2.ComponentPortal(dialog_container_1.MdDialogContainer, viewContainer);
        var containerRef = overlay.attach(containerPortal);
        containerRef.instance.dialogConfig = config;
        return containerRef.instance;
    };
    /**
     * Attaches the user-provided component to the already-created MdDialogContainer.
     * @param component The type of component being loaded into the dialog.
     * @param dialogContainer Reference to the wrapping MdDialogContainer.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @returns A promise resolving to the MdDialogRef that should be returned to the user.
     */
    MdDialog.prototype._attachDialogContent = function (component, dialogContainer, overlayRef) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        var dialogRef = new dialog_ref_1.MdDialogRef(overlayRef);
        if (!dialogContainer.dialogConfig.disableClose) {
            // When the dialog backdrop is clicked, we want to close it.
            overlayRef.backdropClick().first().subscribe(function () { return dialogRef.close(); });
        }
        // Set the dialogRef to the container so that it can use the ref to close the dialog.
        dialogContainer.dialogRef = dialogRef;
        // We create an injector specifically for the component we're instantiating so that it can
        // inject the MdDialogRef. This allows a component loaded inside of a dialog to close itself
        // and, optionally, to return a value.
        var dialogInjector = new dialog_injector_1.DialogInjector(dialogRef, this._injector);
        var contentPortal = new core_2.ComponentPortal(component, null, dialogInjector);
        var contentRef = dialogContainer.attachComponentPortal(contentPortal);
        dialogRef.componentInstance = contentRef.instance;
        return dialogRef;
    };
    /**
     * Creates an overlay state from a dialog config.
     * @param dialogConfig The dialog configuration.
     * @returns The overlay configuration.
     */
    MdDialog.prototype._getOverlayState = function (dialogConfig) {
        var state = new core_2.OverlayState();
        var strategy = this._overlay.position().global();
        var position = dialogConfig.position;
        state.hasBackdrop = true;
        state.positionStrategy = strategy;
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        strategy.width(dialogConfig.width).height(dialogConfig.height);
        return state;
    };
    /**
     * Removes a dialog from the array of open dialogs.
     */
    MdDialog.prototype._removeOpenDialog = function (dialogRef) {
        var index = this._openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this._openDialogs.splice(index, 1);
        }
    };
    return MdDialog;
}());
MdDialog = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_2.Overlay, core_1.Injector])
], MdDialog);
exports.MdDialog = MdDialog;
/**
 * Applies default options to the dialog config.
 * @param dialogConfig Config to be modified.
 * @returns The new configuration object.
 */
function _applyConfigDefaults(dialogConfig) {
    return object_extend_1.extendObject(new dialog_config_1.MdDialogConfig(), dialogConfig);
}
var MdDialogModule = MdDialogModule_1 = (function () {
    function MdDialogModule() {
    }
    MdDialogModule.forRoot = function () {
        return {
            ngModule: MdDialogModule_1,
            providers: [MdDialog, core_2.OVERLAY_PROVIDERS, core_2.InteractivityChecker, core_2.MdPlatform],
        };
    };
    return MdDialogModule;
}());
MdDialogModule = MdDialogModule_1 = __decorate([
    core_1.NgModule({
        imports: [core_2.OverlayModule, core_2.PortalModule, core_2.A11yModule, core_2.DefaultStyleCompatibilityModeModule],
        exports: [dialog_container_1.MdDialogContainer, core_2.DefaultStyleCompatibilityModeModule],
        declarations: [dialog_container_1.MdDialogContainer],
        entryComponents: [dialog_container_1.MdDialogContainer],
    })
], MdDialogModule);
exports.MdDialogModule = MdDialogModule;
var MdDialogModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/dialog/dialog.js.map