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
var MdToolbarRow = (function () {
    function MdToolbarRow() {
    }
    return MdToolbarRow;
}());
MdToolbarRow = __decorate([
    core_1.Directive({
        selector: 'md-toolbar-row, mat-toolbar-row'
    })
], MdToolbarRow);
exports.MdToolbarRow = MdToolbarRow;
var MdToolbar = (function () {
    function MdToolbar(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    Object.defineProperty(MdToolbar.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    MdToolbar.prototype._updateColor = function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    MdToolbar.prototype._setElementColor = function (color, isAdd) {
        if (color != null && color != '') {
            this.renderer.setElementClass(this.elementRef.nativeElement, "md-" + color, isAdd);
        }
    };
    return MdToolbar;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MdToolbar.prototype, "color", null);
MdToolbar = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'md-toolbar, mat-toolbar',
        templateUrl: 'toolbar.html',
        styleUrls: ['toolbar.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], MdToolbar);
exports.MdToolbar = MdToolbar;
var MdToolbarModule = MdToolbarModule_1 = (function () {
    function MdToolbarModule() {
    }
    MdToolbarModule.forRoot = function () {
        return {
            ngModule: MdToolbarModule_1,
            providers: []
        };
    };
    return MdToolbarModule;
}());
MdToolbarModule = MdToolbarModule_1 = __decorate([
    core_1.NgModule({
        imports: [core_2.DefaultStyleCompatibilityModeModule],
        exports: [MdToolbar, MdToolbarRow, core_2.DefaultStyleCompatibilityModeModule],
        declarations: [MdToolbar, MdToolbarRow],
    })
], MdToolbarModule);
exports.MdToolbarModule = MdToolbarModule;
var MdToolbarModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/toolbar/toolbar.js.map