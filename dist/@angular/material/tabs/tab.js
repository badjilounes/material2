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
var portal_1 = require("../core/portal/portal");
var core_1 = require("@angular/core");
var boolean_property_1 = require("../core/coersion/boolean-property");
var tab_label_1 = require("./tab-label");
var MdTab = (function () {
    function MdTab(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        /** The plain text label for the tab, used when there is no template label. */
        this.textLabel = '';
        /** The portal that will be the hosted content of the tab */
        this._contentPortal = null;
        /**
         * The relatively indexed position where 0 represents the center, negative is left, and positive
         * represents the right.
         */
        this.position = null;
        /**
         * The initial relatively index origin of the tab if it was created and selected after there
         * was already a selected tab. Provides context of what position the tab should originate from.
         */
        this.origin = null;
        this._disabled = false;
    }
    Object.defineProperty(MdTab.prototype, "content", {
        get: function () { return this._contentPortal; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTab.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = boolean_property_1.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    MdTab.prototype.ngOnInit = function () {
        this._contentPortal = new portal_1.TemplatePortal(this._content, this._viewContainerRef);
    };
    return MdTab;
}());
__decorate([
    core_1.ContentChild(tab_label_1.MdTabLabel),
    __metadata("design:type", tab_label_1.MdTabLabel)
], MdTab.prototype, "templateLabel", void 0);
__decorate([
    core_1.ViewChild(core_1.TemplateRef),
    __metadata("design:type", core_1.TemplateRef)
], MdTab.prototype, "_content", void 0);
__decorate([
    core_1.Input('label'),
    __metadata("design:type", String)
], MdTab.prototype, "textLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MdTab.prototype, "disabled", null);
MdTab = __decorate([
    core_1.Component({
        selector: 'md-tab',
        template: require('./tab.html'),
    }),
    __metadata("design:paramtypes", [core_1.ViewContainerRef])
], MdTab);
exports.MdTab = MdTab;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/tabs/tab.js.map