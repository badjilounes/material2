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
var MdChip = (function () {
    function MdChip(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    MdChip.prototype.ngAfterContentInit = function () { };
    return MdChip;
}());
MdChip = __decorate([
    core_1.Component({
        selector: 'md-chip, [md-chip]',
        template: "<ng-content></ng-content>",
        host: {
            // Properties
            'class': 'md-chip',
            'tabindex': '-1',
            'role': 'option'
        }
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], MdChip);
exports.MdChip = MdChip;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/chips/chip.js.map