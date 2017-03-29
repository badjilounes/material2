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
var dialog_errors_1 = require("./dialog-errors");
var focus_trap_1 = require("../core/a11y/focus-trap");
require("rxjs/add/operator/first");
/**
 * Internal component that wraps user-provided dialog content.
 */
var MdDialogContainer = (function (_super) {
    __extends(MdDialogContainer, _super);
    function MdDialogContainer(_ngZone) {
        var _this = _super.call(this) || this;
        _this._ngZone = _ngZone;
        /** Element that was focused before the dialog was opened. Save this to restore upon close. */
        _this._elementFocusedBeforeDialogWasOpened = null;
        return _this;
    }
    /** Attach a portal as content to this dialog container. */
    MdDialogContainer.prototype.attachComponentPortal = function (portal) {
        var _this = this;
        if (this._portalHost.hasAttached()) {
            throw new dialog_errors_1.MdDialogContentAlreadyAttachedError();
        }
        var attachResult = this._portalHost.attachComponentPortal(portal);
        // If were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        this._ngZone.onMicrotaskEmpty.first().subscribe(function () {
            _this._elementFocusedBeforeDialogWasOpened = document.activeElement;
            _this._focusTrap.focusFirstTabbableElement();
        });
        return attachResult;
    };
    MdDialogContainer.prototype.attachTemplatePortal = function (portal) {
        throw Error('Not yet implemented');
    };
    /** Handles the user pressing the Escape key. */
    MdDialogContainer.prototype.handleEscapeKey = function () {
        if (!this.dialogConfig.disableClose) {
            this.dialogRef.close();
        }
    };
    MdDialogContainer.prototype.ngOnDestroy = function () {
        var _this = this;
        // When the dialog is destroyed, return focus to the element that originally had it before
        // the dialog was opened. Wait for the DOM to finish settling before changing the focus so
        // that it doesn't end up back on the <body>.
        this._ngZone.onMicrotaskEmpty.first().subscribe(function () {
            _this._elementFocusedBeforeDialogWasOpened.focus();
        });
    };
    return MdDialogContainer;
}(core_2.BasePortalHost));
__decorate([
    core_1.ViewChild(core_2.PortalHostDirective),
    __metadata("design:type", core_2.PortalHostDirective)
], MdDialogContainer.prototype, "_portalHost", void 0);
__decorate([
    core_1.ViewChild(focus_trap_1.FocusTrap),
    __metadata("design:type", focus_trap_1.FocusTrap)
], MdDialogContainer.prototype, "_focusTrap", void 0);
MdDialogContainer = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'md-dialog-container, mat-dialog-container',
        templateUrl: 'dialog-container.html',
        styleUrls: ['dialog-container.css'],
        host: {
            'class': 'md-dialog-container',
            '[attr.role]': 'dialogConfig?.role',
            '(keydown.escape)': 'handleEscapeKey()',
        },
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], MdDialogContainer);
exports.MdDialogContainer = MdDialogContainer;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/dialog/dialog-container.js.map