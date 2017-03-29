"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var core_2 = require("../core");
var menu_directive_1 = require("./menu-directive");
var menu_item_1 = require("./menu-item");
var menu_trigger_1 = require("./menu-trigger");
var ripple_1 = require("../core/ripple/ripple");
var menu_directive_2 = require("./menu-directive");
exports.MdMenu = menu_directive_2.MdMenu;
var menu_item_2 = require("./menu-item");
exports.MdMenuItem = menu_item_2.MdMenuItem;
var menu_trigger_2 = require("./menu-trigger");
exports.MdMenuTrigger = menu_trigger_2.MdMenuTrigger;
var MdMenuModule = MdMenuModule_1 = (function () {
    function MdMenuModule() {
    }
    MdMenuModule.forRoot = function () {
        return {
            ngModule: MdMenuModule_1,
            providers: core_2.OVERLAY_PROVIDERS,
        };
    };
    return MdMenuModule;
}());
MdMenuModule = MdMenuModule_1 = __decorate([
    core_1.NgModule({
        imports: [core_2.OverlayModule, common_1.CommonModule, ripple_1.MdRippleModule, core_2.DefaultStyleCompatibilityModeModule],
        exports: [menu_directive_1.MdMenu, menu_item_1.MdMenuItem, menu_trigger_1.MdMenuTrigger, core_2.DefaultStyleCompatibilityModeModule],
        declarations: [menu_directive_1.MdMenu, menu_item_1.MdMenuItem, menu_trigger_1.MdMenuTrigger],
    })
], MdMenuModule);
exports.MdMenuModule = MdMenuModule;
var MdMenuModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/menu/menu.js.map