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
var ink_bar_1 = require("../ink-bar");
var ripple_1 = require("../../core/ripple/ripple");
var viewport_ruler_1 = require("../../core/overlay/position/viewport-ruler");
/**
 * Navigation component matching the styles of the tab group header.
 * Provides anchored navigation with animated ink bar.
 */
var MdTabNavBar = (function () {
    function MdTabNavBar() {
    }
    /** Animates the ink bar to the position of the active link element. */
    MdTabNavBar.prototype.updateActiveLink = function (element) {
        this._inkBar.alignToElement(element);
    };
    return MdTabNavBar;
}());
__decorate([
    core_1.ViewChild(ink_bar_1.MdInkBar),
    __metadata("design:type", ink_bar_1.MdInkBar)
], MdTabNavBar.prototype, "_inkBar", void 0);
MdTabNavBar = __decorate([
    core_1.Component({
        selector: '[md-tab-nav-bar], [mat-tab-nav-bar]',
        template: require('./tab-nav-bar.html'),
        styles: [require('./tab-nav-bar.css').toString()],
        encapsulation: core_1.ViewEncapsulation.None,
    })
], MdTabNavBar);
exports.MdTabNavBar = MdTabNavBar;
var MdTabLink = (function () {
    function MdTabLink(_mdTabNavBar, _element) {
        this._mdTabNavBar = _mdTabNavBar;
        this._element = _element;
        this._isActive = false;
    }
    Object.defineProperty(MdTabLink.prototype, "active", {
        get: function () {
            return this._isActive;
        },
        set: function (value) {
            this._isActive = value;
            if (value) {
                this._mdTabNavBar.updateActiveLink(this._element.nativeElement);
            }
        },
        enumerable: true,
        configurable: true
    });
    return MdTabLink;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MdTabLink.prototype, "active", null);
MdTabLink = __decorate([
    core_1.Directive({
        selector: '[md-tab-link], [mat-tab-link]',
    }),
    __metadata("design:paramtypes", [MdTabNavBar, core_1.ElementRef])
], MdTabLink);
exports.MdTabLink = MdTabLink;
/**
 * Simple directive that extends the ripple and matches the selector of the MdTabLink. This
 * adds the ripple behavior to nav bar labels.
 */
var MdTabLinkRipple = (function (_super) {
    __extends(MdTabLinkRipple, _super);
    function MdTabLinkRipple(_element, _ngZone, _ruler) {
        var _this = _super.call(this, _element, _ngZone, _ruler) || this;
        _this._element = _element;
        _this._ngZone = _ngZone;
        return _this;
    }
    // In certain cases the parent destroy handler
    // may not get called. See Angular issue #11606.
    MdTabLinkRipple.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    return MdTabLinkRipple;
}(ripple_1.MdRipple));
MdTabLinkRipple = __decorate([
    core_1.Directive({
        selector: '[md-tab-link], [mat-tab-link]',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.NgZone, viewport_ruler_1.ViewportRuler])
], MdTabLinkRipple);
exports.MdTabLinkRipple = MdTabLinkRipple;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/tabs/tab-nav-bar/tab-nav-bar.js.map