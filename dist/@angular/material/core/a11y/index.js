"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var focus_trap_1 = require("./focus-trap");
var live_announcer_1 = require("./live-announcer");
var interactivity_checker_1 = require("./interactivity-checker");
var common_1 = require("@angular/common");
var platform_1 = require("../platform/platform");
exports.A11Y_PROVIDERS = [live_announcer_1.MdLiveAnnouncer, interactivity_checker_1.InteractivityChecker];
var A11yModule = A11yModule_1 = (function () {
    function A11yModule() {
    }
    A11yModule.forRoot = function () {
        return {
            ngModule: A11yModule_1,
            providers: exports.A11Y_PROVIDERS,
        };
    };
    return A11yModule;
}());
A11yModule = A11yModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, platform_1.PlatformModule],
        declarations: [focus_trap_1.FocusTrap],
        exports: [focus_trap_1.FocusTrap],
    })
], A11yModule);
exports.A11yModule = A11yModule;
var A11yModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/core/a11y/index.js.map