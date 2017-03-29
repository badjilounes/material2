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
var core_2 = require("../core");
var tooltip_errors_1 = require("./tooltip-errors");
var Subject_1 = require("rxjs/Subject");
var dir_1 = require("../core/rtl/dir");
/** Time in ms to delay before changing the tooltip visibility to hidden */
exports.TOUCHEND_HIDE_DELAY = 1500;
/**
 * Directive that attaches a material design tooltip to the host element. Animates the showing and
 * hiding of a tooltip provided position (defaults to below the element).
 *
 * https://material.google.com/components/tooltips.html
 */
var MdTooltip = (function () {
    function MdTooltip(_overlay, _elementRef, _viewContainerRef, _ngZone, _dir) {
        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._dir = _dir;
        /** Allows the user to define the position of the tooltip relative to the parent element */
        this._position = 'below';
    }
    Object.defineProperty(MdTooltip.prototype, "position", {
        get: function () {
            return this._position;
        },
        set: function (value) {
            if (value !== this._position) {
                this._position = value;
                // TODO(andrewjs): When the overlay's position can be dynamically changed, do not destroy
                // the tooltip.
                if (this._tooltipInstance) {
                    this._disposeTooltip();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTooltip.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            this._message = value;
            if (this._tooltipInstance) {
                this._setTooltipMessage(this._message);
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Dispose the tooltip when destroyed */
    MdTooltip.prototype.ngOnDestroy = function () {
        if (this._tooltipInstance) {
            this._disposeTooltip();
        }
    };
    /** Shows the tooltip */
    MdTooltip.prototype.show = function () {
        if (!this._message || !this._message.trim()) {
            return;
        }
        if (!this._tooltipInstance) {
            this._createTooltip();
        }
        this._setTooltipMessage(this._message);
        this._tooltipInstance.show(this._position);
    };
    /** Hides the tooltip after the provided delay in ms, defaulting to 0ms. */
    MdTooltip.prototype.hide = function (delay) {
        if (delay === void 0) { delay = 0; }
        if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
        }
    };
    /** Shows/hides the tooltip */
    MdTooltip.prototype.toggle = function () {
        this._isTooltipVisible() ? this.hide() : this.show();
    };
    /** Returns true if the tooltip is currently visible to the user */
    MdTooltip.prototype._isTooltipVisible = function () {
        return this._tooltipInstance && this._tooltipInstance.isVisible();
    };
    /** Create the tooltip to display */
    MdTooltip.prototype._createTooltip = function () {
        var _this = this;
        this._createOverlay();
        var portal = new core_2.ComponentPortal(TooltipComponent, this._viewContainerRef);
        this._tooltipInstance = this._overlayRef.attach(portal).instance;
        // Dispose the overlay when finished the shown tooltip.
        this._tooltipInstance.afterHidden().subscribe(function () {
            // Check first if the tooltip has already been removed through this components destroy.
            if (_this._tooltipInstance) {
                _this._disposeTooltip();
            }
        });
    };
    /** Create the overlay config and position strategy */
    MdTooltip.prototype._createOverlay = function () {
        var origin = this._getOrigin();
        var position = this._getOverlayPosition();
        var strategy = this._overlay.position().connectedTo(this._elementRef, origin, position);
        var config = new core_2.OverlayState();
        config.positionStrategy = strategy;
        this._overlayRef = this._overlay.create(config);
    };
    /** Disposes the current tooltip and the overlay it is attached to */
    MdTooltip.prototype._disposeTooltip = function () {
        this._overlayRef.dispose();
        this._overlayRef = null;
        this._tooltipInstance = null;
    };
    /** Returns the origin position based on the user's position preference */
    MdTooltip.prototype._getOrigin = function () {
        if (this.position == 'above' || this.position == 'below') {
            return { originX: 'center', originY: this.position == 'above' ? 'top' : 'bottom' };
        }
        var isDirectionLtr = !this._dir || this._dir.value == 'ltr';
        if (this.position == 'left' ||
            this.position == 'before' && isDirectionLtr ||
            this.position == 'after' && !isDirectionLtr) {
            return { originX: 'start', originY: 'center' };
        }
        if (this.position == 'right' ||
            this.position == 'after' && isDirectionLtr ||
            this.position == 'before' && !isDirectionLtr) {
            return { originX: 'end', originY: 'center' };
        }
        throw new tooltip_errors_1.MdTooltipInvalidPositionError(this.position);
    };
    /** Returns the overlay position based on the user's preference */
    MdTooltip.prototype._getOverlayPosition = function () {
        if (this.position == 'above') {
            return { overlayX: 'center', overlayY: 'bottom' };
        }
        if (this.position == 'below') {
            return { overlayX: 'center', overlayY: 'top' };
        }
        var isLtr = !this._dir || this._dir.value == 'ltr';
        if (this.position == 'left' ||
            this.position == 'before' && isLtr ||
            this.position == 'after' && !isLtr) {
            return { overlayX: 'end', overlayY: 'center' };
        }
        if (this.position == 'right' ||
            this.position == 'after' && isLtr ||
            this.position == 'before' && !isLtr) {
            return { overlayX: 'start', overlayY: 'center' };
        }
        throw new tooltip_errors_1.MdTooltipInvalidPositionError(this.position);
    };
    /** Updates the tooltip message and repositions the overlay according to the new message length */
    MdTooltip.prototype._setTooltipMessage = function (message) {
        var _this = this;
        // Must wait for the message to be painted to the tooltip so that the overlay can properly
        // calculate the correct positioning based on the size of the text.
        this._tooltipInstance.message = message;
        this._ngZone.onMicrotaskEmpty.first().subscribe(function () {
            if (_this._tooltipInstance) {
                _this._overlayRef.updatePosition();
            }
        });
    };
    return MdTooltip;
}());
__decorate([
    core_1.Input('tooltip-position'),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MdTooltip.prototype, "position", null);
__decorate([
    core_1.Input('md-tooltip'),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [String])
], MdTooltip.prototype, "message", null);
MdTooltip = __decorate([
    core_1.Directive({
        selector: '[md-tooltip], [mat-tooltip]',
        host: {
            '(longpress)': 'show()',
            '(touchend)': 'hide(' + exports.TOUCHEND_HIDE_DELAY + ')',
            '(mouseenter)': 'show()',
            '(mouseleave)': 'hide()',
        },
        exportAs: 'mdTooltip',
    }),
    __param(4, core_1.Optional()),
    __metadata("design:paramtypes", [core_2.Overlay, core_1.ElementRef,
        core_1.ViewContainerRef, core_1.NgZone,
        dir_1.Dir])
], MdTooltip);
exports.MdTooltip = MdTooltip;
var TooltipComponent = (function () {
    function TooltipComponent(_dir) {
        this._dir = _dir;
        /** Whether interactions on the page should close the tooltip */
        this._closeOnInteraction = false;
        /** The transform origin used in the animation for showing and hiding the tooltip */
        this._transformOrigin = 'bottom';
        /** Subject for notifying that the tooltip has been hidden from the view */
        this._onHide = new Subject_1.Subject();
    }
    /** Shows the tooltip with an animation originating from the provided origin */
    TooltipComponent.prototype.show = function (position) {
        var _this = this;
        this._closeOnInteraction = false;
        this._visibility = 'visible';
        this._setTransformOrigin(position);
        // Cancel the delayed hide if it is scheduled
        if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
        }
        // If this was set to true immediately, then the body click would trigger interaction and
        // close the tooltip right after it was displayed.
        setTimeout(function () { _this._closeOnInteraction = true; }, 0);
    };
    /** Begins the animation to hide the tooltip after the provided delay in ms */
    TooltipComponent.prototype.hide = function (delay) {
        var _this = this;
        this._hideTimeoutId = setTimeout(function () {
            _this._visibility = 'hidden';
            _this._closeOnInteraction = false;
        }, delay);
    };
    /** Returns an observable that notifies when the tooltip has been hidden from view */
    TooltipComponent.prototype.afterHidden = function () {
        return this._onHide.asObservable();
    };
    /** Whether the tooltip is being displayed */
    TooltipComponent.prototype.isVisible = function () {
        return this._visibility === 'visible';
    };
    /** Sets the tooltip transform origin according to the tooltip position */
    TooltipComponent.prototype._setTransformOrigin = function (value) {
        var isLtr = !this._dir || this._dir.value == 'ltr';
        switch (value) {
            case 'before':
                this._transformOrigin = isLtr ? 'right' : 'left';
                break;
            case 'after':
                this._transformOrigin = isLtr ? 'left' : 'right';
                break;
            case 'left':
                this._transformOrigin = 'right';
                break;
            case 'right':
                this._transformOrigin = 'left';
                break;
            case 'above':
                this._transformOrigin = 'bottom';
                break;
            case 'below':
                this._transformOrigin = 'top';
                break;
            default: throw new tooltip_errors_1.MdTooltipInvalidPositionError(value);
        }
    };
    TooltipComponent.prototype._afterVisibilityAnimation = function (e) {
        if (e.toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
        }
    };
    /**
     * Interactions on the HTML body should close the tooltip immediately as defined in the
     * material design spec.
     * https://material.google.com/components/tooltips.html#tooltips-interaction
     */
    TooltipComponent.prototype._handleBodyInteraction = function () {
        if (this._closeOnInteraction) {
            this.hide(0);
        }
    };
    return TooltipComponent;
}());
TooltipComponent = __decorate([
    core_1.Component({
        selector: 'md-tooltip-component, mat-tooltip-component',
        template: require('./tooltip.html'),
        styles: [require('./tooltip.css').toString()],
        animations: [
            core_1.trigger('state', [
                core_1.state('void', core_1.style({ transform: 'scale(0)' })),
                core_1.state('visible', core_1.style({ transform: 'scale(1)' })),
                core_1.state('hidden', core_1.style({ transform: 'scale(0)' })),
                core_1.transition('* => visible', core_1.animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
                core_1.transition('* => hidden', core_1.animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
            ])
        ],
        host: {
            '(body:click)': 'this._handleBodyInteraction()'
        }
    }),
    __param(0, core_1.Optional()),
    __metadata("design:paramtypes", [dir_1.Dir])
], TooltipComponent);
exports.TooltipComponent = TooltipComponent;
var MdTooltipModule = MdTooltipModule_1 = (function () {
    function MdTooltipModule() {
    }
    MdTooltipModule.forRoot = function () {
        return {
            ngModule: MdTooltipModule_1,
            providers: core_2.OVERLAY_PROVIDERS,
        };
    };
    return MdTooltipModule;
}());
MdTooltipModule = MdTooltipModule_1 = __decorate([
    core_1.NgModule({
        imports: [core_2.OverlayModule, core_2.DefaultStyleCompatibilityModeModule],
        exports: [MdTooltip, TooltipComponent, core_2.DefaultStyleCompatibilityModeModule],
        declarations: [MdTooltip, TooltipComponent],
        entryComponents: [TooltipComponent],
    })
], MdTooltipModule);
exports.MdTooltipModule = MdTooltipModule;
var MdTooltipModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/tooltip/tooltip.js.map