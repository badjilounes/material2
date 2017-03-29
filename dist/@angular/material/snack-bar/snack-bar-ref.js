"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Subject_1 = require("rxjs/Subject");
// TODO(josephperrott): Implement onAction observable.
/**
 * Reference to a snack bar dispatched from the snack bar service.
 */
var MdSnackBarRef = (function () {
    function MdSnackBarRef(instance, containerInstance, _overlayRef) {
        var _this = this;
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the snack bar has closed. */
        this._afterClosed = new Subject_1.Subject();
        /** Subject for notifying the user that the snack bar action was called. */
        this._onAction = new Subject_1.Subject();
        // Sets the readonly instance of the snack bar content component.
        this.instance = instance;
        this.containerInstance = containerInstance;
        // Dismiss snackbar on action.
        this.onAction().subscribe(function () { return _this.dismiss(); });
    }
    /** Dismisses the snack bar. */
    MdSnackBarRef.prototype.dismiss = function () {
        var _this = this;
        if (!this._afterClosed.closed) {
            this.containerInstance.exit().subscribe(function () {
                _this._overlayRef.dispose();
                _this._afterClosed.next();
                _this._afterClosed.complete();
            });
        }
    };
    /** Marks the snackbar action clicked. */
    MdSnackBarRef.prototype._action = function () {
        if (!this._onAction.closed) {
            this._onAction.next();
            this._onAction.complete();
        }
    };
    /** Marks the snackbar as opened */
    MdSnackBarRef.prototype._open = function () {
        if (!this._afterOpened.closed) {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    };
    /** Gets an observable that is notified when the snack bar is finished closing. */
    MdSnackBarRef.prototype.afterDismissed = function () {
        return this._afterClosed.asObservable();
    };
    /** Gets an observable that is notified when the snack bar has opened and appeared. */
    MdSnackBarRef.prototype.afterOpened = function () {
        return this.containerInstance._onEnter();
    };
    /** Gets an observable that is notified when the snack bar action is called. */
    MdSnackBarRef.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return MdSnackBarRef;
}());
exports.MdSnackBarRef = MdSnackBarRef;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/snack-bar/snack-bar-ref.js.map