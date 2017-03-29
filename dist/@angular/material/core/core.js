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
var line_1 = require("./line/line");
var dir_1 = require("./rtl/dir");
var ripple_1 = require("./ripple/ripple");
var portal_directives_1 = require("./portal/portal-directives");
var overlay_directives_1 = require("./overlay/overlay-directives");
var index_1 = require("./a11y/index");
var overlay_1 = require("./overlay/overlay");
// RTL
var dir_2 = require("./rtl/dir");
exports.Dir = dir_2.Dir;
exports.RtlModule = dir_2.RtlModule;
// Portals
var portal_1 = require("./portal/portal");
exports.Portal = portal_1.Portal;
exports.BasePortalHost = portal_1.BasePortalHost;
exports.ComponentPortal = portal_1.ComponentPortal;
exports.TemplatePortal = portal_1.TemplatePortal;
var portal_directives_2 = require("./portal/portal-directives");
exports.PortalHostDirective = portal_directives_2.PortalHostDirective;
exports.TemplatePortalDirective = portal_directives_2.TemplatePortalDirective;
exports.PortalModule = portal_directives_2.PortalModule;
var dom_portal_host_1 = require("./portal/dom-portal-host");
exports.DomPortalHost = dom_portal_host_1.DomPortalHost;
// Projection
__export(require("./projection/projection"));
// Platform
__export(require("./platform/platform"));
// Overlay
var overlay_2 = require("./overlay/overlay");
exports.Overlay = overlay_2.Overlay;
exports.OVERLAY_PROVIDERS = overlay_2.OVERLAY_PROVIDERS;
var overlay_container_1 = require("./overlay/overlay-container");
exports.OverlayContainer = overlay_container_1.OverlayContainer;
var overlay_ref_1 = require("./overlay/overlay-ref");
exports.OverlayRef = overlay_ref_1.OverlayRef;
var overlay_state_1 = require("./overlay/overlay-state");
exports.OverlayState = overlay_state_1.OverlayState;
var overlay_directives_2 = require("./overlay/overlay-directives");
exports.ConnectedOverlayDirective = overlay_directives_2.ConnectedOverlayDirective;
exports.OverlayOrigin = overlay_directives_2.OverlayOrigin;
exports.OverlayModule = overlay_directives_2.OverlayModule;
__export(require("./overlay/position/connected-position-strategy"));
__export(require("./overlay/position/connected-position"));
// Gestures
var MdGestureConfig_1 = require("./gestures/MdGestureConfig");
exports.MdGestureConfig = MdGestureConfig_1.MdGestureConfig;
// Ripple
var ripple_2 = require("./ripple/ripple");
exports.MdRipple = ripple_2.MdRipple;
exports.MdRippleModule = ripple_2.MdRippleModule;
// a11y
var live_announcer_1 = require("./a11y/live-announcer");
exports.MdLiveAnnouncer = live_announcer_1.MdLiveAnnouncer;
exports.LIVE_ANNOUNCER_ELEMENT_TOKEN = live_announcer_1.LIVE_ANNOUNCER_ELEMENT_TOKEN;
var focus_trap_1 = require("./a11y/focus-trap");
exports.FocusTrap = focus_trap_1.FocusTrap;
var interactivity_checker_1 = require("./a11y/interactivity-checker");
exports.InteractivityChecker = interactivity_checker_1.InteractivityChecker;
var fake_mousedown_1 = require("./a11y/fake-mousedown");
exports.isFakeMousedownFromScreenReader = fake_mousedown_1.isFakeMousedownFromScreenReader;
var index_2 = require("./a11y/index");
exports.A11yModule = index_2.A11yModule;
var unique_selection_dispatcher_1 = require("./coordination/unique-selection-dispatcher");
exports.MdUniqueSelectionDispatcher = unique_selection_dispatcher_1.MdUniqueSelectionDispatcher;
var line_2 = require("./line/line");
exports.MdLineModule = line_2.MdLineModule;
exports.MdLine = line_2.MdLine;
exports.MdLineSetter = line_2.MdLineSetter;
// Style
var apply_transform_1 = require("./style/apply-transform");
exports.applyCssTransform = apply_transform_1.applyCssTransform;
// Error
var error_1 = require("./errors/error");
exports.MdError = error_1.MdError;
// Keybindings
__export(require("./keyboard/keycodes"));
__export(require("./compatibility/default-mode"));
// Animation
__export(require("./animation/animation"));
// Coersion
var boolean_property_1 = require("./coersion/boolean-property");
exports.coerceBooleanProperty = boolean_property_1.coerceBooleanProperty;
var number_property_1 = require("./coersion/number-property");
exports.coerceNumberProperty = number_property_1.coerceNumberProperty;
// Compatibility
var default_mode_1 = require("./compatibility/default-mode");
exports.DefaultStyleCompatibilityModeModule = default_mode_1.DefaultStyleCompatibilityModeModule;
var no_conflict_mode_1 = require("./compatibility/no-conflict-mode");
exports.NoConflictStyleCompatibilityMode = no_conflict_mode_1.NoConflictStyleCompatibilityMode;
var MdCoreModule = MdCoreModule_1 = (function () {
    function MdCoreModule() {
    }
    MdCoreModule.forRoot = function () {
        return {
            ngModule: MdCoreModule_1,
            providers: [index_1.A11Y_PROVIDERS, overlay_1.OVERLAY_PROVIDERS],
        };
    };
    return MdCoreModule;
}());
MdCoreModule = MdCoreModule_1 = __decorate([
    core_1.NgModule({
        imports: [line_1.MdLineModule, dir_1.RtlModule, ripple_1.MdRippleModule, portal_directives_1.PortalModule, overlay_directives_1.OverlayModule, index_1.A11yModule],
        exports: [line_1.MdLineModule, dir_1.RtlModule, ripple_1.MdRippleModule, portal_directives_1.PortalModule, overlay_directives_1.OverlayModule, index_1.A11yModule],
    })
], MdCoreModule);
exports.MdCoreModule = MdCoreModule;
var MdCoreModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/core/core.js.map