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
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var core_2 = require("../core");
var dir_1 = require("../core/rtl/dir");
var common_1 = require("@angular/common");
var keycodes_1 = require("../core/keyboard/keycodes");
/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 */
var MIN_AUTO_TICK_SEPARATION = 30;
/**
 * Provider Expression that allows md-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 */
exports.MD_SLIDER_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MdSlider; }),
    multi: true
};
/** A simple change event emitted by the MdSlider component. */
var MdSliderChange = (function () {
    function MdSliderChange() {
    }
    return MdSliderChange;
}());
exports.MdSliderChange = MdSliderChange;
var MdSlider = (function () {
    function MdSlider(_dir, elementRef) {
        this._dir = _dir;
        /** A renderer to handle updating the slider's thumb and fill track. */
        this._renderer = null;
        /** The dimensions of the slider. */
        this._sliderDimensions = null;
        /** Whether or not the slider is disabled. */
        this._disabled = false;
        /** Whether or not to show the thumb label. */
        this._thumbLabel = false;
        this._controlValueAccessorChangeFn = function () { };
        /** The last value for which a change event was emitted. */
        this._lastEmittedValue = null;
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this.onTouched = function () { };
        /**
         * Whether or not the thumb is sliding.
         * Used to determine if there should be a transition for the thumb and fill track.
         */
        this._isSliding = false;
        /**
         * Whether or not the slider is active (clicked or sliding).
         * Used to shrink and grow the thumb as according to the Material Design spec.
         */
        this._isActive = false;
        /** The values at which the thumb will snap. */
        this._step = 1;
        /**
         * How often to show ticks. Relative to the step so that a tick always appears on a step.
         * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
         */
        this._tickInterval = 0;
        /** The size of a tick interval as a percentage of the size of the track. */
        this._tickIntervalPercent = 0;
        /** The percentage of the slider that coincides with the value. */
        this._percent = 0;
        /** Value of the slider. */
        this._value = null;
        /** The miniumum value that the slider can have. */
        this._min = 0;
        /** The maximum value that the slider can have. */
        this._max = 100;
        this._invert = false;
        this._vertical = false;
        this.change = new core_1.EventEmitter();
        this._renderer = new SliderRenderer(elementRef);
    }
    Object.defineProperty(MdSlider.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "thumbLabel", {
        get: function () { return this._thumbLabel; },
        set: function (value) { this._thumbLabel = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "step", {
        get: function () { return this._step; },
        set: function (v) { this._step = core_2.coerceNumberProperty(v, this._step); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "tickInterval", {
        get: function () { return this._tickInterval; },
        set: function (v) {
            this._tickInterval = (v == 'auto') ? v : core_2.coerceNumberProperty(v, this._tickInterval);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "tickIntervalPercent", {
        get: function () { return this._tickIntervalPercent; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "percent", {
        get: function () { return this._clamp(this._percent); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "value", {
        get: function () {
            // If the value needs to be read and it is still uninitialized, initialize it to the min.
            if (this._value === null) {
                this.value = this._min;
            }
            return this._value;
        },
        set: function (v) {
            this._value = core_2.coerceNumberProperty(v, this._value);
            this._percent = this._calculatePercentage(this._value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "min", {
        get: function () {
            return this._min;
        },
        set: function (v) {
            this._min = core_2.coerceNumberProperty(v, this._min);
            // If the value wasn't explicitly set by the user, set it to the min.
            if (this._value === null) {
                this.value = this._min;
            }
            this._percent = this._calculatePercentage(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (v) {
            this._max = core_2.coerceNumberProperty(v, this._max);
            this._percent = this._calculatePercentage(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "invert", {
        /** Whether the slider is inverted. */
        get: function () { return this._invert; },
        set: function (value) { this._invert = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "vertical", {
        /** Whether the slider is vertical. */
        get: function () { return this._vertical; },
        set: function (value) { this._vertical = core_2.coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "invertAxis", {
        /**
         * Whether the axis of the slider is inverted.
         * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
         */
        get: function () {
            // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
            // top. However from a y-axis standpoint this is inverted.
            return this.vertical ? !this.invert : this.invert;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "invertMouseCoords", {
        /**
         * Whether mouse events should be converted to a slider position by calculating their distance
         * from the right or bottom edge of the slider as opposed to the top or left.
         */
        get: function () {
            return (this.direction == 'rtl' && !this.vertical) ? !this.invertAxis : this.invertAxis;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "trackFillStyles", {
        /** CSS styles for the track fill element. */
        get: function () {
            var axis = this.vertical ? 'Y' : 'X';
            return {
                'transform': "scale" + axis + "(" + this.percent + ")"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "ticksContainerStyles", {
        /** CSS styles for the ticks container element. */
        get: function () {
            var axis = this.vertical ? 'Y' : 'X';
            // For a horizontal slider in RTL languages we push the ticks container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.
            var sign = !this.vertical && this.direction == 'rtl' ? '' : '-';
            var offset = this.tickIntervalPercent / 2 * 100;
            return {
                'transform': "translate" + axis + "(" + sign + offset + "%)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "ticksStyles", {
        /** CSS styles for the ticks element. */
        get: function () {
            var tickSize = this.tickIntervalPercent * 100;
            var backgroundSize = this.vertical ? "2px " + tickSize + "%" : tickSize + "% 2px";
            var axis = this.vertical ? 'Y' : 'X';
            // Depending on the direction we pushed the ticks container, push the ticks the opposite
            // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
            // ticks 180 degrees so we're really cutting off the end edge abd not the start.
            var sign = !this.vertical && this.direction == 'rtl' ? '-' : '';
            var rotate = !this.vertical && this.direction == 'rtl' ? ' rotate(180deg)' : '';
            return {
                'backgroundSize': backgroundSize,
                // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
                'transform': "translateZ(0) translate" + axis + "(" + sign + tickSize / 2 + "%)" + rotate
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "thumbContainerStyles", {
        get: function () {
            var axis = this.vertical ? 'Y' : 'X';
            // For a horizontal slider in RTL languages we push the thumb container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.
            var invertOffset = (this.direction == 'rtl' && !this.vertical) ? !this.invertAxis : this.invertAxis;
            var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
            return {
                'transform': "translate" + axis + "(-" + offset + "%)"
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "direction", {
        /** The language direction for this slider element. */
        get: function () {
            return (this._dir && this._dir.value == 'rtl') ? 'rtl' : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    MdSlider.prototype._onMouseenter = function () {
        if (this.disabled) {
            return;
        }
        // We save the dimensions of the slider here so we can use them to update the spacing of the
        // ticks and determine where on the slider click and slide events happen.
        this._sliderDimensions = this._renderer.getSliderDimensions();
        this._updateTickIntervalPercent();
    };
    MdSlider.prototype._onClick = function (event) {
        if (this.disabled) {
            return;
        }
        this._isActive = true;
        this._isSliding = false;
        this._renderer.addFocus();
        this._updateValueFromPosition({ x: event.clientX, y: event.clientY });
        this._emitValueIfChanged();
    };
    MdSlider.prototype._onSlide = function (event) {
        if (this.disabled) {
            return;
        }
        // Prevent the slide from selecting anything else.
        event.preventDefault();
        this._updateValueFromPosition({ x: event.center.x, y: event.center.y });
    };
    MdSlider.prototype._onSlideStart = function (event) {
        if (this.disabled) {
            return;
        }
        // Simulate mouseenter in case this is a mobile device.
        this._onMouseenter();
        event.preventDefault();
        this._isSliding = true;
        this._isActive = true;
        this._renderer.addFocus();
        this._updateValueFromPosition({ x: event.center.x, y: event.center.y });
    };
    MdSlider.prototype._onSlideEnd = function () {
        this._isSliding = false;
        this._emitValueIfChanged();
    };
    MdSlider.prototype._onBlur = function () {
        this._isActive = false;
        this.onTouched();
    };
    MdSlider.prototype._onKeydown = function (event) {
        if (this.disabled) {
            return;
        }
        switch (event.keyCode) {
            case keycodes_1.PAGE_UP:
                this._increment(10);
                break;
            case keycodes_1.PAGE_DOWN:
                this._increment(-10);
                break;
            case keycodes_1.END:
                this.value = this.max;
                break;
            case keycodes_1.HOME:
                this.value = this.min;
                break;
            case keycodes_1.LEFT_ARROW:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this.direction == 'rtl' ? 1 : -1);
                break;
            case keycodes_1.UP_ARROW:
                this._increment(1);
                break;
            case keycodes_1.RIGHT_ARROW:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this.direction == 'rtl' ? -1 : 1);
                break;
            case keycodes_1.DOWN_ARROW:
                this._increment(-1);
                break;
            default:
                // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                // it.
                return;
        }
        event.preventDefault();
    };
    /** Increments the slider by the given number of steps (negative number decrements). */
    MdSlider.prototype._increment = function (numSteps) {
        this.value = this._clamp(this.value + this.step * numSteps, this.min, this.max);
    };
    /**
     * Calculate the new value from the new physical location. The value will always be snapped.
     */
    MdSlider.prototype._updateValueFromPosition = function (pos) {
        if (!this._sliderDimensions) {
            return;
        }
        var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
        var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
        var posComponent = this.vertical ? pos.y : pos.x;
        // The exact value is calculated from the event and used to find the closest snap value.
        var percent = this._clamp((posComponent - offset) / size);
        if (this.invertMouseCoords) {
            percent = 1 - percent;
        }
        var exactValue = this._calculateValue(percent);
        // This calculation finds the closest step by finding the closest whole number divisible by the
        // step relative to the min.
        var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min;
        // The value needs to snap to the min and max.
        this.value = this._clamp(closestValue, this.min, this.max);
    };
    /** Emits a change event if the current value is different from the last emitted value. */
    MdSlider.prototype._emitValueIfChanged = function () {
        if (this.value != this._lastEmittedValue) {
            var event_1 = new MdSliderChange();
            event_1.source = this;
            event_1.value = this.value;
            this._lastEmittedValue = this.value;
            this._controlValueAccessorChangeFn(this.value);
            this.change.emit(event_1);
        }
    };
    /**
     * Updates the amount of space between ticks as a percentage of the width of the slider.
     */
    MdSlider.prototype._updateTickIntervalPercent = function () {
        if (!this.tickInterval) {
            return;
        }
        if (this.tickInterval == 'auto') {
            var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            var pixelsPerStep = trackSize * this.step / (this.max - this.min);
            var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
            var pixelsPerTick = stepsPerTick * this.step;
            this._tickIntervalPercent = pixelsPerTick / trackSize;
        }
        else {
            this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
        }
    };
    /**
     * Calculates the percentage of the slider that a value is.
     */
    MdSlider.prototype._calculatePercentage = function (value) {
        return (value - this.min) / (this.max - this.min);
    };
    /**
     * Calculates the value a percentage of the slider corresponds to.
     */
    MdSlider.prototype._calculateValue = function (percentage) {
        return this.min + percentage * (this.max - this.min);
    };
    /**
     * Return a number between two numbers.
     */
    MdSlider.prototype._clamp = function (value, min, max) {
        if (min === void 0) { min = 0; }
        if (max === void 0) { max = 1; }
        return Math.max(min, Math.min(value, max));
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    MdSlider.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    MdSlider.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    MdSlider.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     */
    MdSlider.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return MdSlider;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdSlider.prototype, "disabled", null);
__decorate([
    core_1.Input('thumb-label'),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Object])
], MdSlider.prototype, "thumbLabel", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdSlider.prototype, "step", null);
__decorate([
    core_1.Input('tick-interval'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdSlider.prototype, "tickInterval", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], MdSlider.prototype, "value", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], MdSlider.prototype, "min", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], MdSlider.prototype, "max", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdSlider.prototype, "invert", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdSlider.prototype, "vertical", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], MdSlider.prototype, "change", void 0);
MdSlider = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'md-slider, mat-slider',
        providers: [exports.MD_SLIDER_VALUE_ACCESSOR],
        host: {
            '(blur)': '_onBlur()',
            '(click)': '_onClick($event)',
            '(keydown)': '_onKeydown($event)',
            '(mouseenter)': '_onMouseenter()',
            '(slide)': '_onSlide($event)',
            '(slideend)': '_onSlideEnd()',
            '(slidestart)': '_onSlideStart($event)',
            'role': 'slider',
            'tabindex': '0',
            '[attr.aria-disabled]': 'disabled',
            '[attr.aria-valuemax]': 'max',
            '[attr.aria-valuemin]': 'min',
            '[attr.aria-valuenow]': 'value',
            '[class.md-slider-active]': '_isActive',
            '[class.md-slider-disabled]': 'disabled',
            '[class.md-slider-has-ticks]': 'tickInterval',
            '[class.md-slider-horizontal]': '!vertical',
            '[class.md-slider-axis-inverted]': 'invertAxis',
            '[class.md-slider-sliding]': '_isSliding',
            '[class.md-slider-thumb-label-showing]': 'thumbLabel',
            '[class.md-slider-vertical]': 'vertical',
        },
        templateUrl: 'slider.html',
        styleUrls: ['slider.css'],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [dir_1.Dir, core_1.ElementRef])
], MdSlider);
exports.MdSlider = MdSlider;
/**
 * Renderer class in order to keep all dom manipulation in one place and outside of the main class.
 */
var SliderRenderer = (function () {
    function SliderRenderer(elementRef) {
        this._sliderElement = elementRef.nativeElement;
    }
    /**
     * Get the bounding client rect of the slider track element.
     * The track is used rather than the native element to ignore the extra space that the thumb can
     * take up.
     */
    SliderRenderer.prototype.getSliderDimensions = function () {
        var trackElement = this._sliderElement.querySelector('.md-slider-track');
        return trackElement.getBoundingClientRect();
    };
    /**
     * Focuses the native element.
     * Currently only used to allow a blur event to fire but will be used with keyboard input later.
     */
    SliderRenderer.prototype.addFocus = function () {
        this._sliderElement.focus();
    };
    return SliderRenderer;
}());
exports.SliderRenderer = SliderRenderer;
var MdSliderModule = MdSliderModule_1 = (function () {
    function MdSliderModule() {
    }
    MdSliderModule.forRoot = function () {
        return {
            ngModule: MdSliderModule_1,
            providers: [{ provide: platform_browser_1.HAMMER_GESTURE_CONFIG, useClass: core_2.MdGestureConfig }]
        };
    };
    return MdSliderModule;
}());
MdSliderModule = MdSliderModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, forms_1.FormsModule, core_2.DefaultStyleCompatibilityModeModule],
        exports: [MdSlider, core_2.DefaultStyleCompatibilityModeModule],
        declarations: [MdSlider],
        providers: [
            { provide: platform_browser_1.HAMMER_GESTURE_CONFIG, useClass: core_2.MdGestureConfig },
        ],
    })
], MdSliderModule);
exports.MdSliderModule = MdSliderModule;
var MdSliderModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/slider/slider.js.map