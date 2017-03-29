"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var core_2 = require("../core");
var Observable_1 = require("rxjs/Observable");
var autosize_1 = require("./autosize");
var noop = function () { };
exports.MD_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdInput; }),
    multi: true
};
// Invalid input type. Using one of these will throw an MdInputUnsupportedTypeError.
var MD_INPUT_INVALID_INPUT_TYPE = [
    'file',
    'radio',
    'checkbox',
];
var nextUniqueId = 0;
var MdInputPlaceholderConflictError = (function (_super) {
    __extends(MdInputPlaceholderConflictError, _super);
    function MdInputPlaceholderConflictError() {
        return _super.call(this, 'Placeholder attribute and child element were both specified.') || this;
    }
    return MdInputPlaceholderConflictError;
}(core_2.MdError));
exports.MdInputPlaceholderConflictError = MdInputPlaceholderConflictError;
var MdInputUnsupportedTypeError = (function (_super) {
    __extends(MdInputUnsupportedTypeError, _super);
    function MdInputUnsupportedTypeError(type) {
        return _super.call(this, "Input type \"" + type + "\" isn't supported by md-input.") || this;
    }
    return MdInputUnsupportedTypeError;
}(core_2.MdError));
exports.MdInputUnsupportedTypeError = MdInputUnsupportedTypeError;
var MdInputDuplicatedHintError = (function (_super) {
    __extends(MdInputDuplicatedHintError, _super);
    function MdInputDuplicatedHintError(align) {
        return _super.call(this, "A hint was already declared for 'align=\"" + align + "\"'.") || this;
    }
    return MdInputDuplicatedHintError;
}(core_2.MdError));
exports.MdInputDuplicatedHintError = MdInputDuplicatedHintError;
/**
 * The placeholder directive. The content can declare this to implement more
 * complex placeholders.
 */
var MdPlaceholder = (function () {
    function MdPlaceholder() {
    }
    return MdPlaceholder;
}());
MdPlaceholder = __decorate([
    core_1.Directive({
        selector: 'md-placeholder'
    })
], MdPlaceholder);
exports.MdPlaceholder = MdPlaceholder;
/** The hint directive, used to tag content as hint labels (going under the input). */
var MdHint = (function () {
    function MdHint() {
        // Whether to align the hint label at the start or end of the line.
        this.align = 'start';
    }
    return MdHint;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdHint.prototype, "align", void 0);
MdHint = __decorate([
    core_1.Directive({
        selector: 'md-hint',
        host: {
            '[class.md-right]': 'align == "end"',
            '[class.md-hint]': 'true'
        }
    })
], MdHint);
exports.MdHint = MdHint;
/**
 * Component that represents a text input. It encapsulates the <input> HTMLElement and
 * improve on its behaviour, along with styling it according to the Material Design.
 */
var MdInput = (function () {
    function MdInput(elementRef, _renderer) {
        this._renderer = _renderer;
        this._focused = false;
        this._value = '';
        /** Callback registered via registerOnTouched (ControlValueAccessor) */
        this._onTouchedCallback = noop;
        /** Callback registered via registerOnChange (ControlValueAccessor) */
        this._onChangeCallback = noop;
        /**
         * Bindings.
         */
        this.align = 'start';
        this.dividerColor = 'primary';
        this.hintLabel = '';
        this.id = "md-input-" + nextUniqueId++;
        this.list = null;
        this.max = null;
        this.maxlength = null;
        this.min = null;
        this.minlength = null;
        this.placeholder = null;
        this.step = null;
        this.tabindex = null;
        this.type = 'text';
        this.name = null;
        // textarea-specific
        this.rows = null;
        this.cols = null;
        this.wrap = null;
        this._floatingPlaceholder = true;
        this._autofocus = false;
        this._disabled = false;
        this._readonly = false;
        this._required = false;
        this._spellcheck = false;
        this._blurEmitter = new core_1.EventEmitter();
        this._focusEmitter = new core_1.EventEmitter();
        // Set the element type depending on normalized selector used(md-input / md-textarea)
        this._elementType = elementRef.nativeElement.nodeName.toLowerCase() === 'md-input' ?
            'input' :
            'textarea';
    }
    Object.defineProperty(MdInput.prototype, "ariaDisabled", {
        get: function () { return this._ariaDisabled; },
        set: function (value) { this._ariaDisabled = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "ariaRequired", {
        get: function () { return this._ariaRequired; },
        set: function (value) { this._ariaRequired = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "ariaInvalid", {
        get: function () { return this._ariaInvalid; },
        set: function (value) { this._ariaInvalid = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "focused", {
        /** Readonly properties. */
        get: function () { return this._focused; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "empty", {
        get: function () { return (this._value == null || this._value === '') && this.type !== 'date'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "characterCount", {
        get: function () {
            return this.empty ? 0 : ('' + this._value).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "inputId", {
        get: function () { return this.id + "-input"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "floatingPlaceholder", {
        get: function () { return this._floatingPlaceholder; },
        set: function (value) { this._floatingPlaceholder = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "autofocus", {
        get: function () { return this._autofocus; },
        set: function (value) { this._autofocus = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "readonly", {
        get: function () { return this._readonly; },
        set: function (value) { this._readonly = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "spellcheck", {
        get: function () { return this._spellcheck; },
        set: function (value) { this._spellcheck = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "onBlur", {
        get: function () {
            return this._blurEmitter.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "onFocus", {
        get: function () {
            return this._focusEmitter.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "value", {
        get: function () { return this._value; },
        set: function (v) {
            v = this._convertValueForInputType(v);
            if (v !== this._value) {
                this._value = v;
                this._onChangeCallback(v);
            }
        },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(MdInput.prototype, "_align", {
        // This is to remove the `align` property of the `md-input` itself. Otherwise HTML5
        // might place it as RTL when we don't want to. We still want to use `align` as an
        // Input though, so we use HostBinding.
        get: function () { return null; },
        enumerable: true,
        configurable: true
    });
    /** Set focus on input */
    MdInput.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._inputElement.nativeElement, 'focus');
    };
    MdInput.prototype._handleFocus = function (event) {
        this._focused = true;
        this._focusEmitter.emit(event);
    };
    MdInput.prototype._handleBlur = function (event) {
        this._focused = false;
        this._onTouchedCallback();
        this._blurEmitter.emit(event);
    };
    MdInput.prototype._handleChange = function (event) {
        this.value = event.target.value;
        this._onTouchedCallback();
    };
    MdInput.prototype._hasPlaceholder = function () {
        return !!this.placeholder || this._placeholderChild != null;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdInput.prototype.writeValue = function (value) {
        this._value = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdInput.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdInput.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    /**
     * Implemented as a part of ControlValueAccessor.
     */
    MdInput.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /** TODO: internal */
    MdInput.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._validateConstraints();
        // Trigger validation when the hint children change.
        this._hintChildren.changes.subscribe(function () {
            _this._validateConstraints();
        });
    };
    /** TODO: internal */
    MdInput.prototype.ngOnChanges = function (changes) {
        this._validateConstraints();
    };
    /**
     * Convert the value passed in to a value that is expected from the type of the md-input.
     * This is normally performed by the *_VALUE_ACCESSOR in forms, but since the type is bound
     * on our internal input it won't work locally.
     * @private
     */
    MdInput.prototype._convertValueForInputType = function (v) {
        switch (this.type) {
            case 'number': return parseFloat(v);
            default: return v;
        }
    };
    /**
     * Ensure that all constraints defined by the API are validated, or throw errors otherwise.
     * Constraints for now:
     *   - placeholder attribute and <md-placeholder> are mutually exclusive.
     *   - type attribute is not one of the forbidden types (see constant at the top).
     *   - Maximum one of each `<md-hint>` alignment specified, with the attribute being
     *     considered as align="start".
     * @private
     */
    MdInput.prototype._validateConstraints = function () {
        var _this = this;
        if (this.placeholder != '' && this.placeholder != null && this._placeholderChild != null) {
            throw new MdInputPlaceholderConflictError();
        }
        if (MD_INPUT_INVALID_INPUT_TYPE.indexOf(this.type) != -1) {
            throw new MdInputUnsupportedTypeError(this.type);
        }
        if (this._hintChildren) {
            // Validate the hint labels.
            var startHint_1 = null;
            var endHint_1 = null;
            this._hintChildren.forEach(function (hint) {
                if (hint.align == 'start') {
                    if (startHint_1 || _this.hintLabel) {
                        throw new MdInputDuplicatedHintError('start');
                    }
                    startHint_1 = hint;
                }
                else if (hint.align == 'end') {
                    if (endHint_1) {
                        throw new MdInputDuplicatedHintError('end');
                    }
                    endHint_1 = hint;
                }
            });
        }
    };
    return MdInput;
}());
__decorate([
    core_1.Input('aria-label'),
    __metadata("design:type", String)
], MdInput.prototype, "ariaLabel", void 0);
__decorate([
    core_1.Input('aria-labelledby'),
    __metadata("design:type", String)
], MdInput.prototype, "ariaLabelledBy", void 0);
__decorate([
    core_1.Input('aria-disabled'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdInput.prototype, "ariaDisabled", null);
__decorate([
    core_1.Input('aria-required'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdInput.prototype, "ariaRequired", null);
__decorate([
    core_1.Input('aria-invalid'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdInput.prototype, "ariaInvalid", null);
__decorate([
    core_1.ContentChild(MdPlaceholder),
    __metadata("design:type", MdPlaceholder)
], MdInput.prototype, "_placeholderChild", void 0);
__decorate([
    core_1.ContentChildren(MdHint),
    __metadata("design:type", core_1.QueryList)
], MdInput.prototype, "_hintChildren", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "align", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "dividerColor", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "hintLabel", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "autocomplete", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "autocorrect", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "autocapitalize", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "id", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "list", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MdInput.prototype, "max", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MdInput.prototype, "maxlength", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], MdInput.prototype, "min", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MdInput.prototype, "minlength", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "placeholder", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MdInput.prototype, "step", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MdInput.prototype, "tabindex", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "type", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "name", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MdInput.prototype, "rows", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], MdInput.prototype, "cols", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdInput.prototype, "wrap", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdInput.prototype, "floatingPlaceholder", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdInput.prototype, "autofocus", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdInput.prototype, "disabled", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdInput.prototype, "readonly", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdInput.prototype, "required", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdInput.prototype, "spellcheck", null);
__decorate([
    core_1.Output('blur'),
    __metadata("design:type", Observable_1.Observable),
    __metadata("design:paramtypes", [])
], MdInput.prototype, "onBlur", null);
__decorate([
    core_1.Output('focus'),
    __metadata("design:type", Observable_1.Observable),
    __metadata("design:paramtypes", [])
], MdInput.prototype, "onFocus", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdInput.prototype, "value", null);
__decorate([
    core_1.HostBinding('attr.align'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], MdInput.prototype, "_align", null);
__decorate([
    core_1.ViewChild('input'),
    __metadata("design:type", core_1.ElementRef)
], MdInput.prototype, "_inputElement", void 0);
MdInput = __decorate([
    core_1.Component({
        selector: 'md-input, md-textarea',
        template: require('./input.html'),
        styles: [require('./input.css').toString()],
        providers: [exports.MD_INPUT_CONTROL_VALUE_ACCESSOR],
        host: { '(click)': 'focus()' },
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [core_1.ElementRef, core_1.Renderer])
], MdInput);
exports.MdInput = MdInput;
var MdInputModule = MdInputModule_1 = (function () {
    function MdInputModule() {
    }
    MdInputModule.forRoot = function () {
        return {
            ngModule: MdInputModule_1,
            providers: []
        };
    };
    return MdInputModule;
}());
MdInputModule = MdInputModule_1 = __decorate([
    core_1.NgModule({
        declarations: [MdPlaceholder, MdInput, MdHint, autosize_1.MdTextareaAutosize],
        imports: [common_1.CommonModule, forms_1.FormsModule],
        exports: [MdPlaceholder, MdInput, MdHint, autosize_1.MdTextareaAutosize],
    })
], MdInputModule);
exports.MdInputModule = MdInputModule;
var MdInputModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/input/input.js.map