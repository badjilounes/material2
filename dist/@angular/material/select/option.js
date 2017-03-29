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
var keycodes_1 = require("../core/keyboard/keycodes");
var boolean_property_1 = require("../core/coersion/boolean-property");
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
var _uniqueIdCounter = 0;
var MdOption = (function () {
    function MdOption(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this._selected = false;
        /** Whether the option is disabled.  */
        this._disabled = false;
        this._id = "md-select-option-" + _uniqueIdCounter++;
        /** Event emitted when the option is selected. */
        this.onSelect = new core_1.EventEmitter();
    }
    Object.defineProperty(MdOption.prototype, "id", {
        /** The unique ID of the option. */
        get: function () { return this._id; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = boolean_property_1.coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "selected", {
        /** Whether or not the option is currently selected. */
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdOption.prototype, "viewValue", {
        /**
         * The displayed value of the option. It is necessary to show the selected option in the
         * select's trigger.
         * TODO(kara): Add input property alternative for node envs.
         */
        get: function () {
            return this._getHostElement().textContent.trim();
        },
        enumerable: true,
        configurable: true
    });
    /** Selects the option. */
    MdOption.prototype.select = function () {
        this._selected = true;
        this.onSelect.emit();
    };
    /** Deselects the option. */
    MdOption.prototype.deselect = function () {
        this._selected = false;
    };
    /** Sets focus onto this option. */
    MdOption.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._getHostElement(), 'focus');
    };
    /** Ensures the option is selected when activated from the keyboard. */
    MdOption.prototype._handleKeydown = function (event) {
        if (event.keyCode === keycodes_1.ENTER || event.keyCode === keycodes_1.SPACE) {
            this._selectViaInteraction();
        }
    };
    /**
     * Selects the option while indicating the selection came from the user. Used to
     * determine if the select's view -> model callback should be invoked.
     */
    MdOption.prototype._selectViaInteraction = function () {
        if (!this.disabled) {
            this._selected = true;
            this.onSelect.emit(true);
        }
    };
    /** Returns the correct tabindex for the option depending on disabled state. */
    MdOption.prototype._getTabIndex = function () {
        return this.disabled ? '-1' : '0';
    };
    MdOption.prototype._getHostElement = function () {
        return this._element.nativeElement;
    };
    return MdOption;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MdOption.prototype, "value", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdOption.prototype, "disabled", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MdOption.prototype, "onSelect", void 0);
MdOption = __decorate([
    core_1.Component({
        selector: 'md-option, mat-option',
        host: {
            'role': 'option',
            '[attr.tabindex]': '_getTabIndex()',
            '[class.md-selected]': 'selected',
            '[id]': 'id',
            '[attr.aria-selected]': 'selected.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[class.md-option-disabled]': 'disabled',
            '(click)': '_selectViaInteraction()',
            '(keydown)': '_handleKeydown($event)'
        },
        template: require('./option.html'),
        styles: [require('./select.css').toString()],
        encapsulation: core_1.ViewEncapsulation.None
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], MdOption);
exports.MdOption = MdOption;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/select/option.js.map