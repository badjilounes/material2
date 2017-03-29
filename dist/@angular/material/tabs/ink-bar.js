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
/** The ink-bar is used to display and animate the line underneath the current active tab label. */
var MdInkBar = (function () {
    function MdInkBar(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param element
     */
    MdInkBar.prototype.alignToElement = function (element) {
        this.show();
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'left', this._getLeftPosition(element));
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'width', this._getElementWidth(element));
    };
    /** Shows the ink bar. */
    MdInkBar.prototype.show = function () {
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'visibility', 'visible');
    };
    /** Hides the ink bar. */
    MdInkBar.prototype.hide = function () {
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
    };
    /**
     * Generates the pixel distance from the left based on the provided element in string format.
     * @param element
     * @returns {string}
     */
    MdInkBar.prototype._getLeftPosition = function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    /**
     * Generates the pixel width from the provided element in string format.
     * @param element
     * @returns {string}
     */
    MdInkBar.prototype._getElementWidth = function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    return MdInkBar;
}());
MdInkBar = __decorate([
    core_1.Directive({
        selector: 'md-ink-bar, mat-ink-bar',
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], MdInkBar);
exports.MdInkBar = MdInkBar;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/tabs/ink-bar.js.map