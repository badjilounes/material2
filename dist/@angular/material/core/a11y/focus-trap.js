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
var interactivity_checker_1 = require("./interactivity-checker");
var boolean_property_1 = require("../coersion/boolean-property");
/**
 * Directive for trapping focus within a region.
 *
 * NOTE: This directive currently uses a very simple (naive) approach to focus trapping.
 * It assumes that the tab order is the same as DOM order, which is not necessarily true.
 * Things like tabIndex > 0, flex `order`, and shadow roots can cause to two to misalign.
 * This will be replaced with a more intelligent solution before the library is considered stable.
 */
var FocusTrap = (function () {
    function FocusTrap(_checker, _ngZone) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._disabled = false;
    }
    Object.defineProperty(FocusTrap.prototype, "disabled", {
        /** Whether the focus trap is active. */
        get: function () { return this._disabled; },
        set: function (val) { this._disabled = boolean_property_1.coerceBooleanProperty(val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Waits for microtask queue to empty, then focuses the first tabbable element within the focus
     * trap region.
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = function () {
        var _this = this;
        this._ngZone.onMicrotaskEmpty.first().subscribe(function () {
            _this.focusFirstTabbableElement();
        });
    };
    /**
     * Waits for microtask queue to empty, then focuses the last tabbable element within the focus
     * trap region.
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = function () {
        var _this = this;
        this._ngZone.onMicrotaskEmpty.first().subscribe(function () {
            _this.focusLastTabbableElement();
        });
    };
    /** Focuses the first tabbable element within the focus trap region. */
    FocusTrap.prototype.focusFirstTabbableElement = function () {
        var rootElement = this.trappedContent.nativeElement;
        var redirectToElement = rootElement.querySelector('[md-focus-start]') ||
            this._getFirstTabbableElement(rootElement);
        if (redirectToElement) {
            redirectToElement.focus();
        }
    };
    /** Focuses the last tabbable element within the focus trap region. */
    FocusTrap.prototype.focusLastTabbableElement = function () {
        var rootElement = this.trappedContent.nativeElement;
        var focusTargets = rootElement.querySelectorAll('[md-focus-end]');
        var redirectToElement = null;
        if (focusTargets.length) {
            redirectToElement = focusTargets[focusTargets.length - 1];
        }
        else {
            redirectToElement = this._getLastTabbableElement(rootElement);
        }
        if (redirectToElement) {
            redirectToElement.focus();
        }
    };
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getFirstTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order.
        var childCount = root.children.length;
        for (var i = 0; i < childCount; i++) {
            var tabbableChild = this._getFirstTabbableElement(root.children[i]);
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getLastTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        for (var i = root.children.length - 1; i >= 0; i--) {
            var tabbableChild = this._getLastTabbableElement(root.children[i]);
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    return FocusTrap;
}());
__decorate([
    core_1.ViewChild('trappedContent'),
    __metadata("design:type", core_1.ElementRef)
], FocusTrap.prototype, "trappedContent", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], FocusTrap.prototype, "disabled", null);
FocusTrap = __decorate([
    core_1.Component({
        selector: 'focus-trap',
        template: require('./focus-trap.html'),
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [interactivity_checker_1.InteractivityChecker, core_1.NgZone])
], FocusTrap);
exports.FocusTrap = FocusTrap;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/core/a11y/focus-trap.js.map