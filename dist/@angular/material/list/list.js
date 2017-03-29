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
var core_2 = require("../core");
var MdListDivider = (function () {
    function MdListDivider() {
    }
    return MdListDivider;
}());
MdListDivider = __decorate([
    core_1.Directive({
        selector: 'md-divider, mat-divider'
    })
], MdListDivider);
exports.MdListDivider = MdListDivider;
var MdList = (function () {
    function MdList() {
    }
    return MdList;
}());
MdList = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'md-list, mat-list, md-nav-list, mat-nav-list',
        host: { 'role': 'list' },
        template: '<ng-content></ng-content>',
        styleUrls: ['list.css'],
        encapsulation: core_1.ViewEncapsulation.None
    })
], MdList);
exports.MdList = MdList;
/* Need directive for a ContentChild query in list-item */
var MdListAvatar = (function () {
    function MdListAvatar() {
    }
    return MdListAvatar;
}());
MdListAvatar = __decorate([
    core_1.Directive({ selector: '[md-list-avatar], [mat-list-avatar]' })
], MdListAvatar);
exports.MdListAvatar = MdListAvatar;
var MdListItem = (function () {
    function MdListItem(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._hasFocus = false;
    }
    Object.defineProperty(MdListItem.prototype, "_hasAvatar", {
        set: function (avatar) {
            this._renderer.setElementClass(this._element.nativeElement, 'md-list-avatar', avatar != null);
        },
        enumerable: true,
        configurable: true
    });
    /** TODO: internal */
    MdListItem.prototype.ngAfterContentInit = function () {
        this._lineSetter = new core_2.MdLineSetter(this._lines, this._renderer, this._element);
    };
    MdListItem.prototype._handleFocus = function () {
        this._hasFocus = true;
    };
    MdListItem.prototype._handleBlur = function () {
        this._hasFocus = false;
    };
    return MdListItem;
}());
__decorate([
    core_1.ContentChildren(core_2.MdLine),
    __metadata("design:type", core_1.QueryList)
], MdListItem.prototype, "_lines", void 0);
__decorate([
    core_1.ContentChild(MdListAvatar),
    __metadata("design:type", MdListAvatar),
    __metadata("design:paramtypes", [MdListAvatar])
], MdListItem.prototype, "_hasAvatar", null);
MdListItem = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'md-list-item, mat-list-item, a[md-list-item], a[mat-list-item]',
        host: {
            'role': 'listitem',
            '(focus)': '_handleFocus()',
            '(blur)': '_handleBlur()',
        },
        templateUrl: 'list-item.html',
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_1.Renderer, core_1.ElementRef])
], MdListItem);
exports.MdListItem = MdListItem;
var MdListModule = MdListModule_1 = (function () {
    function MdListModule() {
    }
    MdListModule.forRoot = function () {
        return {
            ngModule: MdListModule_1,
            providers: []
        };
    };
    return MdListModule;
}());
MdListModule = MdListModule_1 = __decorate([
    core_1.NgModule({
        imports: [core_2.MdLineModule, core_2.DefaultStyleCompatibilityModeModule],
        exports: [
            MdList,
            MdListItem,
            MdListDivider,
            MdListAvatar,
            core_2.MdLineModule,
            core_2.DefaultStyleCompatibilityModeModule,
        ],
        declarations: [MdList, MdListItem, MdListDivider, MdListAvatar],
    })
], MdListModule);
exports.MdListModule = MdListModule;
var MdListModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/list/list.js.map