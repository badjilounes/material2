// TODO(kara): prevent-close functionality
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var menu_errors_1 = require("./menu-errors");
var menu_item_1 = require("./menu-item");
var list_key_manager_1 = require("../core/a11y/list-key-manager");
var menu_animations_1 = require("./menu-animations");
var MdMenu = (function () {
    function MdMenu(posX, posY) {
        /** Config object to be passed into the menu's ngClass */
        this._classList = {};
        this.positionX = 'after';
        this.positionY = 'below';
        this.close = new core_1.EventEmitter();
        if (posX) {
            this._setPositionX(posX);
        }
        if (posY) {
            this._setPositionY(posY);
        }
        this.setPositionClasses(this.positionX, this.positionY);
    }
    // TODO: internal
    MdMenu.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._keyManager = new list_key_manager_1.ListKeyManager(this.items).withFocusWrap();
        this._tabSubscription = this._keyManager.tabOut.subscribe(function () {
            _this._emitCloseEvent();
        });
    };
    // TODO: internal
    MdMenu.prototype.ngOnDestroy = function () {
        this._tabSubscription.unsubscribe();
    };
    Object.defineProperty(MdMenu.prototype, "classList", {
        /**
         * This method takes classes set on the host md-menu element and applies them on the
         * menu template that displays in the overlay container.  Otherwise, it's difficult
         * to style the containing menu from outside the component.
         * @param classes list of class names
         */
        set: function (classes) {
            this._classList = classes.split(' ').reduce(function (obj, className) {
                obj[className] = true;
                return obj;
            }, {});
            this.setPositionClasses(this.positionX, this.positionY);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Focus the first item in the menu. This method is used by the menu trigger
     * to focus the first item when the menu is opened by the ENTER key.
     * TODO: internal
     */
    MdMenu.prototype.focusFirstItem = function () {
        this._keyManager.focusFirstItem();
    };
    /**
     * This emits a close event to which the trigger is subscribed. When emitted, the
     * trigger will close the menu.
     */
    MdMenu.prototype._emitCloseEvent = function () {
        this.close.emit();
    };
    MdMenu.prototype._setPositionX = function (pos) {
        if (pos !== 'before' && pos !== 'after') {
            throw new menu_errors_1.MdMenuInvalidPositionX();
        }
        this.positionX = pos;
    };
    MdMenu.prototype._setPositionY = function (pos) {
        if (pos !== 'above' && pos !== 'below') {
            throw new menu_errors_1.MdMenuInvalidPositionY();
        }
        this.positionY = pos;
    };
    /**
     * It's necessary to set position-based classes to ensure the menu panel animation
     * folds out from the correct direction.
     */
    MdMenu.prototype.setPositionClasses = function (posX, posY) {
        this._classList['md-menu-before'] = posX == 'before';
        this._classList['md-menu-after'] = posX == 'after';
        this._classList['md-menu-above'] = posY == 'above';
        this._classList['md-menu-below'] = posY == 'below';
    };
    return MdMenu;
}());
__decorate([
    core_1.ViewChild(core_1.TemplateRef),
    __metadata("design:type", core_1.TemplateRef)
], MdMenu.prototype, "templateRef", void 0);
__decorate([
    core_1.ContentChildren(menu_item_1.MdMenuItem),
    __metadata("design:type", core_1.QueryList)
], MdMenu.prototype, "items", void 0);
__decorate([
    core_1.Input('class'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MdMenu.prototype, "classList", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MdMenu.prototype, "close", void 0);
MdMenu = __decorate([
    core_1.Component({
        selector: 'md-menu, mat-menu',
        host: { 'role': 'menu' },
        template: require('./menu.html'),
        styles: [require('./menu.css').toString()],
        encapsulation: core_1.ViewEncapsulation.None,
        animations: [
            menu_animations_1.transformMenu,
            menu_animations_1.fadeInItems
        ],
        exportAs: 'mdMenu'
    }),
    __param(0, core_1.Attribute('x-position')),
    __param(1, core_1.Attribute('y-position')),
    __metadata("design:paramtypes", [String, String])
], MdMenu);
exports.MdMenu = MdMenu;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/menu/menu-directive.js.map