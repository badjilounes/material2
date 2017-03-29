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
/**
 * This directive is intended to be used inside an md-menu tag.
 * It exists mostly to set the role attribute.
 */
var MdMenuItem = (function () {
    function MdMenuItem(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    MdMenuItem.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'focus');
    };
    Object.defineProperty(MdMenuItem.prototype, "disabled", {
        // this is necessary to support anchors
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = (value === false || value === undefined) ? null : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMenuItem.prototype, "isAriaDisabled", {
        get: function () {
            return String(!!this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMenuItem.prototype, "_tabindex", {
        get: function () {
            return this.disabled ? '-1' : '0';
        },
        enumerable: true,
        configurable: true
    });
    MdMenuItem.prototype._getHostElement = function () {
        return this._elementRef.nativeElement;
    };
    MdMenuItem.prototype._checkDisabled = function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    return MdMenuItem;
}());
__decorate([
    core_1.HostBinding('attr.disabled'),
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MdMenuItem.prototype, "disabled", null);
__decorate([
    core_1.HostBinding('attr.aria-disabled'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], MdMenuItem.prototype, "isAriaDisabled", null);
MdMenuItem = __decorate([
    core_1.Component({
        selector: '[md-menu-item], [mat-menu-item]',
        host: {
            'role': 'menuitem',
            '(click)': '_checkDisabled($event)',
            '[attr.tabindex]': '_tabindex'
        },
        template: require('./menu-item.html'),
        exportAs: 'mdMenuItem'
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], MdMenuItem);
exports.MdMenuItem = MdMenuItem;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/menu/menu-item.js.map