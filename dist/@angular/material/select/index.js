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
var common_1 = require("@angular/common");
var select_1 = require("./select");
var option_1 = require("./option");
var core_2 = require("../core");
__export(require("./select"));
var MdSelectModule = MdSelectModule_1 = (function () {
    function MdSelectModule() {
    }
    MdSelectModule.forRoot = function () {
        return {
            ngModule: MdSelectModule_1,
            providers: [core_2.OVERLAY_PROVIDERS]
        };
    };
    return MdSelectModule;
}());
MdSelectModule = MdSelectModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, core_2.OverlayModule, core_2.MdRippleModule, core_2.DefaultStyleCompatibilityModeModule],
        exports: [select_1.MdSelect, option_1.MdOption, core_2.DefaultStyleCompatibilityModeModule],
        declarations: [select_1.MdSelect, option_1.MdOption],
    })
], MdSelectModule);
exports.MdSelectModule = MdSelectModule;
var MdSelectModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/select/index.js.map