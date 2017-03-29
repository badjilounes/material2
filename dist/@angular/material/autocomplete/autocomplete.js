"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var MdAutocomplete = (function () {
    function MdAutocomplete() {
    }
    return MdAutocomplete;
}());
MdAutocomplete = __decorate([
    core_1.Component({
        selector: 'md-autocomplete, mat-autocomplete',
        template: require('./autocomplete.html'),
        styles: [require('./autocomplete.css').toString()],
        encapsulation: core_1.ViewEncapsulation.None,
    })
], MdAutocomplete);
exports.MdAutocomplete = MdAutocomplete;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/autocomplete/autocomplete.js.map