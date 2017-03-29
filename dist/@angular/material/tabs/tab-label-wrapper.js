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
var boolean_property_1 = require("../core/coersion/boolean-property");
/** Used in the `md-tab-group` view to display tab labels */
var MdTabLabelWrapper = (function () {
    function MdTabLabelWrapper(elementRef, _renderer) {
        this.elementRef = elementRef;
        this._renderer = _renderer;
        /** Whether the tab label is disabled.  */
        this._disabled = false;
    }
    Object.defineProperty(MdTabLabelWrapper.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = boolean_property_1.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    /** Sets focus on the wrapper element */
    MdTabLabelWrapper.prototype.focus = function () {
        this._renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    };
    MdTabLabelWrapper.prototype.getOffsetLeft = function () {
        return this.elementRef.nativeElement.offsetLeft;
    };
    MdTabLabelWrapper.prototype.getOffsetWidth = function () {
        return this.elementRef.nativeElement.offsetWidth;
    };
    return MdTabLabelWrapper;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdTabLabelWrapper.prototype, "disabled", null);
MdTabLabelWrapper = __decorate([
    core_1.Directive({
        selector: '[md-tab-label-wrapper], [mat-tab-label-wrapper]',
        host: {
            '[class.md-tab-disabled]': 'disabled'
        }
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], MdTabLabelWrapper);
exports.MdTabLabelWrapper = MdTabLabelWrapper;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/tabs/tab-label-wrapper.js.map