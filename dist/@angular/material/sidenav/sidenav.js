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
var common_1 = require("@angular/common");
var core_2 = require("../core");
var index_1 = require("../core/a11y/index");
var focus_trap_1 = require("../core/a11y/focus-trap");
/** Sidenav toggle promise result. */
var MdSidenavToggleResult = (function () {
    function MdSidenavToggleResult(type, animationFinished) {
        this.type = type;
        this.animationFinished = animationFinished;
    }
    return MdSidenavToggleResult;
}());
exports.MdSidenavToggleResult = MdSidenavToggleResult;
/**
 * <md-sidenav> component.
 *
 * This component corresponds to the drawer of the sidenav.
 *
 * Please refer to README.md for examples on how to use it.
 */
var MdSidenav = (function () {
    /**
     * @param _elementRef The DOM element reference. Used for transition and width calculation.
     *     If not available we do not hook on transitions.
     */
    function MdSidenav(_elementRef) {
        this._elementRef = _elementRef;
        /** Alignment of the sidenav (direction neutral); whether 'start' or 'end'. */
        this._align = 'start';
        this._valid = true;
        /** Mode of the sidenav; whether 'over' or 'side'. */
        this.mode = 'over';
        /** Whether the sidenav is opened. */
        this._opened = false;
        /** Event emitted when the sidenav is being opened. Use this to synchronize animations. */
        this.onOpenStart = new core_1.EventEmitter();
        /** Event emitted when the sidenav is fully opened. */
        this.onOpen = new core_1.EventEmitter();
        /** Event emitted when the sidenav is being closed. Use this to synchronize animations. */
        this.onCloseStart = new core_1.EventEmitter();
        /** Event emitted when the sidenav is fully closed. */
        this.onClose = new core_1.EventEmitter();
        /** Event emitted when the sidenav alignment changes. */
        this.onAlignChanged = new core_1.EventEmitter();
        /** The current toggle animation promise. `null` if no animation is in progress. */
        this._toggleAnimationPromise = null;
        /**
         * The current toggle animation promise resolution function.
         * `null` if no animation is in progress.
         */
        this._resolveToggleAnimationPromise = null;
    }
    Object.defineProperty(MdSidenav.prototype, "valid", {
        /** Whether this md-sidenav is part of a valid md-sidenav-layout configuration. */
        get: function () {
            return this._valid;
        },
        set: function (value) {
            value = core_2.coerceBooleanProperty(value);
            // When the drawers are not in a valid configuration we close them all until they are in a valid
            // configuration again.
            if (!value) {
                this.close();
            }
            this._valid = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "align", {
        get: function () {
            return this._align;
        },
        set: function (value) {
            // Make sure we have a valid value.
            value = (value == 'end') ? 'end' : 'start';
            if (value != this._align) {
                this._align = value;
                this.onAlignChanged.emit();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "isFocusTrapDisabled", {
        get: function () {
            // The focus trap is only enabled when the sidenav is open in any mode other than side.
            return !this.opened || this.mode == 'side';
        },
        enumerable: true,
        configurable: true
    });
    MdSidenav.prototype.ngAfterContentInit = function () {
        // This can happen when the sidenav is set to opened in the template and the transition
        // isn't ended.
        if (this._toggleAnimationPromise) {
            this._resolveToggleAnimationPromise(true);
            this._toggleAnimationPromise = this._resolveToggleAnimationPromise = null;
        }
    };
    Object.defineProperty(MdSidenav.prototype, "opened", {
        /**
         * Whether the sidenav is opened. We overload this because we trigger an event when it
         * starts or end.
         */
        get: function () { return this._opened; },
        set: function (v) {
            this.toggle(core_2.coerceBooleanProperty(v));
        },
        enumerable: true,
        configurable: true
    });
    /** Open this sidenav, and return a Promise that will resolve when it's fully opened (or get
     * rejected if it didn't). */
    MdSidenav.prototype.open = function () {
        return this.toggle(true);
    };
    /**
     * Close this sidenav, and return a Promise that will resolve when it's fully closed (or get
     * rejected if it didn't).
     */
    MdSidenav.prototype.close = function () {
        return this.toggle(false);
    };
    /**
     * Toggle this sidenav. This is equivalent to calling open() when it's already opened, or
     * close() when it's closed.
     * @param isOpen
     */
    MdSidenav.prototype.toggle = function (isOpen) {
        var _this = this;
        if (isOpen === void 0) { isOpen = !this.opened; }
        if (!this.valid) {
            return Promise.resolve(new MdSidenavToggleResult(isOpen ? 'open' : 'close', true));
        }
        // Shortcut it if we're already opened.
        if (isOpen === this.opened) {
            return this._toggleAnimationPromise ||
                Promise.resolve(new MdSidenavToggleResult(isOpen ? 'open' : 'close', true));
        }
        this._opened = isOpen;
        if (isOpen) {
            this.onOpenStart.emit();
        }
        else {
            this.onCloseStart.emit();
        }
        if (!this.isFocusTrapDisabled) {
            this._focusTrap.focusFirstTabbableElementWhenReady();
        }
        if (this._toggleAnimationPromise) {
            this._resolveToggleAnimationPromise(false);
        }
        this._toggleAnimationPromise = new Promise(function (resolve) {
            _this._resolveToggleAnimationPromise = function (animationFinished) {
                return resolve(new MdSidenavToggleResult(isOpen ? 'open' : 'close', animationFinished));
            };
        });
        return this._toggleAnimationPromise;
    };
    /**
     * When transition has finished, set the internal state for classes and emit the proper event.
     * The event passed is actually of type TransitionEvent, but that type is not available in
     * Android so we use any.
     */
    MdSidenav.prototype._onTransitionEnd = function (transitionEvent) {
        if (transitionEvent.target == this._elementRef.nativeElement
            && transitionEvent.propertyName.endsWith('transform')) {
            if (this._opened) {
                this.onOpen.emit();
            }
            else {
                this.onClose.emit();
            }
            if (this._toggleAnimationPromise) {
                this._resolveToggleAnimationPromise(true);
                this._toggleAnimationPromise = this._resolveToggleAnimationPromise = null;
            }
        }
    };
    Object.defineProperty(MdSidenav.prototype, "_isClosing", {
        get: function () {
            return !this._opened && !!this._toggleAnimationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isOpening", {
        get: function () {
            return this._opened && !!this._toggleAnimationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isClosed", {
        get: function () {
            return !this._opened && !this._toggleAnimationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isOpened", {
        get: function () {
            return this._opened && !this._toggleAnimationPromise;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_isEnd", {
        get: function () {
            return this.align == 'end';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_modeSide", {
        get: function () {
            return this.mode == 'side';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_modeOver", {
        get: function () {
            return this.mode == 'over';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_modePush", {
        get: function () {
            return this.mode == 'push';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenav.prototype, "_width", {
        get: function () {
            if (this._elementRef.nativeElement) {
                return this._elementRef.nativeElement.offsetWidth;
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    return MdSidenav;
}());
__decorate([
    core_1.ViewChild(focus_trap_1.FocusTrap),
    __metadata("design:type", focus_trap_1.FocusTrap)
], MdSidenav.prototype, "_focusTrap", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], MdSidenav.prototype, "align", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], MdSidenav.prototype, "mode", void 0);
__decorate([
    core_1.Output('open-start'),
    __metadata("design:type", Object)
], MdSidenav.prototype, "onOpenStart", void 0);
__decorate([
    core_1.Output('open'),
    __metadata("design:type", Object)
], MdSidenav.prototype, "onOpen", void 0);
__decorate([
    core_1.Output('close-start'),
    __metadata("design:type", Object)
], MdSidenav.prototype, "onCloseStart", void 0);
__decorate([
    core_1.Output('close'),
    __metadata("design:type", Object)
], MdSidenav.prototype, "onClose", void 0);
__decorate([
    core_1.Output('align-changed'),
    __metadata("design:type", Object)
], MdSidenav.prototype, "onAlignChanged", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], MdSidenav.prototype, "opened", null);
MdSidenav = __decorate([
    core_1.Component({
        selector: 'md-sidenav, mat-sidenav',
        template: '<focus-trap [disabled]="isFocusTrapDisabled"><ng-content></ng-content></focus-trap>',
        host: {
            '(transitionend)': '_onTransitionEnd($event)',
            // must prevent the browser from aligning text based on value
            '[attr.align]': 'null',
            '[class.md-sidenav-closed]': '_isClosed',
            '[class.md-sidenav-closing]': '_isClosing',
            '[class.md-sidenav-end]': '_isEnd',
            '[class.md-sidenav-opened]': '_isOpened',
            '[class.md-sidenav-opening]': '_isOpening',
            '[class.md-sidenav-over]': '_modeOver',
            '[class.md-sidenav-push]': '_modePush',
            '[class.md-sidenav-side]': '_modeSide',
            '[class.md-sidenav-invalid]': '!valid',
        },
        changeDetection: core_1.ChangeDetectionStrategy.OnPush,
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], MdSidenav);
exports.MdSidenav = MdSidenav;
/**
 * <md-sidenav-layout> component.
 *
 * This is the parent component to one or two <md-sidenav>s that validates the state internally
 * and coordinates the backdrop and content styling.
 */
var MdSidenavLayout = (function () {
    function MdSidenavLayout(_dir, _element, _renderer) {
        var _this = this;
        this._dir = _dir;
        this._element = _element;
        this._renderer = _renderer;
        /** Event emitted when the sidenav backdrop is clicked. */
        this.onBackdropClicked = new core_1.EventEmitter();
        // If a `Dir` directive exists up the tree, listen direction changes and update the left/right
        // properties to point to the proper start/end.
        if (_dir != null) {
            _dir.dirChange.subscribe(function () { return _this._validateDrawers(); });
        }
    }
    Object.defineProperty(MdSidenavLayout.prototype, "start", {
        get: function () { return this._start; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSidenavLayout.prototype, "end", {
        get: function () { return this._end; },
        enumerable: true,
        configurable: true
    });
    MdSidenavLayout.prototype.ngAfterContentInit = function () {
        var _this = this;
        // On changes, assert on consistency.
        this._sidenavs.changes.subscribe(function () { return _this._validateDrawers(); });
        this._sidenavs.forEach(function (sidenav) {
            _this._watchSidenavToggle(sidenav);
            _this._watchSidenavAlign(sidenav);
        });
        this._validateDrawers();
    };
    /**
     * Subscribes to sidenav events in order to set a class on the main layout element when the
     * sidenav is open and the backdrop is visible. This ensures any overflow on the layout element is
     * properly hidden.
     */
    MdSidenavLayout.prototype._watchSidenavToggle = function (sidenav) {
        var _this = this;
        if (!sidenav || sidenav.mode === 'side') {
            return;
        }
        sidenav.onOpen.subscribe(function () { return _this._setLayoutClass(sidenav, true); });
        sidenav.onClose.subscribe(function () { return _this._setLayoutClass(sidenav, false); });
    };
    /**
     * Subscribes to sidenav onAlignChanged event in order to re-validate drawers when the align
     * changes.
     */
    MdSidenavLayout.prototype._watchSidenavAlign = function (sidenav) {
        var _this = this;
        if (!sidenav) {
            return;
        }
        sidenav.onAlignChanged.subscribe(function () { return _this._validateDrawers(); });
    };
    /** Toggles the 'md-sidenav-opened' class on the main 'md-sidenav-layout' element. */
    MdSidenavLayout.prototype._setLayoutClass = function (sidenav, bool) {
        this._renderer.setElementClass(this._element.nativeElement, 'md-sidenav-opened', bool);
    };
    /** Sets the valid state of the drawers. */
    MdSidenavLayout.prototype._setDrawersValid = function (valid) {
        this._sidenavs.forEach(function (sidenav) {
            sidenav.valid = valid;
        });
        if (!valid) {
            this._start = this._end = this._left = this._right = null;
        }
    };
    /** Validate the state of the sidenav children components. */
    MdSidenavLayout.prototype._validateDrawers = function () {
        this._start = this._end = null;
        // Ensure that we have at most one start and one end sidenav.
        // NOTE: We must call toArray on _sidenavs even though it's iterable
        // (see https://github.com/Microsoft/TypeScript/issues/3164).
        for (var _i = 0, _a = this._sidenavs.toArray(); _i < _a.length; _i++) {
            var sidenav = _a[_i];
            if (sidenav.align == 'end') {
                if (this._end != null) {
                    this._setDrawersValid(false);
                    return;
                }
                this._end = sidenav;
            }
            else {
                if (this._start != null) {
                    this._setDrawersValid(false);
                    return;
                }
                this._start = sidenav;
            }
        }
        this._right = this._left = null;
        // Detect if we're LTR or RTL.
        if (this._dir == null || this._dir.value == 'ltr') {
            this._left = this._start;
            this._right = this._end;
        }
        else {
            this._left = this._end;
            this._right = this._start;
        }
        this._setDrawersValid(true);
    };
    MdSidenavLayout.prototype._onBackdropClicked = function () {
        this.onBackdropClicked.emit();
        this._closeModalSidenav();
    };
    MdSidenavLayout.prototype._closeModalSidenav = function () {
        if (this._start != null && this._start.mode != 'side') {
            this._start.close();
        }
        if (this._end != null && this._end.mode != 'side') {
            this._end.close();
        }
    };
    MdSidenavLayout.prototype._isShowingBackdrop = function () {
        return (this._isSidenavOpen(this._start) && this._start.mode != 'side')
            || (this._isSidenavOpen(this._end) && this._end.mode != 'side');
    };
    MdSidenavLayout.prototype._isSidenavOpen = function (side) {
        return side != null && side.opened;
    };
    /**
     * Return the width of the sidenav, if it's in the proper mode and opened.
     * This may relayout the view, so do not call this often.
     * @param sidenav
     * @param mode
     */
    MdSidenavLayout.prototype._getSidenavEffectiveWidth = function (sidenav, mode) {
        return (this._isSidenavOpen(sidenav) && sidenav.mode == mode) ? sidenav._width : 0;
    };
    MdSidenavLayout.prototype._getMarginLeft = function () {
        return this._getSidenavEffectiveWidth(this._left, 'side');
    };
    MdSidenavLayout.prototype._getMarginRight = function () {
        return this._getSidenavEffectiveWidth(this._right, 'side');
    };
    MdSidenavLayout.prototype._getPositionLeft = function () {
        return this._getSidenavEffectiveWidth(this._left, 'push');
    };
    MdSidenavLayout.prototype._getPositionRight = function () {
        return this._getSidenavEffectiveWidth(this._right, 'push');
    };
    /**
     * Returns the horizontal offset for the content area.  There should never be a value for both
     * left and right, so by subtracting the right value from the left value, we should always get
     * the appropriate offset.
     */
    MdSidenavLayout.prototype._getPositionOffset = function () {
        return this._getPositionLeft() - this._getPositionRight();
    };
    /**
     * This is using [ngStyle] rather than separate [style...] properties because [style.transform]
     * doesn't seem to work right now.
     */
    MdSidenavLayout.prototype._getStyles = function () {
        return {
            marginLeft: this._getMarginLeft() + "px",
            marginRight: this._getMarginRight() + "px",
            transform: "translate3d(" + this._getPositionOffset() + "px, 0, 0)"
        };
    };
    return MdSidenavLayout;
}());
__decorate([
    core_1.ContentChildren(MdSidenav),
    __metadata("design:type", core_1.QueryList)
], MdSidenavLayout.prototype, "_sidenavs", void 0);
__decorate([
    core_1.Output('backdrop-clicked'),
    __metadata("design:type", Object)
], MdSidenavLayout.prototype, "onBackdropClicked", void 0);
MdSidenavLayout = __decorate([
    core_1.Component({
        selector: 'md-sidenav-layout, mat-sidenav-layout',
        // Do not use ChangeDetectionStrategy.OnPush. It does not work for this component because
        // technically it is a sibling of MdSidenav (on the content tree) and isn't updated when MdSidenav
        // changes its state.
        template: require('./sidenav.html'),
        styles: [
            require('./sidenav.css').toString(),
            require('./sidenav-transitions.css').toString(),
        ],
        encapsulation: core_1.ViewEncapsulation.None,
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [core_2.Dir, core_1.ElementRef,
        core_1.Renderer])
], MdSidenavLayout);
exports.MdSidenavLayout = MdSidenavLayout;
var MdSidenavModule = MdSidenavModule_1 = (function () {
    function MdSidenavModule() {
    }
    MdSidenavModule.forRoot = function () {
        return {
            ngModule: MdSidenavModule_1,
            providers: [index_1.A11Y_PROVIDERS]
        };
    };
    return MdSidenavModule;
}());
MdSidenavModule = MdSidenavModule_1 = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, core_2.DefaultStyleCompatibilityModeModule, index_1.A11yModule],
        exports: [MdSidenavLayout, MdSidenav, core_2.DefaultStyleCompatibilityModeModule],
        declarations: [MdSidenavLayout, MdSidenav],
    })
], MdSidenavModule);
exports.MdSidenavModule = MdSidenavModule;
var MdSidenavModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/sidenav/sidenav.js.map