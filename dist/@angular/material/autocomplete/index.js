"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var core_2 = require("../core");
var autocomplete_1 = require("./autocomplete");
__export(require("./autocomplete"));
var MdAutocompleteModule = MdAutocompleteModule_1 = (function () {
    function MdAutocompleteModule() {
    }
    MdAutocompleteModule.forRoot = function () {
        return {
            ngModule: MdAutocompleteModule_1,
            providers: []
        };
    };
    return MdAutocompleteModule;
}());
MdAutocompleteModule = MdAutocompleteModule_1 = __decorate([
    core_1.NgModule({
        imports: [core_2.DefaultStyleCompatibilityModeModule],
        exports: [autocomplete_1.MdAutocomplete, core_2.DefaultStyleCompatibilityModeModule],
        declarations: [autocomplete_1.MdAutocomplete],
    })
], MdAutocompleteModule);
exports.MdAutocompleteModule = MdAutocompleteModule;
var MdAutocompleteModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/autocomplete/index.js.map