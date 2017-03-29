"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("./core/index");
var index_2 = require("./button-toggle/index");
var index_3 = require("./button/index");
var index_4 = require("./checkbox/index");
var index_5 = require("./radio/index");
var index_6 = require("./select/index");
var index_7 = require("./slide-toggle/index");
var index_8 = require("./slider/index");
var index_9 = require("./sidenav/index");
var index_10 = require("./list/index");
var index_11 = require("./grid-list/index");
var index_12 = require("./card/index");
var index_13 = require("./chips/index");
var index_14 = require("./icon/index");
var index_15 = require("./progress-circle/index");
var index_16 = require("./progress-bar/index");
var index_17 = require("./input/index");
var snack_bar_1 = require("./snack-bar/snack-bar");
var index_18 = require("./tabs/index");
var index_19 = require("./toolbar/index");
var index_20 = require("./tooltip/index");
var index_21 = require("./menu/index");
var index_22 = require("./dialog/index");
var platform_1 = require("./core/platform/platform");
var index_23 = require("./autocomplete/index");
var MATERIAL_MODULES = [
    index_23.MdAutocompleteModule,
    index_3.MdButtonModule,
    index_2.MdButtonToggleModule,
    index_12.MdCardModule,
    index_13.MdChipsModule,
    index_4.MdCheckboxModule,
    index_22.MdDialogModule,
    index_11.MdGridListModule,
    index_14.MdIconModule,
    index_17.MdInputModule,
    index_10.MdListModule,
    index_21.MdMenuModule,
    index_16.MdProgressBarModule,
    index_15.MdProgressCircleModule,
    index_5.MdRadioModule,
    index_1.MdRippleModule,
    index_6.MdSelectModule,
    index_9.MdSidenavModule,
    index_8.MdSliderModule,
    index_7.MdSlideToggleModule,
    snack_bar_1.MdSnackBarModule,
    index_18.MdTabsModule,
    index_19.MdToolbarModule,
    index_20.MdTooltipModule,
    index_1.OverlayModule,
    index_1.PortalModule,
    index_1.RtlModule,
    index_1.A11yModule,
    platform_1.PlatformModule,
    index_1.ProjectionModule,
    index_1.DefaultStyleCompatibilityModeModule,
];
var MaterialRootModule = (function () {
    function MaterialRootModule() {
    }
    return MaterialRootModule;
}());
MaterialRootModule = __decorate([
    core_1.NgModule({
        imports: [
            index_23.MdAutocompleteModule.forRoot(),
            index_3.MdButtonModule.forRoot(),
            index_12.MdCardModule.forRoot(),
            index_13.MdChipsModule.forRoot(),
            index_4.MdCheckboxModule.forRoot(),
            index_11.MdGridListModule.forRoot(),
            index_17.MdInputModule.forRoot(),
            index_10.MdListModule.forRoot(),
            index_16.MdProgressBarModule.forRoot(),
            index_15.MdProgressCircleModule.forRoot(),
            index_1.MdRippleModule.forRoot(),
            index_6.MdSelectModule.forRoot(),
            index_9.MdSidenavModule.forRoot(),
            index_18.MdTabsModule.forRoot(),
            index_19.MdToolbarModule.forRoot(),
            index_1.PortalModule.forRoot(),
            index_1.ProjectionModule.forRoot(),
            index_1.RtlModule.forRoot(),
            // These modules include providers.
            index_1.A11yModule.forRoot(),
            index_2.MdButtonToggleModule.forRoot(),
            index_22.MdDialogModule.forRoot(),
            index_14.MdIconModule.forRoot(),
            index_21.MdMenuModule.forRoot(),
            index_5.MdRadioModule.forRoot(),
            index_8.MdSliderModule.forRoot(),
            index_7.MdSlideToggleModule.forRoot(),
            snack_bar_1.MdSnackBarModule.forRoot(),
            index_20.MdTooltipModule.forRoot(),
            platform_1.PlatformModule.forRoot(),
            index_1.OverlayModule.forRoot(),
            index_1.DefaultStyleCompatibilityModeModule.forRoot(),
        ],
        exports: MATERIAL_MODULES,
    })
], MaterialRootModule);
exports.MaterialRootModule = MaterialRootModule;
var MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule.forRoot = function () {
        return { ngModule: MaterialRootModule };
    };
    return MaterialModule;
}());
MaterialModule = __decorate([
    core_1.NgModule({
        imports: MATERIAL_MODULES,
        exports: MATERIAL_MODULES,
    })
], MaterialModule);
exports.MaterialModule = MaterialModule;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/module.js.map