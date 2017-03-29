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
var common_1 = require("@angular/common");
var core_2 = require("../core");
var tab_label_1 = require("./tab-label");
var tab_label_wrapper_1 = require("./tab-label-wrapper");
var tab_nav_bar_1 = require("./tab-nav-bar/tab-nav-bar");
var ink_bar_1 = require("./ink-bar");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/map");
var ripple_1 = require("../core/ripple/ripple");
var tab_1 = require("./tab");
var tab_body_1 = require("./tab-body");
var viewport_ruler_1 = require("../core/overlay/position/viewport-ruler");
var tab_header_1 = require("./tab-header");
/** Used to generate unique ID's for each tab component */
var nextId = 0;
/** A simple change event emitted on focus or selection changes. */
var MdTabChangeEvent = (function () {
    function MdTabChangeEvent() {
    }
    return MdTabChangeEvent;
}());
exports.MdTabChangeEvent = MdTabChangeEvent;
/**
 * Material design tab-group component.  Supports basic tab pairs (label + content) and includes
 * animated ink-bar, keyboard navigation, and screen reader.
 * See: https://www.google.com/design/spec/components/tabs.html
 */
var MdTabGroup = (function () {
    function MdTabGroup(_renderer) {
        this._renderer = _renderer;
        /** Whether this component has been initialized. */
        this._isInitialized = false;
        /** The tab index that should be selected after the content has been checked. */
        this._indexToSelect = 0;
        /** Snapshot of the height of the tab body wrapper before another tab is activated. */
        this._tabBodyWrapperHeight = null;
        /** Whether the tab group should grow to the size of the active tab */
        this._dynamicHeight = false;
        /** The index of the active tab. */
        this._selectedIndex = null;
        /** The center labels parameter. */
        this._centerLabels = false;
        this._onFocusChange = new core_1.EventEmitter();
        this._onSelectChange = new core_1.EventEmitter(true);
        this._groupId = nextId++;
    }
    Object.defineProperty(MdTabGroup.prototype, "dynamicHeight", {
        set: function (value) {
            this._dynamicHeight = core_2.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabGroup.prototype, "selectedIndex", {
        get: function () {
            return this._selectedIndex;
        },
        set: function (value) {
            this._indexToSelect = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabGroup.prototype, "centerLabels", {
        get: function () {
            return this._centerLabels;
        },
        set: function (value) {
            this._centerLabels = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabGroup.prototype, "selectedIndexChange", {
        /** Output to enable support for two-way binding on `selectedIndex`. */
        get: function () {
            return this.selectChange.map(function (event) { return event.index; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabGroup.prototype, "focusChange", {
        get: function () {
            return this._onFocusChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabGroup.prototype, "selectChange", {
        get: function () {
            return this._onSelectChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * After the content is checked, this component knows what tabs have been defined
     * and what the selected index should be. This is where we can know exactly what position
     * each tab should be in according to the new selected index, and additionally we know how
     * a new selected tab should transition in (from the left or right).
     */
    MdTabGroup.prototype.ngAfterContentChecked = function () {
        var _this = this;
        // Clamp the next selected index to the bounds of 0 and the tabs length.
        this._indexToSelect =
            Math.min(this._tabs.length - 1, Math.max(this._indexToSelect, 0));
        // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.
        if (this._selectedIndex != this._indexToSelect && this._selectedIndex != null) {
            this._onSelectChange.emit(this._createChangeEvent(this._indexToSelect));
        }
        // Setup the position for each tab and optionally setup an origin on the next selected tab.
        this._tabs.forEach(function (tab, index) {
            tab.position = index - _this._indexToSelect;
            // If there is already a selected tab, then set up an origin for the next selected tab
            // if it doesn't have one already.
            if (_this._selectedIndex != null && tab.position == 0 && !tab.origin) {
                tab.origin = _this._indexToSelect - _this._selectedIndex;
            }
        });
        this._selectedIndex = this._indexToSelect;
    };
    /**
     * Waits one frame for the view to update, then updates the ink bar
     * Note: This must be run outside of the zone or it will create an infinite change detection loop
     * TODO: internal
     */
    MdTabGroup.prototype.ngAfterViewChecked = function () {
        this._isInitialized = true;
    };
    MdTabGroup.prototype._focusChanged = function (index) {
        this._onFocusChange.emit(this._createChangeEvent(index));
    };
    MdTabGroup.prototype._createChangeEvent = function (index) {
        var event = new MdTabChangeEvent;
        event.index = index;
        if (this._tabs && this._tabs.length) {
            event.tab = this._tabs.toArray()[index];
        }
        return event;
    };
    /** Returns a unique id for each tab label element */
    MdTabGroup.prototype._getTabLabelId = function (i) {
        return "md-tab-label-" + this._groupId + "-" + i;
    };
    /** Returns a unique id for each tab content element */
    MdTabGroup.prototype._getTabContentId = function (i) {
        return "md-tab-content-" + this._groupId + "-" + i;
    };
    /**
     * Sets the height of the body wrapper to the height of the activating tab if dynamic
     * height property is true.
     */
    MdTabGroup.prototype._setTabBodyWrapperHeight = function (tabHeight) {
        if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
            return;
        }
        this._renderer.setElementStyle(this._tabBodyWrapper.nativeElement, 'height', this._tabBodyWrapperHeight + 'px');
        // This conditional forces the browser to paint the height so that
        // the animation to the new height can have an origin.
        if (this._tabBodyWrapper.nativeElement.offsetHeight) {
            this._renderer.setElementStyle(this._tabBodyWrapper.nativeElement, 'height', tabHeight + 'px');
        }
    };
    /** Removes the height of the tab body wrapper. */
    MdTabGroup.prototype._removeTabBodyWrapperHeight = function () {
        this._tabBodyWrapperHeight = this._tabBodyWrapper.nativeElement.clientHeight;
        this._renderer.setElementStyle(this._tabBodyWrapper.nativeElement, 'height', '');
    };
    return MdTabGroup;
}());
__decorate([
    core_1.ContentChildren(tab_1.MdTab),
    __metadata("design:type", core_1.QueryList)
], MdTabGroup.prototype, "_tabs", void 0);
__decorate([
    core_1.ViewChild('tabBodyWrapper'),
    __metadata("design:type", core_1.ElementRef)
], MdTabGroup.prototype, "_tabBodyWrapper", void 0);
__decorate([
    core_1.Input('md-dynamic-height'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MdTabGroup.prototype, "dynamicHeight", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], MdTabGroup.prototype, "selectedIndex", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MdTabGroup.prototype, "centerLabels", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Observable_1.Observable),
    __metadata("design:paramtypes", [])
], MdTabGroup.prototype, "selectedIndexChange", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Observable_1.Observable),
    __metadata("design:paramtypes", [])
], MdTabGroup.prototype, "focusChange", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Observable_1.Observable),
    __metadata("design:paramtypes", [])
], MdTabGroup.prototype, "selectChange", null);
MdTabGroup = __decorate([
    core_1.Component({
        selector: 'md-tab-group',
        template: require('./tab-group.html'),
        styles: [require('./tab-group.css').toString()],
    }),
    __metadata("design:paramtypes", [core_1.Renderer])
], MdTabGroup);
exports.MdTabGroup = MdTabGroup;
var MdTabsModule = MdTabsModule_1 = (function () {
    function MdTabsModule() {
    }
    MdTabsModule.forRoot = function () {
        return {
            ngModule: MdTabsModule_1,
            providers: [viewport_ruler_1.ViewportRuler]
        };
    };
    return MdTabsModule;
}());
MdTabsModule = MdTabsModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, core_2.PortalModule, ripple_1.MdRippleModule],
        // Don't export all components because some are only to be used internally.
        exports: [MdTabGroup, tab_label_1.MdTabLabel, tab_1.MdTab, tab_nav_bar_1.MdTabNavBar, tab_nav_bar_1.MdTabLink, tab_nav_bar_1.MdTabLinkRipple],
        declarations: [MdTabGroup, tab_label_1.MdTabLabel, tab_1.MdTab, ink_bar_1.MdInkBar, tab_label_wrapper_1.MdTabLabelWrapper,
            tab_nav_bar_1.MdTabNavBar, tab_nav_bar_1.MdTabLink, tab_body_1.MdTabBody, tab_nav_bar_1.MdTabLinkRipple, tab_header_1.MdTabHeader],
    })
], MdTabsModule);
exports.MdTabsModule = MdTabsModule;
var MdTabsModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/tabs/tab-group.js.map