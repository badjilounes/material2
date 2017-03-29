(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/Subject'), require('@angular/common'), require('@angular/platform-browser'), require('@angular/forms'), require('rxjs/Observable'), require('@angular/http'), require('rxjs/add/observable/forkJoin'), require('rxjs/add/observable/of'), require('rxjs/add/operator/map'), require('rxjs/add/operator/filter'), require('rxjs/add/operator/do'), require('rxjs/add/operator/share'), require('rxjs/add/operator/finally'), require('rxjs/add/operator/catch'), require('rxjs/add/operator/first')) :
    typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/Subject', '@angular/common', '@angular/platform-browser', '@angular/forms', 'rxjs/Observable', '@angular/http', 'rxjs/add/observable/forkJoin', 'rxjs/add/observable/of', 'rxjs/add/operator/map', 'rxjs/add/operator/filter', 'rxjs/add/operator/do', 'rxjs/add/operator/share', 'rxjs/add/operator/finally', 'rxjs/add/operator/catch', 'rxjs/add/operator/first'], factory) :
    (factory((global.ng = global.ng || {}, global.ng.material = global.ng.material || {}),global.ng.core,global.Rx,global.ng.common,global.ng.platformBrowser,global.ng.forms,global.Rx,global.ng.http,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype));
}(this, (function (exports,_angular_core,rxjs_Subject,_angular_common,_angular_platformBrowser,_angular_forms,rxjs_Observable,_angular_http,rxjs_add_observable_forkJoin,rxjs_add_observable_of,rxjs_add_operator_map,rxjs_add_operator_filter,rxjs_add_operator_do,rxjs_add_operator_share,rxjs_add_operator_finally,rxjs_add_operator_catch,rxjs_add_operator_first) { 'use strict';

var __decorate$2 = (this && this.__decorate) || function (decorators, target, key, desc) {
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
var MATERIAL_COMPATIBILITY_MODE = new _angular_core.OpaqueToken('md-compatibiility-mode');
/** Selector that matches all elements that may have style collisions with material1. */
var MAT_ELEMENTS_SELECTOR = "\n  mat-autocomplete,\n  mat-card,\n  mat-card-actions,\n  mat-card-content,\n  mat-card-footer,\n  mat-card-header,\n  mat-card-subtitle,\n  mat-card-title,\n  mat-card-title-group,\n  mat-checkbox,\n  mat-chip,\n  mat-dialog-container,\n  mat-divider,\n  mat-grid-list,\n  mat-grid-tile,\n  mat-grid-tile-footer,\n  mat-grid-tile-header,\n  mat-hint,\n  mat-icon,\n  mat-ink-bar,\n  mat-input,\n  mat-list,\n  mat-list-item,\n  mat-menu,\n  mat-nav-list,\n  mat-option,\n  mat-placeholder,\n  mat-progress-bar,\n  mat-progress-circle,\n  mat-radio-button,\n  mat-radio-group,\n  mat-select,\n  mat-sidenav,\n  mat-slider,\n  mat-spinner,\n  mat-tab,\n  mat-toolbar\n";
exports.MatPrefixEnforcer = (function () {
    function MatPrefixEnforcer(isCompatibilityMode) {
        if (!isCompatibilityMode) {
            throw Error('The "mat-" prefix cannot be used out of ng-material v1 compatibility mode.');
        }
    }
    return MatPrefixEnforcer;
}());
exports.MatPrefixEnforcer = __decorate$2([
    _angular_core.Directive({ selector: MAT_ELEMENTS_SELECTOR }),
    __param(0, _angular_core.Inject(MATERIAL_COMPATIBILITY_MODE)),
    __metadata("design:paramtypes", [Boolean])
], exports.MatPrefixEnforcer);
exports.DefaultStyleCompatibilityModeModule = DefaultStyleCompatibilityModeModule_1 = (function () {
    function DefaultStyleCompatibilityModeModule() {
    }
    DefaultStyleCompatibilityModeModule.forRoot = function () {
        return {
            ngModule: DefaultStyleCompatibilityModeModule_1,
            providers: [],
        };
    };
    return DefaultStyleCompatibilityModeModule;
}());
exports.DefaultStyleCompatibilityModeModule = DefaultStyleCompatibilityModeModule_1 = __decorate$2([
    _angular_core.NgModule({
        declarations: [exports.MatPrefixEnforcer],
        exports: [exports.MatPrefixEnforcer],
        providers: [{
                provide: MATERIAL_COMPATIBILITY_MODE, useValue: false,
            }]
    })
], exports.DefaultStyleCompatibilityModeModule);
var DefaultStyleCompatibilityModeModule_1;

var __decorate$1 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.MdLine = (function () {
    function MdLine() {
    }
    return MdLine;
}());
exports.MdLine = __decorate$1([
    _angular_core.Directive({ selector: '[md-line], [mat-line]' })
], exports.MdLine);
/* Helper that takes a query list of lines and sets the correct class on the host */
var MdLineSetter = (function () {
    function MdLineSetter(_lines, _renderer, _element) {
        var _this = this;
        this._lines = _lines;
        this._renderer = _renderer;
        this._element = _element;
        this._setLineClass(this._lines.length);
        this._lines.changes.subscribe(function () {
            _this._setLineClass(_this._lines.length);
        });
    }
    MdLineSetter.prototype._setLineClass = function (count) {
        this._resetClasses();
        if (count === 2 || count === 3) {
            this._setClass("md-" + count + "-line", true);
        }
        else if (count > 3) {
            this._setClass("md-multi-line", true);
        }
    };
    MdLineSetter.prototype._resetClasses = function () {
        this._setClass('md-2-line', false);
        this._setClass('md-3-line', false);
        this._setClass('md-multi-line', false);
    };
    MdLineSetter.prototype._setClass = function (className, bool) {
        this._renderer.setElementClass(this._element.nativeElement, className, bool);
    };
    return MdLineSetter;
}());
exports.MdLineModule = (function () {
    function MdLineModule() {
    }
    return MdLineModule;
}());
exports.MdLineModule = __decorate$1([
    _angular_core.NgModule({
        imports: [exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdLine, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdLine],
    })
], exports.MdLineModule);

var __decorate$3 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$1 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.Dir = (function () {
    function Dir() {
        this._dir = 'ltr';
        this.dirChange = new _angular_core.EventEmitter();
    }
    Object.defineProperty(Dir.prototype, "dir", {
        get: function () {
            return this._dir;
        },
        set: function (v) {
            var old = this._dir;
            this._dir = v;
            if (old != this._dir) {
                this.dirChange.emit();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dir.prototype, "value", {
        get: function () { return this.dir; },
        set: function (v) { this.dir = v; },
        enumerable: true,
        configurable: true
    });
    return Dir;
}());
__decorate$3([
    _angular_core.Input('dir'),
    __metadata$1("design:type", String)
], exports.Dir.prototype, "_dir", void 0);
__decorate$3([
    _angular_core.Output(),
    __metadata$1("design:type", Object)
], exports.Dir.prototype, "dirChange", void 0);
__decorate$3([
    _angular_core.HostBinding('attr.dir'),
    __metadata$1("design:type", String),
    __metadata$1("design:paramtypes", [String])
], exports.Dir.prototype, "dir", null);
exports.Dir = __decorate$3([
    _angular_core.Directive({
        selector: '[dir]',
        // TODO(hansl): maybe `$implicit` isn't the best option here, but for now that's the best we got.
        exportAs: '$implicit'
    })
], exports.Dir);
exports.RtlModule = RtlModule_1 = (function () {
    function RtlModule() {
    }
    RtlModule.forRoot = function () {
        return {
            ngModule: RtlModule_1,
            providers: []
        };
    };
    return RtlModule;
}());
exports.RtlModule = RtlModule_1 = __decorate$3([
    _angular_core.NgModule({
        exports: [exports.Dir],
        declarations: [exports.Dir]
    })
], exports.RtlModule);
var RtlModule_1;

/** TODO: internal */
var ForegroundRippleState;
(function (ForegroundRippleState) {
    ForegroundRippleState[ForegroundRippleState["NEW"] = 0] = "NEW";
    ForegroundRippleState[ForegroundRippleState["EXPANDING"] = 1] = "EXPANDING";
    ForegroundRippleState[ForegroundRippleState["FADING_OUT"] = 2] = "FADING_OUT";
})(ForegroundRippleState || (ForegroundRippleState = {}));
/**
 * Wrapper for a foreground ripple DOM element and its animation state.
 * TODO: internal
 */
var ForegroundRipple = (function () {
    function ForegroundRipple(rippleElement) {
        this.rippleElement = rippleElement;
        this.state = ForegroundRippleState.NEW;
    }
    return ForegroundRipple;
}());
var RIPPLE_SPEED_PX_PER_SECOND = 1000;
var MIN_RIPPLE_FILL_TIME_SECONDS = 0.1;
var MAX_RIPPLE_FILL_TIME_SECONDS = 0.3;
/**
 * Returns the distance from the point (x, y) to the furthest corner of a rectangle.
 */
var distanceToFurthestCorner = function (x, y, rect) {
    var distX = Math.max(Math.abs(x - rect.left), Math.abs(x - rect.right));
    var distY = Math.max(Math.abs(y - rect.top), Math.abs(y - rect.bottom));
    return Math.sqrt(distX * distX + distY * distY);
};
/**
 * Helper service that performs DOM manipulations. Not intended to be used outside this module.
 * The constructor takes a reference to the ripple directive's host element and a map of DOM
 * event handlers to be installed on the element that triggers ripple animations.
 * This will eventually become a custom renderer once Angular support exists.
 * TODO: internal
 */
var RippleRenderer = (function () {
    function RippleRenderer(_elementRef, _eventHandlers, _ngZone) {
        this._eventHandlers = _eventHandlers;
        this._ngZone = _ngZone;
        this._rippleElement = _elementRef.nativeElement;
        // The background div is created in createBackgroundIfNeeded when the ripple becomes enabled.
        // This avoids creating unneeded divs when the ripple is always disabled.
        this._backgroundDiv = null;
    }
    /** Creates the div for the ripple background, if it doesn't already exist. */
    RippleRenderer.prototype.createBackgroundIfNeeded = function () {
        if (!this._backgroundDiv) {
            this._backgroundDiv = document.createElement('div');
            this._backgroundDiv.classList.add('md-ripple-background');
            this._rippleElement.appendChild(this._backgroundDiv);
        }
    };
    /**
     * Installs event handlers on the given trigger element, and removes event handlers from the
     * previous trigger if needed.
     */
    RippleRenderer.prototype.setTriggerElement = function (newTrigger) {
        var _this = this;
        if (this._triggerElement !== newTrigger) {
            if (this._triggerElement) {
                this._eventHandlers.forEach(function (eventHandler, eventName) {
                    _this._triggerElement.removeEventListener(eventName, eventHandler);
                });
            }
            this._triggerElement = newTrigger;
            if (this._triggerElement) {
                this._eventHandlers.forEach(function (eventHandler, eventName) {
                    _this._triggerElement.addEventListener(eventName, eventHandler);
                });
            }
        }
    };
    /** Installs event handlers on the host element of the md-ripple directive. */
    RippleRenderer.prototype.setTriggerElementToHost = function () {
        this.setTriggerElement(this._rippleElement);
    };
    /** Removes event handlers from the current trigger element if needed. */
    RippleRenderer.prototype.clearTriggerElement = function () {
        this.setTriggerElement(null);
    };
    /**
     * Creates a foreground ripple and sets its animation to expand and fade in from the position
     * given by rippleOriginLeft and rippleOriginTop (or from the center of the <md-ripple>
     * bounding rect if centered is true).
     */
    RippleRenderer.prototype.createForegroundRipple = function (rippleOriginLeft, rippleOriginTop, color, centered, radius, speedFactor, transitionEndCallback) {
        var _this = this;
        var parentRect = this._rippleElement.getBoundingClientRect();
        // Create a foreground ripple div with the size and position of the fully expanded ripple.
        // When the div is created, it's given a transform style that causes the ripple to be displayed
        // small and centered on the event location (or the center of the bounding rect if the centered
        // argument is true). Removing that transform causes the ripple to animate to its natural size.
        var startX = centered ? (parentRect.left + parentRect.width / 2) : rippleOriginLeft;
        var startY = centered ? (parentRect.top + parentRect.height / 2) : rippleOriginTop;
        var offsetX = startX - parentRect.left;
        var offsetY = startY - parentRect.top;
        var maxRadius = radius > 0 ? radius : distanceToFurthestCorner(startX, startY, parentRect);
        var rippleDiv = document.createElement('div');
        this._rippleElement.appendChild(rippleDiv);
        rippleDiv.classList.add('md-ripple-foreground');
        rippleDiv.style.left = offsetX - maxRadius + "px";
        rippleDiv.style.top = offsetY - maxRadius + "px";
        rippleDiv.style.width = 2 * maxRadius + "px";
        rippleDiv.style.height = rippleDiv.style.width;
        // If color input is not set, this will default to the background color defined in CSS.
        rippleDiv.style.backgroundColor = color;
        // Start the ripple tiny.
        rippleDiv.style.transform = "scale(0.001)";
        var fadeInSeconds = (1 / (speedFactor || 1)) * Math.max(MIN_RIPPLE_FILL_TIME_SECONDS, Math.min(MAX_RIPPLE_FILL_TIME_SECONDS, maxRadius / RIPPLE_SPEED_PX_PER_SECOND));
        rippleDiv.style.transitionDuration = fadeInSeconds + "s";
        // https://timtaubert.de/blog/2012/09/css-transitions-for-dynamically-created-dom-elements/
        // Store the opacity to prevent this line as being seen as a no-op by optimizers.
        this._opacity = window.getComputedStyle(rippleDiv).opacity;
        rippleDiv.classList.add('md-ripple-fade-in');
        // Clearing the transform property causes the ripple to animate to its full size.
        rippleDiv.style.transform = '';
        var ripple = new ForegroundRipple(rippleDiv);
        ripple.state = ForegroundRippleState.EXPANDING;
        rippleDiv.addEventListener('transitionend', function (event) { return transitionEndCallback(ripple, event); });
        // Ensure that ripples are always removed, even when transitionend doesn't fire.
        // Run this outside the Angular zone because there's nothing that Angular cares about.
        // If it were to run inside the Angular zone, every test that used ripples would have to be
        // either async or fakeAsync.
        this._ngZone.runOutsideAngular(function () {
            // The ripple lasts a time equal to the sum of fade-in, transform,
            // and fade-out (3 * fade-in time).
            var rippleDuration = fadeInSeconds * 3 * 1000;
            setTimeout(function () { return _this.removeRippleFromDom(ripple.rippleElement); }, rippleDuration);
        });
    };
    /** Fades out a foreground ripple after it has fully expanded and faded in. */
    RippleRenderer.prototype.fadeOutForegroundRipple = function (ripple) {
        ripple.classList.remove('md-ripple-fade-in');
        ripple.classList.add('md-ripple-fade-out');
    };
    /** Removes a foreground ripple from the DOM after it has faded out. */
    RippleRenderer.prototype.removeRippleFromDom = function (ripple) {
        if (ripple && ripple.parentElement) {
            ripple.parentElement.removeChild(ripple);
        }
    };
    /** Fades in the ripple background. */
    RippleRenderer.prototype.fadeInRippleBackground = function (color) {
        this._backgroundDiv.classList.add('md-ripple-active');
        // If color is not set, this will default to the background color defined in CSS.
        this._backgroundDiv.style.backgroundColor = color;
    };
    /** Fades out the ripple background. */
    RippleRenderer.prototype.fadeOutRippleBackground = function () {
        if (this._backgroundDiv) {
            this._backgroundDiv.classList.remove('md-ripple-active');
        }
    };
    return RippleRenderer;
}());

var __decorate$5 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * Simple utility for getting the bounds of the browser viewport.
 * TODO: internal
 */
var ViewportRuler = (function () {
    function ViewportRuler() {
    }
    // TODO(jelbourn): cache the document's bounding rect and only update it when the window
    // is resized (debounced).
    /** Gets a ClientRect for the viewport's bounds. */
    ViewportRuler.prototype.getViewportRect = function () {
        // Use the document element's bounding rect rather than the window scroll properties
        // (e.g. pageYOffset, scrollY) due to in issue in Chrome and IE where window scroll
        // properties and client coordinates (boundingClientRect, clientX/Y, etc.) are in different
        // conceptual viewports. Under most circumstances these viewports are equivalent, but they
        // can disagree when the page is pinch-zoomed (on devices that support touch).
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=489206#c4
        // We use the documentElement instead of the body because, by default (without a css reset)
        // browsers typically give the document body an 8px margin, which is not included in
        // getBoundingClientRect().
        var documentRect = document.documentElement.getBoundingClientRect();
        var scrollPosition = this.getViewportScrollPosition(documentRect);
        var height = window.innerHeight;
        var width = window.innerWidth;
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height: height,
            width: width,
        };
    };
    /**
     * Gets the (top, left) scroll position of the viewport.
     * @param documentRect
     */
    ViewportRuler.prototype.getViewportScrollPosition = function (documentRect) {
        if (documentRect === void 0) { documentRect = document.documentElement.getBoundingClientRect(); }
        // The top-left-corner of the viewport is determined by the scroll position of the document
        // body, normally just (scrollLeft, scrollTop). However, Chrome and Firefox disagree about
        // whether `document.body` or `document.documentElement` is the scrolled element, so reading
        // `scrollTop` and `scrollLeft` is inconsistent. However, using the bounding rect of
        // `document.documentElement` works consistently, where the `top` and `left` values will
        // equal negative the scroll position.
        var top = -documentRect.top || document.body.scrollTop || window.scrollY || 0;
        var left = -documentRect.left || document.body.scrollLeft || window.scrollX || 0;
        return { top: top, left: left };
    };
    return ViewportRuler;
}());
ViewportRuler = __decorate$5([
    _angular_core.Injectable()
], ViewportRuler);

var __decorate$4 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$2 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdRipple = (function () {
    function MdRipple(_elementRef, _ngZone, _ruler) {
        var _this = this;
        /**
         * If set, the radius in pixels of foreground ripples when fully expanded. If unset, the radius
         * will be the distance from the center of the ripple to the furthest corner of the host element's
         * bounding rectangle.
         */
        this.maxRadius = 0;
        /**
         * If set, the normal duration of ripple animations is divided by this value. For example,
         * setting it to 0.5 will cause the animations to take twice as long.
         */
        this.speedFactor = 1;
        // These event handlers are attached to the element that triggers the ripple animations.
        var eventHandlers = new Map();
        eventHandlers.set('mousedown', function (event) { return _this._mouseDown(event); });
        eventHandlers.set('click', function (event) { return _this._click(event); });
        eventHandlers.set('mouseleave', function (event) { return _this._mouseLeave(event); });
        this._rippleRenderer = new RippleRenderer(_elementRef, eventHandlers, _ngZone);
        this._ruler = _ruler;
    }
    /** TODO: internal */
    MdRipple.prototype.ngOnInit = function () {
        // If no trigger element was explicity set, use the host element
        if (!this.trigger) {
            this._rippleRenderer.setTriggerElementToHost();
        }
        if (!this.disabled) {
            this._rippleRenderer.createBackgroundIfNeeded();
        }
    };
    /** TODO: internal */
    MdRipple.prototype.ngOnDestroy = function () {
        // Remove event listeners on the trigger element.
        this._rippleRenderer.clearTriggerElement();
    };
    /** TODO: internal */
    MdRipple.prototype.ngOnChanges = function (changes) {
        // If the trigger element changed (or is being initially set), add event listeners to it.
        var changedInputs = Object.keys(changes);
        if (changedInputs.indexOf('trigger') !== -1) {
            this._rippleRenderer.setTriggerElement(this.trigger);
        }
        if (!this.disabled) {
            this._rippleRenderer.createBackgroundIfNeeded();
        }
    };
    /**
     * Responds to the start of a ripple animation trigger by fading the background in.
     */
    MdRipple.prototype.start = function () {
        this._rippleRenderer.createBackgroundIfNeeded();
        this._rippleRenderer.fadeInRippleBackground(this.backgroundColor);
    };
    /**
     * Responds to the end of a ripple animation trigger by fading the background out, and creating a
     * foreground ripple that expands from the event location (or from the center of the element if
     * the "centered" property is set or forceCenter is true).
     */
    MdRipple.prototype.end = function (left, top, forceCenter) {
        var _this = this;
        if (forceCenter === void 0) { forceCenter = true; }
        this._rippleRenderer.createForegroundRipple(left, top, this.color, this.centered || forceCenter, this.maxRadius, this.speedFactor, function (ripple, e) { return _this._rippleTransitionEnded(ripple, e); });
        this._rippleRenderer.fadeOutRippleBackground();
    };
    MdRipple.prototype._rippleTransitionEnded = function (ripple, event) {
        if (event.propertyName === 'opacity') {
            // If the ripple finished expanding, start fading it out. If it finished fading out,
            // remove it from the DOM.
            switch (ripple.state) {
                case ForegroundRippleState.EXPANDING:
                    this._rippleRenderer.fadeOutForegroundRipple(ripple.rippleElement);
                    ripple.state = ForegroundRippleState.FADING_OUT;
                    break;
                case ForegroundRippleState.FADING_OUT:
                    this._rippleRenderer.removeRippleFromDom(ripple.rippleElement);
                    break;
            }
        }
    };
    /**
     * Called when the trigger element receives a mousedown event. Starts the ripple animation by
     * fading in the background.
     */
    MdRipple.prototype._mouseDown = function (event) {
        if (!this.disabled && event.button === 0) {
            this.start();
        }
    };
    /**
     * Called when the trigger element receives a click event. Creates a foreground ripple and
     * runs its animation.
     */
    MdRipple.prototype._click = function (event) {
        if (!this.disabled && event.button === 0) {
            // If screen and page positions are all 0, this was probably triggered by a keypress.
            // In that case, use the center of the bounding rect as the ripple origin.
            // FIXME: This fails on IE11, which still sets pageX/Y and screenX/Y on keyboard clicks.
            var isKeyEvent = (event.screenX === 0 && event.screenY === 0 && event.pageX === 0 && event.pageY === 0);
            this.end(event.pageX - this._ruler.getViewportScrollPosition().left, event.pageY - this._ruler.getViewportScrollPosition().top, isKeyEvent);
        }
    };
    /**
     * Called when the trigger element receives a mouseleave event. Fades out the background.
     */
    MdRipple.prototype._mouseLeave = function (event) {
        // We can always fade out the background here; It's a no-op if it was already inactive.
        this._rippleRenderer.fadeOutRippleBackground();
    };
    return MdRipple;
}());
__decorate$4([
    _angular_core.Input('md-ripple-trigger'),
    __metadata$2("design:type", HTMLElement)
], exports.MdRipple.prototype, "trigger", void 0);
__decorate$4([
    _angular_core.Input('md-ripple-centered'),
    __metadata$2("design:type", Boolean)
], exports.MdRipple.prototype, "centered", void 0);
__decorate$4([
    _angular_core.Input('md-ripple-disabled'),
    __metadata$2("design:type", Boolean)
], exports.MdRipple.prototype, "disabled", void 0);
__decorate$4([
    _angular_core.Input('md-ripple-max-radius'),
    __metadata$2("design:type", Number)
], exports.MdRipple.prototype, "maxRadius", void 0);
__decorate$4([
    _angular_core.Input('md-ripple-speed-factor'),
    __metadata$2("design:type", Number)
], exports.MdRipple.prototype, "speedFactor", void 0);
__decorate$4([
    _angular_core.Input('md-ripple-color'),
    __metadata$2("design:type", String)
], exports.MdRipple.prototype, "color", void 0);
__decorate$4([
    _angular_core.Input('md-ripple-background-color'),
    __metadata$2("design:type", String)
], exports.MdRipple.prototype, "backgroundColor", void 0);
__decorate$4([
    _angular_core.HostBinding('class.md-ripple-focused'), _angular_core.Input('md-ripple-focused'),
    __metadata$2("design:type", Boolean)
], exports.MdRipple.prototype, "focused", void 0);
__decorate$4([
    _angular_core.HostBinding('class.md-ripple-unbounded'), _angular_core.Input('md-ripple-unbounded'),
    __metadata$2("design:type", Boolean)
], exports.MdRipple.prototype, "unbounded", void 0);
exports.MdRipple = __decorate$4([
    _angular_core.Directive({
        selector: '[md-ripple], [mat-ripple]',
    }),
    __metadata$2("design:paramtypes", [_angular_core.ElementRef, _angular_core.NgZone, ViewportRuler])
], exports.MdRipple);
exports.MdRippleModule = MdRippleModule_1 = (function () {
    function MdRippleModule() {
    }
    MdRippleModule.forRoot = function () {
        return {
            ngModule: MdRippleModule_1,
            providers: [ViewportRuler]
        };
    };
    return MdRippleModule;
}());
exports.MdRippleModule = MdRippleModule_1 = __decorate$4([
    _angular_core.NgModule({
        imports: [exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdRipple, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdRipple],
    })
], exports.MdRippleModule);
var MdRippleModule_1;

// TODO(kara): Revisit why error messages are not being properly set.
var __extends$3 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Wrapper around Error that sets the error message.
 */
var MdError = (function (_super) {
    __extends$3(MdError, _super);
    function MdError(value) {
        var _this = _super.call(this) || this;
        _this.message = value;
        return _this;
    }
    return MdError;
}(Error));

var __extends$2 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Exception thrown when attempting to attach a null portal to a host. */
var MdNullPortalError = (function (_super) {
    __extends$2(MdNullPortalError, _super);
    function MdNullPortalError() {
        return _super.call(this, 'Must provide a portal to attach') || this;
    }
    return MdNullPortalError;
}(MdError));
/** Exception thrown when attempting to attach a portal to a host that is already attached. */
var MdPortalAlreadyAttachedError = (function (_super) {
    __extends$2(MdPortalAlreadyAttachedError, _super);
    function MdPortalAlreadyAttachedError() {
        return _super.call(this, 'Host already has a portal attached') || this;
    }
    return MdPortalAlreadyAttachedError;
}(MdError));
/** Exception thrown when attempting to attach a portal to an already-disposed host. */
var MdPortalHostAlreadyDisposedError = (function (_super) {
    __extends$2(MdPortalHostAlreadyDisposedError, _super);
    function MdPortalHostAlreadyDisposedError() {
        return _super.call(this, 'This PortalHost has already been disposed') || this;
    }
    return MdPortalHostAlreadyDisposedError;
}(MdError));
/** Exception thrown when attempting to attach an unknown portal type. */
var MdUnknownPortalTypeError = (function (_super) {
    __extends$2(MdUnknownPortalTypeError, _super);
    function MdUnknownPortalTypeError() {
        return _super.call(this, 'Attempting to attach an unknown Portal type. ' +
            'BasePortalHost accepts either a ComponentPortal or a TemplatePortal.') || this;
    }
    return MdUnknownPortalTypeError;
}(MdError));
/** Exception thrown when attempting to attach a portal to a null host. */
var MdNullPortalHostError = (function (_super) {
    __extends$2(MdNullPortalHostError, _super);
    function MdNullPortalHostError() {
        return _super.call(this, 'Attempting to attach a portal to a null PortalHost') || this;
    }
    return MdNullPortalHostError;
}(MdError));
/** Exception thrown when attempting to detach a portal that is not attached. */
var MdNoPortalAttachedError = (function (_super) {
    __extends$2(MdNoPortalAttachedError, _super);
    function MdNoPortalAttachedError() {
        return _super.call(this, 'Attempting to detach a portal that is not attached to a host') || this;
    }
    return MdNoPortalAttachedError;
}(MdError));

var __extends$1 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * A `Portal` is something that you want to render somewhere else.
 * It can be attach to / detached from a `PortalHost`.
 */
var Portal = (function () {
    function Portal() {
    }
    /** Attach this portal to a host. */
    Portal.prototype.attach = function (host) {
        if (host == null) {
            throw new MdNullPortalHostError();
        }
        if (host.hasAttached()) {
            throw new MdPortalAlreadyAttachedError();
        }
        this._attachedHost = host;
        return host.attach(this);
    };
    /** Detach this portal from its host */
    Portal.prototype.detach = function () {
        var host = this._attachedHost;
        if (host == null) {
            throw new MdNoPortalAttachedError();
        }
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(Portal.prototype, "isAttached", {
        /** Whether this portal is attached to a host. */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     */
    Portal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return Portal;
}());
/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 */
var ComponentPortal = (function (_super) {
    __extends$1(ComponentPortal, _super);
    function ComponentPortal(component, viewContainerRef, injector) {
        if (viewContainerRef === void 0) { viewContainerRef = null; }
        if (injector === void 0) { injector = null; }
        var _this = _super.call(this) || this;
        _this.component = component;
        _this.viewContainerRef = viewContainerRef;
        _this.injector = injector;
        return _this;
    }
    return ComponentPortal;
}(Portal));
/**
 * A `TemplatePortal` is a portal that represents some embedded template (TemplateRef).
 */
var TemplatePortal = (function (_super) {
    __extends$1(TemplatePortal, _super);
    function TemplatePortal(template, viewContainerRef) {
        var _this = _super.call(this) || this;
        /**
         * Additional locals for the instantiated embedded view.
         * These locals can be seen as "exports" for the template, such as how ngFor has
         * index / event / odd.
         * See https://angular.io/docs/ts/latest/api/core/EmbeddedViewRef-class.html
         */
        _this.locals = new Map();
        _this.templateRef = template;
        _this.viewContainerRef = viewContainerRef;
        return _this;
    }
    Object.defineProperty(TemplatePortal.prototype, "origin", {
        get: function () {
            return this.templateRef.elementRef;
        },
        enumerable: true,
        configurable: true
    });
    TemplatePortal.prototype.attach = function (host, locals) {
        this.locals = locals == null ? new Map() : locals;
        return _super.prototype.attach.call(this, host);
    };
    TemplatePortal.prototype.detach = function () {
        this.locals = new Map();
        return _super.prototype.detach.call(this);
    };
    return TemplatePortal;
}(Portal));
/**
 * Partial implementation of PortalHost that only deals with attaching either a
 * ComponentPortal or a TemplatePortal.
 */
var BasePortalHost = (function () {
    function BasePortalHost() {
        /** Whether this host has already been permanently disposed. */
        this._isDisposed = false;
    }
    /** Whether this host has an attached portal. */
    BasePortalHost.prototype.hasAttached = function () {
        return this._attachedPortal != null;
    };
    BasePortalHost.prototype.attach = function (portal) {
        if (portal == null) {
            throw new MdNullPortalError();
        }
        if (this.hasAttached()) {
            throw new MdPortalAlreadyAttachedError();
        }
        if (this._isDisposed) {
            throw new MdPortalHostAlreadyDisposedError();
        }
        if (portal instanceof ComponentPortal) {
            this._attachedPortal = portal;
            return this.attachComponentPortal(portal);
        }
        else if (portal instanceof TemplatePortal) {
            this._attachedPortal = portal;
            return this.attachTemplatePortal(portal);
        }
        throw new MdUnknownPortalTypeError();
    };
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            this._disposeFn = null;
        }
    };
    BasePortalHost.prototype.dispose = function () {
        if (this.hasAttached()) {
            this.detach();
        }
        this._isDisposed = true;
    };
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());

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
var __decorate$6 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$3 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.TemplatePortalDirective = (function (_super) {
    __extends(TemplatePortalDirective, _super);
    function TemplatePortalDirective(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return TemplatePortalDirective;
}(TemplatePortal));
exports.TemplatePortalDirective = __decorate$6([
    _angular_core.Directive({
        selector: '[portal]',
        exportAs: 'portal',
    }),
    __metadata$3("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
], exports.TemplatePortalDirective);
exports.PortalHostDirective = (function (_super) {
    __extends(PortalHostDirective, _super);
    function PortalHostDirective(_componentFactoryResolver, _viewContainerRef) {
        var _this = _super.call(this) || this;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._viewContainerRef = _viewContainerRef;
        return _this;
    }
    Object.defineProperty(PortalHostDirective.prototype, "portal", {
        get: function () {
            return this._portal;
        },
        set: function (p) {
            if (p) {
                this._replaceAttachedPortal(p);
            }
        },
        enumerable: true,
        configurable: true
    });
    PortalHostDirective.prototype.ngOnDestroy = function () {
        this.dispose();
    };
    /** Attach the given ComponentPortal to this PortalHost using the ComponentFactoryResolver. */
    PortalHostDirective.prototype.attachComponentPortal = function (portal) {
        portal.setAttachedHost(this);
        // If the portal specifies an origin, use that as the logical location of the component
        // in the application tree. Otherwise use the location of this PortalHost.
        var viewContainerRef = portal.viewContainerRef != null ?
            portal.viewContainerRef :
            this._viewContainerRef;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var ref = viewContainerRef.createComponent(componentFactory, viewContainerRef.length, portal.injector || viewContainerRef.parentInjector);
        this.setDisposeFn(function () { return ref.destroy(); });
        return ref;
    };
    /** Attach the given TemplatePortal to this PortlHost as an embedded View. */
    PortalHostDirective.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        portal.setAttachedHost(this);
        this._viewContainerRef.createEmbeddedView(portal.templateRef);
        this.setDisposeFn(function () { return _this._viewContainerRef.clear(); });
        // TODO(jelbourn): return locals from view
        return new Map();
    };
    /** Detaches the currently attached Portal (if there is one) and attaches the given Portal. */
    PortalHostDirective.prototype._replaceAttachedPortal = function (p) {
        if (this.hasAttached()) {
            this.detach();
        }
        if (p) {
            this.attach(p);
            this._portal = p;
        }
    };
    return PortalHostDirective;
}(BasePortalHost));
exports.PortalHostDirective = __decorate$6([
    _angular_core.Directive({
        selector: '[portalHost]',
        inputs: ['portal: portalHost']
    }),
    __metadata$3("design:paramtypes", [_angular_core.ComponentFactoryResolver,
        _angular_core.ViewContainerRef])
], exports.PortalHostDirective);
exports.PortalModule = PortalModule_1 = (function () {
    function PortalModule() {
    }
    PortalModule.forRoot = function () {
        return {
            ngModule: PortalModule_1,
            providers: []
        };
    };
    return PortalModule;
}());
exports.PortalModule = PortalModule_1 = __decorate$6([
    _angular_core.NgModule({
        exports: [exports.TemplatePortalDirective, exports.PortalHostDirective],
        declarations: [exports.TemplatePortalDirective, exports.PortalHostDirective],
    })
], exports.PortalModule);
var PortalModule_1;

/**
 * OverlayState is a bag of values for either the initial configuration or current state of an
 * overlay.
 */
var OverlayState = (function () {
    function OverlayState() {
        /** Whether the overlay has a backdrop. */
        this.hasBackdrop = false;
        /** Custom class to add to the backdrop **/
        this.backdropClass = 'md-overlay-dark-backdrop';
        /** The direction of the text in the overlay panel. */
        this.direction = 'ltr';
        // TODO(jelbourn): configuration still to add
        // - focus trap
        // - disable pointer events
        // - z-index
    }
    return OverlayState;
}());

var __extends$4 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
var DomPortalHost = (function (_super) {
    __extends$4(DomPortalHost, _super);
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef, _defaultInjector) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        _this._defaultInjector = _defaultInjector;
        return _this;
    }
    /** Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver. */
    DomPortalHost.prototype.attachComponentPortal = function (portal) {
        var _this = this;
        var componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        if (portal.viewContainerRef) {
            componentRef = portal.viewContainerRef.createComponent(componentFactory, portal.viewContainerRef.length, portal.injector || portal.viewContainerRef.parentInjector);
            this.setDisposeFn(function () { return componentRef.destroy(); });
        }
        else {
            componentRef = componentFactory.create(portal.injector || this._defaultInjector);
            // ApplicationRef's attachView and detachView methods are in Angular ^2.3.0 but not before.
            // The `else` clause here can be removed once 2.3.0 is released.
            if (this._appRef['attachView']) {
                this._appRef.attachView(componentRef.hostView);
                this.setDisposeFn(function () {
                    _this._appRef.detachView(componentRef.hostView);
                    componentRef.destroy();
                });
            }
            else {
                // When creating a component outside of a ViewContainer, we need to manually register
                // its ChangeDetector with the application. This API is unfortunately not published
                // in Angular < 2.3.0. The change detector must also be deregistered when the component
                // is destroyed to prevent memory leaks.
                var changeDetectorRef_1 = componentRef.changeDetectorRef;
                this._appRef.registerChangeDetector(changeDetectorRef_1);
                this.setDisposeFn(function () {
                    _this._appRef.unregisterChangeDetector(changeDetectorRef_1);
                    // Normally the ViewContainer will remove the component's nodes from the DOM.
                    // Without a ViewContainer, we need to manually remove the nodes.
                    var componentRootNode = _this._getComponentRootNode(componentRef);
                    if (componentRootNode.parentNode) {
                        componentRootNode.parentNode.removeChild(componentRootNode);
                    }
                    componentRef.destroy();
                });
            }
        }
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        return componentRef;
    };
    DomPortalHost.prototype.attachTemplatePortal = function (portal) {
        var _this = this;
        var viewContainer = portal.viewContainerRef;
        var viewRef = viewContainer.createEmbeddedView(portal.templateRef);
        viewRef.rootNodes.forEach(function (rootNode) { return _this._hostDomElement.appendChild(rootNode); });
        this.setDisposeFn((function () {
            var index = viewContainer.indexOf(viewRef);
            if (index != -1) {
                viewContainer.remove(index);
            }
        }));
        // TODO(jelbourn): Return locals from view.
        return new Map();
    };
    DomPortalHost.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        if (this._hostDomElement.parentNode != null) {
            this._hostDomElement.parentNode.removeChild(this._hostDomElement);
        }
    };
    /** Gets the root HTMLElement for an instantiated component. */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return componentRef.hostView.rootNodes[0];
    };
    return DomPortalHost;
}(BasePortalHost));

/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = (function () {
    function OverlayRef(_portalHost, _pane, _state, _ngZone) {
        this._portalHost = _portalHost;
        this._pane = _pane;
        this._state = _state;
        this._ngZone = _ngZone;
        this._backdropElement = null;
        this._backdropClick = new rxjs_Subject.Subject();
    }
    Object.defineProperty(OverlayRef.prototype, "overlayElement", {
        /** The overlay's HTML element */
        get: function () {
            return this._pane;
        },
        enumerable: true,
        configurable: true
    });
    OverlayRef.prototype.attach = function (portal) {
        if (this._state.hasBackdrop) {
            this._attachBackdrop();
        }
        var attachResult = this._portalHost.attach(portal);
        this.updateSize();
        this.updateDirection();
        this.updatePosition();
        return attachResult;
    };
    OverlayRef.prototype.detach = function () {
        this._detachBackdrop();
        return this._portalHost.detach();
    };
    OverlayRef.prototype.dispose = function () {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.dispose();
        }
        this._detachBackdrop();
        this._portalHost.dispose();
    };
    OverlayRef.prototype.hasAttached = function () {
        return this._portalHost.hasAttached();
    };
    OverlayRef.prototype.backdropClick = function () {
        return this._backdropClick.asObservable();
    };
    /** Gets the current state config of the overlay. */
    OverlayRef.prototype.getState = function () {
        return this._state;
    };
    /** Updates the position of the overlay based on the position strategy. */
    OverlayRef.prototype.updatePosition = function () {
        if (this._state.positionStrategy) {
            this._state.positionStrategy.apply(this._pane);
        }
    };
    /** Updates the text direction of the overlay panel. **/
    OverlayRef.prototype.updateDirection = function () {
        this._pane.setAttribute('dir', this._state.direction);
    };
    /** Updates the size of the overlay based on the overlay config. */
    OverlayRef.prototype.updateSize = function () {
        if (this._state.width || this._state.width === 0) {
            this._pane.style.width = formatCssUnit(this._state.width);
        }
        if (this._state.height || this._state.height === 0) {
            this._pane.style.height = formatCssUnit(this._state.height);
        }
        if (this._state.minWidth || this._state.minWidth === 0) {
            this._pane.style.minWidth = formatCssUnit(this._state.minWidth);
        }
        if (this._state.minHeight || this._state.minHeight === 0) {
            this._pane.style.minHeight = formatCssUnit(this._state.minHeight);
        }
    };
    /** Attaches a backdrop for this overlay. */
    OverlayRef.prototype._attachBackdrop = function () {
        var _this = this;
        this._backdropElement = document.createElement('div');
        this._backdropElement.classList.add('md-overlay-backdrop');
        this._backdropElement.classList.add(this._state.backdropClass);
        this._pane.parentElement.appendChild(this._backdropElement);
        // Forward backdrop clicks such that the consumer of the overlay can perform whatever
        // action desired when such a click occurs (usually closing the overlay).
        this._backdropElement.addEventListener('click', function () {
            _this._backdropClick.next(null);
        });
        // Add class to fade-in the backdrop after one frame.
        requestAnimationFrame(function () {
            if (_this._backdropElement) {
                _this._backdropElement.classList.add('md-overlay-backdrop-showing');
            }
        });
    };
    /** Detaches the backdrop (if any) associated with the overlay. */
    OverlayRef.prototype._detachBackdrop = function () {
        var _this = this;
        var backdropToDetach = this._backdropElement;
        if (backdropToDetach) {
            var finishDetach_1 = function () {
                // It may not be attached to anything in certain cases (e.g. unit tests).
                if (backdropToDetach && backdropToDetach.parentNode) {
                    backdropToDetach.parentNode.removeChild(backdropToDetach);
                }
                // It is possible that a new portal has been attached to this overlay since we started
                // removing the backdrop. If that is the case, only clear the backdrop reference if it
                // is still the same instance that we started to remove.
                if (_this._backdropElement == backdropToDetach) {
                    _this._backdropElement = null;
                }
            };
            backdropToDetach.classList.remove('md-overlay-backdrop-showing');
            backdropToDetach.classList.remove(this._state.backdropClass);
            backdropToDetach.addEventListener('transitionend', finishDetach_1);
            // If the backdrop doesn't have a transition, the `transitionend` event won't fire.
            // In this case we make it unclickable and we try to remove it after a delay.
            backdropToDetach.style.pointerEvents = 'none';
            // Run this outside the Angular zone because there's nothing that Angular cares about.
            // If it were to run inside the Angular zone, every test that used Overlay would have to be
            // either async or fakeAsync.
            this._ngZone.runOutsideAngular(function () {
                setTimeout(finishDetach_1, 500);
            });
        }
    };
    return OverlayRef;
}());
function formatCssUnit(value) {
    return typeof value === 'string' ? value : value + "px";
}

/** The points of the origin element and the overlay element to connect. */
var ConnectionPositionPair = (function () {
    function ConnectionPositionPair(origin, overlay) {
        this.originX = origin.originX;
        this.originY = origin.originY;
        this.overlayX = overlay.overlayX;
        this.overlayY = overlay.overlayY;
    }
    return ConnectionPositionPair;
}());
/** The change event emitted by the strategy when a fallback position is used. */
var ConnectedOverlayPositionChange = (function () {
    function ConnectedOverlayPositionChange(connectionPair) {
        this.connectionPair = connectionPair;
    }
    return ConnectedOverlayPositionChange;
}());

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * implicit position relative some origin element. The relative position is defined in terms of
 * a point on the origin element that is connected to a point on the overlay element. For example,
 * a basic dropdown is connecting the bottom-left corner of the origin to the top-left corner
 * of the overlay.
 */
var ConnectedPositionStrategy = (function () {
    function ConnectedPositionStrategy(_connectedTo, _originPos, _overlayPos, _viewportRuler) {
        this._connectedTo = _connectedTo;
        this._originPos = _originPos;
        this._overlayPos = _overlayPos;
        this._viewportRuler = _viewportRuler;
        this._dir = 'ltr';
        /** The offset in pixels for the overlay connection point on the x-axis */
        this._offsetX = 0;
        /** The offset in pixels for the overlay connection point on the y-axis */
        this._offsetY = 0;
        /** Ordered list of preferred positions, from most to least desirable. */
        this._preferredPositions = [];
        this._onPositionChange = new rxjs_Subject.Subject();
        this._origin = this._connectedTo.nativeElement;
        this.withFallbackPosition(_originPos, _overlayPos);
    }
    Object.defineProperty(ConnectedPositionStrategy.prototype, "_isRtl", {
        /** Whether the we're dealing with an RTL context */
        get: function () {
            return this._dir === 'rtl';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "onPositionChange", {
        /** Emits an event when the connection point changes. */
        get: function () {
            return this._onPositionChange.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedPositionStrategy.prototype, "positions", {
        get: function () {
            return this._preferredPositions;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * To be used to for any cleanup after the element gets destroyed.
     */
    ConnectedPositionStrategy.prototype.dispose = function () { };
    /**
     * Updates the position of the overlay element, using whichever preferred position relative
     * to the origin fits on-screen.
     * TODO: internal
     */
    ConnectedPositionStrategy.prototype.apply = function (element) {
        // We need the bounding rects for the origin and the overlay to determine how to position
        // the overlay relative to the origin.
        var originRect = this._origin.getBoundingClientRect();
        var overlayRect = element.getBoundingClientRect();
        // We use the viewport rect to determine whether a position would go off-screen.
        var viewportRect = this._viewportRuler.getViewportRect();
        var firstOverlayPoint = null;
        // We want to place the overlay in the first of the preferred positions such that the
        // overlay fits on-screen.
        for (var _i = 0, _a = this._preferredPositions; _i < _a.length; _i++) {
            var pos = _a[_i];
            // Get the (x, y) point of connection on the origin, and then use that to get the
            // (top, left) coordinate for the overlay at `pos`.
            var originPoint = this._getOriginConnectionPoint(originRect, pos);
            var overlayPoint = this._getOverlayPoint(originPoint, overlayRect, pos);
            firstOverlayPoint = firstOverlayPoint || overlayPoint;
            // If the overlay in the calculated position fits on-screen, put it there and we're done.
            if (this._willOverlayFitWithinViewport(overlayPoint, overlayRect, viewportRect)) {
                this._setElementPosition(element, overlayPoint);
                this._onPositionChange.next(new ConnectedOverlayPositionChange(pos));
                return Promise.resolve(null);
            }
        }
        // TODO(jelbourn): fallback behavior for when none of the preferred positions fit on-screen.
        // For now, just stick it in the first position and let it go off-screen.
        this._setElementPosition(element, firstOverlayPoint);
        return Promise.resolve(null);
    };
    ConnectedPositionStrategy.prototype.withFallbackPosition = function (originPos, overlayPos) {
        this._preferredPositions.push(new ConnectionPositionPair(originPos, overlayPos));
        return this;
    };
    /** Sets the layout direction so the overlay's position can be adjusted to match. */
    ConnectedPositionStrategy.prototype.withDirection = function (dir) {
        this._dir = dir;
        return this;
    };
    /** Sets an offset for the overlay's connection point on the x-axis */
    ConnectedPositionStrategy.prototype.withOffsetX = function (offset) {
        this._offsetX = offset;
        return this;
    };
    /** Sets an offset for the overlay's connection point on the y-axis */
    ConnectedPositionStrategy.prototype.withOffsetY = function (offset) {
        this._offsetY = offset;
        return this;
    };
    /**
     * Gets the horizontal (x) "start" dimension based on whether the overlay is in an RTL context.
     * @param rect
     */
    ConnectedPositionStrategy.prototype._getStartX = function (rect) {
        return this._isRtl ? rect.right : rect.left;
    };
    /**
     * Gets the horizontal (x) "end" dimension based on whether the overlay is in an RTL context.
     * @param rect
     */
    ConnectedPositionStrategy.prototype._getEndX = function (rect) {
        return this._isRtl ? rect.left : rect.right;
    };
    /**
     * Gets the (x, y) coordinate of a connection point on the origin based on a relative position.
     * @param originRect
     * @param pos
     */
    ConnectedPositionStrategy.prototype._getOriginConnectionPoint = function (originRect, pos) {
        var originStartX = this._getStartX(originRect);
        var originEndX = this._getEndX(originRect);
        var x;
        if (pos.originX == 'center') {
            x = originStartX + (originRect.width / 2);
        }
        else {
            x = pos.originX == 'start' ? originStartX : originEndX;
        }
        var y;
        if (pos.originY == 'center') {
            y = originRect.top + (originRect.height / 2);
        }
        else {
            y = pos.originY == 'top' ? originRect.top : originRect.bottom;
        }
        return { x: x, y: y };
    };
    /**
     * Gets the (x, y) coordinate of the top-left corner of the overlay given a given position and
     * origin point to which the overlay should be connected.
     * @param originPoint
     * @param overlayRect
     * @param pos
     */
    ConnectedPositionStrategy.prototype._getOverlayPoint = function (originPoint, overlayRect, pos) {
        // Calculate the (overlayStartX, overlayStartY), the start of the potential overlay position
        // relative to the origin point.
        var overlayStartX;
        if (pos.overlayX == 'center') {
            overlayStartX = -overlayRect.width / 2;
        }
        else if (pos.overlayX === 'start') {
            overlayStartX = this._isRtl ? -overlayRect.width : 0;
        }
        else {
            overlayStartX = this._isRtl ? 0 : -overlayRect.width;
        }
        var overlayStartY;
        if (pos.overlayY == 'center') {
            overlayStartY = -overlayRect.height / 2;
        }
        else {
            overlayStartY = pos.overlayY == 'top' ? 0 : -overlayRect.height;
        }
        return {
            x: originPoint.x + overlayStartX + this._offsetX,
            y: originPoint.y + overlayStartY + this._offsetY
        };
    };
    /**
     * Gets whether the overlay positioned at the given point will fit on-screen.
     * @param overlayPoint The top-left coordinate of the overlay.
     * @param overlayRect Bounding rect of the overlay, used to get its size.
     * @param viewportRect The bounding viewport.
     */
    ConnectedPositionStrategy.prototype._willOverlayFitWithinViewport = function (overlayPoint, overlayRect, viewportRect) {
        // TODO(jelbourn): probably also want some space between overlay edge and viewport edge.
        return overlayPoint.x >= viewportRect.left &&
            overlayPoint.x + overlayRect.width <= viewportRect.right &&
            overlayPoint.y >= viewportRect.top &&
            overlayPoint.y + overlayRect.height <= viewportRect.bottom;
    };
    /**
     * Physically positions the overlay element to the given coordinate.
     * @param element
     * @param overlayPoint
     */
    ConnectedPositionStrategy.prototype._setElementPosition = function (element, overlayPoint) {
        element.style.left = overlayPoint.x + 'px';
        element.style.top = overlayPoint.y + 'px';
    };
    return ConnectedPositionStrategy;
}());

/**
 * A strategy for positioning overlays. Using this strategy, an overlay is given an
 * explicit position relative to the browser's viewport. We use flexbox, instead of
 * transforms, in order to avoid issues with subpixel rendering which can cause the
 * element to become blurry.
 */
var GlobalPositionStrategy = (function () {
    function GlobalPositionStrategy() {
        this._cssPosition = 'static';
        this._topOffset = '';
        this._bottomOffset = '';
        this._leftOffset = '';
        this._rightOffset = '';
        this._alignItems = '';
        this._justifyContent = '';
        this._width = '';
        this._height = '';
    }
    /** Sets the top position of the overlay. Clears any previously set vertical position. */
    GlobalPositionStrategy.prototype.top = function (value) {
        this._bottomOffset = '';
        this._topOffset = value;
        this._alignItems = 'flex-start';
        return this;
    };
    /** Sets the left position of the overlay. Clears any previously set horizontal position. */
    GlobalPositionStrategy.prototype.left = function (value) {
        this._rightOffset = '';
        this._leftOffset = value;
        this._justifyContent = 'flex-start';
        return this;
    };
    /** Sets the bottom position of the overlay. Clears any previously set vertical position. */
    GlobalPositionStrategy.prototype.bottom = function (value) {
        this._topOffset = '';
        this._bottomOffset = value;
        this._alignItems = 'flex-end';
        return this;
    };
    /** Sets the right position of the overlay. Clears any previously set horizontal position. */
    GlobalPositionStrategy.prototype.right = function (value) {
        this._leftOffset = '';
        this._rightOffset = value;
        this._justifyContent = 'flex-end';
        return this;
    };
    /** Sets the overlay width and clears any previously set width. */
    GlobalPositionStrategy.prototype.width = function (value) {
        this._width = value;
        // When the width is 100%, we should reset the `left` and the offset,
        // in order to ensure that the element is flush against the viewport edge.
        if (value === '100%') {
            this.left('0px');
        }
        return this;
    };
    /** Sets the overlay height and clears any previously set height. */
    GlobalPositionStrategy.prototype.height = function (value) {
        this._height = value;
        // When the height is 100%, we should reset the `top` and the offset,
        // in order to ensure that the element is flush against the viewport edge.
        if (value === '100%') {
            this.top('0px');
        }
        return this;
    };
    /**
     * Centers the overlay horizontally with an optional offset.
     * Clears any previously set horizontal position.
     */
    GlobalPositionStrategy.prototype.centerHorizontally = function (offset) {
        if (offset === void 0) { offset = ''; }
        this.left(offset);
        this._justifyContent = 'center';
        return this;
    };
    /**
     * Centers the overlay vertically with an optional offset.
     * Clears any previously set vertical position.
     */
    GlobalPositionStrategy.prototype.centerVertically = function (offset) {
        if (offset === void 0) { offset = ''; }
        this.top(offset);
        this._alignItems = 'center';
        return this;
    };
    /**
     * Apply the position to the element.
     * TODO: internal
     */
    GlobalPositionStrategy.prototype.apply = function (element) {
        if (!this._wrapper) {
            this._wrapper = document.createElement('div');
            this._wrapper.classList.add('md-global-overlay-wrapper');
            element.parentNode.insertBefore(this._wrapper, element);
            this._wrapper.appendChild(element);
        }
        var styles = element.style;
        var parentStyles = element.parentNode.style;
        styles.position = this._cssPosition;
        styles.marginTop = this._topOffset;
        styles.marginLeft = this._leftOffset;
        styles.marginBottom = this._bottomOffset;
        styles.marginRight = this._rightOffset;
        styles.width = this._width;
        styles.height = this._height;
        parentStyles.justifyContent = this._justifyContent;
        parentStyles.alignItems = this._alignItems;
        return Promise.resolve(null);
    };
    /**
     * Removes the wrapper element from the DOM.
     */
    GlobalPositionStrategy.prototype.dispose = function () {
        if (this._wrapper && this._wrapper.parentNode) {
            this._wrapper.parentNode.removeChild(this._wrapper);
            this._wrapper = null;
        }
    };
    return GlobalPositionStrategy;
}());

var __decorate$9 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$6 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Builder for overlay position strategy. */
var OverlayPositionBuilder = (function () {
    function OverlayPositionBuilder(_viewportRuler) {
        this._viewportRuler = _viewportRuler;
    }
    /** Creates a global position strategy. */
    OverlayPositionBuilder.prototype.global = function () {
        return new GlobalPositionStrategy();
    };
    /** Creates a relative position strategy. */
    OverlayPositionBuilder.prototype.connectedTo = function (elementRef, originPos, overlayPos) {
        return new ConnectedPositionStrategy(elementRef, originPos, overlayPos, this._viewportRuler);
    };
    return OverlayPositionBuilder;
}());
OverlayPositionBuilder = __decorate$9([
    _angular_core.Injectable(),
    __metadata$6("design:paramtypes", [ViewportRuler])
], OverlayPositionBuilder);

/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
var OverlayContainer = (function () {
    function OverlayContainer() {
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @returns {HTMLElement} the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'md-overlay-container' class on the document body.
     */
    OverlayContainer.prototype._createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('md-overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());

var __decorate$8 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$5 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Next overlay unique ID. */
var nextUniqueId = 0;
/** The default state for newly created overlays. */
var defaultState = new OverlayState();
exports.Overlay = (function () {
    function Overlay(_overlayContainer, _componentFactoryResolver, _positionBuilder, _appRef, _injector, _ngZone) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._positionBuilder = _positionBuilder;
        this._appRef = _appRef;
        this._injector = _injector;
        this._ngZone = _ngZone;
    }
    /**
     * Creates an overlay.
     * @param state State to apply to the overlay.
     * @returns A reference to the created overlay.
     */
    Overlay.prototype.create = function (state) {
        if (state === void 0) { state = defaultState; }
        return this._createOverlayRef(this._createPaneElement(), state);
    };
    /**
     * Returns a position builder that can be used, via fluent API,
     * to construct and configure a position strategy.
     */
    Overlay.prototype.position = function () {
        return this._positionBuilder;
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @returns Promise resolving to the created element.
     */
    Overlay.prototype._createPaneElement = function () {
        var pane = document.createElement('div');
        pane.id = "md-overlay-" + nextUniqueId++;
        pane.classList.add('md-overlay-pane');
        this._overlayContainer.getContainerElement().appendChild(pane);
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param pane The DOM element to turn into a portal host.
     * @returns A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef, this._injector);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param pane DOM element for the overlay
     * @param state
     * @returns {OverlayRef}
     */
    Overlay.prototype._createOverlayRef = function (pane, state) {
        return new OverlayRef(this._createPortalHost(pane), pane, state, this._ngZone);
    };
    return Overlay;
}());
exports.Overlay = __decorate$8([
    _angular_core.Injectable(),
    __metadata$5("design:paramtypes", [OverlayContainer,
        _angular_core.ComponentFactoryResolver,
        OverlayPositionBuilder,
        _angular_core.ApplicationRef,
        _angular_core.Injector,
        _angular_core.NgZone])
], exports.Overlay);
/** Providers for Overlay and its related injectables. */
var OVERLAY_PROVIDERS = [
    ViewportRuler,
    OverlayPositionBuilder,
    exports.Overlay,
    OverlayContainer,
];

var __decorate$7 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$4 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$1 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
var defaultPositionList = [
    new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
];
exports.OverlayOrigin = (function () {
    function OverlayOrigin(_elementRef) {
        this._elementRef = _elementRef;
    }
    Object.defineProperty(OverlayOrigin.prototype, "elementRef", {
        get: function () {
            return this._elementRef;
        },
        enumerable: true,
        configurable: true
    });
    return OverlayOrigin;
}());
exports.OverlayOrigin = __decorate$7([
    _angular_core.Directive({
        selector: '[overlay-origin]',
        exportAs: 'overlayOrigin',
    }),
    __metadata$4("design:paramtypes", [_angular_core.ElementRef])
], exports.OverlayOrigin);
exports.ConnectedOverlayDirective = (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function ConnectedOverlayDirective(_overlay, templateRef, viewContainerRef, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._open = false;
        this._hasBackdrop = false;
        this._offsetX = 0;
        this._offsetY = 0;
        /** Event emitted when the backdrop is clicked. */
        this.backdropClick = new _angular_core.EventEmitter();
        this.positionChange = new _angular_core.EventEmitter();
        this.attach = new _angular_core.EventEmitter();
        this.detach = new _angular_core.EventEmitter();
        this._templatePortal = new TemplatePortal(templateRef, viewContainerRef);
    }
    Object.defineProperty(ConnectedOverlayDirective.prototype, "offsetX", {
        /** The offset in pixels for the overlay connection point on the x-axis */
        get: function () {
            return this._offsetX;
        },
        set: function (offsetX) {
            this._offsetX = offsetX;
            if (this._position) {
                this._position.withOffsetX(offsetX);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "offsetY", {
        /** The offset in pixels for the overlay connection point on the y-axis */
        get: function () {
            return this._offsetY;
        },
        set: function (offsetY) {
            this._offsetY = offsetY;
            if (this._position) {
                this._position.withOffsetY(offsetY);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "hasBackdrop", {
        /** Whether or not the overlay should attach a backdrop. */
        get: function () {
            return this._hasBackdrop;
        },
        // TODO: move the boolean coercion logic to a shared function in core
        set: function (value) {
            this._hasBackdrop = value != null && "" + value !== 'false';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            value ? this._attachOverlay() : this._detachOverlay();
            this._open = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "overlayRef", {
        get: function () {
            return this._overlayRef;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ConnectedOverlayDirective.prototype, "dir", {
        get: function () {
            return this._dir ? this._dir.value : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /** TODO: internal */
    ConnectedOverlayDirective.prototype.ngOnDestroy = function () {
        this._destroyOverlay();
    };
    /** Creates an overlay */
    ConnectedOverlayDirective.prototype._createOverlay = function () {
        if (!this.positions || !this.positions.length) {
            this.positions = defaultPositionList;
        }
        this._overlayRef = this._overlay.create(this._buildConfig());
    };
    /** Builds the overlay config based on the directive's inputs */
    ConnectedOverlayDirective.prototype._buildConfig = function () {
        var overlayConfig = new OverlayState();
        if (this.width || this.width === 0) {
            overlayConfig.width = this.width;
        }
        if (this.height || this.height === 0) {
            overlayConfig.height = this.height;
        }
        if (this.minWidth || this.minWidth === 0) {
            overlayConfig.minWidth = this.minWidth;
        }
        if (this.minHeight || this.minHeight === 0) {
            overlayConfig.minHeight = this.minHeight;
        }
        overlayConfig.hasBackdrop = this.hasBackdrop;
        if (this.backdropClass) {
            overlayConfig.backdropClass = this.backdropClass;
        }
        this._position = this._createPositionStrategy();
        overlayConfig.positionStrategy = this._position;
        overlayConfig.direction = this.dir;
        return overlayConfig;
    };
    /** Returns the position strategy of the overlay to be set on the overlay config */
    ConnectedOverlayDirective.prototype._createPositionStrategy = function () {
        var pos = this.positions[0];
        var originPoint = { originX: pos.originX, originY: pos.originY };
        var overlayPoint = { overlayX: pos.overlayX, overlayY: pos.overlayY };
        var strategy = this._overlay.position()
            .connectedTo(this.origin.elementRef, originPoint, overlayPoint)
            .withDirection(this.dir)
            .withOffsetX(this.offsetX)
            .withOffsetY(this.offsetY);
        this._handlePositionChanges(strategy);
        return strategy;
    };
    ConnectedOverlayDirective.prototype._handlePositionChanges = function (strategy) {
        var _this = this;
        for (var i = 1; i < this.positions.length; i++) {
            strategy.withFallbackPosition({ originX: this.positions[i].originX, originY: this.positions[i].originY }, { overlayX: this.positions[i].overlayX, overlayY: this.positions[i].overlayY });
        }
        this._positionSubscription =
            strategy.onPositionChange.subscribe(function (pos) { return _this.positionChange.emit(pos); });
    };
    /** Attaches the overlay and subscribes to backdrop clicks if backdrop exists */
    ConnectedOverlayDirective.prototype._attachOverlay = function () {
        var _this = this;
        if (!this._overlayRef) {
            this._createOverlay();
        }
        if (!this._overlayRef.hasAttached()) {
            this._overlayRef.attach(this._templatePortal);
            this.attach.emit();
        }
        if (this.hasBackdrop) {
            this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function () {
                _this.backdropClick.emit();
            });
        }
    };
    /** Detaches the overlay and unsubscribes to backdrop clicks if backdrop exists */
    ConnectedOverlayDirective.prototype._detachOverlay = function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this.detach.emit();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
            this._backdropSubscription = null;
        }
    };
    /** Destroys the overlay created by this directive. */
    ConnectedOverlayDirective.prototype._destroyOverlay = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
        }
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
        if (this._positionSubscription) {
            this._positionSubscription.unsubscribe();
        }
    };
    return ConnectedOverlayDirective;
}());
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", exports.OverlayOrigin)
], exports.ConnectedOverlayDirective.prototype, "origin", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", Array)
], exports.ConnectedOverlayDirective.prototype, "positions", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", Number),
    __metadata$4("design:paramtypes", [Number])
], exports.ConnectedOverlayDirective.prototype, "offsetX", null);
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", Object),
    __metadata$4("design:paramtypes", [Number])
], exports.ConnectedOverlayDirective.prototype, "offsetY", null);
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", Object)
], exports.ConnectedOverlayDirective.prototype, "width", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", Object)
], exports.ConnectedOverlayDirective.prototype, "height", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", Object)
], exports.ConnectedOverlayDirective.prototype, "minWidth", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", Object)
], exports.ConnectedOverlayDirective.prototype, "minHeight", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", String)
], exports.ConnectedOverlayDirective.prototype, "backdropClass", void 0);
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", Object),
    __metadata$4("design:paramtypes", [Object])
], exports.ConnectedOverlayDirective.prototype, "hasBackdrop", null);
__decorate$7([
    _angular_core.Input(),
    __metadata$4("design:type", Object),
    __metadata$4("design:paramtypes", [Boolean])
], exports.ConnectedOverlayDirective.prototype, "open", null);
__decorate$7([
    _angular_core.Output(),
    __metadata$4("design:type", Object)
], exports.ConnectedOverlayDirective.prototype, "backdropClick", void 0);
__decorate$7([
    _angular_core.Output(),
    __metadata$4("design:type", Object)
], exports.ConnectedOverlayDirective.prototype, "positionChange", void 0);
__decorate$7([
    _angular_core.Output(),
    __metadata$4("design:type", Object)
], exports.ConnectedOverlayDirective.prototype, "attach", void 0);
__decorate$7([
    _angular_core.Output(),
    __metadata$4("design:type", Object)
], exports.ConnectedOverlayDirective.prototype, "detach", void 0);
exports.ConnectedOverlayDirective = __decorate$7([
    _angular_core.Directive({
        selector: '[connected-overlay]',
        exportAs: 'connectedOverlay'
    }),
    __param$1(3, _angular_core.Optional()),
    __metadata$4("design:paramtypes", [exports.Overlay,
        _angular_core.TemplateRef,
        _angular_core.ViewContainerRef,
        exports.Dir])
], exports.ConnectedOverlayDirective);
exports.OverlayModule = OverlayModule_1 = (function () {
    function OverlayModule() {
    }
    OverlayModule.forRoot = function () {
        return {
            ngModule: OverlayModule_1,
            providers: OVERLAY_PROVIDERS,
        };
    };
    return OverlayModule;
}());
exports.OverlayModule = OverlayModule_1 = __decorate$7([
    _angular_core.NgModule({
        imports: [exports.PortalModule],
        exports: [exports.ConnectedOverlayDirective, exports.OverlayOrigin],
        declarations: [exports.ConnectedOverlayDirective, exports.OverlayOrigin],
    })
], exports.OverlayModule);
var OverlayModule_1;

var __decorate$13 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var hasV8BreakIterator = (window.Intl && window.Intl.v8BreakIterator);
exports.MdPlatform = (function () {
    function MdPlatform() {
        /** Layout Engines */
        this.EDGE = /(edge)/i.test(navigator.userAgent);
        this.TRIDENT = /(msie|trident)/i.test(navigator.userAgent);
        // EdgeHTML and Trident mock Blink specific things and need to excluded from this check.
        this.BLINK = !!(window.chrome || hasV8BreakIterator) && !!CSS && !this.EDGE && !this.TRIDENT;
        // Webkit is part of the userAgent in EdgeHTML Blink and Trident, so we need to
        // ensure that Webkit runs standalone and is not use as another engines base.
        this.WEBKIT = /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT;
        /** Browsers and Platform Types */
        this.IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        // It's difficult to detect the plain Gecko engine, because most of the browsers identify
        // them self as Gecko-like browsers and modify the userAgent's according to that.
        // Since we only cover one explicit Firefox case, we can simply check for Firefox
        // instead of having an unstable check for Gecko.
        this.FIREFOX = /(firefox|minefield)/i.test(navigator.userAgent);
        // Trident on mobile adds the android platform to the userAgent to trick detections.
        this.ANDROID = /android/i.test(navigator.userAgent) && !this.TRIDENT;
    }
    return MdPlatform;
}());
exports.MdPlatform = __decorate$13([
    _angular_core.Injectable()
], exports.MdPlatform);
exports.PlatformModule = PlatformModule_1 = (function () {
    function PlatformModule() {
    }
    PlatformModule.forRoot = function () {
        return {
            ngModule: PlatformModule_1,
            providers: [exports.MdPlatform],
        };
    };
    return PlatformModule;
}());
exports.PlatformModule = PlatformModule_1 = __decorate$13([
    _angular_core.NgModule({})
], exports.PlatformModule);
var PlatformModule_1;

var __decorate$12 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$8 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.InteractivityChecker = (function () {
    function InteractivityChecker(_platform) {
        this._platform = _platform;
    }
    /** Gets whether an element is disabled. */
    InteractivityChecker.prototype.isDisabled = function (element) {
        // This does not capture some cases, such as a non-form control with a disabled attribute or
        // a form control inside of a disabled form, but should capture the most common cases.
        return element.hasAttribute('disabled');
    };
    /**
     * Gets whether an element is visible for the purposes of interactivity.
     *
     * This will capture states like `display: none` and `visibility: hidden`, but not things like
     * being clipped by an `overflow: hidden` parent or being outside the viewport.
     */
    InteractivityChecker.prototype.isVisible = function (element) {
        return hasGeometry(element) && getComputedStyle(element).visibility === 'visible';
    };
    /**
     * Gets whether an element can be reached via Tab key.
     * Assumes that the element has already been checked with isFocusable.
     */
    InteractivityChecker.prototype.isTabbable = function (element) {
        var frameElement = getWindow(element).frameElement;
        if (frameElement) {
            var frameType = frameElement && frameElement.nodeName.toLowerCase();
            // Frame elements inherit their tabindex onto all child elements.
            if (getTabIndexValue(frameElement) === -1) {
                return false;
            }
            // Webkit and Blink consider anything inside of an <object> element as non-tabbable.
            if ((this._platform.BLINK || this._platform.WEBKIT) && frameType === 'object') {
                return false;
            }
            // Webkit and Blink disable tabbing to an element inside of an invisible frame.
            if ((this._platform.BLINK || this._platform.WEBKIT) && !this.isVisible(frameElement)) {
                return false;
            }
        }
        var nodeName = element.nodeName.toLowerCase();
        var tabIndexValue = getTabIndexValue(element);
        if (element.hasAttribute('contenteditable')) {
            return tabIndexValue !== -1;
        }
        if (nodeName === 'iframe') {
            // The frames may be tabbable depending on content, but it's not possibly to reliably
            // investigate the content of the frames.
            return false;
        }
        if (nodeName === 'audio') {
            if (!element.hasAttribute('controls')) {
                // By default an <audio> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK) {
                // In Blink <audio controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'video') {
            if (!element.hasAttribute('controls') && this._platform.TRIDENT) {
                // In Trident a <video> element without the controls enabled is not tabbable.
                return false;
            }
            else if (this._platform.BLINK || this._platform.FIREFOX) {
                // In Chrome and Firefox <video controls> elements are always tabbable.
                return true;
            }
        }
        if (nodeName === 'object' && (this._platform.BLINK || this._platform.WEBKIT)) {
            // In all Blink and WebKit based browsers <object> elements are never tabbable.
            return false;
        }
        // In iOS the browser only considers some specific elements as tabbable.
        if (this._platform.WEBKIT && this._platform.IOS && !isPotentiallyTabbableIOS(element)) {
            return false;
        }
        return element.tabIndex >= 0;
    };
    /** Gets whether an element can be focused by the user. */
    InteractivityChecker.prototype.isFocusable = function (element) {
        // Perform checks in order of left to most expensive.
        // Again, naive approach that does not capture many edge cases and browser quirks.
        return isPotentiallyFocusable(element) && !this.isDisabled(element) && this.isVisible(element);
    };
    return InteractivityChecker;
}());
exports.InteractivityChecker = __decorate$12([
    _angular_core.Injectable(),
    __metadata$8("design:paramtypes", [exports.MdPlatform])
], exports.InteractivityChecker);
/** Checks whether the specified element has any geometry / rectangles. */
function hasGeometry(element) {
    // Use logic from jQuery to check for an invisible element.
    // See https://github.com/jquery/jquery/blob/master/src/css/hiddenVisibleSelectors.js#L12
    return !!(element.offsetWidth || element.offsetHeight || element.getClientRects().length);
}
/** Gets whether an element's  */
function isNativeFormElement(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'input' ||
        nodeName === 'select' ||
        nodeName === 'button' ||
        nodeName === 'textarea';
}
/** Gets whether an element is an <input type="hidden">. */
function isHiddenInput(element) {
    return isInputElement(element) && element.type == 'hidden';
}
/** Gets whether an element is an anchor that has an href attribute. */
function isAnchorWithHref(element) {
    return isAnchorElement(element) && element.hasAttribute('href');
}
/** Gets whether an element is an input element. */
function isInputElement(element) {
    return element.nodeName == 'input';
}
/** Gets whether an element is an anchor element. */
function isAnchorElement(element) {
    return element.nodeName.toLowerCase() == 'a';
}
/** Gets whether an element has a valid tabindex. */
function hasValidTabIndex(element) {
    if (!element.hasAttribute('tabindex') || element.tabIndex === undefined) {
        return false;
    }
    var tabIndex = element.getAttribute('tabindex');
    // IE11 parses tabindex="" as the value "-32768"
    if (tabIndex == '-32768') {
        return false;
    }
    return !!(tabIndex && !isNaN(parseInt(tabIndex, 10)));
}
/**
 * Returns the parsed tabindex from the element attributes instead of returning the
 * evaluated tabindex from the browsers defaults.
 */
function getTabIndexValue(element) {
    if (!hasValidTabIndex(element)) {
        return null;
    }
    // See browser issue in Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var tabIndex = parseInt(element.getAttribute('tabindex'), 10);
    return isNaN(tabIndex) ? -1 : tabIndex;
}
/** Checks whether the specified element is potentially tabbable on iOS */
function isPotentiallyTabbableIOS(element) {
    var nodeName = element.nodeName.toLowerCase();
    var inputType = nodeName === 'input' && element.type;
    return inputType === 'text'
        || inputType === 'password'
        || nodeName === 'select'
        || nodeName === 'textarea';
}
/**
 * Gets whether an element is potentially focusable without taking current visible/disabled state
 * into account.
 */
function isPotentiallyFocusable(element) {
    // Inputs are potentially focusable *unless* they're type="hidden".
    if (isHiddenInput(element)) {
        return false;
    }
    return isNativeFormElement(element) ||
        isAnchorWithHref(element) ||
        element.hasAttribute('contenteditable') ||
        hasValidTabIndex(element);
}
/** Gets the parent window of a DOM node with regards of being inside of an iframe. */
function getWindow(node) {
    return node.ownerDocument.defaultView || window;
}

/** Coerces a data-bound value (typically a string) to a boolean. */
/** Coerces a data-bound value (typically a string) to a boolean. */ function coerceBooleanProperty(value) {
    return value != null && "" + value !== 'false';
}

var __decorate$11 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$7 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.FocusTrap = (function () {
    function FocusTrap(_checker, _ngZone) {
        this._checker = _checker;
        this._ngZone = _ngZone;
        this._disabled = false;
    }
    Object.defineProperty(FocusTrap.prototype, "disabled", {
        /** Whether the focus trap is active. */
        get: function () { return this._disabled; },
        set: function (val) { this._disabled = coerceBooleanProperty(val); },
        enumerable: true,
        configurable: true
    });
    /**
     * Waits for microtask queue to empty, then focuses the first tabbable element within the focus
     * trap region.
     */
    FocusTrap.prototype.focusFirstTabbableElementWhenReady = function () {
        var _this = this;
        this._ngZone.onMicrotaskEmpty.first().subscribe(function () {
            _this.focusFirstTabbableElement();
        });
    };
    /**
     * Waits for microtask queue to empty, then focuses the last tabbable element within the focus
     * trap region.
     */
    FocusTrap.prototype.focusLastTabbableElementWhenReady = function () {
        var _this = this;
        this._ngZone.onMicrotaskEmpty.first().subscribe(function () {
            _this.focusLastTabbableElement();
        });
    };
    /** Focuses the first tabbable element within the focus trap region. */
    FocusTrap.prototype.focusFirstTabbableElement = function () {
        var rootElement = this.trappedContent.nativeElement;
        var redirectToElement = rootElement.querySelector('[md-focus-start]') ||
            this._getFirstTabbableElement(rootElement);
        if (redirectToElement) {
            redirectToElement.focus();
        }
    };
    /** Focuses the last tabbable element within the focus trap region. */
    FocusTrap.prototype.focusLastTabbableElement = function () {
        var rootElement = this.trappedContent.nativeElement;
        var focusTargets = rootElement.querySelectorAll('[md-focus-end]');
        var redirectToElement = null;
        if (focusTargets.length) {
            redirectToElement = focusTargets[focusTargets.length - 1];
        }
        else {
            redirectToElement = this._getLastTabbableElement(rootElement);
        }
        if (redirectToElement) {
            redirectToElement.focus();
        }
    };
    /** Get the first tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getFirstTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in DOM order.
        var childCount = root.children.length;
        for (var i = 0; i < childCount; i++) {
            var tabbableChild = this._getFirstTabbableElement(root.children[i]);
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    /** Get the last tabbable element from a DOM subtree (inclusive). */
    FocusTrap.prototype._getLastTabbableElement = function (root) {
        if (this._checker.isFocusable(root) && this._checker.isTabbable(root)) {
            return root;
        }
        // Iterate in reverse DOM order.
        for (var i = root.children.length - 1; i >= 0; i--) {
            var tabbableChild = this._getLastTabbableElement(root.children[i]);
            if (tabbableChild) {
                return tabbableChild;
            }
        }
        return null;
    };
    return FocusTrap;
}());
__decorate$11([
    _angular_core.ViewChild('trappedContent'),
    __metadata$7("design:type", _angular_core.ElementRef)
], exports.FocusTrap.prototype, "trappedContent", void 0);
__decorate$11([
    _angular_core.Input(),
    __metadata$7("design:type", Boolean),
    __metadata$7("design:paramtypes", [Boolean])
], exports.FocusTrap.prototype, "disabled", null);
exports.FocusTrap = __decorate$11([
    _angular_core.Component({
        selector: 'focus-trap',
        template: require('./focus-trap.html'),
        encapsulation: _angular_core.ViewEncapsulation.None,
    }),
    __metadata$7("design:paramtypes", [exports.InteractivityChecker, _angular_core.NgZone])
], exports.FocusTrap);

var __decorate$14 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$9 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$2 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var LIVE_ANNOUNCER_ELEMENT_TOKEN = new _angular_core.OpaqueToken('mdLiveAnnouncerElement');
exports.MdLiveAnnouncer = (function () {
    function MdLiveAnnouncer(elementToken) {
        // We inject the live element as `any` because the constructor signature cannot reference
        // browser globals (HTMLElement) on non-browser environments, since having a class decorator
        // causes TypeScript to preserve the constructor signature types.
        this._liveElement = elementToken || this._createLiveElement();
    }
    /**
     * @param message Message to be announced to the screenreader
     * @param politeness The politeness of the announcer element.
     */
    MdLiveAnnouncer.prototype.announce = function (message, politeness) {
        var _this = this;
        if (politeness === void 0) { politeness = 'polite'; }
        this._liveElement.textContent = '';
        // TODO: ensure changing the politeness works on all environments we support.
        this._liveElement.setAttribute('aria-live', politeness);
        // This 100ms timeout is necessary for some browser + screen-reader combinations:
        // - Both JAWS and NVDA over IE11 will not announce anything without a non-zero timeout.
        // - With Chrome and IE11 with NVDA or JAWS, a repeated (identical) message won't be read a
        //   second time without clearing and then using a non-zero delay.
        // (using JAWS 17 at time of this writing).
        setTimeout(function () { return _this._liveElement.textContent = message; }, 100);
    };
    /** Removes the aria-live element from the DOM. */
    MdLiveAnnouncer.prototype._removeLiveElement = function () {
        if (this._liveElement && this._liveElement.parentNode) {
            this._liveElement.parentNode.removeChild(this._liveElement);
        }
    };
    MdLiveAnnouncer.prototype._createLiveElement = function () {
        var liveEl = document.createElement('div');
        liveEl.classList.add('md-visually-hidden');
        liveEl.setAttribute('aria-atomic', 'true');
        liveEl.setAttribute('aria-live', 'polite');
        document.body.appendChild(liveEl);
        return liveEl;
    };
    return MdLiveAnnouncer;
}());
exports.MdLiveAnnouncer = __decorate$14([
    _angular_core.Injectable(),
    __param$2(0, _angular_core.Optional()), __param$2(0, _angular_core.Inject(LIVE_ANNOUNCER_ELEMENT_TOKEN)),
    __metadata$9("design:paramtypes", [Object])
], exports.MdLiveAnnouncer);

var __decorate$10 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var A11Y_PROVIDERS = [exports.MdLiveAnnouncer, exports.InteractivityChecker];
exports.A11yModule = A11yModule_1 = (function () {
    function A11yModule() {
    }
    A11yModule.forRoot = function () {
        return {
            ngModule: A11yModule_1,
            providers: A11Y_PROVIDERS,
        };
    };
    return A11yModule;
}());
exports.A11yModule = A11yModule_1 = __decorate$10([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.PlatformModule],
        declarations: [exports.FocusTrap],
        exports: [exports.FocusTrap],
    })
], exports.A11yModule);
var A11yModule_1;

var __decorate$15 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$10 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// "Polyfill" for `Node.replaceWith()`.
// cf. https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith
function _replaceWith(toReplaceEl, otherEl) {
    toReplaceEl.parentElement.replaceChild(otherEl, toReplaceEl);
}
exports.DomProjectionHost = (function () {
    function DomProjectionHost(ref) {
        this.ref = ref;
    }
    return DomProjectionHost;
}());
exports.DomProjectionHost = __decorate$15([
    _angular_core.Directive({
        selector: 'dom-projection-host'
    }),
    __metadata$10("design:paramtypes", [_angular_core.ElementRef])
], exports.DomProjectionHost);
exports.DomProjection = (function () {
    function DomProjection() {
    }
    /**
     * Project an element into a host element.
     * Replace a host element by another element. This also replaces the children of the element
     * by the children of the host.
     *
     * It should be used like this:
     *
     * ```
     *   @Component({
     *     template: `<div>
     *       <dom-projection-host>
     *         <div>other</div>
     *         <ng-content></ng-content>
     *       </dom-projection-host>
     *     </div>`
     *   })
     *   class Cmpt {
     *     constructor(private _projector: DomProjection, private _el: ElementRef) {}
     *     ngOnInit() { this._projector.project(this._el, this._projector); }
     *   }
     * ```
     *
     * This component will move the content of the element it's applied to in the outer div. Because
     * `project()` also move the children of the host inside the projected element, the element will
     * contain the `<div>other</div>` HTML as well as its own children.
     *
     * Note: without `<ng-content></ng-content>` the projection will project an empty element.
     */
    DomProjection.prototype.project = function (ref, host) {
        var projectedEl = ref.nativeElement;
        var hostEl = host.ref.nativeElement;
        var childNodes = projectedEl.childNodes;
        var child = childNodes[0];
        // We hoist all of the projected element's children out into the projected elements position
        // because we *only* want to move the projected element and not its children.
        _replaceWith(projectedEl, child);
        var l = childNodes.length;
        while (l--) {
            child.parentNode.insertBefore(childNodes[0], child.nextSibling);
            child = child.nextSibling; // nextSibling is now the childNodes[0].
        }
        // Insert all host children under the projectedEl, then replace host by component.
        l = hostEl.childNodes.length;
        while (l--) {
            projectedEl.appendChild(hostEl.childNodes[0]);
        }
        _replaceWith(hostEl, projectedEl);
        // At this point the host is replaced by the component. Nothing else to be done.
    };
    return DomProjection;
}());
exports.DomProjection = __decorate$15([
    _angular_core.Injectable()
], exports.DomProjection);
exports.ProjectionModule = ProjectionModule_1 = (function () {
    function ProjectionModule() {
    }
    ProjectionModule.forRoot = function () {
        return {
            ngModule: ProjectionModule_1,
            providers: [exports.DomProjection]
        };
    };
    return ProjectionModule;
}());
exports.ProjectionModule = ProjectionModule_1 = __decorate$15([
    _angular_core.NgModule({
        exports: [exports.DomProjectionHost],
        declarations: [exports.DomProjectionHost],
    })
], exports.ProjectionModule);
var ProjectionModule_1;

var __extends$5 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$16 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.MdGestureConfig = (function (_super) {
    __extends$5(MdGestureConfig, _super);
    function MdGestureConfig() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /* List of new event names to add to the gesture support list */
        _this.events = [
            'longpress',
            'slide',
            'slidestart',
            'slideend',
            'slideright',
            'slideleft'
        ];
        return _this;
    }
    /*
     * Builds Hammer instance manually to add custom recognizers that match the Material Design spec.
     *
     * Our gesture names come from the Material Design gestures spec:
     * https://www.google.com/design/spec/patterns/gestures.html#gestures-touch-mechanics
     *
     * More information on default recognizers can be found in Hammer docs:
     * http://hammerjs.github.io/recognizer-pan/
     * http://hammerjs.github.io/recognizer-press/
     *
     * TODO: Confirm threshold numbers with Material Design UX Team
     * */
    MdGestureConfig.prototype.buildHammer = function (element) {
        var mc = new Hammer(element);
        // Default Hammer Recognizers.
        var pan = new Hammer.Pan();
        var swipe = new Hammer.Swipe();
        var press = new Hammer.Press();
        // Notice that a HammerJS recognizer can only depend on one other recognizer once.
        // Otherwise the previous `recognizeWith` will be dropped.
        var slide = this._createRecognizer(pan, { event: 'slide', threshold: 0 }, swipe);
        var longpress = this._createRecognizer(press, { event: 'longpress', time: 500 });
        // Overwrite the default `pan` event to use the swipe event.
        pan.recognizeWith(swipe);
        // Add customized gestures to Hammer manager
        mc.add([swipe, press, pan, slide, longpress]);
        return mc;
    };
    /** Creates a new recognizer, without affecting the default recognizers of HammerJS */
    MdGestureConfig.prototype._createRecognizer = function (base, options) {
        var inheritances = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            inheritances[_i - 2] = arguments[_i];
        }
        var recognizer = new base.constructor(options);
        inheritances.push(base);
        inheritances.forEach(function (item) { return recognizer.recognizeWith(item); });
        return recognizer;
    };
    return MdGestureConfig;
}(_angular_platformBrowser.HammerGestureConfig));
exports.MdGestureConfig = __decorate$16([
    _angular_core.Injectable()
], exports.MdGestureConfig);

/**
 * Screenreaders will often fire fake mousedown events when a focusable element
 * is activated using the keyboard. We can typically distinguish between these faked
 * mousedown events and real mousedown events using the "buttons" property. While
 * real mousedowns will indicate the mouse button that was pressed (e.g. "1" for
 * the left mouse button), faked mousedowns will usually set the property value to 0.
 */
function isFakeMousedownFromScreenReader(event) {
    return event.buttons === 0;
}

var __decorate$17 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.MdUniqueSelectionDispatcher = (function () {
    function MdUniqueSelectionDispatcher() {
        this._listeners = [];
    }
    /** Notify other items that selection for the given name has been set. */
    MdUniqueSelectionDispatcher.prototype.notify = function (id, name) {
        for (var _i = 0, _a = this._listeners; _i < _a.length; _i++) {
            var listener = _a[_i];
            listener(id, name);
        }
    };
    /** Listen for future changes to item selection. */
    MdUniqueSelectionDispatcher.prototype.listen = function (listener) {
        this._listeners.push(listener);
    };
    return MdUniqueSelectionDispatcher;
}());
exports.MdUniqueSelectionDispatcher = __decorate$17([
    _angular_core.Injectable()
], exports.MdUniqueSelectionDispatcher);

/**
 * Applies a CSS transform to an element, including browser-prefixed properties.
 * @param element
 * @param transformValue
 */
/**
 * Applies a CSS transform to an element, including browser-prefixed properties.
 * @param element
 * @param transformValue
 */ function applyCssTransform(element, transformValue) {
    // It's important to trim the result, because the browser will ignore the set operation
    // if the string contains only whitespace.
    var value = transformValue.trim();
    element.style.transform = value;
    element.style.webkitTransform = value;
}

// Due to a bug in the ChromeDriver, Angular 2 keyboard events are not triggered by `sendKeys`
// during E2E tests when using dot notation such as `(keydown.rightArrow)`. To get around this,
// we are temporarily using a single (keydown) handler.
// See: https://github.com/angular/angular/issues/9419
var UP_ARROW = 38;
var DOWN_ARROW = 40;
var RIGHT_ARROW = 39;
var LEFT_ARROW = 37;
var PAGE_UP = 33;
var PAGE_DOWN = 34;
var HOME = 36;
var END = 35;
var ENTER = 13;
var SPACE = 32;
var TAB = 9;

var AnimationCurves = (function () {
    function AnimationCurves() {
    }
    return AnimationCurves;
}());
AnimationCurves.STANDARD_CURVE = 'cubic-bezier(0.4,0.0,0.2,1)';
AnimationCurves.DECELERATION_CURVE = 'cubic-bezier(0.0,0.0,0.2,1)';
AnimationCurves.ACCELERATION_CURVE = 'cubic-bezier(0.4,0.0,1,1)';
AnimationCurves.SHARP_CURVE = 'cubic-bezier(0.4,0.0,0.6,1)';
;
var AnimationDurations = (function () {
    function AnimationDurations() {
    }
    return AnimationDurations;
}());
AnimationDurations.COMPLEX = '375ms';
AnimationDurations.ENTERING = '225ms';
AnimationDurations.EXITING = '195ms';
;

/** Coerces a data-bound value (typically a string) to a number. */
/** Coerces a data-bound value (typically a string) to a number. */ function coerceNumberProperty(value, fallbackValue) {
    if (fallbackValue === void 0) { fallbackValue = 0; }
    // parseFloat(value) handles most of the cases we're interested in (it treats null, empty string,
    // and other non-number values as NaN, where Number just uses 0) but it considers the string
    // '123hello' to be a valid number. Therefore we also check if Number(value) is NaN.
    return isNaN(parseFloat(value)) || isNaN(Number(value)) ? fallbackValue : Number(value);
}

var __decorate$18 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$11 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Selector that matches all elements that may have style collisions with material1. */
var MD_ELEMENTS_SELECTOR = "\n  md-autocomplete,\n  md-card,\n  md-card-actions,\n  md-card-content,\n  md-card-footer,\n  md-card-header,\n  md-card-subtitle,\n  md-card-title,\n  md-card-title-group,\n  md-checkbox,\n  md-chip,\n  md-dialog-container,\n  md-divider,\n  md-grid-list,\n  md-grid-tile,\n  md-grid-tile-footer,\n  md-grid-tile-header,\n  md-hint,\n  md-icon,\n  md-ink-bar,\n  md-input,\n  md-list,\n  md-list-item,\n  md-menu,\n  md-nav-list,\n  md-option,\n  md-placeholder,\n  md-progress-bar,\n  md-progress-circle,\n  md-radio-button,\n  md-radio-group,\n  md-select,\n  md-sidenav,\n  md-slider,\n  md-spinner,\n  md-tab,\n  md-toolbar\n";
/** Directive that enforces that the `md-` prefix cannot be used. */
var MdPrefixEnforcer = (function () {
    function MdPrefixEnforcer() {
        throw Error('The "md-" prefix cannot be used in ng-material v1 compatibility mode.');
    }
    return MdPrefixEnforcer;
}());
MdPrefixEnforcer = __decorate$18([
    _angular_core.Directive({ selector: MD_ELEMENTS_SELECTOR }),
    __metadata$11("design:paramtypes", [])
], MdPrefixEnforcer);
exports.NoConflictStyleCompatibilityMode = NoConflictStyleCompatibilityMode_1 = (function () {
    function NoConflictStyleCompatibilityMode() {
    }
    NoConflictStyleCompatibilityMode.forRoot = function () {
        return {
            ngModule: NoConflictStyleCompatibilityMode_1,
            providers: [],
        };
    };
    return NoConflictStyleCompatibilityMode;
}());
exports.NoConflictStyleCompatibilityMode = NoConflictStyleCompatibilityMode_1 = __decorate$18([
    _angular_core.NgModule({
        declarations: [MdPrefixEnforcer],
        exports: [MdPrefixEnforcer],
        providers: [{
                provide: MATERIAL_COMPATIBILITY_MODE, useValue: true,
            }],
    })
], exports.NoConflictStyleCompatibilityMode);
var NoConflictStyleCompatibilityMode_1;

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.MdCoreModule = MdCoreModule_1 = (function () {
    function MdCoreModule() {
    }
    MdCoreModule.forRoot = function () {
        return {
            ngModule: MdCoreModule_1,
            providers: [A11Y_PROVIDERS, OVERLAY_PROVIDERS],
        };
    };
    return MdCoreModule;
}());
exports.MdCoreModule = MdCoreModule_1 = __decorate([
    _angular_core.NgModule({
        imports: [exports.MdLineModule, exports.RtlModule, exports.MdRippleModule, exports.PortalModule, exports.OverlayModule, exports.A11yModule],
        exports: [exports.MdLineModule, exports.RtlModule, exports.MdRippleModule, exports.PortalModule, exports.OverlayModule, exports.A11yModule],
    })
], exports.MdCoreModule);
var MdCoreModule_1;

var __decorate$20 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$12 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$3 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Provider Expression that allows md-button-toggle-group to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)].
 */
var MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.MdButtonToggleGroup; }),
    multi: true
};
var _uniqueIdCounter = 0;
/** A simple change event emitted by either MdButtonToggle or MdButtonToggleGroup. */
var MdButtonToggleChange = (function () {
    function MdButtonToggleChange() {
    }
    return MdButtonToggleChange;
}());
exports.MdButtonToggleGroup = (function () {
    function MdButtonToggleGroup() {
        /** The value for the button toggle group. Should match currently selected button toggle. */
        this._value = null;
        /** The HTML name attribute applied to toggles in this group. */
        this._name = "md-radio-group-" + _uniqueIdCounter++;
        /** Disables all toggles in the group. */
        this._disabled = null;
        /** Whether the button toggle group should be vertical. */
        this._vertical = false;
        /** The currently selected button toggle, should match the value. */
        this._selected = null;
        /** Whether the button toggle group is initialized or not. */
        this._isInitialized = false;
        /**
         * The method to be called in order to update ngModel.
         * Now `ngModel` binding is not supported in multiple selection mode.
         */
        this._controlValueAccessorChangeFn = function (value) { };
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this.onTouched = function () { };
        /** Event emitted when the group's value changes. */
        this._change = new _angular_core.EventEmitter();
        /** Child button toggle buttons. */
        this._buttonToggles = null;
    }
    Object.defineProperty(MdButtonToggleGroup.prototype, "change", {
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /** TODO: internal */
    MdButtonToggleGroup.prototype.ngAfterViewInit = function () {
        this._isInitialized = true;
    };
    Object.defineProperty(MdButtonToggleGroup.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this._updateButtonToggleNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            if (this._value != newValue) {
                this._value = newValue;
                this._updateSelectedButtonToggleFromValue();
                // Only emit a change event if the view is completely initialized.
                // We don't want to emit a change event for the initial values.
                if (this._isInitialized) {
                    this._emitChangeEvent();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroup.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            if (selected && !selected.checked) {
                selected.checked = true;
            }
        },
        enumerable: true,
        configurable: true
    });
    MdButtonToggleGroup.prototype._updateButtonToggleNames = function () {
        var _this = this;
        if (this._buttonToggles) {
            this._buttonToggles.forEach(function (toggle) {
                toggle.name = _this._name;
            });
        }
    };
    // TODO: Refactor into shared code with radio.
    MdButtonToggleGroup.prototype._updateSelectedButtonToggleFromValue = function () {
        var _this = this;
        var isAlreadySelected = this._selected != null && this._selected.value == this._value;
        if (this._buttonToggles != null && !isAlreadySelected) {
            var matchingButtonToggle = this._buttonToggles.filter(function (buttonToggle) { return buttonToggle.value == _this._value; })[0];
            if (matchingButtonToggle) {
                this.selected = matchingButtonToggle;
            }
            else if (this.value == null) {
                this.selected = null;
                this._buttonToggles.forEach(function (buttonToggle) {
                    buttonToggle.checked = false;
                });
            }
        }
    };
    /** Dispatch change event with current selection and group value. */
    MdButtonToggleGroup.prototype._emitChangeEvent = function () {
        var event = new MdButtonToggleChange();
        event.source = this._selected;
        event.value = this._value;
        this._controlValueAccessorChangeFn(event.value);
        this._change.emit(event);
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdButtonToggleGroup.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdButtonToggleGroup.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdButtonToggleGroup.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return MdButtonToggleGroup;
}());
__decorate$20([
    _angular_core.Output(),
    __metadata$12("design:type", rxjs_Observable.Observable),
    __metadata$12("design:paramtypes", [])
], exports.MdButtonToggleGroup.prototype, "change", null);
__decorate$20([
    _angular_core.ContentChildren(_angular_core.forwardRef(function () { return exports.MdButtonToggle; })),
    __metadata$12("design:type", _angular_core.QueryList)
], exports.MdButtonToggleGroup.prototype, "_buttonToggles", void 0);
__decorate$20([
    _angular_core.Input(),
    __metadata$12("design:type", String),
    __metadata$12("design:paramtypes", [String])
], exports.MdButtonToggleGroup.prototype, "name", null);
__decorate$20([
    _angular_core.Input(),
    __metadata$12("design:type", Boolean),
    __metadata$12("design:paramtypes", [Object])
], exports.MdButtonToggleGroup.prototype, "disabled", null);
__decorate$20([
    _angular_core.Input(),
    __metadata$12("design:type", Boolean),
    __metadata$12("design:paramtypes", [Object])
], exports.MdButtonToggleGroup.prototype, "vertical", null);
__decorate$20([
    _angular_core.Input(),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [Object])
], exports.MdButtonToggleGroup.prototype, "value", null);
__decorate$20([
    _angular_core.Input(),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [exports.MdButtonToggle])
], exports.MdButtonToggleGroup.prototype, "selected", null);
exports.MdButtonToggleGroup = __decorate$20([
    _angular_core.Directive({
        selector: 'md-button-toggle-group:not([multiple])',
        providers: [MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR],
        host: {
            'role': 'radiogroup',
            '[class.md-button-toggle-vertical]': 'vertical'
        },
        exportAs: 'mdButtonToggleGroup',
    })
], exports.MdButtonToggleGroup);
exports.MdButtonToggleGroupMultiple = (function () {
    function MdButtonToggleGroupMultiple() {
        /** Disables all toggles in the group. */
        this._disabled = null;
        /** Whether the button toggle group should be vertical. */
        this._vertical = false;
    }
    Object.defineProperty(MdButtonToggleGroupMultiple.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggleGroupMultiple.prototype, "vertical", {
        get: function () {
            return this._vertical;
        },
        set: function (value) {
            this._vertical = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    return MdButtonToggleGroupMultiple;
}());
__decorate$20([
    _angular_core.Input(),
    __metadata$12("design:type", Boolean),
    __metadata$12("design:paramtypes", [Object])
], exports.MdButtonToggleGroupMultiple.prototype, "disabled", null);
__decorate$20([
    _angular_core.Input(),
    __metadata$12("design:type", Boolean),
    __metadata$12("design:paramtypes", [Object])
], exports.MdButtonToggleGroupMultiple.prototype, "vertical", null);
exports.MdButtonToggleGroupMultiple = __decorate$20([
    _angular_core.Directive({
        selector: 'md-button-toggle-group[multiple]',
        exportAs: 'mdButtonToggleGroup',
        host: {
            '[class.md-button-toggle-vertical]': 'vertical'
        }
    })
], exports.MdButtonToggleGroupMultiple);
exports.MdButtonToggle = (function () {
    function MdButtonToggle(toggleGroup, toggleGroupMultiple, buttonToggleDispatcher, _renderer) {
        var _this = this;
        this.buttonToggleDispatcher = buttonToggleDispatcher;
        this._renderer = _renderer;
        /** Whether or not this button toggle is checked. */
        this._checked = false;
        /** Whether or not this button toggle is disabled. */
        this._disabled = null;
        /** Value assigned to this button toggle. */
        this._value = null;
        /** Whether or not the button toggle is a single selection. */
        this._isSingleSelector = null;
        /** Event emitted when the group value changes. */
        this._change = new _angular_core.EventEmitter();
        this.buttonToggleGroup = toggleGroup;
        this.buttonToggleGroupMultiple = toggleGroupMultiple;
        if (this.buttonToggleGroup) {
            buttonToggleDispatcher.listen(function (id, name) {
                if (id != _this.id && name == _this.name) {
                    _this.checked = false;
                }
            });
            this._type = 'radio';
            this.name = this.buttonToggleGroup.name;
            this._isSingleSelector = true;
        }
        else {
            // Even if there is no group at all, treat the button toggle as a checkbox so it can be
            // toggled on or off.
            this._type = 'checkbox';
            this._isSingleSelector = false;
        }
    }
    Object.defineProperty(MdButtonToggle.prototype, "change", {
        get: function () {
            return this._change.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    MdButtonToggle.prototype.ngOnInit = function () {
        if (this.id == null) {
            this.id = "md-button-toggle-" + _uniqueIdCounter++;
        }
        if (this.buttonToggleGroup && this._value == this.buttonToggleGroup.value) {
            this._checked = true;
        }
    };
    Object.defineProperty(MdButtonToggle.prototype, "inputId", {
        get: function () {
            return this.id + "-input";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggle.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (newCheckedState) {
            if (this._isSingleSelector) {
                if (newCheckedState) {
                    // Notify all button toggles with the same name (in the same group) to un-check.
                    this.buttonToggleDispatcher.notify(this.id, this.name);
                }
            }
            this._checked = newCheckedState;
            if (newCheckedState && this._isSingleSelector && this.buttonToggleGroup.value != this.value) {
                this.buttonToggleGroup.selected = this;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButtonToggle.prototype, "value", {
        /** MdButtonToggleGroup reads this to assign its own value. */
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value != value) {
                if (this.buttonToggleGroup != null && this.checked) {
                    this.buttonToggleGroup.value = value;
                }
                this._value = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /** Dispatch change event with current value. */
    MdButtonToggle.prototype._emitChangeEvent = function () {
        var event = new MdButtonToggleChange();
        event.source = this;
        event.value = this._value;
        this._change.emit(event);
    };
    Object.defineProperty(MdButtonToggle.prototype, "disabled", {
        get: function () {
            return this._disabled || (this.buttonToggleGroup != null && this.buttonToggleGroup.disabled) ||
                (this.buttonToggleGroupMultiple != null && this.buttonToggleGroupMultiple.disabled);
        },
        set: function (value) {
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    /** Toggle the state of the current button toggle. */
    MdButtonToggle.prototype._toggle = function () {
        this.checked = !this.checked;
    };
    /** Checks the button toggle due to an interaction with the underlying native input. */
    MdButtonToggle.prototype._onInputChange = function (event) {
        event.stopPropagation();
        if (this._isSingleSelector) {
            // Propagate the change one-way via the group, which will in turn mark this
            // button toggle as checked.
            this.checked = true;
            this.buttonToggleGroup.selected = this;
            this.buttonToggleGroup.onTouched();
        }
        else {
            this._toggle();
        }
        // Emit a change event when the native input does.
        this._emitChangeEvent();
    };
    /** TODO: internal */
    MdButtonToggle.prototype._onInputClick = function (event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    MdButtonToggle.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._inputElement.nativeElement, 'focus');
    };
    return MdButtonToggle;
}());
__decorate$20([
    _angular_core.HostBinding(),
    _angular_core.Input(),
    __metadata$12("design:type", String)
], exports.MdButtonToggle.prototype, "id", void 0);
__decorate$20([
    _angular_core.Input(),
    __metadata$12("design:type", String)
], exports.MdButtonToggle.prototype, "name", void 0);
__decorate$20([
    _angular_core.Output(),
    __metadata$12("design:type", rxjs_Observable.Observable),
    __metadata$12("design:paramtypes", [])
], exports.MdButtonToggle.prototype, "change", null);
__decorate$20([
    _angular_core.ViewChild('input'),
    __metadata$12("design:type", _angular_core.ElementRef)
], exports.MdButtonToggle.prototype, "_inputElement", void 0);
__decorate$20([
    _angular_core.HostBinding('class.md-button-toggle-checked'),
    _angular_core.Input(),
    __metadata$12("design:type", Boolean),
    __metadata$12("design:paramtypes", [Boolean])
], exports.MdButtonToggle.prototype, "checked", null);
__decorate$20([
    _angular_core.Input(),
    __metadata$12("design:type", Object),
    __metadata$12("design:paramtypes", [Object])
], exports.MdButtonToggle.prototype, "value", null);
__decorate$20([
    _angular_core.HostBinding('class.md-button-toggle-disabled'),
    _angular_core.Input(),
    __metadata$12("design:type", Boolean),
    __metadata$12("design:paramtypes", [Boolean])
], exports.MdButtonToggle.prototype, "disabled", null);
exports.MdButtonToggle = __decorate$20([
    _angular_core.Component({
        selector: 'md-button-toggle',
        template: require('./button-toggle.html'),
        styles: [require('./button-toggle.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
    }),
    __param$3(0, _angular_core.Optional()),
    __param$3(1, _angular_core.Optional()),
    __metadata$12("design:paramtypes", [exports.MdButtonToggleGroup,
        exports.MdButtonToggleGroupMultiple,
        exports.MdUniqueSelectionDispatcher,
        _angular_core.Renderer])
], exports.MdButtonToggle);
exports.MdButtonToggleModule = MdButtonToggleModule_1 = (function () {
    function MdButtonToggleModule() {
    }
    MdButtonToggleModule.forRoot = function () {
        return {
            ngModule: MdButtonToggleModule_1,
            providers: [exports.MdUniqueSelectionDispatcher]
        };
    };
    return MdButtonToggleModule;
}());
exports.MdButtonToggleModule = MdButtonToggleModule_1 = __decorate$20([
    _angular_core.NgModule({
        imports: [_angular_forms.FormsModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [
            exports.MdButtonToggleGroup,
            exports.MdButtonToggleGroupMultiple,
            exports.MdButtonToggle,
            exports.DefaultStyleCompatibilityModeModule,
        ],
        declarations: [exports.MdButtonToggleGroup, exports.MdButtonToggleGroupMultiple, exports.MdButtonToggle],
    })
], exports.MdButtonToggleModule);
var MdButtonToggleModule_1;

var __extends$6 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$21 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$13 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdButton = (function () {
    function MdButton(_elementRef, _renderer) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /** Whether the button has focus from the keyboard (not the mouse). Used for class binding. */
        this._isKeyboardFocused = false;
        /** Whether a mousedown has occurred on this element in the last 100ms. */
        this._isMouseDown = false;
        /** Whether the ripple effect on click should be disabled. */
        this._disableRipple = false;
        this._disabled = null;
    }
    Object.defineProperty(MdButton.prototype, "disableRipple", {
        get: function () { return this._disableRipple; },
        set: function (v) { this._disableRipple = coerceBooleanProperty(v); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButton.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = coerceBooleanProperty(value) ? true : null; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdButton.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    MdButton.prototype._setMousedown = function () {
        var _this = this;
        // We only *show* the focus style when focus has come to the button via the keyboard.
        // The Material Design spec is silent on this topic, and without doing this, the
        // button continues to look :active after clicking.
        // @see http://marcysutton.com/button-focus-hell/
        this._isMouseDown = true;
        setTimeout(function () { _this._isMouseDown = false; }, 100);
    };
    MdButton.prototype._updateColor = function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    MdButton.prototype._setElementColor = function (color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, "md-" + color, isAdd);
        }
    };
    MdButton.prototype._setKeyboardFocus = function () {
        this._isKeyboardFocused = !this._isMouseDown;
    };
    MdButton.prototype._removeKeyboardFocus = function () {
        this._isKeyboardFocused = false;
    };
    /** TODO(hansl): e2e test this function. */
    MdButton.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'focus');
    };
    MdButton.prototype.getHostElement = function () {
        return this._elementRef.nativeElement;
    };
    MdButton.prototype.isRoundButton = function () {
        var el = this._elementRef.nativeElement;
        return el.hasAttribute('md-icon-button') ||
            el.hasAttribute('md-fab') ||
            el.hasAttribute('md-mini-fab');
    };
    MdButton.prototype._isRippleDisabled = function () {
        return this.disableRipple || this.disabled;
    };
    return MdButton;
}());
__decorate$21([
    _angular_core.Input(),
    __metadata$13("design:type", Object),
    __metadata$13("design:paramtypes", [Object])
], exports.MdButton.prototype, "disableRipple", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$13("design:type", Object),
    __metadata$13("design:paramtypes", [Boolean])
], exports.MdButton.prototype, "disabled", null);
__decorate$21([
    _angular_core.Input(),
    __metadata$13("design:type", String),
    __metadata$13("design:paramtypes", [String])
], exports.MdButton.prototype, "color", null);
exports.MdButton = __decorate$21([
    _angular_core.Component({
        selector: 'button[md-button], button[md-raised-button], button[md-icon-button], ' +
            'button[md-fab], button[md-mini-fab]',
        host: {
            '[disabled]': 'disabled',
            '[class.md-button-focus]': '_isKeyboardFocused',
            '(mousedown)': '_setMousedown()',
            '(focus)': '_setKeyboardFocus()',
            '(blur)': '_removeKeyboardFocus()',
        },
        template: require('./button.html'),
        styles: [require('./button.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    }),
    __metadata$13("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], exports.MdButton);
exports.MdAnchor = (function (_super) {
    __extends$6(MdAnchor, _super);
    function MdAnchor(elementRef, renderer) {
        return _super.call(this, elementRef, renderer) || this;
    }
    Object.defineProperty(MdAnchor.prototype, "tabIndex", {
        get: function () {
            return this.disabled ? -1 : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdAnchor.prototype, "isAriaDisabled", {
        /** Gets the aria-disabled value for the component, which must be a string for Dart. */
        get: function () {
            return this.disabled ? 'true' : 'false';
        },
        enumerable: true,
        configurable: true
    });
    MdAnchor.prototype._haltDisabledEvents = function (event) {
        // A disabled button shouldn't apply any actions
        if (this.disabled) {
            event.preventDefault();
            event.stopImmediatePropagation();
        }
    };
    return MdAnchor;
}(exports.MdButton));
__decorate$21([
    _angular_core.HostBinding('tabIndex'),
    __metadata$13("design:type", Number),
    __metadata$13("design:paramtypes", [])
], exports.MdAnchor.prototype, "tabIndex", null);
__decorate$21([
    _angular_core.HostBinding('attr.aria-disabled'),
    __metadata$13("design:type", String),
    __metadata$13("design:paramtypes", [])
], exports.MdAnchor.prototype, "isAriaDisabled", null);
exports.MdAnchor = __decorate$21([
    _angular_core.Component({
        selector: 'a[md-button], a[md-raised-button], a[md-icon-button], a[md-fab], a[md-mini-fab]',
        inputs: ['color', 'disabled', 'disableRipple'],
        host: {
            '[attr.disabled]': 'disabled',
            '[class.md-button-focus]': '_isKeyboardFocused',
            '(mousedown)': '_setMousedown()',
            '(focus)': '_setKeyboardFocus()',
            '(blur)': '_removeKeyboardFocus()',
            '(click)': '_haltDisabledEvents($event)',
        },
        template: require('./button.html'),
        styles: [require('./button.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None
    }),
    __metadata$13("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], exports.MdAnchor);
exports.MdButtonModule = MdButtonModule_1 = (function () {
    function MdButtonModule() {
    }
    MdButtonModule.forRoot = function () {
        return {
            ngModule: MdButtonModule_1,
            providers: [ViewportRuler]
        };
    };
    return MdButtonModule;
}());
exports.MdButtonModule = MdButtonModule_1 = __decorate$21([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.MdRippleModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdButton, exports.MdAnchor, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdButton, exports.MdAnchor],
    })
], exports.MdButtonModule);
var MdButtonModule_1;

var __decorate$22 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$14 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Monotonically increasing integer used to auto-generate unique ids for checkbox components.
 */
var nextId = 0;
/**
 * Provider Expression that allows md-checkbox to register as a ControlValueAccessor. This allows it
 * to support [(ngModel)].
 */
var MD_CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.MdCheckbox; }),
    multi: true
};
/**
 * Represents the different states that require custom transitions between them.
 */
(function (TransitionCheckState) {
    /** The initial state of the component before any user interaction. */
    TransitionCheckState[TransitionCheckState["Init"] = 0] = "Init";
    /** The state representing the component when it's becoming checked. */
    TransitionCheckState[TransitionCheckState["Checked"] = 1] = "Checked";
    /** The state representing the component when it's becoming unchecked. */
    TransitionCheckState[TransitionCheckState["Unchecked"] = 2] = "Unchecked";
    /** The state representing the component when it's becoming indeterminate. */
    TransitionCheckState[TransitionCheckState["Indeterminate"] = 3] = "Indeterminate";
})(exports.TransitionCheckState || (exports.TransitionCheckState = {}));
// A simple change event emitted by the MdCheckbox component.
var MdCheckboxChange = (function () {
    function MdCheckboxChange() {
    }
    return MdCheckboxChange;
}());
exports.MdCheckbox = (function () {
    function MdCheckbox(_renderer, _elementRef, _changeDetectorRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Attached to the aria-label attribute of the host element. In most cases, arial-labelledby will
         * take precedence so this may be omitted.
         */
        this.ariaLabel = '';
        /**
         * Users can specify the `aria-labelledby` attribute which will be forwarded to the input element
         */
        this.ariaLabelledby = null;
        /** A unique id for the checkbox. If one is not supplied, it is auto-generated. */
        this.id = "md-checkbox-" + ++nextId;
        /** Whether or not the checkbox should come before or after the label. */
        this.align = 'start';
        this._disabled = false;
        /**
         * The tabindex attribute for the checkbox. Note that when the checkbox is disabled, the attribute
         * on the host element will be removed. It will be placed back when the checkbox is re-enabled.
         */
        this.tabindex = 0;
        /** Name value will be applied to the input element if present */
        this.name = null;
        /** Event emitted when the checkbox's `checked` value changes. */
        this.change = new _angular_core.EventEmitter();
        /** Called when the checkbox is blurred. Needed to properly implement ControlValueAccessor. */
        this.onTouched = function () { };
        this._currentAnimationClass = '';
        this._currentCheckState = exports.TransitionCheckState.Init;
        this._checked = false;
        this._indeterminate = false;
        this._controlValueAccessorChangeFn = function (value) { };
        this.hasFocus = false;
        this.color = 'accent';
    }
    Object.defineProperty(MdCheckbox.prototype, "disableRipple", {
        get: function () { return this._disableRipple; },
        set: function (value) { this._disableRipple = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCheckbox.prototype, "inputId", {
        /** ID to be applied to the `input` element */
        get: function () {
            return "input-" + this.id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCheckbox.prototype, "required", {
        /** Whether the checkbox is required or not. */
        get: function () { return this._required; },
        set: function (value) { this._required = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCheckbox.prototype, "disabled", {
        /**
         * Whether the checkbox is disabled. When the checkbox is disabled it cannot be interacted with.
         * The correct ARIA attributes are applied to denote this to assistive technology.
         */
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCheckbox.prototype, "checked", {
        /**
         * Whether the checkbox is checked. Note that setting `checked` will immediately set
         * `indeterminate` to false.
         */
        get: function () {
            return this._checked;
        },
        set: function (checked) {
            if (checked != this.checked) {
                this._indeterminate = false;
                this._checked = checked;
                this._transitionCheckState(this._checked ? exports.TransitionCheckState.Checked : exports.TransitionCheckState.Unchecked);
                this._changeDetectorRef.markForCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCheckbox.prototype, "indeterminate", {
        /**
         * Whether the checkbox is indeterminate. This is also known as "mixed" mode and can be used to
         * represent a checkbox with three states, e.g. a checkbox that represents a nested list of
         * checkable items. Note that whenever `checked` is set, indeterminate is immediately set to
         * false. This differs from the web platform in that indeterminate state on native
         * checkboxes is only remove when the user manually checks the checkbox (rather than setting the
         * `checked` property programmatically). However, we feel that this behavior is more accommodating
         * to the way consumers would envision using this component.
         */
        get: function () {
            return this._indeterminate;
        },
        set: function (indeterminate) {
            this._indeterminate = indeterminate;
            if (this._indeterminate) {
                this._transitionCheckState(exports.TransitionCheckState.Indeterminate);
            }
            else {
                this._transitionCheckState(this.checked ? exports.TransitionCheckState.Checked : exports.TransitionCheckState.Unchecked);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdCheckbox.prototype, "color", {
        /** Sets the color of the checkbox */
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    MdCheckbox.prototype._updateColor = function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    MdCheckbox.prototype._setElementColor = function (color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, "md-" + color, isAdd);
        }
    };
    MdCheckbox.prototype._isRippleDisabled = function () {
        return this.disableRipple || this.disabled;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdCheckbox.prototype.writeValue = function (value) {
        this.checked = !!value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdCheckbox.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdCheckbox.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Implemented as a part of ControlValueAccessor.
     */
    MdCheckbox.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdCheckbox.prototype._transitionCheckState = function (newState) {
        var oldState = this._currentCheckState;
        var renderer = this._renderer;
        var elementRef = this._elementRef;
        if (oldState === newState) {
            return;
        }
        if (this._currentAnimationClass.length > 0) {
            renderer.setElementClass(elementRef.nativeElement, this._currentAnimationClass, false);
        }
        this._currentAnimationClass = this._getAnimationClassForCheckStateTransition(oldState, newState);
        this._currentCheckState = newState;
        if (this._currentAnimationClass.length > 0) {
            renderer.setElementClass(elementRef.nativeElement, this._currentAnimationClass, true);
        }
    };
    MdCheckbox.prototype._emitChangeEvent = function () {
        var event = new MdCheckboxChange();
        event.source = this;
        event.checked = this.checked;
        this._controlValueAccessorChangeFn(this.checked);
        this.change.emit(event);
    };
    /** Informs the component when the input has focus so that we can style accordingly */
    MdCheckbox.prototype._onInputFocus = function () {
        this.hasFocus = true;
    };
    /** Informs the component when we lose focus in order to style accordingly */
    MdCheckbox.prototype._onInputBlur = function () {
        this.hasFocus = false;
        this.onTouched();
    };
    /**
     * Toggles the `checked` value between true and false
     */
    MdCheckbox.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    /**
     * Event handler for checkbox input element.
     * Toggles checked state if element is not disabled.
     * @param event
     */
    MdCheckbox.prototype._onInteractionEvent = function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        if (!this.disabled) {
            this.toggle();
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
    };
    MdCheckbox.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._inputElement.nativeElement, 'focus');
        this._onInputFocus();
    };
    MdCheckbox.prototype._onInputClick = function (event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `checkbox` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    MdCheckbox.prototype._getAnimationClassForCheckStateTransition = function (oldState, newState) {
        var animSuffix;
        switch (oldState) {
            case exports.TransitionCheckState.Init:
                // Handle edge case where user interacts with checkbox that does not have [(ngModel)] or
                // [checked] bound to it.
                if (newState === exports.TransitionCheckState.Checked) {
                    animSuffix = 'unchecked-checked';
                }
                else {
                    return '';
                }
                break;
            case exports.TransitionCheckState.Unchecked:
                animSuffix = newState === exports.TransitionCheckState.Checked ?
                    'unchecked-checked' : 'unchecked-indeterminate';
                break;
            case exports.TransitionCheckState.Checked:
                animSuffix = newState === exports.TransitionCheckState.Unchecked ?
                    'checked-unchecked' : 'checked-indeterminate';
                break;
            case exports.TransitionCheckState.Indeterminate:
                animSuffix = newState === exports.TransitionCheckState.Checked ?
                    'indeterminate-checked' : 'indeterminate-unchecked';
        }
        return "md-checkbox-anim-" + animSuffix;
    };
    MdCheckbox.prototype.getHostElement = function () {
        return this._elementRef.nativeElement;
    };
    return MdCheckbox;
}());
__decorate$22([
    _angular_core.Input('aria-label'),
    __metadata$14("design:type", String)
], exports.MdCheckbox.prototype, "ariaLabel", void 0);
__decorate$22([
    _angular_core.Input('aria-labelledby'),
    __metadata$14("design:type", String)
], exports.MdCheckbox.prototype, "ariaLabelledby", void 0);
__decorate$22([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], exports.MdCheckbox.prototype, "id", void 0);
__decorate$22([
    _angular_core.Input(),
    __metadata$14("design:type", Boolean),
    __metadata$14("design:paramtypes", [Object])
], exports.MdCheckbox.prototype, "disableRipple", null);
__decorate$22([
    _angular_core.Input(),
    __metadata$14("design:type", Boolean),
    __metadata$14("design:paramtypes", [Object])
], exports.MdCheckbox.prototype, "required", null);
__decorate$22([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], exports.MdCheckbox.prototype, "align", void 0);
__decorate$22([
    _angular_core.Input(),
    __metadata$14("design:type", Boolean),
    __metadata$14("design:paramtypes", [Object])
], exports.MdCheckbox.prototype, "disabled", null);
__decorate$22([
    _angular_core.Input(),
    __metadata$14("design:type", Number)
], exports.MdCheckbox.prototype, "tabindex", void 0);
__decorate$22([
    _angular_core.Input(),
    __metadata$14("design:type", String)
], exports.MdCheckbox.prototype, "name", void 0);
__decorate$22([
    _angular_core.Output(),
    __metadata$14("design:type", _angular_core.EventEmitter)
], exports.MdCheckbox.prototype, "change", void 0);
__decorate$22([
    _angular_core.ViewChild('input'),
    __metadata$14("design:type", _angular_core.ElementRef)
], exports.MdCheckbox.prototype, "_inputElement", void 0);
__decorate$22([
    _angular_core.Input(),
    __metadata$14("design:type", Object),
    __metadata$14("design:paramtypes", [Boolean])
], exports.MdCheckbox.prototype, "checked", null);
__decorate$22([
    _angular_core.Input(),
    __metadata$14("design:type", Object),
    __metadata$14("design:paramtypes", [Boolean])
], exports.MdCheckbox.prototype, "indeterminate", null);
__decorate$22([
    _angular_core.Input(),
    __metadata$14("design:type", String),
    __metadata$14("design:paramtypes", [String])
], exports.MdCheckbox.prototype, "color", null);
exports.MdCheckbox = __decorate$22([
    _angular_core.Component({
        selector: 'md-checkbox, mat-checkbox',
        template: require('./checkbox.html'),
        styles: [require('./checkbox.css').toString()],
        host: {
            '[class.md-checkbox-indeterminate]': 'indeterminate',
            '[class.md-checkbox-checked]': 'checked',
            '[class.md-checkbox-disabled]': 'disabled',
            '[class.md-checkbox-align-end]': 'align == "end"',
            '[class.md-checkbox-focused]': 'hasFocus',
        },
        providers: [MD_CHECKBOX_CONTROL_VALUE_ACCESSOR],
        encapsulation: _angular_core.ViewEncapsulation.None,
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    }),
    __metadata$14("design:paramtypes", [_angular_core.Renderer,
        _angular_core.ElementRef,
        _angular_core.ChangeDetectorRef])
], exports.MdCheckbox);
exports.MdCheckboxModule = MdCheckboxModule_1 = (function () {
    function MdCheckboxModule() {
    }
    MdCheckboxModule.forRoot = function () {
        return {
            ngModule: MdCheckboxModule_1,
            providers: [ViewportRuler]
        };
    };
    return MdCheckboxModule;
}());
exports.MdCheckboxModule = MdCheckboxModule_1 = __decorate$22([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.MdRippleModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdCheckbox, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdCheckbox],
    })
], exports.MdCheckboxModule);
var MdCheckboxModule_1;

var __decorate$23 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$15 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$4 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Provider Expression that allows md-radio-group to register as a ControlValueAccessor. This
 * allows it to support [(ngModel)] and ngControl.
 */
var MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.MdRadioGroup; }),
    multi: true
};
// TODO(mtlin):
// Ink ripple is currently placeholder.
// Determine motion spec for button transitions.
// Design review.
// RTL
// Support forms API.
// Use ChangeDetectionStrategy.OnPush
var _uniqueIdCounter$1 = 0;
/** A simple change event emitted by either MdRadioButton or MdRadioGroup. */
var MdRadioChange = (function () {
    function MdRadioChange() {
    }
    return MdRadioChange;
}());
exports.MdRadioGroup = (function () {
    function MdRadioGroup() {
        /**
         * Selected value for group. Should equal the value of the selected radio button if there *is*
         * a corresponding radio button with a matching value. If there is *not* such a corresponding
         * radio button, this value persists to be applied in case a new radio button is added with a
         * matching value.
         */
        this._value = null;
        /** The HTML name attribute applied to radio buttons in this group. */
        this._name = "md-radio-group-" + _uniqueIdCounter$1++;
        /** Disables all individual radio buttons assigned to this group. */
        this._disabled = false;
        /** The currently selected radio button. Should match value. */
        this._selected = null;
        /** Whether the `value` has been set to its initial value. */
        this._isInitialized = false;
        /** The method to be called in order to update ngModel */
        this._controlValueAccessorChangeFn = function (value) { };
        /** onTouch function registered via registerOnTouch (ControlValueAccessor). */
        this.onTouched = function () { };
        /** Event emitted when the group value changes. */
        this.change = new _angular_core.EventEmitter();
        /** Child radio buttons. */
        this._radios = null;
    }
    Object.defineProperty(MdRadioGroup.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
            this._updateRadioButtonNames();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRadioGroup.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            // The presence of *any* disabled value makes the component disabled, *except* for false.
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRadioGroup.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newValue) {
            if (this._value != newValue) {
                // Set this before proceeding to ensure no circular loop occurs with selection.
                this._value = newValue;
                this._updateSelectedRadioFromValue();
                this._checkSelectedRadioButton();
            }
        },
        enumerable: true,
        configurable: true
    });
    MdRadioGroup.prototype._checkSelectedRadioButton = function () {
        if (this.selected && !this._selected.checked) {
            this._selected.checked = true;
        }
    };
    Object.defineProperty(MdRadioGroup.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (selected) {
            this._selected = selected;
            this.value = selected ? selected.value : null;
            this._checkSelectedRadioButton();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Initialize properties once content children are available.
     * This allows us to propagate relevant attributes to associated buttons.
     * TODO: internal
     */
    MdRadioGroup.prototype.ngAfterContentInit = function () {
        // Mark this component as initialized in AfterContentInit because the initial value can
        // possibly be set by NgModel on MdRadioGroup, and it is possible that the OnInit of the
        // NgModel occurs *after* the OnInit of the MdRadioGroup.
        this._isInitialized = true;
    };
    /**
     * Mark this group as being "touched" (for ngModel). Meant to be called by the contained
     * radio buttons upon their blur.
     */
    MdRadioGroup.prototype._touch = function () {
        if (this.onTouched) {
            this.onTouched();
        }
    };
    MdRadioGroup.prototype._updateRadioButtonNames = function () {
        var _this = this;
        if (this._radios) {
            this._radios.forEach(function (radio) {
                radio.name = _this.name;
            });
        }
    };
    /** Updates the `selected` radio button from the internal _value state. */
    MdRadioGroup.prototype._updateSelectedRadioFromValue = function () {
        var _this = this;
        // If the value already matches the selected radio, do nothing.
        var isAlreadySelected = this._selected != null && this._selected.value == this._value;
        if (this._radios != null && !isAlreadySelected) {
            this._selected = null;
            this._radios.forEach(function (radio) {
                radio.checked = _this.value == radio.value;
                if (radio.checked) {
                    _this._selected = radio;
                }
            });
        }
    };
    /** Dispatch change event with current selection and group value. */
    MdRadioGroup.prototype._emitChangeEvent = function () {
        if (this._isInitialized) {
            var event_1 = new MdRadioChange();
            event_1.source = this._selected;
            event_1.value = this._value;
            this.change.emit(event_1);
        }
    };
    /**
      * Implemented as part of ControlValueAccessor.
      * TODO: internal
      */
    MdRadioGroup.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdRadioGroup.prototype.registerOnChange = function (fn) {
        this._controlValueAccessorChangeFn = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdRadioGroup.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Implemented as a part of ControlValueAccessor.
     */
    MdRadioGroup.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    return MdRadioGroup;
}());
__decorate$23([
    _angular_core.Output(),
    __metadata$15("design:type", _angular_core.EventEmitter)
], exports.MdRadioGroup.prototype, "change", void 0);
__decorate$23([
    _angular_core.ContentChildren(_angular_core.forwardRef(function () { return exports.MdRadioButton; })),
    __metadata$15("design:type", _angular_core.QueryList)
], exports.MdRadioGroup.prototype, "_radios", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$15("design:type", String),
    __metadata$15("design:paramtypes", [String])
], exports.MdRadioGroup.prototype, "name", null);
__decorate$23([
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.MdRadioGroup.prototype, "align", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$15("design:type", Boolean),
    __metadata$15("design:paramtypes", [Object])
], exports.MdRadioGroup.prototype, "disabled", null);
__decorate$23([
    _angular_core.Input(),
    __metadata$15("design:type", Object),
    __metadata$15("design:paramtypes", [Object])
], exports.MdRadioGroup.prototype, "value", null);
__decorate$23([
    _angular_core.Input(),
    __metadata$15("design:type", Object),
    __metadata$15("design:paramtypes", [exports.MdRadioButton])
], exports.MdRadioGroup.prototype, "selected", null);
exports.MdRadioGroup = __decorate$23([
    _angular_core.Directive({
        selector: 'md-radio-group, mat-radio-group',
        providers: [MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR],
        host: {
            'role': 'radiogroup',
        },
    })
], exports.MdRadioGroup);
exports.MdRadioButton = (function () {
    function MdRadioButton(radioGroup, _elementRef, _renderer, radioDispatcher) {
        // Assertions. Ideally these should be stripped out by the compiler.
        // TODO(jelbourn): Assert that there's no name binding AND a parent radio group.
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.radioDispatcher = radioDispatcher;
        /** Whether this radio is checked. */
        this._checked = false;
        /** The unique ID for the radio button. */
        this.id = "md-radio-" + _uniqueIdCounter$1++;
        /** Value assigned to this radio.*/
        this._value = null;
        /** Event emitted when the group value changes. */
        this.change = new _angular_core.EventEmitter();
        this.radioGroup = radioGroup;
        radioDispatcher.listen(function (id, name) {
            if (id != _this.id && name == _this.name) {
                _this.checked = false;
            }
        });
    }
    Object.defineProperty(MdRadioButton.prototype, "disableRipple", {
        get: function () { return this._disableRipple; },
        set: function (value) { this._disableRipple = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRadioButton.prototype, "inputId", {
        get: function () {
            return this.id + "-input";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRadioButton.prototype, "checked", {
        get: function () {
            return this._checked;
        },
        set: function (newCheckedState) {
            if (this._checked != newCheckedState) {
                this._checked = newCheckedState;
                if (newCheckedState && this.radioGroup && this.radioGroup.value != this.value) {
                    this.radioGroup.selected = this;
                }
                else if (!newCheckedState && this.radioGroup && this.radioGroup.value == this.value) {
                    // When unchecking the selected radio button, update the selected radio
                    // property on the group.
                    this.radioGroup.selected = null;
                }
                if (newCheckedState) {
                    // Notify all radio buttons with the same name to un-check.
                    this.radioDispatcher.notify(this.id, this.name);
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRadioButton.prototype, "value", {
        /** MdRadioGroup reads this to assign its own value. */
        get: function () {
            return this._value;
        },
        set: function (value) {
            if (this._value != value) {
                this._value = value;
                if (this.radioGroup != null) {
                    if (!this.checked) {
                        // Update checked when the value changed to match the radio group's value
                        this.checked = this.radioGroup.value == value;
                    }
                    if (this.checked) {
                        this.radioGroup.selected = this;
                    }
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRadioButton.prototype, "align", {
        get: function () {
            return this._align || (this.radioGroup != null && this.radioGroup.align) || 'start';
        },
        set: function (value) {
            this._align = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdRadioButton.prototype, "disabled", {
        get: function () {
            return this._disabled || (this.radioGroup != null && this.radioGroup.disabled);
        },
        set: function (value) {
            // The presence of *any* disabled value makes the component disabled, *except* for false.
            this._disabled = (value != null && value !== false) ? true : null;
        },
        enumerable: true,
        configurable: true
    });
    /** TODO: internal */
    MdRadioButton.prototype.ngOnInit = function () {
        if (this.radioGroup) {
            // If the radio is inside a radio group, determine if it should be checked
            this.checked = this.radioGroup.value === this._value;
            // Copy name from parent radio group
            this.name = this.radioGroup.name;
        }
    };
    /** Dispatch change event with current value. */
    MdRadioButton.prototype._emitChangeEvent = function () {
        var event = new MdRadioChange();
        event.source = this;
        event.value = this._value;
        this.change.emit(event);
    };
    MdRadioButton.prototype._isRippleDisabled = function () {
        return this.disableRipple || this.disabled;
    };
    /**
     * We use a hidden native input field to handle changes to focus state via keyboard navigation,
     * with visual rendering done separately. The native element is kept in sync with the overall
     * state of the component.
     */
    MdRadioButton.prototype._onInputFocus = function () {
        this._isFocused = true;
    };
    MdRadioButton.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._inputElement.nativeElement, 'focus');
        this._onInputFocus();
    };
    /** TODO: internal */
    MdRadioButton.prototype._onInputBlur = function () {
        this._isFocused = false;
        if (this.radioGroup) {
            this.radioGroup._touch();
        }
    };
    /** TODO: internal */
    MdRadioButton.prototype._onInputClick = function (event) {
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `radio-button` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    /**
     * Triggered when the radio button received a click or the input recognized any change.
     * Clicking on a label element, will trigger a change event on the associated input.
     * TODO: internal
     */
    MdRadioButton.prototype._onInputChange = function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the `change` output.
        event.stopPropagation();
        var groupValueChanged = this.radioGroup && this.value != this.radioGroup.value;
        this.checked = true;
        this._emitChangeEvent();
        if (this.radioGroup) {
            this.radioGroup._controlValueAccessorChangeFn(this.value);
            this.radioGroup._touch();
            if (groupValueChanged) {
                this.radioGroup._emitChangeEvent();
            }
        }
    };
    MdRadioButton.prototype.getHostElement = function () {
        return this._elementRef.nativeElement;
    };
    return MdRadioButton;
}());
__decorate$23([
    _angular_core.HostBinding('class.md-radio-focused'),
    __metadata$15("design:type", Boolean)
], exports.MdRadioButton.prototype, "_isFocused", void 0);
__decorate$23([
    _angular_core.HostBinding('id'),
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.MdRadioButton.prototype, "id", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$15("design:type", String)
], exports.MdRadioButton.prototype, "name", void 0);
__decorate$23([
    _angular_core.Input('aria-label'),
    __metadata$15("design:type", String)
], exports.MdRadioButton.prototype, "ariaLabel", void 0);
__decorate$23([
    _angular_core.Input('aria-labelledby'),
    __metadata$15("design:type", String)
], exports.MdRadioButton.prototype, "ariaLabelledby", void 0);
__decorate$23([
    _angular_core.Input(),
    __metadata$15("design:type", Boolean),
    __metadata$15("design:paramtypes", [Object])
], exports.MdRadioButton.prototype, "disableRipple", null);
__decorate$23([
    _angular_core.Output(),
    __metadata$15("design:type", _angular_core.EventEmitter)
], exports.MdRadioButton.prototype, "change", void 0);
__decorate$23([
    _angular_core.ViewChild('input'),
    __metadata$15("design:type", _angular_core.ElementRef)
], exports.MdRadioButton.prototype, "_inputElement", void 0);
__decorate$23([
    _angular_core.HostBinding('class.md-radio-checked'),
    _angular_core.Input(),
    __metadata$15("design:type", Boolean),
    __metadata$15("design:paramtypes", [Boolean])
], exports.MdRadioButton.prototype, "checked", null);
__decorate$23([
    _angular_core.Input(),
    __metadata$15("design:type", Object),
    __metadata$15("design:paramtypes", [Object])
], exports.MdRadioButton.prototype, "value", null);
__decorate$23([
    _angular_core.Input(),
    __metadata$15("design:type", String),
    __metadata$15("design:paramtypes", [String])
], exports.MdRadioButton.prototype, "align", null);
__decorate$23([
    _angular_core.HostBinding('class.md-radio-disabled'),
    _angular_core.Input(),
    __metadata$15("design:type", Boolean),
    __metadata$15("design:paramtypes", [Boolean])
], exports.MdRadioButton.prototype, "disabled", null);
exports.MdRadioButton = __decorate$23([
    _angular_core.Component({
        selector: 'md-radio-button, mat-radio-button',
        template: require('./radio.html'),
        styles: [require('./radio.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None
    }),
    __param$4(0, _angular_core.Optional()),
    __metadata$15("design:paramtypes", [exports.MdRadioGroup,
        _angular_core.ElementRef,
        _angular_core.Renderer,
        exports.MdUniqueSelectionDispatcher])
], exports.MdRadioButton);
exports.MdRadioModule = MdRadioModule_1 = (function () {
    function MdRadioModule() {
    }
    MdRadioModule.forRoot = function () {
        return {
            ngModule: MdRadioModule_1,
            providers: [exports.MdUniqueSelectionDispatcher, ViewportRuler],
        };
    };
    return MdRadioModule;
}());
exports.MdRadioModule = MdRadioModule_1 = __decorate$23([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.MdRippleModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdRadioGroup, exports.MdRadioButton, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdRadioGroup, exports.MdRadioButton],
    })
], exports.MdRadioModule);
var MdRadioModule_1;

var __decorate$26 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$17 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Option IDs need to be unique across components, so this counter exists outside of
 * the component definition.
 */
var _uniqueIdCounter$2 = 0;
var MdOption = (function () {
    function MdOption(_element, _renderer) {
        this._element = _element;
        this._renderer = _renderer;
        this._selected = false;
        /** Whether the option is disabled.  */
        this._disabled = false;
        this._id = "md-select-option-" + _uniqueIdCounter$2++;
        /** Event emitted when the option is selected. */
        this.onSelect = new _angular_core.EventEmitter();
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
            this._disabled = coerceBooleanProperty(value);
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
        if (event.keyCode === ENTER || event.keyCode === SPACE) {
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
__decorate$26([
    _angular_core.Input(),
    __metadata$17("design:type", Object)
], MdOption.prototype, "value", void 0);
__decorate$26([
    _angular_core.Input(),
    __metadata$17("design:type", Object),
    __metadata$17("design:paramtypes", [Object])
], MdOption.prototype, "disabled", null);
__decorate$26([
    _angular_core.Output(),
    __metadata$17("design:type", Object)
], MdOption.prototype, "onSelect", void 0);
MdOption = __decorate$26([
    _angular_core.Component({
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
        encapsulation: _angular_core.ViewEncapsulation.None
    }),
    __metadata$17("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], MdOption);

/**
 * This class manages keyboard events for selectable lists. If you pass it a query list
 * of focusable items, it will focus the correct item when arrow events occur.
 */
var ListKeyManager = (function () {
    function ListKeyManager(_items) {
        this._items = _items;
        this._tabOut = new rxjs_Subject.Subject();
        this._wrap = false;
    }
    /**
     * Turns on focus wrapping mode, which ensures that the focus will wrap to
     * the other end of list when there are no more items in the given direction.
     */
    ListKeyManager.prototype.withFocusWrap = function () {
        this._wrap = true;
        return this;
    };
    /** Sets the focus of the list to the item at the index specified. */
    ListKeyManager.prototype.setFocus = function (index) {
        this._focusedItemIndex = index;
        this._items.toArray()[index].focus();
    };
    /** Sets the focus properly depending on the key event passed in. */
    ListKeyManager.prototype.onKeydown = function (event) {
        switch (event.keyCode) {
            case DOWN_ARROW:
                this.focusNextItem();
                break;
            case UP_ARROW:
                this.focusPreviousItem();
                break;
            case HOME:
                this.focusFirstItem();
                break;
            case END:
                this.focusLastItem();
                break;
            case TAB:
                // Note that we shouldn't prevent the default action on tab.
                this._tabOut.next(null);
                return;
            default:
                return;
        }
        event.preventDefault();
    };
    /** Focuses the first enabled item in the list. */
    ListKeyManager.prototype.focusFirstItem = function () {
        this._setFocusByIndex(0, 1);
    };
    /** Focuses the last enabled item in the list. */
    ListKeyManager.prototype.focusLastItem = function () {
        this._setFocusByIndex(this._items.length - 1, -1);
    };
    /** Focuses the next enabled item in the list. */
    ListKeyManager.prototype.focusNextItem = function () {
        this._setFocusByDelta(1);
    };
    /** Focuses a previous enabled item in the list. */
    ListKeyManager.prototype.focusPreviousItem = function () {
        this._setFocusByDelta(-1);
    };
    Object.defineProperty(ListKeyManager.prototype, "focusedItemIndex", {
        /** Returns the index of the currently focused item. */
        get: function () {
            return this._focusedItemIndex;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListKeyManager.prototype, "tabOut", {
        /**
         * Observable that emits any time the TAB key is pressed, so components can react
         * when focus is shifted off of the list.
         */
        get: function () {
            return this._tabOut.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method sets focus to the correct item, given a list of items and the delta
     * between the currently focused item and the new item to be focused. It will calculate
     * the proper focus differently depending on whether wrap mode is turned on.
     */
    ListKeyManager.prototype._setFocusByDelta = function (delta, items) {
        if (items === void 0) { items = this._items.toArray(); }
        this._wrap ? this._setWrapModeFocus(delta, items)
            : this._setDefaultModeFocus(delta, items);
    };
    /**
     * Sets the focus properly given "wrap" mode. In other words, it will continue to move
     * down the list until it finds an item that is not disabled, and it will wrap if it
     * encounters either end of the list.
     */
    ListKeyManager.prototype._setWrapModeFocus = function (delta, items) {
        // when focus would leave menu, wrap to beginning or end
        this._focusedItemIndex =
            (this._focusedItemIndex + delta + items.length) % items.length;
        // skip all disabled menu items recursively until an active one is reached
        if (items[this._focusedItemIndex].disabled) {
            this._setWrapModeFocus(delta, items);
        }
        else {
            items[this._focusedItemIndex].focus();
        }
    };
    /**
     * Sets the focus properly given the default mode. In other words, it will
     * continue to move down the list until it finds an item that is not disabled. If
     * it encounters either end of the list, it will stop and not wrap.
     */
    ListKeyManager.prototype._setDefaultModeFocus = function (delta, items) {
        this._setFocusByIndex(this._focusedItemIndex + delta, delta, items);
    };
    /**
     * Sets the focus to the first enabled item starting at the index specified. If the
     * item is disabled, it will move in the fallbackDelta direction until it either
     * finds an enabled item or encounters the end of the list.
     */
    ListKeyManager.prototype._setFocusByIndex = function (index, fallbackDelta, items) {
        if (items === void 0) { items = this._items.toArray(); }
        if (!items[index]) {
            return;
        }
        while (items[index].disabled) {
            index += fallbackDelta;
            if (!items[index]) {
                return;
            }
        }
        this.setFocus(index);
    };
    return ListKeyManager;
}());

/**
 * The following are all the animations for the md-select component, with each
 * const containing the metadata for one animation.
 *
 * The values below match the implementation of the Material 1 md-select animation.
 */
/**
 * This animation shrinks the placeholder text to 75% of its normal size and translates
 * it to either the top left corner (ltr) or top right corner (rtl) of the trigger,
 * depending on the text direction of the application.
 */
var transformPlaceholder = _angular_core.trigger('transformPlaceholder', [
    _angular_core.state('floating-ltr', _angular_core.style({
        top: '-22px',
        left: '-2px',
        transform: "scale(0.75)"
    })),
    _angular_core.state('floating-rtl', _angular_core.style({
        top: '-22px',
        left: '2px',
        transform: "scale(0.75)"
    })),
    _angular_core.transition('* => *', _angular_core.animate("400ms cubic-bezier(0.25, 0.8, 0.25, 1)"))
]);
/**
 * This animation transforms the select's overlay panel on and off the page.
 *
 * When the panel is attached to the DOM, it expands its width 32px, scales it up to
 * 100% on the Y axis, fades in its border, and translates slightly up and to the
 * side to ensure the option text correctly overlaps the trigger text.
 *
 * When the panel is removed from the DOM, it simply fades out linearly.
 */
var transformPanel = _angular_core.trigger('transformPanel', [
    _angular_core.state('showing', _angular_core.style({
        opacity: 1,
        minWidth: 'calc(100% + 32px)',
        transform: "translate3d(0,0,0) scaleY(1)"
    })),
    _angular_core.transition('void => *', [
        _angular_core.style({
            opacity: 0,
            minWidth: '100%',
            transform: "translate3d(0, 0, 0) scaleY(0)"
        }),
        _angular_core.animate("150ms cubic-bezier(0.25, 0.8, 0.25, 1)")
    ]),
    _angular_core.transition('* => void', [
        _angular_core.animate('250ms 100ms linear', _angular_core.style({ opacity: 0 }))
    ])
]);
/**
 * This animation fades in the background color and text content of the
 * select's options. It is time delayed to occur 100ms after the overlay
 * panel has transformed in.
 */
var fadeInContent = _angular_core.trigger('fadeInContent', [
    _angular_core.state('showing', _angular_core.style({ opacity: 1 })),
    _angular_core.transition('void => showing', [
        _angular_core.style({ opacity: 0 }),
        _angular_core.animate("150ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
    ])
]);

var __decorate$25 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$16 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$5 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The following style constants are necessary to save here in order
 * to properly calculate the alignment of the selected option over
 * the trigger element.
 */
/** The fixed height of every option element. */
var SELECT_OPTION_HEIGHT = 48;
/** The max height of the select's overlay panel */
var SELECT_PANEL_MAX_HEIGHT = 256;
/** The max number of options visible at once in the select panel. */
var SELECT_MAX_OPTIONS_DISPLAYED = 5;
/** The fixed height of the select's trigger element. */
var SELECT_TRIGGER_HEIGHT = 30;
/**
 * Must adjust for the difference in height between the option and the trigger,
 * so the text will align on the y axis.
 * (SELECT_OPTION_HEIGHT (48) - SELECT_TRIGGER_HEIGHT (30)) / 2 = 9
 */
var SELECT_OPTION_HEIGHT_ADJUSTMENT = 9;
/** The panel's padding on the x-axis */
var SELECT_PANEL_PADDING_X = 16;
/**
 * The panel's padding on the y-axis. This padding indicates there are more
 * options available if you scroll.
 */
var SELECT_PANEL_PADDING_Y = 16;
/**
 * The select panel will only "fit" inside the viewport if it is positioned at
 * this value or more away from the viewport boundary.
 */
var SELECT_PANEL_VIEWPORT_PADDING = 8;
exports.MdSelect = (function () {
    function MdSelect(_element, _renderer, _viewportRuler, _dir, _control) {
        this._element = _element;
        this._renderer = _renderer;
        this._viewportRuler = _viewportRuler;
        this._dir = _dir;
        this._control = _control;
        /** Whether or not the overlay panel is open. */
        this._panelOpen = false;
        /** Subscriptions to option events. */
        this._subscriptions = [];
        /** Whether filling out the select is required in the form.  */
        this._required = false;
        /** Whether the select is disabled.  */
        this._disabled = false;
        /** The scroll position of the overlay panel, calculated to center the selected option. */
        this._scrollTop = 0;
        /** The animation state of the placeholder. */
        this._placeholderState = '';
        /** View -> model callback called when value changes */
        this._onChange = function (value) { };
        /** View -> model callback called when select has been touched */
        this._onTouched = function () { };
        /** The IDs of child options to be passed to the aria-owns attribute. */
        this._optionIds = '';
        /** The value of the select panel's transform-origin property. */
        this._transformOrigin = 'top';
        /**
         * The x-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text when
         * the panel opens. Will change based on LTR or RTL text direction.
         */
        this._offsetX = 0;
        /**
         * The y-offset of the overlay panel in relation to the trigger's top start corner.
         * This must be adjusted to align the selected option text over the trigger text.
         * when the panel opens. Will change based on the y-position of the selected option.
         */
        this._offsetY = 0;
        /**
         * This position config ensures that the top "start" corner of the overlay
         * is aligned with with the top "start" of the origin by default (overlapping
         * the trigger completely). If the panel cannot fit below the trigger, it
         * will fall back to a position above the trigger.
         */
        this._positions = [
            {
                originX: 'start',
                originY: 'top',
                overlayX: 'start',
                overlayY: 'top',
            },
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'bottom',
            },
        ];
        this.onOpen = new _angular_core.EventEmitter();
        this.onClose = new _angular_core.EventEmitter();
        if (this._control) {
            this._control.valueAccessor = this;
        }
    }
    Object.defineProperty(MdSelect.prototype, "placeholder", {
        get: function () {
            return this._placeholder;
        },
        set: function (value) {
            var _this = this;
            this._placeholder = value;
            // Must wait to record the trigger width to ensure placeholder width is included.
            Promise.resolve(null).then(function () { return _this._triggerWidth = _this._getWidth(); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSelect.prototype, "disabled", {
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSelect.prototype, "required", {
        get: function () {
            return this._required;
        },
        set: function (value) {
            this._required = coerceBooleanProperty(value);
        },
        enumerable: true,
        configurable: true
    });
    MdSelect.prototype.ngAfterContentInit = function () {
        var _this = this;
        this._initKeyManager();
        this._resetOptions();
        this._changeSubscription = this.options.changes.subscribe(function () { return _this._resetOptions(); });
    };
    MdSelect.prototype.ngOnDestroy = function () {
        this._dropSubscriptions();
        this._changeSubscription.unsubscribe();
        this._tabSubscription.unsubscribe();
    };
    /** Toggles the overlay panel open or closed. */
    MdSelect.prototype.toggle = function () {
        this.panelOpen ? this.close() : this.open();
    };
    /** Opens the overlay panel. */
    MdSelect.prototype.open = function () {
        if (this.disabled) {
            return;
        }
        this._calculateOverlayPosition();
        this._placeholderState = this._isRtl() ? 'floating-rtl' : 'floating-ltr';
        this._panelOpen = true;
    };
    /** Closes the overlay panel and focuses the host element. */
    MdSelect.prototype.close = function () {
        this._panelOpen = false;
        if (!this._selected) {
            this._placeholderState = '';
        }
        this._focusHost();
    };
    /**
     * Sets the select's value. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     */
    MdSelect.prototype.writeValue = function (value) {
        var _this = this;
        if (!this.options) {
            // In reactive forms, writeValue() will be called synchronously before
            // the select's child options have been created. It's necessary to call
            // writeValue() again after the options have been created to ensure any
            // initial view value is set.
            Promise.resolve(null).then(function () { return _this.writeValue(value); });
            return;
        }
        this.options.forEach(function (option) {
            if (option.value === value) {
                option.select();
            }
        });
    };
    /**
     * Saves a callback function to be invoked when the select's value
     * changes from user input. Part of the ControlValueAccessor interface
     * required to integrate with Angular's core forms API.
     */
    MdSelect.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    /**
     * Saves a callback function to be invoked when the select is blurred
     * by the user. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     */
    MdSelect.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    /**
     * Disables the select. Part of the ControlValueAccessor interface required
     * to integrate with Angular's core forms API.
     */
    MdSelect.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    Object.defineProperty(MdSelect.prototype, "panelOpen", {
        /** Whether or not the overlay panel is open. */
        get: function () {
            return this._panelOpen;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSelect.prototype, "selected", {
        /** The currently selected option. */
        get: function () {
            return this._selected;
        },
        enumerable: true,
        configurable: true
    });
    MdSelect.prototype._isRtl = function () {
        return this._dir ? this._dir.value === 'rtl' : false;
    };
    /** The width of the trigger element. This is necessary to match
     * the overlay width to the trigger width.
     */
    MdSelect.prototype._getWidth = function () {
        return this._getTriggerRect().width;
    };
    /** Ensures the panel opens if activated by the keyboard. */
    MdSelect.prototype._handleKeydown = function (event) {
        if (event.keyCode === ENTER || event.keyCode === SPACE) {
            this.open();
        }
    };
    /**
     * When the panel is finished animating, emits an event and focuses
     * an option if the panel is open.
     */
    MdSelect.prototype._onPanelDone = function () {
        if (this.panelOpen) {
            this._focusCorrectOption();
            this.onOpen.emit();
        }
        else {
            this.onClose.emit();
        }
    };
    /**
     * Calls the touched callback only if the panel is closed. Otherwise, the trigger will
     * "blur" to the panel when it opens, causing a false positive.
     */
    MdSelect.prototype._onBlur = function () {
        if (!this.panelOpen) {
            this._onTouched();
        }
    };
    /** Returns the correct tabindex for the select depending on disabled state. */
    MdSelect.prototype._getTabIndex = function () {
        return this.disabled ? '-1' : '0';
    };
    /**
     * Sets the scroll position of the scroll container. This must be called after
     * the overlay pane is attached or the scroll container element will not yet be
     * present in the DOM.
     */
    MdSelect.prototype._setScrollTop = function () {
        var scrollContainer = this.overlayDir.overlayRef.overlayElement.querySelector('.md-select-panel');
        scrollContainer.scrollTop = this._scrollTop;
    };
    MdSelect.prototype._getTriggerRect = function () {
        return this.trigger.nativeElement.getBoundingClientRect();
    };
    /** Sets up a key manager to listen to keyboard events on the overlay panel. */
    MdSelect.prototype._initKeyManager = function () {
        var _this = this;
        this._keyManager = new ListKeyManager(this.options);
        this._tabSubscription = this._keyManager.tabOut.subscribe(function () {
            _this.close();
        });
    };
    /** Drops current option subscriptions and IDs and resets from scratch. */
    MdSelect.prototype._resetOptions = function () {
        this._dropSubscriptions();
        this._listenToOptions();
        this._setOptionIds();
    };
    /** Listens to selection events on each option. */
    MdSelect.prototype._listenToOptions = function () {
        var _this = this;
        this.options.forEach(function (option) {
            var sub = option.onSelect.subscribe(function (isUserInput) {
                if (isUserInput) {
                    _this._onChange(option.value);
                }
                _this._onSelect(option);
            });
            _this._subscriptions.push(sub);
        });
    };
    /** Unsubscribes from all option subscriptions. */
    MdSelect.prototype._dropSubscriptions = function () {
        this._subscriptions.forEach(function (sub) { return sub.unsubscribe(); });
        this._subscriptions = [];
    };
    /** Records option IDs to pass to the aria-owns property. */
    MdSelect.prototype._setOptionIds = function () {
        this._optionIds = this.options.map(function (option) { return option.id; }).join(' ');
    };
    /** When a new option is selected, deselects the others and closes the panel. */
    MdSelect.prototype._onSelect = function (option) {
        this._selected = option;
        this._updateOptions();
        this._setValueWidth();
        if (this.panelOpen) {
            this.close();
        }
    };
    /** Deselect each option that doesn't match the current selection. */
    MdSelect.prototype._updateOptions = function () {
        var _this = this;
        this.options.forEach(function (option) {
            if (option !== _this.selected) {
                option.deselect();
            }
        });
    };
    /**
     * Must set the width of the selected option's value programmatically
     * because it is absolutely positioned and otherwise will not clip
     * overflow. The selection arrow is 9px wide, add 4px of padding = 13
     */
    MdSelect.prototype._setValueWidth = function () {
        this._selectedValueWidth = this._triggerWidth - 13;
    };
    /** Focuses the selected item. If no option is selected, it will focus
     * the first item instead.
     */
    MdSelect.prototype._focusCorrectOption = function () {
        if (this.selected) {
            this._keyManager.setFocus(this._getOptionIndex(this.selected));
        }
        else {
            this._keyManager.focusFirstItem();
        }
    };
    /** Focuses the host element when the panel closes. */
    MdSelect.prototype._focusHost = function () {
        this._renderer.invokeElementMethod(this._element.nativeElement, 'focus');
    };
    /** Gets the index of the provided option in the option list. */
    MdSelect.prototype._getOptionIndex = function (option) {
        return this.options.reduce(function (result, current, index) {
            return result === undefined ? (option === current ? index : undefined) : result;
        }, undefined);
    };
    /** Calculates the scroll position and x- and y-offsets of the overlay panel. */
    MdSelect.prototype._calculateOverlayPosition = function () {
        this._offsetX = this._isRtl() ? SELECT_PANEL_PADDING_X : -SELECT_PANEL_PADDING_X;
        var panelHeight = Math.min(this.options.length * SELECT_OPTION_HEIGHT, SELECT_PANEL_MAX_HEIGHT);
        var scrollContainerHeight = this.options.length * SELECT_OPTION_HEIGHT;
        // The farthest the panel can be scrolled before it hits the bottom
        var maxScroll = scrollContainerHeight - panelHeight;
        if (this.selected) {
            var selectedIndex = this._getOptionIndex(this.selected);
            // We must maintain a scroll buffer so the selected option will be scrolled to the
            // center of the overlay panel rather than the top.
            var scrollBuffer = panelHeight / 2;
            this._scrollTop = this._calculateOverlayScroll(selectedIndex, scrollBuffer, maxScroll);
            this._offsetY = this._calculateOverlayOffset(selectedIndex, scrollBuffer, maxScroll);
        }
        else {
            // If no option is selected, the panel centers on the first option. In this case,
            // we must only adjust for the height difference between the option element
            // and the trigger element, then multiply it by -1 to ensure the panel moves
            // in the correct direction up the page.
            this._offsetY = (SELECT_OPTION_HEIGHT - SELECT_TRIGGER_HEIGHT) / 2 * -1;
        }
        this._checkOverlayWithinViewport(maxScroll);
    };
    /**
     * Calculates the scroll position of the select's overlay panel.
     *
     * Attempts to center the selected option in the panel. If the option is
     * too high or too low in the panel to be scrolled to the center, it clamps the
     * scroll position to the min or max scroll positions respectively.
     */
    MdSelect.prototype._calculateOverlayScroll = function (selectedIndex, scrollBuffer, maxScroll) {
        var optionOffsetFromScrollTop = SELECT_OPTION_HEIGHT * selectedIndex;
        var halfOptionHeight = SELECT_OPTION_HEIGHT / 2;
        // Starts at the optionOffsetFromScrollTop, which scrolls the option to the top of the
        // scroll container, then subtracts the scroll buffer to scroll the option down to
        // the center of the overlay panel. Half the option height must be re-added to the
        // scrollTop so the option is centered based on its middle, not its top edge.
        var optimalScrollPosition = optionOffsetFromScrollTop - scrollBuffer + halfOptionHeight;
        return clampValue(0, optimalScrollPosition, maxScroll);
    };
    /**
     * Calculates the y-offset of the select's overlay panel in relation to the
     * top start corner of the trigger. It has to be adjusted in order for the
     * selected option to be aligned over the trigger when the panel opens.
     */
    MdSelect.prototype._calculateOverlayOffset = function (selectedIndex, scrollBuffer, maxScroll) {
        var optionOffsetFromPanelTop;
        if (this._scrollTop === 0) {
            optionOffsetFromPanelTop = selectedIndex * SELECT_OPTION_HEIGHT;
        }
        else if (this._scrollTop === maxScroll) {
            var firstDisplayedIndex = this.options.length - SELECT_MAX_OPTIONS_DISPLAYED;
            var selectedDisplayIndex = selectedIndex - firstDisplayedIndex;
            // Because the panel height is longer than the height of the options alone,
            // there is always extra padding at the top or bottom of the panel. When
            // scrolled to the very bottom, this padding is at the top of the panel and
            // must be added to the offset.
            optionOffsetFromPanelTop =
                selectedDisplayIndex * SELECT_OPTION_HEIGHT + SELECT_PANEL_PADDING_Y;
        }
        else {
            // If the option was scrolled to the middle of the panel using a scroll buffer,
            // its offset will be the scroll buffer minus the half height that was added to
            // center it.
            optionOffsetFromPanelTop = scrollBuffer - SELECT_OPTION_HEIGHT / 2;
        }
        // The final offset is the option's offset from the top, adjusted for the height
        // difference, multiplied by -1 to ensure that the overlay moves in the correct
        // direction up the page.
        return optionOffsetFromPanelTop * -1 - SELECT_OPTION_HEIGHT_ADJUSTMENT;
    };
    /**
     * Checks that the attempted overlay position will fit within the viewport.
     * If it will not fit, tries to adjust the scroll position and the associated
     * y-offset so the panel can open fully on-screen. If it still won't fit,
     * sets the offset back to 0 to allow the fallback position to take over.
     */
    MdSelect.prototype._checkOverlayWithinViewport = function (maxScroll) {
        var viewportRect = this._viewportRuler.getViewportRect();
        var triggerRect = this._getTriggerRect();
        var topSpaceAvailable = triggerRect.top - viewportRect.top - SELECT_PANEL_VIEWPORT_PADDING;
        var bottomSpaceAvailable = viewportRect.bottom - triggerRect.bottom - SELECT_PANEL_VIEWPORT_PADDING;
        var panelHeightTop = Math.abs(this._offsetY);
        var totalPanelHeight = Math.min(this.options.length * SELECT_OPTION_HEIGHT, SELECT_PANEL_MAX_HEIGHT);
        var panelHeightBottom = totalPanelHeight - panelHeightTop - triggerRect.height;
        if (panelHeightBottom > bottomSpaceAvailable) {
            this._adjustPanelUp(panelHeightBottom, bottomSpaceAvailable);
        }
        else if (panelHeightTop > topSpaceAvailable) {
            this._adjustPanelDown(panelHeightTop, topSpaceAvailable, maxScroll);
        }
        else {
            this._transformOrigin = this._getOriginBasedOnOption();
        }
    };
    /** Adjusts the overlay panel up to fit in the viewport. */
    MdSelect.prototype._adjustPanelUp = function (panelHeightBottom, bottomSpaceAvailable) {
        var distanceBelowViewport = panelHeightBottom - bottomSpaceAvailable;
        // Scrolls the panel up by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel up into the viewport.
        this._scrollTop -= distanceBelowViewport;
        this._offsetY -= distanceBelowViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very top, it won't be able to fit the panel
        // by scrolling, so set the offset to 0 to allow the fallback position to take
        // effect.
        if (this._scrollTop <= 0) {
            this._scrollTop = 0;
            this._offsetY = 0;
            this._transformOrigin = "50% bottom 0px";
        }
    };
    /** Adjusts the overlay panel down to fit in the viewport. */
    MdSelect.prototype._adjustPanelDown = function (panelHeightTop, topSpaceAvailable, maxScroll) {
        var distanceAboveViewport = panelHeightTop - topSpaceAvailable;
        // Scrolls the panel down by the distance it was extending past the boundary, then
        // adjusts the offset by that amount to move the panel down into the viewport.
        this._scrollTop += distanceAboveViewport;
        this._offsetY += distanceAboveViewport;
        this._transformOrigin = this._getOriginBasedOnOption();
        // If the panel is scrolled to the very bottom, it won't be able to fit the
        // panel by scrolling, so set the offset to 0 to allow the fallback position
        // to take effect.
        if (this._scrollTop >= maxScroll) {
            this._scrollTop = maxScroll;
            this._offsetY = 0;
            this._transformOrigin = "50% top 0px";
            return;
        }
    };
    /** Sets the transform origin point based on the selected option. */
    MdSelect.prototype._getOriginBasedOnOption = function () {
        var originY = Math.abs(this._offsetY) - SELECT_OPTION_HEIGHT_ADJUSTMENT + SELECT_OPTION_HEIGHT / 2;
        return "50% " + originY + "px 0px";
    };
    return MdSelect;
}());
__decorate$25([
    _angular_core.ViewChild('trigger'),
    __metadata$16("design:type", _angular_core.ElementRef)
], exports.MdSelect.prototype, "trigger", void 0);
__decorate$25([
    _angular_core.ViewChild(exports.ConnectedOverlayDirective),
    __metadata$16("design:type", exports.ConnectedOverlayDirective)
], exports.MdSelect.prototype, "overlayDir", void 0);
__decorate$25([
    _angular_core.ContentChildren(MdOption),
    __metadata$16("design:type", _angular_core.QueryList)
], exports.MdSelect.prototype, "options", void 0);
__decorate$25([
    _angular_core.Input(),
    __metadata$16("design:type", Object),
    __metadata$16("design:paramtypes", [String])
], exports.MdSelect.prototype, "placeholder", null);
__decorate$25([
    _angular_core.Input(),
    __metadata$16("design:type", Object),
    __metadata$16("design:paramtypes", [Object])
], exports.MdSelect.prototype, "disabled", null);
__decorate$25([
    _angular_core.Input(),
    __metadata$16("design:type", Object),
    __metadata$16("design:paramtypes", [Object])
], exports.MdSelect.prototype, "required", null);
__decorate$25([
    _angular_core.Output(),
    __metadata$16("design:type", Object)
], exports.MdSelect.prototype, "onOpen", void 0);
__decorate$25([
    _angular_core.Output(),
    __metadata$16("design:type", Object)
], exports.MdSelect.prototype, "onClose", void 0);
exports.MdSelect = __decorate$25([
    _angular_core.Component({
        selector: 'md-select, mat-select',
        template: require('./select.html'),
        styles: [require('./select.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
        host: {
            'role': 'listbox',
            '[attr.tabindex]': '_getTabIndex()',
            '[attr.aria-label]': 'placeholder',
            '[attr.aria-required]': 'required.toString()',
            '[attr.aria-disabled]': 'disabled.toString()',
            '[attr.aria-invalid]': '_control?.invalid || "false"',
            '[attr.aria-owns]': '_optionIds',
            '[class.md-select-disabled]': 'disabled',
            '(keydown)': '_handleKeydown($event)',
            '(blur)': '_onBlur()'
        },
        animations: [
            transformPlaceholder,
            transformPanel,
            fadeInContent
        ],
        exportAs: 'mdSelect',
    }),
    __param$5(3, _angular_core.Optional()),
    __param$5(4, _angular_core.Optional()),
    __metadata$16("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer,
        ViewportRuler, exports.Dir,
        _angular_forms.NgControl])
], exports.MdSelect);
/** Clamps a value n between min and max values. */
function clampValue(min, n, max) {
    return Math.min(Math.max(min, n), max);
}

var __decorate$24 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.MdSelectModule = MdSelectModule_1 = (function () {
    function MdSelectModule() {
    }
    MdSelectModule.forRoot = function () {
        return {
            ngModule: MdSelectModule_1,
            providers: [OVERLAY_PROVIDERS]
        };
    };
    return MdSelectModule;
}());
exports.MdSelectModule = MdSelectModule_1 = __decorate$24([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.OverlayModule, exports.MdRippleModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdSelect, MdOption, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdSelect, MdOption],
    })
], exports.MdSelectModule);
var MdSelectModule_1;

var __decorate$27 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$18 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MD_SLIDE_TOGGLE_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.MdSlideToggle; }),
    multi: true
};
// A simple change event emitted by the MdSlideToggle component.
var MdSlideToggleChange = (function () {
    function MdSlideToggleChange() {
    }
    return MdSlideToggleChange;
}());
// Increasing integer for generating unique ids for slide-toggle components.
var nextId$1 = 0;
exports.MdSlideToggle = (function () {
    function MdSlideToggle(_elementRef, _renderer) {
        var _this = this;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this.onChange = function (_) { };
        this.onTouched = function () { };
        // A unique id for the slide-toggle. By default the id is auto-generated.
        this._uniqueId = "md-slide-toggle-" + ++nextId$1;
        this._checked = false;
        this._isMousedown = false;
        this._slideRenderer = null;
        this._disabled = false;
        this._required = false;
        // Needs to be public to support AOT compilation (as host binding).
        this._hasFocus = false;
        this.name = null;
        this.id = this._uniqueId;
        this.tabIndex = 0;
        this.ariaLabel = null;
        this.ariaLabelledby = null;
        this._change = new _angular_core.EventEmitter();
        this.change = this._change.asObservable();
        // Returns the unique id for the visual hidden input.
        this.getInputId = function () { return (_this.id || _this._uniqueId) + "-input"; };
    }
    Object.defineProperty(MdSlideToggle.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlideToggle.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    /** TODO: internal */
    MdSlideToggle.prototype.ngAfterContentInit = function () {
        this._slideRenderer = new SlideToggleRenderer(this._elementRef);
    };
    /**
     * The onChangeEvent method will be also called on click.
     * This is because everything for the slide-toggle is wrapped inside of a label,
     * which triggers a onChange event on click.
     */
    MdSlideToggle.prototype._onChangeEvent = function (event) {
        // We always have to stop propagation on the change event.
        // Otherwise the change event, from the input element, will bubble up and
        // emit its event object to the component's `change` output.
        event.stopPropagation();
        // Once a drag is currently in progress, we do not want to toggle the slide-toggle on a click.
        if (!this.disabled && !this._slideRenderer.isDragging()) {
            this.toggle();
            // Emit our custom change event if the native input emitted one.
            // It is important to only emit it, if the native input triggered one, because
            // we don't want to trigger a change event, when the `checked` variable changes for example.
            this._emitChangeEvent();
        }
    };
    MdSlideToggle.prototype._onInputClick = function (event) {
        this.onTouched();
        // We have to stop propagation for click events on the visual hidden input element.
        // By default, when a user clicks on a label element, a generated click event will be
        // dispatched on the associated input element. Since we are using a label element as our
        // root container, the click event on the `slide-toggle` will be executed twice.
        // The real click event will bubble up, and the generated click event also tries to bubble up.
        // This will lead to multiple click events.
        // Preventing bubbling for the second event will solve that issue.
        event.stopPropagation();
    };
    MdSlideToggle.prototype._setMousedown = function () {
        var _this = this;
        // We only *show* the focus style when focus has come to the button via the keyboard.
        // The Material Design spec is silent on this topic, and without doing this, the
        // button continues to look :active after clicking.
        // @see http://marcysutton.com/button-focus-hell/
        this._isMousedown = true;
        setTimeout(function () { return _this._isMousedown = false; }, 100);
    };
    MdSlideToggle.prototype._onInputFocus = function () {
        // Only show the focus / ripple indicator when the focus was not triggered by a mouse
        // interaction on the component.
        if (!this._isMousedown) {
            this._hasFocus = true;
        }
    };
    MdSlideToggle.prototype._onInputBlur = function () {
        this._hasFocus = false;
        this.onTouched();
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdSlideToggle.prototype.writeValue = function (value) {
        this.checked = value;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdSlideToggle.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * Implemented as part of ControlValueAccessor.
     * TODO: internal
     */
    MdSlideToggle.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * Implemented as a part of ControlValueAccessor.
     */
    MdSlideToggle.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    MdSlideToggle.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._inputElement.nativeElement, 'focus');
        this._onInputFocus();
    };
    Object.defineProperty(MdSlideToggle.prototype, "checked", {
        get: function () {
            return !!this._checked;
        },
        set: function (value) {
            if (this.checked !== !!value) {
                this._checked = value;
                this.onChange(this._checked);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlideToggle.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    MdSlideToggle.prototype.toggle = function () {
        this.checked = !this.checked;
    };
    MdSlideToggle.prototype._updateColor = function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    MdSlideToggle.prototype._setElementColor = function (color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, "md-" + color, isAdd);
        }
    };
    /** Emits the change event to the `change` output EventEmitter */
    MdSlideToggle.prototype._emitChangeEvent = function () {
        var event = new MdSlideToggleChange();
        event.source = this;
        event.checked = this.checked;
        this._change.emit(event);
    };
    /** TODO: internal */
    MdSlideToggle.prototype._onDragStart = function () {
        if (!this.disabled) {
            this._slideRenderer.startThumbDrag(this.checked);
        }
    };
    /** TODO: internal */
    MdSlideToggle.prototype._onDrag = function (event) {
        if (this._slideRenderer.isDragging()) {
            this._slideRenderer.updateThumbPosition(event.deltaX);
        }
    };
    /** TODO: internal */
    MdSlideToggle.prototype._onDragEnd = function () {
        var _this = this;
        if (!this._slideRenderer.isDragging()) {
            return;
        }
        // Notice that we have to stop outside of the current event handler,
        // because otherwise the click event will be fired and will reset the new checked variable.
        setTimeout(function () {
            _this.checked = _this._slideRenderer.stopThumbDrag();
            _this._emitChangeEvent();
        }, 0);
    };
    return MdSlideToggle;
}());
__decorate$27([
    _angular_core.Input(),
    __metadata$18("design:type", String)
], exports.MdSlideToggle.prototype, "name", void 0);
__decorate$27([
    _angular_core.Input(),
    __metadata$18("design:type", String)
], exports.MdSlideToggle.prototype, "id", void 0);
__decorate$27([
    _angular_core.Input(),
    __metadata$18("design:type", Number)
], exports.MdSlideToggle.prototype, "tabIndex", void 0);
__decorate$27([
    _angular_core.Input(),
    __metadata$18("design:type", String)
], exports.MdSlideToggle.prototype, "ariaLabel", void 0);
__decorate$27([
    _angular_core.Input(),
    __metadata$18("design:type", String)
], exports.MdSlideToggle.prototype, "ariaLabelledby", void 0);
__decorate$27([
    _angular_core.Input(),
    __metadata$18("design:type", Boolean),
    __metadata$18("design:paramtypes", [Object])
], exports.MdSlideToggle.prototype, "disabled", null);
__decorate$27([
    _angular_core.Input(),
    __metadata$18("design:type", Boolean),
    __metadata$18("design:paramtypes", [Object])
], exports.MdSlideToggle.prototype, "required", null);
__decorate$27([
    _angular_core.Output(),
    __metadata$18("design:type", rxjs_Observable.Observable)
], exports.MdSlideToggle.prototype, "change", void 0);
__decorate$27([
    _angular_core.ViewChild('input'),
    __metadata$18("design:type", _angular_core.ElementRef)
], exports.MdSlideToggle.prototype, "_inputElement", void 0);
__decorate$27([
    _angular_core.Input(),
    __metadata$18("design:type", Object),
    __metadata$18("design:paramtypes", [Object])
], exports.MdSlideToggle.prototype, "checked", null);
__decorate$27([
    _angular_core.Input(),
    __metadata$18("design:type", String),
    __metadata$18("design:paramtypes", [String])
], exports.MdSlideToggle.prototype, "color", null);
exports.MdSlideToggle = __decorate$27([
    _angular_core.Component({
        selector: 'md-slide-toggle, mat-slide-toggle',
        host: {
            '[class.md-checked]': 'checked',
            '[class.md-disabled]': 'disabled',
            // This md-slide-toggle prefix will change, once the temporary ripple is removed.
            '[class.md-slide-toggle-focused]': '_hasFocus',
            '(mousedown)': '_setMousedown()'
        },
        template: require('./slide-toggle.html'),
        styles: [require('./slide-toggle.css').toString()],
        providers: [MD_SLIDE_TOGGLE_VALUE_ACCESSOR],
        encapsulation: _angular_core.ViewEncapsulation.None,
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    }),
    __metadata$18("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], exports.MdSlideToggle);
/**
 * Renderer for the Slide Toggle component, which separates DOM modification in its own class
 */
var SlideToggleRenderer = (function () {
    function SlideToggleRenderer(_elementRef) {
        this._elementRef = _elementRef;
        this._thumbEl = _elementRef.nativeElement.querySelector('.md-slide-toggle-thumb-container');
        this._thumbBarEl = _elementRef.nativeElement.querySelector('.md-slide-toggle-bar');
    }
    /** Whether the slide-toggle is currently dragging. */
    SlideToggleRenderer.prototype.isDragging = function () {
        return !!this._thumbBarWidth;
    };
    /** Initializes the drag of the slide-toggle. */
    SlideToggleRenderer.prototype.startThumbDrag = function (checked) {
        if (!this.isDragging()) {
            this._thumbBarWidth = this._thumbBarEl.clientWidth - this._thumbEl.clientWidth;
            this._checked = checked;
            this._thumbEl.classList.add('md-dragging');
        }
    };
    /** Stops the current drag and returns the new checked value. */
    SlideToggleRenderer.prototype.stopThumbDrag = function () {
        if (this.isDragging()) {
            this._thumbBarWidth = null;
            this._thumbEl.classList.remove('md-dragging');
            applyCssTransform(this._thumbEl, '');
            return this._percentage > 50;
        }
    };
    /** Updates the thumb containers position from the specified distance. */
    SlideToggleRenderer.prototype.updateThumbPosition = function (distance) {
        this._percentage = this._getThumbPercentage(distance);
        applyCssTransform(this._thumbEl, "translate3d(" + this._percentage + "%, 0, 0)");
    };
    /** Retrieves the percentage of thumb from the moved distance. */
    SlideToggleRenderer.prototype._getThumbPercentage = function (distance) {
        var percentage = (distance / this._thumbBarWidth) * 100;
        // When the toggle was initially checked, then we have to start the drag at the end.
        if (this._checked) {
            percentage += 100;
        }
        return Math.max(0, Math.min(percentage, 100));
    };
    return SlideToggleRenderer;
}());
exports.MdSlideToggleModule = MdSlideToggleModule_1 = (function () {
    function MdSlideToggleModule() {
    }
    MdSlideToggleModule.forRoot = function () {
        return {
            ngModule: MdSlideToggleModule_1,
            providers: [{ provide: _angular_platformBrowser.HAMMER_GESTURE_CONFIG, useClass: exports.MdGestureConfig }]
        };
    };
    return MdSlideToggleModule;
}());
exports.MdSlideToggleModule = MdSlideToggleModule_1 = __decorate$27([
    _angular_core.NgModule({
        imports: [_angular_forms.FormsModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdSlideToggle, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdSlideToggle],
    })
], exports.MdSlideToggleModule);
var MdSlideToggleModule_1;

var __decorate$28 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$19 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$6 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
 * the default separation we chose.
 */
var MIN_AUTO_TICK_SEPARATION = 30;
/**
 * Provider Expression that allows md-slider to register as a ControlValueAccessor.
 * This allows it to support [(ngModel)] and [formControl].
 */
var MD_SLIDER_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.MdSlider; }),
    multi: true
};
/** A simple change event emitted by the MdSlider component. */
var MdSliderChange = (function () {
    function MdSliderChange() {
    }
    return MdSliderChange;
}());
exports.MdSlider = (function () {
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
        this.change = new _angular_core.EventEmitter();
        this._renderer = new SliderRenderer(elementRef);
    }
    Object.defineProperty(MdSlider.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "thumbLabel", {
        get: function () { return this._thumbLabel; },
        set: function (value) { this._thumbLabel = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "step", {
        get: function () { return this._step; },
        set: function (v) { this._step = coerceNumberProperty(v, this._step); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "tickInterval", {
        get: function () { return this._tickInterval; },
        set: function (v) {
            this._tickInterval = (v == 'auto') ? v : coerceNumberProperty(v, this._tickInterval);
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
            this._value = coerceNumberProperty(v, this._value);
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
            this._min = coerceNumberProperty(v, this._min);
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
            this._max = coerceNumberProperty(v, this._max);
            this._percent = this._calculatePercentage(this.value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "invert", {
        /** Whether the slider is inverted. */
        get: function () { return this._invert; },
        set: function (value) { this._invert = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdSlider.prototype, "vertical", {
        /** Whether the slider is vertical. */
        get: function () { return this._vertical; },
        set: function (value) { this._vertical = coerceBooleanProperty(value); },
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
            case PAGE_UP:
                this._increment(10);
                break;
            case PAGE_DOWN:
                this._increment(-10);
                break;
            case END:
                this.value = this.max;
                break;
            case HOME:
                this.value = this.min;
                break;
            case LEFT_ARROW:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this.direction == 'rtl' ? 1 : -1);
                break;
            case UP_ARROW:
                this._increment(1);
                break;
            case RIGHT_ARROW:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this.direction == 'rtl' ? -1 : 1);
                break;
            case DOWN_ARROW:
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
__decorate$28([
    _angular_core.Input(),
    __metadata$19("design:type", Boolean),
    __metadata$19("design:paramtypes", [Object])
], exports.MdSlider.prototype, "disabled", null);
__decorate$28([
    _angular_core.Input('thumb-label'),
    __metadata$19("design:type", Boolean),
    __metadata$19("design:paramtypes", [Object])
], exports.MdSlider.prototype, "thumbLabel", null);
__decorate$28([
    _angular_core.Input(),
    __metadata$19("design:type", Object),
    __metadata$19("design:paramtypes", [Object])
], exports.MdSlider.prototype, "step", null);
__decorate$28([
    _angular_core.Input('tick-interval'),
    __metadata$19("design:type", Object),
    __metadata$19("design:paramtypes", [Object])
], exports.MdSlider.prototype, "tickInterval", null);
__decorate$28([
    _angular_core.Input(),
    __metadata$19("design:type", Object),
    __metadata$19("design:paramtypes", [Number])
], exports.MdSlider.prototype, "value", null);
__decorate$28([
    _angular_core.Input(),
    __metadata$19("design:type", Object),
    __metadata$19("design:paramtypes", [Number])
], exports.MdSlider.prototype, "min", null);
__decorate$28([
    _angular_core.Input(),
    __metadata$19("design:type", Object),
    __metadata$19("design:paramtypes", [Number])
], exports.MdSlider.prototype, "max", null);
__decorate$28([
    _angular_core.Input(),
    __metadata$19("design:type", Object),
    __metadata$19("design:paramtypes", [Object])
], exports.MdSlider.prototype, "invert", null);
__decorate$28([
    _angular_core.Input(),
    __metadata$19("design:type", Object),
    __metadata$19("design:paramtypes", [Object])
], exports.MdSlider.prototype, "vertical", null);
__decorate$28([
    _angular_core.Output(),
    __metadata$19("design:type", Object)
], exports.MdSlider.prototype, "change", void 0);
exports.MdSlider = __decorate$28([
    _angular_core.Component({
        selector: 'md-slider, mat-slider',
        providers: [MD_SLIDER_VALUE_ACCESSOR],
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
        template: require('./slider.html'),
        styles: [require('./slider.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
    }),
    __param$6(0, _angular_core.Optional()),
    __metadata$19("design:paramtypes", [exports.Dir, _angular_core.ElementRef])
], exports.MdSlider);
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
exports.MdSliderModule = MdSliderModule_1 = (function () {
    function MdSliderModule() {
    }
    MdSliderModule.forRoot = function () {
        return {
            ngModule: MdSliderModule_1,
            providers: [{ provide: _angular_platformBrowser.HAMMER_GESTURE_CONFIG, useClass: exports.MdGestureConfig }]
        };
    };
    return MdSliderModule;
}());
exports.MdSliderModule = MdSliderModule_1 = __decorate$28([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, _angular_forms.FormsModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdSlider, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdSlider],
        providers: [
            { provide: _angular_platformBrowser.HAMMER_GESTURE_CONFIG, useClass: exports.MdGestureConfig },
        ],
    })
], exports.MdSliderModule);
var MdSliderModule_1;

var __decorate$29 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$20 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$7 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** Sidenav toggle promise result. */
var MdSidenavToggleResult = (function () {
    function MdSidenavToggleResult(type, animationFinished) {
        this.type = type;
        this.animationFinished = animationFinished;
    }
    return MdSidenavToggleResult;
}());
exports.MdSidenav = (function () {
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
        this.onOpenStart = new _angular_core.EventEmitter();
        /** Event emitted when the sidenav is fully opened. */
        this.onOpen = new _angular_core.EventEmitter();
        /** Event emitted when the sidenav is being closed. Use this to synchronize animations. */
        this.onCloseStart = new _angular_core.EventEmitter();
        /** Event emitted when the sidenav is fully closed. */
        this.onClose = new _angular_core.EventEmitter();
        /** Event emitted when the sidenav alignment changes. */
        this.onAlignChanged = new _angular_core.EventEmitter();
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
            value = coerceBooleanProperty(value);
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
            this.toggle(coerceBooleanProperty(v));
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
__decorate$29([
    _angular_core.ViewChild(exports.FocusTrap),
    __metadata$20("design:type", exports.FocusTrap)
], exports.MdSidenav.prototype, "_focusTrap", void 0);
__decorate$29([
    _angular_core.Input(),
    __metadata$20("design:type", Object),
    __metadata$20("design:paramtypes", [Object])
], exports.MdSidenav.prototype, "align", null);
__decorate$29([
    _angular_core.Input(),
    __metadata$20("design:type", String)
], exports.MdSidenav.prototype, "mode", void 0);
__decorate$29([
    _angular_core.Output('open-start'),
    __metadata$20("design:type", Object)
], exports.MdSidenav.prototype, "onOpenStart", void 0);
__decorate$29([
    _angular_core.Output('open'),
    __metadata$20("design:type", Object)
], exports.MdSidenav.prototype, "onOpen", void 0);
__decorate$29([
    _angular_core.Output('close-start'),
    __metadata$20("design:type", Object)
], exports.MdSidenav.prototype, "onCloseStart", void 0);
__decorate$29([
    _angular_core.Output('close'),
    __metadata$20("design:type", Object)
], exports.MdSidenav.prototype, "onClose", void 0);
__decorate$29([
    _angular_core.Output('align-changed'),
    __metadata$20("design:type", Object)
], exports.MdSidenav.prototype, "onAlignChanged", void 0);
__decorate$29([
    _angular_core.Input(),
    __metadata$20("design:type", Boolean),
    __metadata$20("design:paramtypes", [Boolean])
], exports.MdSidenav.prototype, "opened", null);
exports.MdSidenav = __decorate$29([
    _angular_core.Component({
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
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core.ViewEncapsulation.None,
    }),
    __metadata$20("design:paramtypes", [_angular_core.ElementRef])
], exports.MdSidenav);
exports.MdSidenavLayout = (function () {
    function MdSidenavLayout(_dir, _element, _renderer) {
        var _this = this;
        this._dir = _dir;
        this._element = _element;
        this._renderer = _renderer;
        /** Event emitted when the sidenav backdrop is clicked. */
        this.onBackdropClicked = new _angular_core.EventEmitter();
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
__decorate$29([
    _angular_core.ContentChildren(exports.MdSidenav),
    __metadata$20("design:type", _angular_core.QueryList)
], exports.MdSidenavLayout.prototype, "_sidenavs", void 0);
__decorate$29([
    _angular_core.Output('backdrop-clicked'),
    __metadata$20("design:type", Object)
], exports.MdSidenavLayout.prototype, "onBackdropClicked", void 0);
exports.MdSidenavLayout = __decorate$29([
    _angular_core.Component({
        selector: 'md-sidenav-layout, mat-sidenav-layout',
        // Do not use ChangeDetectionStrategy.OnPush. It does not work for this component because
        // technically it is a sibling of MdSidenav (on the content tree) and isn't updated when MdSidenav
        // changes its state.
        template: require('./sidenav.html'),
        styles: [
            require('./sidenav.css').toString(),
            require('./sidenav-transitions.css').toString(),
        ],
        encapsulation: _angular_core.ViewEncapsulation.None,
    }),
    __param$7(0, _angular_core.Optional()),
    __metadata$20("design:paramtypes", [exports.Dir, _angular_core.ElementRef,
        _angular_core.Renderer])
], exports.MdSidenavLayout);
exports.MdSidenavModule = MdSidenavModule_1 = (function () {
    function MdSidenavModule() {
    }
    MdSidenavModule.forRoot = function () {
        return {
            ngModule: MdSidenavModule_1,
            providers: [A11Y_PROVIDERS]
        };
    };
    return MdSidenavModule;
}());
exports.MdSidenavModule = MdSidenavModule_1 = __decorate$29([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.DefaultStyleCompatibilityModeModule, exports.A11yModule],
        exports: [exports.MdSidenavLayout, exports.MdSidenav, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdSidenavLayout, exports.MdSidenav],
    })
], exports.MdSidenavModule);
var MdSidenavModule_1;

var __decorate$30 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$21 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdListDivider = (function () {
    function MdListDivider() {
    }
    return MdListDivider;
}());
exports.MdListDivider = __decorate$30([
    _angular_core.Directive({
        selector: 'md-divider, mat-divider'
    })
], exports.MdListDivider);
exports.MdList = (function () {
    function MdList() {
    }
    return MdList;
}());
exports.MdList = __decorate$30([
    _angular_core.Component({
        selector: 'md-list, mat-list, md-nav-list, mat-nav-list',
        host: { 'role': 'list' },
        template: '<ng-content></ng-content>',
        styles: [require('./list.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None
    })
], exports.MdList);
exports.MdListAvatar = (function () {
    function MdListAvatar() {
    }
    return MdListAvatar;
}());
exports.MdListAvatar = __decorate$30([
    _angular_core.Directive({ selector: '[md-list-avatar], [mat-list-avatar]' })
], exports.MdListAvatar);
exports.MdListItem = (function () {
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
        this._lineSetter = new MdLineSetter(this._lines, this._renderer, this._element);
    };
    MdListItem.prototype._handleFocus = function () {
        this._hasFocus = true;
    };
    MdListItem.prototype._handleBlur = function () {
        this._hasFocus = false;
    };
    return MdListItem;
}());
__decorate$30([
    _angular_core.ContentChildren(exports.MdLine),
    __metadata$21("design:type", _angular_core.QueryList)
], exports.MdListItem.prototype, "_lines", void 0);
__decorate$30([
    _angular_core.ContentChild(exports.MdListAvatar),
    __metadata$21("design:type", exports.MdListAvatar),
    __metadata$21("design:paramtypes", [exports.MdListAvatar])
], exports.MdListItem.prototype, "_hasAvatar", null);
exports.MdListItem = __decorate$30([
    _angular_core.Component({
        selector: 'md-list-item, mat-list-item, a[md-list-item], a[mat-list-item]',
        host: {
            'role': 'listitem',
            '(focus)': '_handleFocus()',
            '(blur)': '_handleBlur()',
        },
        template: require('./list-item.html'),
        encapsulation: _angular_core.ViewEncapsulation.None
    }),
    __metadata$21("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
], exports.MdListItem);
exports.MdListModule = MdListModule_1 = (function () {
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
exports.MdListModule = MdListModule_1 = __decorate$30([
    _angular_core.NgModule({
        imports: [exports.MdLineModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [
            exports.MdList,
            exports.MdListItem,
            exports.MdListDivider,
            exports.MdListAvatar,
            exports.MdLineModule,
            exports.DefaultStyleCompatibilityModeModule,
        ],
        declarations: [exports.MdList, exports.MdListItem, exports.MdListDivider, exports.MdListAvatar],
    })
], exports.MdListModule);
var MdListModule_1;

/**
 * Converts values into strings. Falsy values become empty strings.
 * TODO: internal
 */
function coerceToString(value) {
    return "" + (value || '');
}
/**
 * Converts a value that might be a string into a number.
 * TODO: internal
 */
function coerceToNumber(value) {
    return typeof value === 'string' ? parseInt(value, 10) : value;
}

var __decorate$32 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$23 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MdGridTile = (function () {
    function MdGridTile(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
        this._rowspan = 1;
        this._colspan = 1;
    }
    Object.defineProperty(MdGridTile.prototype, "rowspan", {
        get: function () {
            return this._rowspan;
        },
        set: function (value) {
            this._rowspan = coerceToNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdGridTile.prototype, "colspan", {
        get: function () {
            return this._colspan;
        },
        set: function (value) {
            this._colspan = coerceToNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the style of the grid-tile element.  Needs to be set manually to avoid
     * "Changed after checked" errors that would occur with HostBinding.
     */
    MdGridTile.prototype._setStyle = function (property, value) {
        this._renderer.setElementStyle(this._element.nativeElement, property, value);
    };
    return MdGridTile;
}());
__decorate$32([
    _angular_core.Input(),
    __metadata$23("design:type", Object),
    __metadata$23("design:paramtypes", [Object])
], MdGridTile.prototype, "rowspan", null);
__decorate$32([
    _angular_core.Input(),
    __metadata$23("design:type", Object),
    __metadata$23("design:paramtypes", [Object])
], MdGridTile.prototype, "colspan", null);
MdGridTile = __decorate$32([
    _angular_core.Component({
        selector: 'md-grid-tile, mat-grid-tile',
        host: { 'role': 'listitem' },
        template: require('./grid-tile.html'),
        styles: [require('./grid-list.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
    }),
    __metadata$23("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
], MdGridTile);
var MdGridTileText = (function () {
    function MdGridTileText(_renderer, _element) {
        this._renderer = _renderer;
        this._element = _element;
    }
    MdGridTileText.prototype.ngAfterContentInit = function () {
        this._lineSetter = new MdLineSetter(this._lines, this._renderer, this._element);
    };
    return MdGridTileText;
}());
__decorate$32([
    _angular_core.ContentChildren(exports.MdLine),
    __metadata$23("design:type", _angular_core.QueryList)
], MdGridTileText.prototype, "_lines", void 0);
MdGridTileText = __decorate$32([
    _angular_core.Component({
        selector: 'md-grid-tile-header, mat-grid-tile-header, md-grid-tile-footer, mat-grid-tile-footer',
        template: require('./grid-tile-text.html')
    }),
    __metadata$23("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
], MdGridTileText);

var __extends$7 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Exception thrown when cols property is missing from grid-list
 */
var MdGridListColsError = (function (_super) {
    __extends$7(MdGridListColsError, _super);
    function MdGridListColsError() {
        return _super.call(this, "md-grid-list: must pass in number of columns. Example: <md-grid-list cols=\"3\">") || this;
    }
    return MdGridListColsError;
}(MdError));
/**
 * Exception thrown when a tile's colspan is longer than the number of cols in list
 */
var MdGridTileTooWideError = (function (_super) {
    __extends$7(MdGridTileTooWideError, _super);
    function MdGridTileTooWideError(cols, listLength) {
        return _super.call(this, "md-grid-list: tile with colspan " + cols + " is wider than grid with cols=\"" + listLength + "\".") || this;
    }
    return MdGridTileTooWideError;
}(MdError));
/**
 * Exception thrown when an invalid ratio is passed in as a rowHeight
 */
var MdGridListBadRatioError = (function (_super) {
    __extends$7(MdGridListBadRatioError, _super);
    function MdGridListBadRatioError(value) {
        return _super.call(this, "md-grid-list: invalid ratio given for row-height: \"" + value + "\"") || this;
    }
    return MdGridListBadRatioError;
}(MdError));

/**
 * Class for determining, from a list of tiles, the (row, col) position of each of those tiles
 * in the grid. This is necessary (rather than just rendering the tiles in normal document flow)
 * because the tiles can have a rowspan.
 *
 * The positioning algorithm greedily places each tile as soon as it encounters a gap in the grid
 * large enough to accommodate it so that the tiles still render in the same order in which they
 * are given.
 *
 * The basis of the algorithm is the use of an array to track the already placed tiles. Each
 * element of the array corresponds to a column, and the value indicates how many cells in that
 * column are already occupied; zero indicates an empty cell. Moving "down" to the next row
 * decrements each value in the tracking array (indicating that the column is one cell closer to
 * being free).
 */
var TileCoordinator = (function () {
    function TileCoordinator(numColumns, tiles) {
        var _this = this;
        /** Index at which the search for the next gap will start. */
        this.columnIndex = 0;
        /** The current row index. */
        this.rowIndex = 0;
        this.tracker = new Array(numColumns);
        this.tracker.fill(0, 0, this.tracker.length);
        this.positions = tiles.map(function (tile) { return _this._trackTile(tile); });
    }
    Object.defineProperty(TileCoordinator.prototype, "rowCount", {
        /** Gets the total number of rows occupied by tiles */
        get: function () { return this.rowIndex + 1; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TileCoordinator.prototype, "rowspan", {
        /** Gets the total span of rows occupied by tiles.
         * Ex: A list with 1 row that contains a tile with rowspan 2 will have a total rowspan of 2. */
        get: function () {
            var lastRowMax = Math.max.apply(Math, this.tracker);
            // if any of the tiles has a rowspan that pushes it beyond the total row count,
            // add the difference to the rowcount
            return lastRowMax > 1 ? this.rowCount + lastRowMax - 1 : this.rowCount;
        },
        enumerable: true,
        configurable: true
    });
    /** Calculates the row and col position of a tile. */
    TileCoordinator.prototype._trackTile = function (tile) {
        // Find a gap large enough for this tile.
        var gapStartIndex = this._findMatchingGap(tile.colspan);
        // Place tile in the resulting gap.
        this._markTilePosition(gapStartIndex, tile);
        // The next time we look for a gap, the search will start at columnIndex, which should be
        // immediately after the tile that has just been placed.
        this.columnIndex = gapStartIndex + tile.colspan;
        return new TilePosition(this.rowIndex, gapStartIndex);
    };
    /** Finds the next available space large enough to fit the tile. */
    TileCoordinator.prototype._findMatchingGap = function (tileCols) {
        if (tileCols > this.tracker.length) {
            throw new MdGridTileTooWideError(tileCols, this.tracker.length);
        }
        // Start index is inclusive, end index is exclusive.
        var gapStartIndex = -1;
        var gapEndIndex = -1;
        // Look for a gap large enough to fit the given tile. Empty spaces are marked with a zero.
        do {
            // If we've reached the end of the row, go to the next row.
            if (this.columnIndex + tileCols > this.tracker.length) {
                this._nextRow();
                continue;
            }
            gapStartIndex = this.tracker.indexOf(0, this.columnIndex);
            // If there are no more empty spaces in this row at all, move on to the next row.
            if (gapStartIndex == -1) {
                this._nextRow();
                continue;
            }
            gapEndIndex = this._findGapEndIndex(gapStartIndex);
            // If a gap large enough isn't found, we want to start looking immediately after the current
            // gap on the next iteration.
            this.columnIndex = gapStartIndex + 1;
            // Continue iterating until we find a gap wide enough for this tile.
        } while (gapEndIndex - gapStartIndex < tileCols);
        return gapStartIndex;
    };
    /** Move "down" to the next row. */
    TileCoordinator.prototype._nextRow = function () {
        this.columnIndex = 0;
        this.rowIndex++;
        // Decrement all spaces by one to reflect moving down one row.
        for (var i = 0; i < this.tracker.length; i++) {
            this.tracker[i] = Math.max(0, this.tracker[i] - 1);
        }
    };
    /**
     * Finds the end index (exclusive) of a gap given the index from which to start looking.
     * The gap ends when a non-zero value is found.
     */
    TileCoordinator.prototype._findGapEndIndex = function (gapStartIndex) {
        for (var i = gapStartIndex + 1; i < this.tracker.length; i++) {
            if (this.tracker[i] != 0) {
                return i;
            }
        }
        // The gap ends with the end of the row.
        return this.tracker.length;
    };
    /** Update the tile tracker to account for the given tile in the given space. */
    TileCoordinator.prototype._markTilePosition = function (start, tile) {
        for (var i = 0; i < tile.colspan; i++) {
            this.tracker[start + i] = tile.rowspan;
        }
    };
    return TileCoordinator;
}());
/** Simple data structure for tile position (row, col). */
var TilePosition = (function () {
    function TilePosition(row, col) {
        this.row = row;
        this.col = col;
    }
    return TilePosition;
}());

var __extends$8 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Sets the style properties for an individual tile, given the position calculated by the
 * Tile Coordinator.
 * TODO: internal
 */
var TileStyler = (function () {
    function TileStyler() {
        this._rows = 0;
        this._rowspan = 0;
    }
    /**
     * Adds grid-list layout info once it is available. Cannot be processed in the constructor
     * because these properties haven't been calculated by that point.
     */
    TileStyler.prototype.init = function (_gutterSize, tracker, cols, direction) {
        this._gutterSize = normalizeUnits(_gutterSize);
        this._rows = tracker.rowCount;
        this._rowspan = tracker.rowspan;
        this._cols = cols;
        this._direction = direction;
    };
    /**
     * Computes the amount of space a single 1x1 tile would take up (width or height).
     * Used as a basis for other calculations.
     * @param sizePercent Percent of the total grid-list space that one 1x1 tile would take up.
     * @param gutterFraction Fraction of the gutter size taken up by one 1x1 tile.
     * @return The size of a 1x1 tile as an expression that can be evaluated via CSS calc().
     */
    TileStyler.prototype.getBaseTileSize = function (sizePercent, gutterFraction) {
        // Take the base size percent (as would be if evenly dividing the size between cells),
        // and then subtracting the size of one gutter. However, since there are no gutters on the
        // edges, each tile only uses a fraction (gutterShare = numGutters / numCells) of the gutter
        // size. (Imagine having one gutter per tile, and then breaking up the extra gutter on the
        // edge evenly among the cells).
        return "(" + sizePercent + "% - ( " + this._gutterSize + " * " + gutterFraction + " ))";
    };
    /**
     * Gets The horizontal or vertical position of a tile, e.g., the 'top' or 'left' property value.
     * @param offset Number of tiles that have already been rendered in the row/column.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @return Position of the tile as a CSS calc() expression.
     */
    TileStyler.prototype.getTilePosition = function (baseSize, offset) {
        // The position comes the size of a 1x1 tile plus gutter for each previous tile in the
        // row/column (offset).
        return calc("(" + baseSize + " + " + this._gutterSize + ") * " + offset);
    };
    /**
     * Gets the actual size of a tile, e.g., width or height, taking rowspan or colspan into account.
     * @param baseSize Base size of a 1x1 tile (as computed in getBaseTileSize).
     * @param span The tile's rowspan or colspan.
     * @return Size of the tile as a CSS calc() expression.
     */
    TileStyler.prototype.getTileSize = function (baseSize, span) {
        return "(" + baseSize + " * " + span + ") + (" + (span - 1) + " * " + this._gutterSize + ")";
    };
    /** Gets the style properties to be applied to a tile for the given row and column index. */
    TileStyler.prototype.setStyle = function (tile, rowIndex, colIndex) {
        // Percent of the available horizontal space that one column takes up.
        var percentWidthPerTile = 100 / this._cols;
        // Fraction of the vertical gutter size that each column takes up.
        // For example, if there are 5 columns, each column uses 4/5 = 0.8 times the gutter width.
        var gutterWidthFractionPerTile = (this._cols - 1) / this._cols;
        this.setColStyles(tile, colIndex, percentWidthPerTile, gutterWidthFractionPerTile);
        this.setRowStyles(tile, rowIndex, percentWidthPerTile, gutterWidthFractionPerTile);
    };
    /** Sets the horizontal placement of the tile in the list. */
    TileStyler.prototype.setColStyles = function (tile, colIndex, percentWidth, gutterWidth) {
        // Base horizontal size of a column.
        var baseTileWidth = this.getBaseTileSize(percentWidth, gutterWidth);
        // The width and horizontal position of each tile is always calculated the same way, but the
        // height and vertical position depends on the rowMode.
        var side = this._direction === 'ltr' ? 'left' : 'right';
        tile._setStyle(side, this.getTilePosition(baseTileWidth, colIndex));
        tile._setStyle('width', calc(this.getTileSize(baseTileWidth, tile.colspan)));
    };
    /** Calculates the total size taken up by gutters across one axis of a list. */
    TileStyler.prototype.getGutterSpan = function () {
        return this._gutterSize + " * (" + this._rowspan + " - 1)";
    };
    /** Calculates the total size taken up by tiles across one axis of a list. */
    TileStyler.prototype.getTileSpan = function (tileHeight) {
        return this._rowspan + " * " + this.getTileSize(tileHeight, 1);
    };
    /**
     * Sets the vertical placement of the tile in the list.
     * This method will be implemented by each type of TileStyler.
     */
    TileStyler.prototype.setRowStyles = function (tile, rowIndex, percentWidth, gutterWidth) { };
    /**
     * Calculates the computed height and returns the correct style property to set.
     * This method will be implemented by each type of TileStyler.
     */
    TileStyler.prototype.getComputedHeight = function () { return null; };
    return TileStyler;
}());
/**
 * This type of styler is instantiated when the user passes in a fixed row height.
 * Example <md-grid-list cols="3" rowHeight="100px">
 * TODO: internal
 */
var FixedTileStyler = (function (_super) {
    __extends$8(FixedTileStyler, _super);
    function FixedTileStyler(fixedRowHeight) {
        var _this = _super.call(this) || this;
        _this.fixedRowHeight = fixedRowHeight;
        return _this;
    }
    FixedTileStyler.prototype.init = function (gutterSize, tracker, cols, direction) {
        _super.prototype.init.call(this, gutterSize, tracker, cols, direction);
        this.fixedRowHeight = normalizeUnits(this.fixedRowHeight);
    };
    FixedTileStyler.prototype.setRowStyles = function (tile, rowIndex, percentWidth, gutterWidth) {
        tile._setStyle('top', this.getTilePosition(this.fixedRowHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(this.fixedRowHeight, tile.rowspan)));
    };
    FixedTileStyler.prototype.getComputedHeight = function () {
        return [
            'height', calc(this.getTileSpan(this.fixedRowHeight) + " + " + this.getGutterSpan())
        ];
    };
    return FixedTileStyler;
}(TileStyler));
/**
 * This type of styler is instantiated when the user passes in a width:height ratio
 * for the row height.  Example <md-grid-list cols="3" rowHeight="3:1">
 * TODO: internal
 */
var RatioTileStyler = (function (_super) {
    __extends$8(RatioTileStyler, _super);
    function RatioTileStyler(value) {
        var _this = _super.call(this) || this;
        _this._parseRatio(value);
        return _this;
    }
    RatioTileStyler.prototype.setRowStyles = function (tile, rowIndex, percentWidth, gutterWidth) {
        var percentHeightPerTile = percentWidth / this.rowHeightRatio;
        this.baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterWidth);
        // Use paddingTop and marginTop to maintain the given aspect ratio, as
        // a percentage-based value for these properties is applied versus the *width* of the
        // containing block. See http://www.w3.org/TR/CSS2/box.html#margin-properties
        tile._setStyle('marginTop', this.getTilePosition(this.baseTileHeight, rowIndex));
        tile._setStyle('paddingTop', calc(this.getTileSize(this.baseTileHeight, tile.rowspan)));
    };
    RatioTileStyler.prototype.getComputedHeight = function () {
        return [
            'paddingBottom', calc(this.getTileSpan(this.baseTileHeight) + " + " + this.getGutterSpan())
        ];
    };
    RatioTileStyler.prototype._parseRatio = function (value) {
        var ratioParts = value.split(':');
        if (ratioParts.length !== 2) {
            throw new MdGridListBadRatioError(value);
        }
        this.rowHeightRatio = parseFloat(ratioParts[0]) / parseFloat(ratioParts[1]);
    };
    return RatioTileStyler;
}(TileStyler));
/*  This type of styler is instantiated when the user selects a "fit" row height mode.
 *  In other words, the row height will reflect the total height of the container divided
 *  by the number of rows.  Example <md-grid-list cols="3" rowHeight="fit"> */
var FitTileStyler = (function (_super) {
    __extends$8(FitTileStyler, _super);
    function FitTileStyler() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FitTileStyler.prototype.setRowStyles = function (tile, rowIndex, percentWidth, gutterWidth) {
        // Percent of the available vertical space that one row takes up.
        var percentHeightPerTile = 100 / this._rowspan;
        // Fraction of the horizontal gutter size that each column takes up.
        var gutterHeightPerTile = (this._rows - 1) / this._rows;
        // Base vertical size of a column.
        var baseTileHeight = this.getBaseTileSize(percentHeightPerTile, gutterHeightPerTile);
        tile._setStyle('top', this.getTilePosition(baseTileHeight, rowIndex));
        tile._setStyle('height', calc(this.getTileSize(baseTileHeight, tile.rowspan)));
    };
    return FitTileStyler;
}(TileStyler));
/** Wraps a CSS string in a calc function */
function calc(exp) { return "calc(" + exp + ")"; }
/** Appends pixels to a CSS string if no units are given. */
function normalizeUnits(value) {
    return (value.match(/px|em|rem/)) ? value : value + 'px';
}

var __decorate$31 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$22 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$8 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// TODO(kara): Conditional (responsive) column count / row size.
// TODO(kara): Re-layout on window resize / media change (debounced).
// TODO(kara): gridTileHeader and gridTileFooter.
var MD_FIT_MODE = 'fit';
exports.MdGridList = (function () {
    function MdGridList(_renderer, _element, _dir) {
        this._renderer = _renderer;
        this._element = _element;
        this._dir = _dir;
        /** The amount of space between tiles. This will be something like '5px' or '2em'. */
        this._gutter = '1px';
    }
    Object.defineProperty(MdGridList.prototype, "cols", {
        get: function () {
            return this._cols;
        },
        set: function (value) {
            this._cols = coerceToNumber(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdGridList.prototype, "gutterSize", {
        get: function () {
            return this._gutter;
        },
        set: function (value) {
            this._gutter = coerceToString(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdGridList.prototype, "rowHeight", {
        /** Set internal representation of row height from the user-provided value. */
        set: function (value) {
            this._rowHeight = coerceToString(value);
            this._setTileStyler();
        },
        enumerable: true,
        configurable: true
    });
    /** TODO: internal */
    MdGridList.prototype.ngOnInit = function () {
        this._checkCols();
        this._checkRowHeight();
    };
    /**
     * The layout calculation is fairly cheap if nothing changes, so there's little cost
     * to run it frequently.
     * TODO: internal
     */
    MdGridList.prototype.ngAfterContentChecked = function () {
        this._layoutTiles();
    };
    /** Throw a friendly error if cols property is missing */
    MdGridList.prototype._checkCols = function () {
        if (!this.cols) {
            throw new MdGridListColsError();
        }
    };
    /** Default to equal width:height if rowHeight property is missing */
    MdGridList.prototype._checkRowHeight = function () {
        if (!this._rowHeight) {
            this._tileStyler = new RatioTileStyler('1:1');
        }
    };
    /** Creates correct Tile Styler subtype based on rowHeight passed in by user */
    MdGridList.prototype._setTileStyler = function () {
        if (this._rowHeight === MD_FIT_MODE) {
            this._tileStyler = new FitTileStyler();
        }
        else if (this._rowHeight && this._rowHeight.match(/:/g)) {
            this._tileStyler = new RatioTileStyler(this._rowHeight);
        }
        else {
            this._tileStyler = new FixedTileStyler(this._rowHeight);
        }
    };
    /** Computes and applies the size and position for all children grid tiles. */
    MdGridList.prototype._layoutTiles = function () {
        var tiles = this._tiles.toArray();
        var tracker = new TileCoordinator(this.cols, tiles);
        var direction = this._dir ? this._dir.value : 'ltr';
        this._tileStyler.init(this.gutterSize, tracker, this.cols, direction);
        for (var i = 0; i < tiles.length; i++) {
            var pos = tracker.positions[i];
            var tile = tiles[i];
            this._tileStyler.setStyle(tile, pos.row, pos.col);
        }
        this._setListStyle(this._tileStyler.getComputedHeight());
    };
    /** Sets style on the main grid-list element, given the style name and value. */
    MdGridList.prototype._setListStyle = function (style) {
        if (style) {
            this._renderer.setElementStyle(this._element.nativeElement, style[0], style[1]);
        }
    };
    return MdGridList;
}());
__decorate$31([
    _angular_core.ContentChildren(MdGridTile),
    __metadata$22("design:type", _angular_core.QueryList)
], exports.MdGridList.prototype, "_tiles", void 0);
__decorate$31([
    _angular_core.Input(),
    __metadata$22("design:type", Object),
    __metadata$22("design:paramtypes", [Object])
], exports.MdGridList.prototype, "cols", null);
__decorate$31([
    _angular_core.Input('gutterSize'),
    __metadata$22("design:type", Object),
    __metadata$22("design:paramtypes", [Object])
], exports.MdGridList.prototype, "gutterSize", null);
__decorate$31([
    _angular_core.Input(),
    __metadata$22("design:type", Object),
    __metadata$22("design:paramtypes", [Object])
], exports.MdGridList.prototype, "rowHeight", null);
exports.MdGridList = __decorate$31([
    _angular_core.Component({
        selector: 'md-grid-list, mat-grid-list',
        template: require('./grid-list.html'),
        styles: [require('./grid-list.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
    }),
    __param$8(2, _angular_core.Optional()),
    __metadata$22("design:paramtypes", [_angular_core.Renderer,
        _angular_core.ElementRef,
        exports.Dir])
], exports.MdGridList);
exports.MdGridListModule = MdGridListModule_1 = (function () {
    function MdGridListModule() {
    }
    MdGridListModule.forRoot = function () {
        return {
            ngModule: MdGridListModule_1,
            providers: []
        };
    };
    return MdGridListModule;
}());
exports.MdGridListModule = MdGridListModule_1 = __decorate$31([
    _angular_core.NgModule({
        imports: [exports.MdLineModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [
            exports.MdGridList,
            MdGridTile,
            MdGridTileText,
            exports.MdLineModule,
            exports.DefaultStyleCompatibilityModeModule,
        ],
        declarations: [exports.MdGridList, MdGridTile, MdGridTileText],
    })
], exports.MdGridListModule);
var MdGridListModule_1;

var __decorate$33 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.MdCardContent = (function () {
    function MdCardContent() {
    }
    return MdCardContent;
}());
exports.MdCardContent = __decorate$33([
    _angular_core.Directive({
        selector: 'md-card-content, mat-card-content'
    })
], exports.MdCardContent);
exports.MdCardTitle = (function () {
    function MdCardTitle() {
    }
    return MdCardTitle;
}());
exports.MdCardTitle = __decorate$33([
    _angular_core.Directive({
        selector: 'md-card-title, mat-card-title'
    })
], exports.MdCardTitle);
exports.MdCardSubtitle = (function () {
    function MdCardSubtitle() {
    }
    return MdCardSubtitle;
}());
exports.MdCardSubtitle = __decorate$33([
    _angular_core.Directive({
        selector: 'md-card-subtitle, mat-card-subtitle'
    })
], exports.MdCardSubtitle);
exports.MdCardActions = (function () {
    function MdCardActions() {
    }
    return MdCardActions;
}());
exports.MdCardActions = __decorate$33([
    _angular_core.Directive({
        selector: 'md-card-actions, mat-card-actions'
    })
], exports.MdCardActions);
exports.MdCardFooter = (function () {
    function MdCardFooter() {
    }
    return MdCardFooter;
}());
exports.MdCardFooter = __decorate$33([
    _angular_core.Directive({
        selector: 'md-card-footer, mat-card-footer'
    })
], exports.MdCardFooter);
exports.MdCard = (function () {
    function MdCard() {
    }
    return MdCard;
}());
exports.MdCard = __decorate$33([
    _angular_core.Component({
        selector: 'md-card, mat-card',
        template: require('./card.html'),
        styles: [require('./card.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    })
], exports.MdCard);
exports.MdCardHeader = (function () {
    function MdCardHeader() {
    }
    return MdCardHeader;
}());
exports.MdCardHeader = __decorate$33([
    _angular_core.Component({
        selector: 'md-card-header, mat-card-header',
        template: require('./card-header.html'),
        encapsulation: _angular_core.ViewEncapsulation.None,
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    })
], exports.MdCardHeader);
exports.MdCardTitleGroup = (function () {
    function MdCardTitleGroup() {
    }
    return MdCardTitleGroup;
}());
exports.MdCardTitleGroup = __decorate$33([
    _angular_core.Component({
        selector: 'md-card-title-group, mat-card-title-group',
        template: require('./card-title-group.html'),
        encapsulation: _angular_core.ViewEncapsulation.None,
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    })
], exports.MdCardTitleGroup);
exports.MdCardModule = MdCardModule_1 = (function () {
    function MdCardModule() {
    }
    MdCardModule.forRoot = function () {
        return {
            ngModule: MdCardModule_1,
            providers: []
        };
    };
    return MdCardModule;
}());
exports.MdCardModule = MdCardModule_1 = __decorate$33([
    _angular_core.NgModule({
        imports: [exports.DefaultStyleCompatibilityModeModule],
        exports: [
            exports.MdCard,
            exports.MdCardHeader,
            exports.MdCardTitleGroup,
            exports.MdCardContent,
            exports.MdCardTitle,
            exports.MdCardSubtitle,
            exports.MdCardActions,
            exports.MdCardFooter,
            exports.DefaultStyleCompatibilityModeModule,
        ],
        declarations: [
            exports.MdCard, exports.MdCardHeader, exports.MdCardTitleGroup, exports.MdCardContent, exports.MdCardTitle, exports.MdCardSubtitle,
            exports.MdCardActions, exports.MdCardFooter
        ],
    })
], exports.MdCardModule);
var MdCardModule_1;

var __decorate$35 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$25 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdChip = (function () {
    function MdChip(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    MdChip.prototype.ngAfterContentInit = function () { };
    return MdChip;
}());
exports.MdChip = __decorate$35([
    _angular_core.Component({
        selector: 'md-chip, [md-chip]',
        template: "<ng-content></ng-content>",
        host: {
            // Properties
            'class': 'md-chip',
            'tabindex': '-1',
            'role': 'option'
        }
    }),
    __metadata$25("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
], exports.MdChip);

var __decorate$34 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$24 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdChipList = (function () {
    function MdChipList(_elementRef) {
        this._elementRef = _elementRef;
    }
    MdChipList.prototype.ngAfterContentInit = function () { };
    return MdChipList;
}());
exports.MdChipList = __decorate$34([
    _angular_core.Component({
        selector: 'md-chip-list',
        template: "<ng-content></ng-content>",
        host: {
            // Properties
            'tabindex': '0',
            'role': 'listbox',
            'class': 'md-chip-list'
        },
        styles: [require('./chips.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush
    }),
    __metadata$24("design:paramtypes", [_angular_core.ElementRef])
], exports.MdChipList);
exports.MdChipsModule = MdChipsModule_1 = (function () {
    function MdChipsModule() {
    }
    MdChipsModule.forRoot = function () {
        return {
            ngModule: MdChipsModule_1,
            providers: []
        };
    };
    return MdChipsModule;
}());
exports.MdChipsModule = MdChipsModule_1 = __decorate$34([
    _angular_core.NgModule({
        imports: [],
        exports: [exports.MdChipList, exports.MdChip],
        declarations: [exports.MdChipList, exports.MdChip]
    })
], exports.MdChipsModule);
var MdChipsModule_1;

var __extends$10 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$37 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$27 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Exception thrown when attempting to load an icon with a name that cannot be found. */
var MdIconNameNotFoundError = (function (_super) {
    __extends$10(MdIconNameNotFoundError, _super);
    function MdIconNameNotFoundError(iconName) {
        return _super.call(this, "Unable to find icon with the name \"" + iconName + "\"") || this;
    }
    return MdIconNameNotFoundError;
}(MdError));
/**
 * Exception thrown when attempting to load SVG content that does not contain the expected
 * <svg> tag.
 */
var MdIconSvgTagNotFoundError = (function (_super) {
    __extends$10(MdIconSvgTagNotFoundError, _super);
    function MdIconSvgTagNotFoundError() {
        return _super.call(this, '<svg> tag not found') || this;
    }
    return MdIconSvgTagNotFoundError;
}(MdError));
/** Configuration for an icon, including the URL and possibly the cached SVG element. */
var SvgIconConfig = (function () {
    function SvgIconConfig(url) {
        this.url = url;
        this.svgElement = null;
    }
    return SvgIconConfig;
}());
/** Returns the cache key to use for an icon namespace and name. */
var iconKey = function (namespace, name) { return namespace + ':' + name; };
exports.MdIconRegistry = (function () {
    function MdIconRegistry(_http) {
        this._http = _http;
        /**
         * URLs and cached SVG elements for individual icons. Keys are of the format "[namespace]:[icon]".
         */
        this._svgIconConfigs = new Map();
        /**
         * SvgIconConfig objects and cached SVG elements for icon sets, keyed by namespace.
         * Multiple icon sets can be registered under the same namespace.
         */
        this._iconSetConfigs = new Map();
        /** Cache for icons loaded by direct URLs. */
        this._cachedIconsByUrl = new Map();
        /** In-progress icon fetches. Used to coalesce multiple requests to the same URL. */
        this._inProgressUrlFetches = new Map();
        /** Map from font identifiers to their CSS class names. Used for icon fonts. */
        this._fontCssClassesByAlias = new Map();
        /**
         * The CSS class to apply when an <md-icon> component has no icon name, url, or font specified.
         * The default 'material-icons' value assumes that the material icon font has been loaded as
         * described at http://google.github.io/material-design-icons/#icon-font-for-the-web
         */
        this._defaultFontSetClass = 'material-icons';
    }
    /** Registers an icon by URL in the default namespace. */
    MdIconRegistry.prototype.addSvgIcon = function (iconName, url) {
        return this.addSvgIconInNamespace('', iconName, url);
    };
    /** Registers an icon by URL in the specified namespace. */
    MdIconRegistry.prototype.addSvgIconInNamespace = function (namespace, iconName, url) {
        var key = iconKey(namespace, iconName);
        this._svgIconConfigs.set(key, new SvgIconConfig(url));
        return this;
    };
    /** Registers an icon set by URL in the default namespace. */
    MdIconRegistry.prototype.addSvgIconSet = function (url) {
        return this.addSvgIconSetInNamespace('', url);
    };
    /** Registers an icon set by URL in the specified namespace. */
    MdIconRegistry.prototype.addSvgIconSetInNamespace = function (namespace, url) {
        var config = new SvgIconConfig(url);
        if (this._iconSetConfigs.has(namespace)) {
            this._iconSetConfigs.get(namespace).push(config);
        }
        else {
            this._iconSetConfigs.set(namespace, [config]);
        }
        return this;
    };
    /**
     * Defines an alias for a CSS class name to be used for icon fonts. Creating an mdIcon
     * component with the alias as the fontSet input will cause the class name to be applied
     * to the <md-icon> element.
     */
    MdIconRegistry.prototype.registerFontClassAlias = function (alias, className) {
        if (className === void 0) { className = alias; }
        this._fontCssClassesByAlias.set(alias, className);
        return this;
    };
    /**
     * Returns the CSS class name associated with the alias by a previous call to
     * registerFontClassAlias. If no CSS class has been associated, returns the alias unmodified.
     */
    MdIconRegistry.prototype.classNameForFontAlias = function (alias) {
        return this._fontCssClassesByAlias.get(alias) || alias;
    };
    /**
     * Sets the CSS class name to be used for icon fonts when an <md-icon> component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    MdIconRegistry.prototype.setDefaultFontSetClass = function (className) {
        this._defaultFontSetClass = className;
        return this;
    };
    /**
     * Returns the CSS class name to be used for icon fonts when an <md-icon> component does not
     * have a fontSet input value, and is not loading an icon by name or URL.
     */
    MdIconRegistry.prototype.getDefaultFontSetClass = function () {
        return this._defaultFontSetClass;
    };
    /**
     * Returns an Observable that produces the icon (as an <svg> DOM element) from the given URL.
     * The response from the URL may be cached so this will not always cause an HTTP request, but
     * the produced element will always be a new copy of the originally fetched icon. (That is,
     * it will not contain any modifications made to elements previously returned).
     */
    MdIconRegistry.prototype.getSvgIconFromUrl = function (url) {
        var _this = this;
        if (this._cachedIconsByUrl.has(url)) {
            return rxjs_Observable.Observable.of(cloneSvg(this._cachedIconsByUrl.get(url)));
        }
        return this._loadSvgIconFromConfig(new SvgIconConfig(url))
            .do(function (svg) { return _this._cachedIconsByUrl.set(url, svg); })
            .map(function (svg) { return cloneSvg(svg); });
    };
    /**
     * Returns an Observable that produces the icon (as an <svg> DOM element) with the given name
     * and namespace. The icon must have been previously registered with addIcon or addIconSet;
     * if not, the Observable will throw an MdIconNameNotFoundError.
     */
    MdIconRegistry.prototype.getNamedSvgIcon = function (name, namespace) {
        if (namespace === void 0) { namespace = ''; }
        // Return (copy of) cached icon if possible.
        var key = iconKey(namespace, name);
        if (this._svgIconConfigs.has(key)) {
            return this._getSvgFromConfig(this._svgIconConfigs.get(key));
        }
        // See if we have any icon sets registered for the namespace.
        var iconSetConfigs = this._iconSetConfigs.get(namespace);
        if (iconSetConfigs) {
            return this._getSvgFromIconSetConfigs(name, iconSetConfigs);
        }
        return rxjs_Observable.Observable.throw(new MdIconNameNotFoundError(key));
    };
    /**
     * Returns the cached icon for a SvgIconConfig if available, or fetches it from its URL if not.
     */
    MdIconRegistry.prototype._getSvgFromConfig = function (config) {
        if (config.svgElement) {
            // We already have the SVG element for this icon, return a copy.
            return rxjs_Observable.Observable.of(cloneSvg(config.svgElement));
        }
        else {
            // Fetch the icon from the config's URL, cache it, and return a copy.
            return this._loadSvgIconFromConfig(config)
                .do(function (svg) { return config.svgElement = svg; })
                .map(function (svg) { return cloneSvg(svg); });
        }
    };
    /**
     * Attempts to find an icon with the specified name in any of the SVG icon sets.
     * First searches the available cached icons for a nested element with a matching name, and
     * if found copies the element to a new <svg> element. If not found, fetches all icon sets
     * that have not been cached, and searches again after all fetches are completed.
     * The returned Observable produces the SVG element if possible, and throws
     * MdIconNameNotFoundError if no icon with the specified name can be found.
     */
    MdIconRegistry.prototype._getSvgFromIconSetConfigs = function (name, iconSetConfigs) {
        var _this = this;
        // For all the icon set SVG elements we've fetched, see if any contain an icon with the
        // requested name.
        var namedIcon = this._extractIconWithNameFromAnySet(name, iconSetConfigs);
        if (namedIcon) {
            // We could cache namedIcon in _svgIconConfigs, but since we have to make a copy every
            // time anyway, there's probably not much advantage compared to just always extracting
            // it from the icon set.
            return rxjs_Observable.Observable.of(namedIcon);
        }
        // Not found in any cached icon sets. If there are icon sets with URLs that we haven't
        // fetched, fetch them now and look for iconName in the results.
        var iconSetFetchRequests = iconSetConfigs
            .filter(function (iconSetConfig) { return !iconSetConfig.svgElement; })
            .map(function (iconSetConfig) {
            return _this._loadSvgIconSetFromConfig(iconSetConfig)
                .catch(function (err, caught) {
                // Swallow errors fetching individual URLs so the combined Observable won't
                // necessarily fail.
                console.log("Loading icon set URL: " + iconSetConfig.url + " failed: " + err);
                return rxjs_Observable.Observable.of(null);
            })
                .do(function (svg) {
                // Cache SVG element.
                if (svg) {
                    iconSetConfig.svgElement = svg;
                }
            });
        });
        // Fetch all the icon set URLs. When the requests complete, every IconSet should have a
        // cached SVG element (unless the request failed), and we can check again for the icon.
        return rxjs_Observable.Observable.forkJoin(iconSetFetchRequests)
            .map(function (ignoredResults) {
            var foundIcon = _this._extractIconWithNameFromAnySet(name, iconSetConfigs);
            if (!foundIcon) {
                throw new MdIconNameNotFoundError(name);
            }
            return foundIcon;
        });
    };
    /**
     * Searches the cached SVG elements for the given icon sets for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    MdIconRegistry.prototype._extractIconWithNameFromAnySet = function (iconName, iconSetConfigs) {
        // Iterate backwards, so icon sets added later have precedence.
        for (var i = iconSetConfigs.length - 1; i >= 0; i--) {
            var config = iconSetConfigs[i];
            if (config.svgElement) {
                var foundIcon = this._extractSvgIconFromSet(config.svgElement, iconName, config);
                if (foundIcon) {
                    return foundIcon;
                }
            }
        }
        return null;
    };
    /**
     * Loads the content of the icon URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    MdIconRegistry.prototype._loadSvgIconFromConfig = function (config) {
        var _this = this;
        return this._fetchUrl(config.url)
            .map(function (svgText) { return _this._createSvgElementForSingleIcon(svgText, config); });
    };
    /**
     * Loads the content of the icon set URL specified in the SvgIconConfig and creates an SVG element
     * from it.
     */
    MdIconRegistry.prototype._loadSvgIconSetFromConfig = function (config) {
        var _this = this;
        // TODO: Document that icons should only be loaded from trusted sources.
        return this._fetchUrl(config.url)
            .map(function (svgText) { return _this._svgElementFromString(svgText); });
    };
    /**
     * Creates a DOM element from the given SVG string, and adds default attributes.
     */
    MdIconRegistry.prototype._createSvgElementForSingleIcon = function (responseText, config) {
        var svg = this._svgElementFromString(responseText);
        this._setSvgAttributes(svg, config);
        return svg;
    };
    /**
     * Searches the cached element of the given SvgIconConfig for a nested icon element whose "id"
     * tag matches the specified name. If found, copies the nested element to a new SVG element and
     * returns it. Returns null if no matching element is found.
     */
    MdIconRegistry.prototype._extractSvgIconFromSet = function (iconSet, iconName, config) {
        var iconNode = iconSet.querySelector('#' + iconName);
        if (!iconNode) {
            return null;
        }
        // If the icon node is itself an <svg> node, clone and return it directly. If not, set it as
        // the content of a new <svg> node.
        if (iconNode.tagName.toLowerCase() == 'svg') {
            return this._setSvgAttributes(iconNode.cloneNode(true), config);
        }
        // createElement('SVG') doesn't work as expected; the DOM ends up with
        // the correct nodes, but the SVG content doesn't render. Instead we
        // have to create an empty SVG node using innerHTML and append its content.
        // Elements created using DOMParser.parseFromString have the same problem.
        // http://stackoverflow.com/questions/23003278/svg-innerhtml-in-firefox-can-not-display
        var svg = this._svgElementFromString('<svg></svg>');
        // Clone the node so we don't remove it from the parent icon set element.
        svg.appendChild(iconNode.cloneNode(true));
        return this._setSvgAttributes(svg, config);
    };
    /**
     * Creates a DOM element from the given SVG string.
     */
    MdIconRegistry.prototype._svgElementFromString = function (str) {
        // TODO: Is there a better way than innerHTML? Renderer doesn't appear to have a method for
        // creating an element from an HTML string.
        var div = document.createElement('DIV');
        div.innerHTML = str;
        var svg = div.querySelector('svg');
        if (!svg) {
            throw new MdIconSvgTagNotFoundError();
        }
        return svg;
    };
    /**
     * Sets the default attributes for an SVG element to be used as an icon.
     */
    MdIconRegistry.prototype._setSvgAttributes = function (svg, config) {
        if (!svg.getAttribute('xmlns')) {
            svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        }
        svg.setAttribute('fit', '');
        svg.setAttribute('height', '100%');
        svg.setAttribute('width', '100%');
        svg.setAttribute('preserveAspectRatio', 'xMidYMid meet');
        svg.setAttribute('focusable', 'false'); // Disable IE11 default behavior to make SVGs focusable.
        return svg;
    };
    /**
     * Returns an Observable which produces the string contents of the given URL. Results may be
     * cached, so future calls with the same URL may not cause another HTTP request.
     */
    MdIconRegistry.prototype._fetchUrl = function (url) {
        var _this = this;
        // Store in-progress fetches to avoid sending a duplicate request for a URL when there is
        // already a request in progress for that URL. It's necessary to call share() on the
        // Observable returned by http.get() so that multiple subscribers don't cause multiple XHRs.
        if (this._inProgressUrlFetches.has(url)) {
            return this._inProgressUrlFetches.get(url);
        }
        // TODO(jelbourn): for some reason, the `finally` operator "loses" the generic type on the
        // Observable. Figure out why and fix it.
        var req = this._http.get(url)
            .map(function (response) { return response.text(); })
            .finally(function () {
            _this._inProgressUrlFetches.delete(url);
        })
            .share();
        this._inProgressUrlFetches.set(url, req);
        return req;
    };
    return MdIconRegistry;
}());
exports.MdIconRegistry = __decorate$37([
    _angular_core.Injectable(),
    __metadata$27("design:paramtypes", [_angular_http.Http])
], exports.MdIconRegistry);
/** Clones an SVGElement while preserving type information. */
function cloneSvg(svg) {
    return svg.cloneNode(true);
}

var __extends$9 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$36 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$26 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Exception thrown when an invalid icon name is passed to an md-icon component. */
var MdIconInvalidNameError = (function (_super) {
    __extends$9(MdIconInvalidNameError, _super);
    function MdIconInvalidNameError(iconName) {
        return _super.call(this, "Invalid icon name: \"" + iconName + "\"") || this;
    }
    return MdIconInvalidNameError;
}(MdError));
exports.MdIcon = (function () {
    function MdIcon(_elementRef, _renderer, _mdIconRegistry) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._mdIconRegistry = _mdIconRegistry;
        this.hostAriaLabel = '';
    }
    Object.defineProperty(MdIcon.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    MdIcon.prototype._updateColor = function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    MdIcon.prototype._setElementColor = function (color, isAdd) {
        if (color != null && color != '') {
            this._renderer.setElementClass(this._elementRef.nativeElement, "md-" + color, isAdd);
        }
    };
    /**
     * Splits an svgIcon binding value into its icon set and icon name components.
     * Returns a 2-element array of [(icon set), (icon name)].
     * The separator for the two fields is ':'. If there is no separator, an empty
     * string is returned for the icon set and the entire value is returned for
     * the icon name. If the argument is falsy, returns an array of two empty strings.
     * Throws a MdIconInvalidNameError if the name contains two or more ':' separators.
     * Examples:
     *   'social:cake' -> ['social', 'cake']
     *   'penguin' -> ['', 'penguin']
     *   null -> ['', '']
     *   'a:b:c' -> (throws MdIconInvalidNameError)
     */
    MdIcon.prototype._splitIconName = function (iconName) {
        if (!iconName) {
            return ['', ''];
        }
        var parts = iconName.split(':');
        switch (parts.length) {
            case 1:
                // Use default namespace.
                return ['', parts[0]];
            case 2:
                return parts;
            default:
                throw new MdIconInvalidNameError(iconName);
        }
    };
    /** TODO: internal */
    MdIcon.prototype.ngOnChanges = function (changes) {
        var _this = this;
        var changedInputs = Object.keys(changes);
        // Only update the inline SVG icon if the inputs changed, to avoid unnecessary DOM operations.
        if (changedInputs.indexOf('svgIcon') != -1 || changedInputs.indexOf('svgSrc') != -1) {
            if (this.svgIcon) {
                var _a = this._splitIconName(this.svgIcon), namespace = _a[0], iconName = _a[1];
                this._mdIconRegistry.getNamedSvgIcon(iconName, namespace).first().subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
            }
            else if (this.svgSrc) {
                this._mdIconRegistry.getSvgIconFromUrl(this.svgSrc).first().subscribe(function (svg) { return _this._setSvgElement(svg); }, function (err) { return console.log("Error retrieving icon: " + err); });
            }
        }
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
        this._updateAriaLabel();
    };
    /** TODO: internal */
    MdIcon.prototype.ngOnInit = function () {
        // Update font classes because ngOnChanges won't be called if none of the inputs are present,
        // e.g. <md-icon>arrow</md-icon>. In this case we need to add a CSS class for the default font.
        if (this._usingFontIcon()) {
            this._updateFontIconClasses();
        }
    };
    /** TODO: internal */
    MdIcon.prototype.ngAfterViewChecked = function () {
        // Update aria label here because it may depend on the projected text content.
        // (e.g. <md-icon>home</md-icon> should use 'home').
        this._updateAriaLabel();
    };
    MdIcon.prototype._updateAriaLabel = function () {
        var ariaLabel = this._getAriaLabel();
        if (ariaLabel) {
            this._renderer.setElementAttribute(this._elementRef.nativeElement, 'aria-label', ariaLabel);
        }
    };
    MdIcon.prototype._getAriaLabel = function () {
        // If the parent provided an aria-label attribute value, use it as-is. Otherwise look for a
        // reasonable value from the alt attribute, font icon name, SVG icon name, or (for ligatures)
        // the text content of the directive.
        var label = this.hostAriaLabel ||
            this.alt ||
            this.fontIcon ||
            this._splitIconName(this.svgIcon)[1];
        if (label) {
            return label;
        }
        // The "content" of an SVG icon is not a useful label.
        if (this._usingFontIcon()) {
            var text = this._elementRef.nativeElement.textContent;
            if (text) {
                return text;
            }
        }
        // TODO: Warn here in dev mode.
        return null;
    };
    MdIcon.prototype._usingFontIcon = function () {
        return !(this.svgIcon || this.svgSrc);
    };
    MdIcon.prototype._setSvgElement = function (svg) {
        var layoutElement = this._elementRef.nativeElement;
        // Remove existing child nodes and add the new SVG element.
        // We would use renderer.detachView(Array.from(layoutElement.childNodes)) here,
        // but it fails in IE11: https://github.com/angular/angular/issues/6327
        layoutElement.innerHTML = '';
        this._renderer.projectNodes(layoutElement, [svg]);
    };
    MdIcon.prototype._updateFontIconClasses = function () {
        if (!this._usingFontIcon()) {
            return;
        }
        var elem = this._elementRef.nativeElement;
        var fontSetClass = this.fontSet ?
            this._mdIconRegistry.classNameForFontAlias(this.fontSet) :
            this._mdIconRegistry.getDefaultFontSetClass();
        if (fontSetClass != this._previousFontSetClass) {
            if (this._previousFontSetClass) {
                this._renderer.setElementClass(elem, this._previousFontSetClass, false);
            }
            if (fontSetClass) {
                this._renderer.setElementClass(elem, fontSetClass, true);
            }
            this._previousFontSetClass = fontSetClass;
        }
        if (this.fontIcon != this._previousFontIconClass) {
            if (this._previousFontIconClass) {
                this._renderer.setElementClass(elem, this._previousFontIconClass, false);
            }
            if (this.fontIcon) {
                this._renderer.setElementClass(elem, this.fontIcon, true);
            }
            this._previousFontIconClass = this.fontIcon;
        }
    };
    return MdIcon;
}());
__decorate$36([
    _angular_core.Input(),
    __metadata$26("design:type", String)
], exports.MdIcon.prototype, "svgSrc", void 0);
__decorate$36([
    _angular_core.Input(),
    __metadata$26("design:type", String)
], exports.MdIcon.prototype, "svgIcon", void 0);
__decorate$36([
    _angular_core.Input(),
    __metadata$26("design:type", String)
], exports.MdIcon.prototype, "fontSet", void 0);
__decorate$36([
    _angular_core.Input(),
    __metadata$26("design:type", String)
], exports.MdIcon.prototype, "fontIcon", void 0);
__decorate$36([
    _angular_core.Input(),
    __metadata$26("design:type", String)
], exports.MdIcon.prototype, "alt", void 0);
__decorate$36([
    _angular_core.Input('aria-label'),
    __metadata$26("design:type", String)
], exports.MdIcon.prototype, "hostAriaLabel", void 0);
__decorate$36([
    _angular_core.Input(),
    __metadata$26("design:type", String),
    __metadata$26("design:paramtypes", [String])
], exports.MdIcon.prototype, "color", null);
exports.MdIcon = __decorate$36([
    _angular_core.Component({
        template: '<ng-content></ng-content>',
        selector: 'md-icon, mat-icon',
        styles: [require('./icon.css').toString()],
        host: {
            'role': 'img',
        },
        encapsulation: _angular_core.ViewEncapsulation.None,
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    }),
    __metadata$26("design:paramtypes", [_angular_core.ElementRef,
        _angular_core.Renderer,
        exports.MdIconRegistry])
], exports.MdIcon);
exports.MdIconModule = MdIconModule_1 = (function () {
    function MdIconModule() {
    }
    MdIconModule.forRoot = function () {
        return {
            ngModule: MdIconModule_1,
            providers: [exports.MdIconRegistry],
        };
    };
    return MdIconModule;
}());
exports.MdIconModule = MdIconModule_1 = __decorate$36([
    _angular_core.NgModule({
        imports: [_angular_http.HttpModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdIcon, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdIcon],
    })
], exports.MdIconModule);
var MdIconModule_1;

var __extends$11 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$38 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$28 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO(josephperrott): Benchpress tests.
/** A single degree in radians. */
var DEGREE_IN_RADIANS = Math.PI / 180;
/** Duration of the indeterminate animation. */
var DURATION_INDETERMINATE = 667;
/** Duration of the indeterminate animation. */
var DURATION_DETERMINATE = 225;
/** Start animation value of the indeterminate animation */
var startIndeterminate = 3;
/** End animation value of the indeterminate animation */
var endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
var MAX_ANGLE = 359.99 / 100;
exports.MdProgressCircle = (function () {
    function MdProgressCircle(_changeDetectorRef, _ngZone, _elementRef) {
        this._changeDetectorRef = _changeDetectorRef;
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        /** The id of the last requested animation. */
        this._lastAnimationId = 0;
        this._mode = 'determinate';
    }
    Object.defineProperty(MdProgressCircle.prototype, "_ariaValueMin", {
        /**
         * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
         * because voiceover does not report the progress indicator as indeterminate if the aria min
         * and/or max value are number values.
         */
        get: function () {
            return this.mode == 'determinate' ? 0 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressCircle.prototype, "_ariaValueMax", {
        get: function () {
            return this.mode == 'determinate' ? 100 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressCircle.prototype, "interdeterminateInterval", {
        /** TODO: internal */
        get: function () {
            return this._interdeterminateInterval;
        },
        /** TODO: internal */
        set: function (interval) {
            clearInterval(this._interdeterminateInterval);
            this._interdeterminateInterval = interval;
        },
        enumerable: true,
        configurable: true
    });
    /** Clean up any animations that were running. */
    MdProgressCircle.prototype.ngOnDestroy = function () {
        this._cleanupIndeterminateAnimation();
    };
    Object.defineProperty(MdProgressCircle.prototype, "value", {
        get: function () {
            if (this.mode == 'determinate') {
                return this._value;
            }
        },
        set: function (v) {
            if (v != null && this.mode == 'determinate') {
                var newValue = clamp(v);
                this._animateCircle((this.value || 0), newValue, linearEase, DURATION_DETERMINATE, 0);
                this._value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressCircle.prototype, "mode", {
        /**
         * Mode of the progress circle
         *
         * Input must be one of the values from ProgressMode, defaults to 'determinate'.
         * mode is bound to the host as the attribute host.
         */
        get: function () {
            return this._mode;
        },
        set: function (m) {
            if (m == 'indeterminate') {
                this._startIndeterminateAnimation();
            }
            else {
                this._cleanupIndeterminateAnimation();
            }
            this._mode = m;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Animates the circle from one percentage value to another.
     *
     * @param animateFrom The percentage of the circle filled starting the animation.
     * @param animateTo The percentage of the circle filled ending the animation.
     * @param ease The easing function to manage the pace of change in the animation.
     * @param duration The length of time to show the animation, in milliseconds.
     * @param rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     */
    MdProgressCircle.prototype._animateCircle = function (animateFrom, animateTo, ease, duration, rotation) {
        var _this = this;
        var id = ++this._lastAnimationId;
        var startTime = Date.now();
        var changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            var animation_1 = function () {
                var elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                _this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === _this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation_1);
                }
            };
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation_1);
        }
    };
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     */
    MdProgressCircle.prototype._startIndeterminateAnimation = function () {
        var _this = this;
        var rotationStartPoint = 0;
        var start = startIndeterminate;
        var end = endIndeterminate;
        var duration = DURATION_INDETERMINATE;
        var animate = function () {
            _this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            var temp = start;
            start = -end;
            end = -temp;
        };
        if (!this.interdeterminateInterval) {
            this._ngZone.runOutsideAngular(function () {
                _this.interdeterminateInterval = setInterval(animate, duration + 50, 0, false);
                animate();
            });
        }
    };
    /**
     * Removes interval, ending the animation.
     */
    MdProgressCircle.prototype._cleanupIndeterminateAnimation = function () {
        this.interdeterminateInterval = null;
    };
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     */
    MdProgressCircle.prototype._renderArc = function (currentValue, rotation) {
        // Caches the path reference so it doesn't have to be looked up every time.
        var path = this._path = this._path || this._elementRef.nativeElement.querySelector('path');
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    };
    return MdProgressCircle;
}());
__decorate$38([
    _angular_core.Input(),
    _angular_core.HostBinding('attr.aria-valuenow'),
    __metadata$28("design:type", Object),
    __metadata$28("design:paramtypes", [Number])
], exports.MdProgressCircle.prototype, "value", null);
__decorate$38([
    _angular_core.HostBinding('attr.mode'),
    _angular_core.Input(),
    __metadata$28("design:type", Object),
    __metadata$28("design:paramtypes", [String])
], exports.MdProgressCircle.prototype, "mode", null);
exports.MdProgressCircle = __decorate$38([
    _angular_core.Component({
        selector: 'md-progress-circle, mat-progress-circle',
        host: {
            'role': 'progressbar',
            '[attr.aria-valuemin]': '_ariaValueMin',
            '[attr.aria-valuemax]': '_ariaValueMax',
        },
        template: require('./progress-circle.html'),
        styles: [require('./progress-circle.css').toString()],
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    }),
    __metadata$28("design:paramtypes", [_angular_core.ChangeDetectorRef,
        _angular_core.NgZone,
        _angular_core.ElementRef])
], exports.MdProgressCircle);
exports.MdSpinner = (function (_super) {
    __extends$11(MdSpinner, _super);
    function MdSpinner(changeDetectorRef, elementRef, ngZone) {
        var _this = _super.call(this, changeDetectorRef, ngZone, elementRef) || this;
        _this.mode = 'indeterminate';
        return _this;
    }
    MdSpinner.prototype.ngOnDestroy = function () {
        // The `ngOnDestroy` from `MdProgressCircle` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        _super.prototype.ngOnDestroy.call(this);
    };
    return MdSpinner;
}(exports.MdProgressCircle));
exports.MdSpinner = __decorate$38([
    _angular_core.Component({
        selector: 'md-spinner, mat-spinner',
        host: {
            'role': 'progressbar',
            'mode': 'indeterminate',
        },
        template: require('./progress-circle.html'),
        styles: [require('./progress-circle.css').toString()],
    }),
    __metadata$28("design:paramtypes", [_angular_core.ChangeDetectorRef, _angular_core.ElementRef, _angular_core.NgZone])
], exports.MdSpinner);
/**
 * Module functions.
 */
/** Clamps a value to be between 0 and 100. */
function clamp(v) {
    return Math.max(0, Math.min(100, v));
}
/**
 * Converts Polar coordinates to Cartesian.
 */
function polarToCartesian(radius, pathRadius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    return (radius + (pathRadius * Math.cos(angleInRadians))) +
        ',' + (radius + (pathRadius * Math.sin(angleInRadians)));
}
/**
 * Easing function for linear animation.
 */
function linearEase(currentTime, startValue, changeInValue, duration) {
    return changeInValue * currentTime / duration + startValue;
}
/**
 * Easing function to match material design indeterminate animation.
 */
function materialEase(currentTime, startValue, changeInValue, duration) {
    var time = currentTime / duration;
    var timeCubed = Math.pow(time, 3);
    var timeQuad = Math.pow(time, 4);
    var timeQuint = Math.pow(time, 5);
    return startValue + changeInValue * ((6 * timeQuint) + (-15 * timeQuad) + (10 * timeCubed));
}
/**
 * Determines the path value to define the arc.  Converting percentage values to to polar
 * coordinates on the circle, and then to cartesian coordinates in the viewport.
 *
 * @param currentValue The current percentage value of the progress circle, the percentage of the
 *    circle to fill.
 * @param rotation The starting point of the circle with 0 being the 0 degree point.
 * @return A string for an SVG path representing a circle filled from the starting point to the
 *    percentage value provided.
 */
function getSvgArc(currentValue, rotation) {
    var startPoint = rotation || 0;
    var radius = 50;
    var pathRadius = 40;
    var startAngle = startPoint * MAX_ANGLE;
    var endAngle = currentValue * MAX_ANGLE;
    var start = polarToCartesian(radius, pathRadius, startAngle);
    var end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    var arcSweep = endAngle < 0 ? 0 : 1;
    var largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return "M" + start + "A" + pathRadius + "," + pathRadius + " 0 " + largeArcFlag + "," + arcSweep + " " + end;
}
exports.MdProgressCircleModule = MdProgressCircleModule_1 = (function () {
    function MdProgressCircleModule() {
    }
    MdProgressCircleModule.forRoot = function () {
        return {
            ngModule: MdProgressCircleModule_1,
            providers: []
        };
    };
    return MdProgressCircleModule;
}());
exports.MdProgressCircleModule = MdProgressCircleModule_1 = __decorate$38([
    _angular_core.NgModule({
        imports: [exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdProgressCircle, exports.MdSpinner, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdProgressCircle, exports.MdSpinner],
    })
], exports.MdProgressCircleModule);
var MdProgressCircleModule_1;

var __decorate$39 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$29 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdProgressBar = (function () {
    function MdProgressBar() {
        /** Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow. */
        this._value = 0;
        /** Buffer value of the progress bar. Defaults to zero. */
        this._bufferValue = 0;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
    }
    Object.defineProperty(MdProgressBar.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (v) {
            this._value = clamp$1(v || 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressBar.prototype, "bufferValue", {
        get: function () {
            return this._bufferValue;
        },
        set: function (v) {
            this._bufferValue = clamp$1(v || 0);
        },
        enumerable: true,
        configurable: true
    });
    /** Gets the current transform value for the progress bar's primary indicator. */
    MdProgressBar.prototype._primaryTransform = function () {
        var scale = this.value / 100;
        return { transform: "scaleX(" + scale + ")" };
    };
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     */
    MdProgressBar.prototype._bufferTransform = function () {
        if (this.mode == 'buffer') {
            var scale = this.bufferValue / 100;
            return { transform: "scaleX(" + scale + ")" };
        }
    };
    return MdProgressBar;
}());
__decorate$39([
    _angular_core.Input(),
    _angular_core.HostBinding('attr.aria-valuenow'),
    __metadata$29("design:type", Object),
    __metadata$29("design:paramtypes", [Number])
], exports.MdProgressBar.prototype, "value", null);
__decorate$39([
    _angular_core.Input(),
    __metadata$29("design:type", Object),
    __metadata$29("design:paramtypes", [Number])
], exports.MdProgressBar.prototype, "bufferValue", null);
__decorate$39([
    _angular_core.Input(),
    _angular_core.HostBinding('attr.mode'),
    __metadata$29("design:type", String)
], exports.MdProgressBar.prototype, "mode", void 0);
exports.MdProgressBar = __decorate$39([
    _angular_core.Component({
        selector: 'md-progress-bar, mat-progress-bar',
        host: {
            'role': 'progressbar',
            'aria-valuemin': '0',
            'aria-valuemax': '100',
        },
        template: require('./progress-bar.html'),
        styles: [require('./progress-bar.css').toString()],
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
    })
], exports.MdProgressBar);
/** Clamps a value to be between two numbers, by default 0 and 100. */
function clamp$1(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}
exports.MdProgressBarModule = MdProgressBarModule_1 = (function () {
    function MdProgressBarModule() {
    }
    MdProgressBarModule.forRoot = function () {
        return {
            ngModule: MdProgressBarModule_1,
            providers: []
        };
    };
    return MdProgressBarModule;
}());
exports.MdProgressBarModule = MdProgressBarModule_1 = __decorate$39([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdProgressBar, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdProgressBar],
    })
], exports.MdProgressBarModule);
var MdProgressBarModule_1;

var __decorate$41 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$31 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Directive to automatically resize a textarea to fit its content.
 */
var MdTextareaAutosize = (function () {
    function MdTextareaAutosize(_elementRef) {
        this._elementRef = _elementRef;
    }
    Object.defineProperty(MdTextareaAutosize.prototype, "_minHeight", {
        /** The minimum height of the textarea as determined by minRows. */
        get: function () {
            return this.minRows ? this.minRows * this._cachedLineHeight + "px" : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTextareaAutosize.prototype, "_maxHeight", {
        /** The maximum height of the textarea as determined by maxRows. */
        get: function () {
            return this.maxRows ? this.maxRows * this._cachedLineHeight + "px" : null;
        },
        enumerable: true,
        configurable: true
    });
    MdTextareaAutosize.prototype.ngOnInit = function () {
        this._cacheTextareaLineHeight();
        this.resizeToFitContent();
    };
    /**
     * Cache the hight of a single-row textarea.
     *
     * We need to know how large a single "row" of a textarea is in order to apply minRows and
     * maxRows. For the initial version, we will assume that the height of a single line in the
     * textarea does not ever change.
     */
    MdTextareaAutosize.prototype._cacheTextareaLineHeight = function () {
        var textarea = this._elementRef.nativeElement;
        // Use a clone element because we have to override some styles.
        var textareaClone = textarea.cloneNode(false);
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        textarea.parentNode.appendChild(textareaClone);
        this._cachedLineHeight = textareaClone.offsetHeight;
        textarea.parentNode.removeChild(textareaClone);
    };
    /** Resize the textarea to fit its content. */
    MdTextareaAutosize.prototype.resizeToFitContent = function () {
        var textarea = this._elementRef.nativeElement;
        // Reset the textarea height to auto in order to shrink back to its default size.
        textarea.style.height = 'auto';
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = textarea.scrollHeight + "px";
    };
    return MdTextareaAutosize;
}());
__decorate$41([
    _angular_core.Input(),
    __metadata$31("design:type", Number)
], MdTextareaAutosize.prototype, "minRows", void 0);
__decorate$41([
    _angular_core.Input(),
    __metadata$31("design:type", Number)
], MdTextareaAutosize.prototype, "maxRows", void 0);
MdTextareaAutosize = __decorate$41([
    _angular_core.Directive({
        selector: 'textarea[md-autosize], textarea[mat-autosize]',
        host: {
            '(input)': 'resizeToFitContent()',
            '[style.min-height]': '_minHeight',
            '[style.max-height]': '_maxHeight',
        },
    }),
    __metadata$31("design:paramtypes", [_angular_core.ElementRef])
], MdTextareaAutosize);

var __extends$12 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$40 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$30 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var noop = function () { };
var MD_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms.NG_VALUE_ACCESSOR,
    useExisting: _angular_core.forwardRef(function () { return exports.MdInput; }),
    multi: true
};
// Invalid input type. Using one of these will throw an MdInputUnsupportedTypeError.
var MD_INPUT_INVALID_INPUT_TYPE = [
    'file',
    'radio',
    'checkbox',
];
var nextUniqueId$1 = 0;
var MdInputPlaceholderConflictError = (function (_super) {
    __extends$12(MdInputPlaceholderConflictError, _super);
    function MdInputPlaceholderConflictError() {
        return _super.call(this, 'Placeholder attribute and child element were both specified.') || this;
    }
    return MdInputPlaceholderConflictError;
}(MdError));
var MdInputUnsupportedTypeError = (function (_super) {
    __extends$12(MdInputUnsupportedTypeError, _super);
    function MdInputUnsupportedTypeError(type) {
        return _super.call(this, "Input type \"" + type + "\" isn't supported by md-input.") || this;
    }
    return MdInputUnsupportedTypeError;
}(MdError));
var MdInputDuplicatedHintError = (function (_super) {
    __extends$12(MdInputDuplicatedHintError, _super);
    function MdInputDuplicatedHintError(align) {
        return _super.call(this, "A hint was already declared for 'align=\"" + align + "\"'.") || this;
    }
    return MdInputDuplicatedHintError;
}(MdError));
exports.MdPlaceholder = (function () {
    function MdPlaceholder() {
    }
    return MdPlaceholder;
}());
exports.MdPlaceholder = __decorate$40([
    _angular_core.Directive({
        selector: 'md-placeholder'
    })
], exports.MdPlaceholder);
exports.MdHint = (function () {
    function MdHint() {
        // Whether to align the hint label at the start or end of the line.
        this.align = 'start';
    }
    return MdHint;
}());
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdHint.prototype, "align", void 0);
exports.MdHint = __decorate$40([
    _angular_core.Directive({
        selector: 'md-hint',
        host: {
            '[class.md-right]': 'align == "end"',
            '[class.md-hint]': 'true'
        }
    })
], exports.MdHint);
exports.MdInput = (function () {
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
        this.id = "md-input-" + nextUniqueId$1++;
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
        this._blurEmitter = new _angular_core.EventEmitter();
        this._focusEmitter = new _angular_core.EventEmitter();
        // Set the element type depending on normalized selector used(md-input / md-textarea)
        this._elementType = elementRef.nativeElement.nodeName.toLowerCase() === 'md-input' ?
            'input' :
            'textarea';
    }
    Object.defineProperty(MdInput.prototype, "ariaDisabled", {
        get: function () { return this._ariaDisabled; },
        set: function (value) { this._ariaDisabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "ariaRequired", {
        get: function () { return this._ariaRequired; },
        set: function (value) { this._ariaRequired = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "ariaInvalid", {
        get: function () { return this._ariaInvalid; },
        set: function (value) { this._ariaInvalid = coerceBooleanProperty(value); },
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
        set: function (value) { this._floatingPlaceholder = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "autofocus", {
        get: function () { return this._autofocus; },
        set: function (value) { this._autofocus = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "readonly", {
        get: function () { return this._readonly; },
        set: function (value) { this._readonly = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "required", {
        get: function () { return this._required; },
        set: function (value) { this._required = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdInput.prototype, "spellcheck", {
        get: function () { return this._spellcheck; },
        set: function (value) { this._spellcheck = coerceBooleanProperty(value); },
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
__decorate$40([
    _angular_core.Input('aria-label'),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "ariaLabel", void 0);
__decorate$40([
    _angular_core.Input('aria-labelledby'),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "ariaLabelledBy", void 0);
__decorate$40([
    _angular_core.Input('aria-disabled'),
    __metadata$30("design:type", Boolean),
    __metadata$30("design:paramtypes", [Object])
], exports.MdInput.prototype, "ariaDisabled", null);
__decorate$40([
    _angular_core.Input('aria-required'),
    __metadata$30("design:type", Boolean),
    __metadata$30("design:paramtypes", [Object])
], exports.MdInput.prototype, "ariaRequired", null);
__decorate$40([
    _angular_core.Input('aria-invalid'),
    __metadata$30("design:type", Boolean),
    __metadata$30("design:paramtypes", [Object])
], exports.MdInput.prototype, "ariaInvalid", null);
__decorate$40([
    _angular_core.ContentChild(exports.MdPlaceholder),
    __metadata$30("design:type", exports.MdPlaceholder)
], exports.MdInput.prototype, "_placeholderChild", void 0);
__decorate$40([
    _angular_core.ContentChildren(exports.MdHint),
    __metadata$30("design:type", _angular_core.QueryList)
], exports.MdInput.prototype, "_hintChildren", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "align", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "dividerColor", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "hintLabel", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "autocomplete", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "autocorrect", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "autocapitalize", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "id", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "list", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Object)
], exports.MdInput.prototype, "max", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Number)
], exports.MdInput.prototype, "maxlength", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Object)
], exports.MdInput.prototype, "min", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Number)
], exports.MdInput.prototype, "minlength", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "placeholder", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Number)
], exports.MdInput.prototype, "step", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Number)
], exports.MdInput.prototype, "tabindex", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "type", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "name", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Number)
], exports.MdInput.prototype, "rows", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Number)
], exports.MdInput.prototype, "cols", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", String)
], exports.MdInput.prototype, "wrap", void 0);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Boolean),
    __metadata$30("design:paramtypes", [Object])
], exports.MdInput.prototype, "floatingPlaceholder", null);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Boolean),
    __metadata$30("design:paramtypes", [Object])
], exports.MdInput.prototype, "autofocus", null);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Boolean),
    __metadata$30("design:paramtypes", [Object])
], exports.MdInput.prototype, "disabled", null);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Boolean),
    __metadata$30("design:paramtypes", [Object])
], exports.MdInput.prototype, "readonly", null);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Boolean),
    __metadata$30("design:paramtypes", [Object])
], exports.MdInput.prototype, "required", null);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Boolean),
    __metadata$30("design:paramtypes", [Object])
], exports.MdInput.prototype, "spellcheck", null);
__decorate$40([
    _angular_core.Output('blur'),
    __metadata$30("design:type", rxjs_Observable.Observable),
    __metadata$30("design:paramtypes", [])
], exports.MdInput.prototype, "onBlur", null);
__decorate$40([
    _angular_core.Output('focus'),
    __metadata$30("design:type", rxjs_Observable.Observable),
    __metadata$30("design:paramtypes", [])
], exports.MdInput.prototype, "onFocus", null);
__decorate$40([
    _angular_core.Input(),
    __metadata$30("design:type", Object),
    __metadata$30("design:paramtypes", [Object])
], exports.MdInput.prototype, "value", null);
__decorate$40([
    _angular_core.HostBinding('attr.align'),
    __metadata$30("design:type", Object),
    __metadata$30("design:paramtypes", [])
], exports.MdInput.prototype, "_align", null);
__decorate$40([
    _angular_core.ViewChild('input'),
    __metadata$30("design:type", _angular_core.ElementRef)
], exports.MdInput.prototype, "_inputElement", void 0);
exports.MdInput = __decorate$40([
    _angular_core.Component({
        selector: 'md-input, md-textarea',
        template: require('./input.html'),
        styles: [require('./input.css').toString()],
        providers: [MD_INPUT_CONTROL_VALUE_ACCESSOR],
        host: { '(click)': 'focus()' },
        encapsulation: _angular_core.ViewEncapsulation.None,
    }),
    __metadata$30("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], exports.MdInput);
exports.MdInputModule = MdInputModule_1 = (function () {
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
exports.MdInputModule = MdInputModule_1 = __decorate$40([
    _angular_core.NgModule({
        declarations: [exports.MdPlaceholder, exports.MdInput, exports.MdHint, MdTextareaAutosize],
        imports: [_angular_common.CommonModule, _angular_forms.FormsModule],
        exports: [exports.MdPlaceholder, exports.MdInput, exports.MdHint, MdTextareaAutosize],
    })
], exports.MdInputModule);
var MdInputModule_1;

/**
 * Configuration used when opening a snack-bar.
 */
var MdSnackBarConfig = (function () {
    function MdSnackBarConfig() {
        /** The politeness level for the MdAriaLiveAnnouncer announcement. */
        this.politeness = 'assertive';
        /** Message to be announced by the MdAriaLiveAnnouncer */
        this.announcementMessage = '';
        /** The view container to place the overlay for the snack bar into. */
        this.viewContainerRef = null;
        /** The length of time in milliseconds to wait before automatically dismissing the snack bar. */
        this.duration = 0;
    }
    return MdSnackBarConfig;
}());

// TODO(josephperrott): Implement onAction observable.
/**
 * Reference to a snack bar dispatched from the snack bar service.
 */
var MdSnackBarRef = (function () {
    function MdSnackBarRef(instance, containerInstance, _overlayRef) {
        var _this = this;
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the snack bar has closed. */
        this._afterClosed = new rxjs_Subject.Subject();
        /** Subject for notifying the user that the snack bar action was called. */
        this._onAction = new rxjs_Subject.Subject();
        // Sets the readonly instance of the snack bar content component.
        this.instance = instance;
        this.containerInstance = containerInstance;
        // Dismiss snackbar on action.
        this.onAction().subscribe(function () { return _this.dismiss(); });
    }
    /** Dismisses the snack bar. */
    MdSnackBarRef.prototype.dismiss = function () {
        var _this = this;
        if (!this._afterClosed.closed) {
            this.containerInstance.exit().subscribe(function () {
                _this._overlayRef.dispose();
                _this._afterClosed.next();
                _this._afterClosed.complete();
            });
        }
    };
    /** Marks the snackbar action clicked. */
    MdSnackBarRef.prototype._action = function () {
        if (!this._onAction.closed) {
            this._onAction.next();
            this._onAction.complete();
        }
    };
    /** Marks the snackbar as opened */
    MdSnackBarRef.prototype._open = function () {
        if (!this._afterOpened.closed) {
            this._afterOpened.next();
            this._afterOpened.complete();
        }
    };
    /** Gets an observable that is notified when the snack bar is finished closing. */
    MdSnackBarRef.prototype.afterDismissed = function () {
        return this._afterClosed.asObservable();
    };
    /** Gets an observable that is notified when the snack bar has opened and appeared. */
    MdSnackBarRef.prototype.afterOpened = function () {
        return this.containerInstance._onEnter();
    };
    /** Gets an observable that is notified when the snack bar action is called. */
    MdSnackBarRef.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return MdSnackBarRef;
}());

var __extends$14 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MdSnackBarContentAlreadyAttached = (function (_super) {
    __extends$14(MdSnackBarContentAlreadyAttached, _super);
    function MdSnackBarContentAlreadyAttached() {
        return _super.call(this, 'Attempting to attach snack bar content after content is already attached') || this;
    }
    return MdSnackBarContentAlreadyAttached;
}(MdError));

var __extends$13 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$43 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$33 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// TODO(jelbourn): we can't use constants from animation.ts here because you can't use
// a text interpolation in anything that is analyzed statically with ngc (for AoT compile).
var SHOW_ANIMATION = '225ms cubic-bezier(0.4,0.0,1,1)';
var HIDE_ANIMATION = '195ms cubic-bezier(0.0,0.0,0.2,1)';
exports.MdSnackBarContainer = (function (_super) {
    __extends$13(MdSnackBarContainer, _super);
    function MdSnackBarContainer(_ngZone) {
        var _this = _super.call(this) || this;
        _this._ngZone = _ngZone;
        /** Subject for notifying that the snack bar has exited from view. */
        _this.onExit = new rxjs_Subject.Subject();
        /** Subject for notifying that the snack bar has finished entering the view. */
        _this.onEnter = new rxjs_Subject.Subject();
        /** The state of the snack bar animations. */
        _this.animationState = 'initial';
        return _this;
    }
    /** Attach a component portal as content to this snack bar container. */
    MdSnackBarContainer.prototype.attachComponentPortal = function (portal) {
        if (this._portalHost.hasAttached()) {
            throw new MdSnackBarContentAlreadyAttached();
        }
        return this._portalHost.attachComponentPortal(portal);
    };
    /** Attach a template portal as content to this snack bar container. */
    MdSnackBarContainer.prototype.attachTemplatePortal = function (portal) {
        throw Error('Not yet implemented');
    };
    /** Begin animation of the snack bar exiting from view. */
    MdSnackBarContainer.prototype.exit = function () {
        this.animationState = 'complete';
        return this.onExit.asObservable();
    };
    /** Handle end of animations, updating the state of the snackbar. */
    MdSnackBarContainer.prototype.onAnimationEnd = function (event) {
        var _this = this;
        if (event.toState === 'void' || event.toState === 'complete') {
            this._ngZone.run(function () {
                _this.onExit.next();
                _this.onExit.complete();
            });
        }
        if (event.toState === 'visible') {
            this._ngZone.run(function () {
                _this.onEnter.next();
                _this.onEnter.complete();
            });
        }
    };
    /** Begin animation of snack bar entrance into view. */
    MdSnackBarContainer.prototype.enter = function () {
        this.animationState = 'visible';
    };
    /** Returns an observable resolving when the enter animation completes.  */
    MdSnackBarContainer.prototype._onEnter = function () {
        return this.onEnter.asObservable();
    };
    return MdSnackBarContainer;
}(BasePortalHost));
__decorate$43([
    _angular_core.ViewChild(exports.PortalHostDirective),
    __metadata$33("design:type", exports.PortalHostDirective)
], exports.MdSnackBarContainer.prototype, "_portalHost", void 0);
exports.MdSnackBarContainer = __decorate$43([
    _angular_core.Component({
        selector: 'snack-bar-container',
        template: require('./snack-bar-container.html'),
        styles: [require('./snack-bar-container.css').toString()],
        host: {
            'role': 'alert',
            '[@state]': 'animationState',
            '(@state.done)': 'onAnimationEnd($event)'
        },
        animations: [
            _angular_core.trigger('state', [
                _angular_core.state('initial', _angular_core.style({ transform: 'translateY(100%)' })),
                _angular_core.state('visible', _angular_core.style({ transform: 'translateY(0%)' })),
                _angular_core.state('complete', _angular_core.style({ transform: 'translateY(100%)' })),
                _angular_core.transition('visible => complete', _angular_core.animate(HIDE_ANIMATION)),
                _angular_core.transition('initial => visible, void => visible', _angular_core.animate(SHOW_ANIMATION)),
            ])
        ],
    }),
    __metadata$33("design:paramtypes", [_angular_core.NgZone])
], exports.MdSnackBarContainer);

var __decorate$44 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/**
 * A component used to open as the default snack bar, matching material spec.
 * This should only be used internally by the snack bar service.
 */
var SimpleSnackBar = (function () {
    function SimpleSnackBar() {
    }
    /** Dismisses the snack bar. */
    SimpleSnackBar.prototype.dismiss = function () {
        this.snackBarRef._action();
    };
    Object.defineProperty(SimpleSnackBar.prototype, "hasAction", {
        /** If the action button should be shown. */
        get: function () { return !!this.action; },
        enumerable: true,
        configurable: true
    });
    return SimpleSnackBar;
}());
SimpleSnackBar = __decorate$44([
    _angular_core.Component({
        selector: 'simple-snack-bar',
        template: require('./simple-snack-bar.html'),
        styles: [require('./simple-snack-bar.css').toString()],
    })
], SimpleSnackBar);

/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */
/**
 * Extends an object with the *enumerable* and *own* properties of one or more source objects,
 * similar to Object.assign.
 *
 * @param dest The object which will have properties copied to it.
 * @param sources The source objects from which properties will be copied.
 */ function extendObject(dest) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    if (dest == null) {
        throw TypeError('Cannot convert undefined or null to object');
    }
    for (var _a = 0, sources_1 = sources; _a < sources_1.length; _a++) {
        var source = sources_1[_a];
        if (source != null) {
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    dest[key] = source[key];
                }
            }
        }
    }
    return dest;
}

var __decorate$42 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$32 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdSnackBar = (function () {
    function MdSnackBar(_overlay, _live) {
        this._overlay = _overlay;
        this._live = _live;
    }
    /**
     * Creates and dispatches a snack bar with a custom component for the content, removing any
     * currently opened snack bars.
     */
    MdSnackBar.prototype.openFromComponent = function (component, config) {
        var _this = this;
        config = _applyConfigDefaults(config);
        var overlayRef = this._createOverlay();
        var snackBarContainer = this._attachSnackBarContainer(overlayRef, config);
        var snackBarRef = this._attachSnackbarContent(component, snackBarContainer, overlayRef);
        // When the snackbar is dismissed, clear the reference to it.
        snackBarRef.afterDismissed().subscribe(function () {
            // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
            if (_this._snackBarRef == snackBarRef) {
                _this._snackBarRef = null;
            }
        });
        // If a snack bar is already in view, dismiss it and enter the new snack bar after exit
        // animation is complete.
        if (this._snackBarRef) {
            this._snackBarRef.afterDismissed().subscribe(function () {
                snackBarRef.containerInstance.enter();
            });
            this._snackBarRef.dismiss();
            // If no snack bar is in view, enter the new snack bar.
        }
        else {
            snackBarRef.containerInstance.enter();
        }
        // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.
        if (config.duration > 0) {
            snackBarRef.afterOpened().subscribe(function () {
                setTimeout(function () { return snackBarRef.dismiss(); }, config.duration);
            });
        }
        this._live.announce(config.announcementMessage, config.politeness);
        this._snackBarRef = snackBarRef;
        return this._snackBarRef;
    };
    /**
     * Opens a snackbar with a message and an optional action.
     * @param message The message to show in the snackbar.
     * @param action The label for the snackbar action.
     * @param config Additional configuration options for the snackbar.
     * @returns {MdSnackBarRef<SimpleSnackBar>}
     */
    MdSnackBar.prototype.open = function (message, action, config) {
        if (action === void 0) { action = ''; }
        if (config === void 0) { config = {}; }
        config.announcementMessage = message;
        var simpleSnackBarRef = this.openFromComponent(SimpleSnackBar, config);
        simpleSnackBarRef.instance.snackBarRef = simpleSnackBarRef;
        simpleSnackBarRef.instance.message = message;
        simpleSnackBarRef.instance.action = action;
        return simpleSnackBarRef;
    };
    /**
     * Attaches the snack bar container component to the overlay.
     */
    MdSnackBar.prototype._attachSnackBarContainer = function (overlayRef, config) {
        var containerPortal = new ComponentPortal(exports.MdSnackBarContainer, config.viewContainerRef);
        var containerRef = overlayRef.attach(containerPortal);
        containerRef.instance.snackBarConfig = config;
        return containerRef.instance;
    };
    /**
     * Places a new component as the content of the snack bar container.
     */
    MdSnackBar.prototype._attachSnackbarContent = function (component, container, overlayRef) {
        var portal = new ComponentPortal(component);
        var contentRef = container.attachComponentPortal(portal);
        return new MdSnackBarRef(contentRef.instance, container, overlayRef);
    };
    /**
     * Creates a new overlay and places it in the correct location.
     */
    MdSnackBar.prototype._createOverlay = function () {
        var state = new OverlayState();
        state.positionStrategy = this._overlay.position().global()
            .centerHorizontally()
            .bottom('0');
        return this._overlay.create(state);
    };
    return MdSnackBar;
}());
exports.MdSnackBar = __decorate$42([
    _angular_core.Injectable(),
    __metadata$32("design:paramtypes", [exports.Overlay, exports.MdLiveAnnouncer])
], exports.MdSnackBar);
/**
 * Applies default options to the snackbar config.
 * @param config The configuration to which the defaults will be applied.
 * @returns The new configuration object with defaults applied.
 */
function _applyConfigDefaults(config) {
    return extendObject(new MdSnackBarConfig(), config);
}
exports.MdSnackBarModule = MdSnackBarModule_1 = (function () {
    function MdSnackBarModule() {
    }
    MdSnackBarModule.forRoot = function () {
        return {
            ngModule: MdSnackBarModule_1,
            providers: [exports.MdSnackBar, OVERLAY_PROVIDERS, exports.MdLiveAnnouncer]
        };
    };
    return MdSnackBarModule;
}());
exports.MdSnackBarModule = MdSnackBarModule_1 = __decorate$42([
    _angular_core.NgModule({
        imports: [exports.OverlayModule, exports.PortalModule, _angular_common.CommonModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdSnackBarContainer, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdSnackBarContainer, SimpleSnackBar],
        entryComponents: [exports.MdSnackBarContainer, SimpleSnackBar],
    })
], exports.MdSnackBarModule);
var MdSnackBarModule_1;

var __extends$15 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$46 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$35 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Used to flag tab labels for use with the portal directive */
var MdTabLabel = (function (_super) {
    __extends$15(MdTabLabel, _super);
    function MdTabLabel(templateRef, viewContainerRef) {
        return _super.call(this, templateRef, viewContainerRef) || this;
    }
    return MdTabLabel;
}(exports.TemplatePortalDirective));
MdTabLabel = __decorate$46([
    _angular_core.Directive({
        selector: '[md-tab-label], [mat-tab-label]',
    }),
    __metadata$35("design:paramtypes", [_angular_core.TemplateRef, _angular_core.ViewContainerRef])
], MdTabLabel);

var __decorate$47 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$36 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Used in the `md-tab-group` view to display tab labels */
var MdTabLabelWrapper = (function () {
    function MdTabLabelWrapper(elementRef, _renderer) {
        this.elementRef = elementRef;
        this._renderer = _renderer;
        /** Whether the tab label is disabled.  */
        this._disabled = false;
    }
    Object.defineProperty(MdTabLabelWrapper.prototype, "disabled", {
        get: function () { return this._disabled; },
        set: function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    /** Sets focus on the wrapper element */
    MdTabLabelWrapper.prototype.focus = function () {
        this._renderer.invokeElementMethod(this.elementRef.nativeElement, 'focus');
    };
    MdTabLabelWrapper.prototype.getOffsetLeft = function () {
        return this.elementRef.nativeElement.offsetLeft;
    };
    MdTabLabelWrapper.prototype.getOffsetWidth = function () {
        return this.elementRef.nativeElement.offsetWidth;
    };
    return MdTabLabelWrapper;
}());
__decorate$47([
    _angular_core.Input(),
    __metadata$36("design:type", Object),
    __metadata$36("design:paramtypes", [Object])
], MdTabLabelWrapper.prototype, "disabled", null);
MdTabLabelWrapper = __decorate$47([
    _angular_core.Directive({
        selector: '[md-tab-label-wrapper], [mat-tab-label-wrapper]',
        host: {
            '[class.md-tab-disabled]': 'disabled'
        }
    }),
    __metadata$36("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], MdTabLabelWrapper);

var __decorate$49 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$38 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** The ink-bar is used to display and animate the line underneath the current active tab label. */
var MdInkBar = (function () {
    function MdInkBar(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param element
     */
    MdInkBar.prototype.alignToElement = function (element) {
        this.show();
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'left', this._getLeftPosition(element));
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'width', this._getElementWidth(element));
    };
    /** Shows the ink bar. */
    MdInkBar.prototype.show = function () {
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'visibility', 'visible');
    };
    /** Hides the ink bar. */
    MdInkBar.prototype.hide = function () {
        this._renderer.setElementStyle(this._elementRef.nativeElement, 'visibility', 'hidden');
    };
    /**
     * Generates the pixel distance from the left based on the provided element in string format.
     * @param element
     * @returns {string}
     */
    MdInkBar.prototype._getLeftPosition = function (element) {
        return element ? element.offsetLeft + 'px' : '0';
    };
    /**
     * Generates the pixel width from the provided element in string format.
     * @param element
     * @returns {string}
     */
    MdInkBar.prototype._getElementWidth = function (element) {
        return element ? element.offsetWidth + 'px' : '0';
    };
    return MdInkBar;
}());
MdInkBar = __decorate$49([
    _angular_core.Directive({
        selector: 'md-ink-bar, mat-ink-bar',
    }),
    __metadata$38("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
], MdInkBar);

var __extends$16 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$48 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$37 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdTabNavBar = (function () {
    function MdTabNavBar() {
    }
    /** Animates the ink bar to the position of the active link element. */
    MdTabNavBar.prototype.updateActiveLink = function (element) {
        this._inkBar.alignToElement(element);
    };
    return MdTabNavBar;
}());
__decorate$48([
    _angular_core.ViewChild(MdInkBar),
    __metadata$37("design:type", MdInkBar)
], exports.MdTabNavBar.prototype, "_inkBar", void 0);
exports.MdTabNavBar = __decorate$48([
    _angular_core.Component({
        selector: '[md-tab-nav-bar], [mat-tab-nav-bar]',
        template: require('./tab-nav-bar.html'),
        styles: [require('./tab-nav-bar.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
    })
], exports.MdTabNavBar);
exports.MdTabLink = (function () {
    function MdTabLink(_mdTabNavBar, _element) {
        this._mdTabNavBar = _mdTabNavBar;
        this._element = _element;
        this._isActive = false;
    }
    Object.defineProperty(MdTabLink.prototype, "active", {
        get: function () {
            return this._isActive;
        },
        set: function (value) {
            this._isActive = value;
            if (value) {
                this._mdTabNavBar.updateActiveLink(this._element.nativeElement);
            }
        },
        enumerable: true,
        configurable: true
    });
    return MdTabLink;
}());
__decorate$48([
    _angular_core.Input(),
    __metadata$37("design:type", Boolean),
    __metadata$37("design:paramtypes", [Boolean])
], exports.MdTabLink.prototype, "active", null);
exports.MdTabLink = __decorate$48([
    _angular_core.Directive({
        selector: '[md-tab-link], [mat-tab-link]',
    }),
    __metadata$37("design:paramtypes", [exports.MdTabNavBar, _angular_core.ElementRef])
], exports.MdTabLink);
exports.MdTabLinkRipple = (function (_super) {
    __extends$16(MdTabLinkRipple, _super);
    function MdTabLinkRipple(_element, _ngZone, _ruler) {
        var _this = _super.call(this, _element, _ngZone, _ruler) || this;
        _this._element = _element;
        _this._ngZone = _ngZone;
        return _this;
    }
    // In certain cases the parent destroy handler
    // may not get called. See Angular issue #11606.
    MdTabLinkRipple.prototype.ngOnDestroy = function () {
        _super.prototype.ngOnDestroy.call(this);
    };
    return MdTabLinkRipple;
}(exports.MdRipple));
exports.MdTabLinkRipple = __decorate$48([
    _angular_core.Directive({
        selector: '[md-tab-link], [mat-tab-link]',
    }),
    __metadata$37("design:paramtypes", [_angular_core.ElementRef, _angular_core.NgZone, ViewportRuler])
], exports.MdTabLinkRipple);

var __decorate$50 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$39 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
        set: function (value) { this._disabled = coerceBooleanProperty(value); },
        enumerable: true,
        configurable: true
    });
    MdTab.prototype.ngOnInit = function () {
        this._contentPortal = new TemplatePortal(this._content, this._viewContainerRef);
    };
    return MdTab;
}());
__decorate$50([
    _angular_core.ContentChild(MdTabLabel),
    __metadata$39("design:type", MdTabLabel)
], MdTab.prototype, "templateLabel", void 0);
__decorate$50([
    _angular_core.ViewChild(_angular_core.TemplateRef),
    __metadata$39("design:type", _angular_core.TemplateRef)
], MdTab.prototype, "_content", void 0);
__decorate$50([
    _angular_core.Input('label'),
    __metadata$39("design:type", String)
], MdTab.prototype, "textLabel", void 0);
__decorate$50([
    _angular_core.Input(),
    __metadata$39("design:type", Boolean),
    __metadata$39("design:paramtypes", [Boolean])
], MdTab.prototype, "disabled", null);
MdTab = __decorate$50([
    _angular_core.Component({
        selector: 'md-tab',
        template: require('./tab.html'),
    }),
    __metadata$39("design:paramtypes", [_angular_core.ViewContainerRef])
], MdTab);

var __decorate$51 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$40 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$9 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MdTabBody = (function () {
    function MdTabBody(_elementRef, _dir) {
        this._elementRef = _elementRef;
        this._dir = _dir;
        /** Event emitted when the tab begins to animate towards the center as the active tab. */
        this.onCentering = new _angular_core.EventEmitter();
        /** Event emitted when the tab completes its animation towards the center. */
        this.onCentered = new _angular_core.EventEmitter(true);
    }
    Object.defineProperty(MdTabBody.prototype, "position", {
        set: function (position) {
            if (position < 0) {
                this._position = this._getLayoutDirection() == 'ltr' ? 'left' : 'right';
            }
            else if (position > 0) {
                this._position = this._getLayoutDirection() == 'ltr' ? 'right' : 'left';
            }
            else {
                this._position = 'center';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabBody.prototype, "origin", {
        set: function (origin) {
            if (origin == null) {
                return;
            }
            var dir = this._getLayoutDirection();
            if ((dir == 'ltr' && origin <= 0) || (dir == 'rtl' && origin > 0)) {
                this._origin = 'left';
            }
            else {
                this._origin = 'right';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * After initialized, check if the content is centered and has an origin. If so, set the
     * special position states that transition the tab from the left or right before centering.
     */
    MdTabBody.prototype.ngOnInit = function () {
        if (this._position == 'center' && this._origin) {
            this._position = this._origin == 'left' ? 'left-origin-center' : 'right-origin-center';
        }
    };
    /**
     * After the view has been set, check if the tab content is set to the center and attach the
     * content if it is not already attached.
     */
    MdTabBody.prototype.ngAfterViewChecked = function () {
        if (this._isCenterPosition(this._position) && !this._portalHost.hasAttached()) {
            this._portalHost.attach(this._content);
        }
    };
    MdTabBody.prototype._onTranslateTabStarted = function (e) {
        if (this._isCenterPosition(e.toState)) {
            this.onCentering.emit(this._elementRef.nativeElement.clientHeight);
        }
    };
    MdTabBody.prototype._onTranslateTabComplete = function (e) {
        // If the end state is that the tab is not centered, then detach the content.
        if (!this._isCenterPosition(e.toState) && !this._isCenterPosition(this._position)) {
            this._portalHost.detach();
        }
        // If the transition to the center is complete, emit an event.
        if (this._isCenterPosition(e.toState) && this._isCenterPosition(this._position)) {
            this.onCentered.emit();
        }
    };
    /** The text direction of the containing app. */
    MdTabBody.prototype._getLayoutDirection = function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /** Whether the provided position state is considered center, regardless of origin. */
    MdTabBody.prototype._isCenterPosition = function (position) {
        return position == 'center' ||
            position == 'left-origin-center' ||
            position == 'right-origin-center';
    };
    return MdTabBody;
}());
__decorate$51([
    _angular_core.ViewChild(exports.PortalHostDirective),
    __metadata$40("design:type", exports.PortalHostDirective)
], MdTabBody.prototype, "_portalHost", void 0);
__decorate$51([
    _angular_core.Output(),
    __metadata$40("design:type", _angular_core.EventEmitter)
], MdTabBody.prototype, "onCentering", void 0);
__decorate$51([
    _angular_core.Output(),
    __metadata$40("design:type", _angular_core.EventEmitter)
], MdTabBody.prototype, "onCentered", void 0);
__decorate$51([
    _angular_core.Input('content'),
    __metadata$40("design:type", TemplatePortal)
], MdTabBody.prototype, "_content", void 0);
__decorate$51([
    _angular_core.Input('position'),
    __metadata$40("design:type", Number),
    __metadata$40("design:paramtypes", [Number])
], MdTabBody.prototype, "position", null);
__decorate$51([
    _angular_core.Input('origin'),
    __metadata$40("design:type", Number),
    __metadata$40("design:paramtypes", [Number])
], MdTabBody.prototype, "origin", null);
MdTabBody = __decorate$51([
    _angular_core.Component({
        selector: 'md-tab-body',
        template: require('./tab-body.html'),
        animations: [
            _angular_core.trigger('translateTab', [
                _angular_core.state('left', _angular_core.style({ transform: 'translate3d(-100%, 0, 0)' })),
                _angular_core.state('left-origin-center', _angular_core.style({ transform: 'translate3d(0, 0, 0)' })),
                _angular_core.state('right-origin-center', _angular_core.style({ transform: 'translate3d(0, 0, 0)' })),
                _angular_core.state('center', _angular_core.style({ transform: 'translate3d(0, 0, 0)' })),
                _angular_core.state('right', _angular_core.style({ transform: 'translate3d(100%, 0, 0)' })),
                _angular_core.transition('* => left, * => right, left => center, right => center', _angular_core.animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')),
                _angular_core.transition('void => left-origin-center', [
                    _angular_core.style({ transform: 'translate3d(-100%, 0, 0)' }),
                    _angular_core.animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
                ]),
                _angular_core.transition('void => right-origin-center', [
                    _angular_core.style({ transform: 'translate3d(100%, 0, 0)' }),
                    _angular_core.animate('500ms cubic-bezier(0.35, 0, 0.25, 1)')
                ])
            ])
        ]
    }),
    __param$9(1, _angular_core.Optional()),
    __metadata$40("design:paramtypes", [_angular_core.ElementRef, exports.Dir])
], MdTabBody);

var __decorate$52 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$41 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$10 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */
var EXAGGERATED_OVERSCROLL = 60;
/**
 * The header of the tab group which displays a list of all the tabs in the tab group. Includes
 * an ink bar that follows the currently selected tab. When the tabs list's width exceeds the
 * width of the header container, then arrows will be displayed to allow the user to scroll
 * left and right across the header.
 */
var MdTabHeader = (function () {
    function MdTabHeader(_zone, _elementRef, _dir) {
        this._zone = _zone;
        this._elementRef = _elementRef;
        this._dir = _dir;
        /** The tab index that is focused. */
        this._focusIndex = 0;
        /** The distance in pixels that the tab labels should be translated to the left. */
        this._scrollDistance = 0;
        /** Whether the header should scroll to the selected index after the view has been checked. */
        this._selectedIndexChanged = false;
        /** Whether the controls for pagination should be displayed */
        this._showPaginationControls = false;
        /** Whether the tab list can be scrolled more towards the end of the tab label list. */
        this._disableScrollAfter = true;
        /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */
        this._disableScrollBefore = true;
        /** The index of the active tab. */
        this._selectedIndex = 0;
        /** The center labels parameter. */
        this._centerLabels = false;
        /** Event emitted when the option is selected. */
        this.selectFocusedIndex = new _angular_core.EventEmitter();
        /** Event emitted when a label is focused. */
        this.indexFocused = new _angular_core.EventEmitter();
    }
    Object.defineProperty(MdTabHeader.prototype, "selectedIndex", {
        get: function () { return this._selectedIndex; },
        set: function (value) {
            this._selectedIndexChanged = this._selectedIndex != value;
            this._selectedIndex = value;
            this._focusIndex = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdTabHeader.prototype, "centerLabels", {
        get: function () {
            return this._centerLabels;
        },
        set: function (value) {
            this._centerLabels = value;
        },
        enumerable: true,
        configurable: true
    });
    MdTabHeader.prototype.ngAfterContentChecked = function () {
        // If the number of tab labels have changed, check if scrolling should be enabled
        if (this._tabLabelCount != this._labelWrappers.length) {
            this._checkPaginationEnabled();
            this._checkScrollingControls();
            this._updateTabScrollPosition();
            this._tabLabelCount = this._labelWrappers.length;
        }
        // If the selected index has changed, scroll to the label and check if the scrolling controls
        // should be disabled.
        if (this._selectedIndexChanged) {
            this._scrollToLabel(this._selectedIndex);
            this._checkScrollingControls();
            this._selectedIndexChanged = false;
        }
        // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
        // then translate the header to reflect this.
        if (this._scrollDistanceChanged) {
            this._updateTabScrollPosition();
            this._scrollDistanceChanged = false;
        }
    };
    /**
     * Waits one frame for the view to update, then updates the ink bar and scroll.
     * Note: This must be run outside of the zone or it will create an infinite change detection loop
     */
    MdTabHeader.prototype.ngAfterViewChecked = function () {
        var _this = this;
        this._zone.runOutsideAngular(function () {
            window.requestAnimationFrame(function () {
                _this._alignInkBarToSelectedTab();
            });
        });
    };
    MdTabHeader.prototype._handleKeydown = function (event) {
        switch (event.keyCode) {
            case RIGHT_ARROW:
                this._focusNextTab();
                break;
            case LEFT_ARROW:
                this._focusPreviousTab();
                break;
            case ENTER:
                this.selectFocusedIndex.emit(this.focusIndex);
                break;
        }
    };
    Object.defineProperty(MdTabHeader.prototype, "focusIndex", {
        /** Tracks which element has focus; used for keyboard navigation */
        get: function () { return this._focusIndex; },
        /** When the focus index is set, we must manually send focus to the correct label */
        set: function (value) {
            if (!this._isValidIndex(value) || this._focusIndex == value) {
                return;
            }
            this._focusIndex = value;
            this.indexFocused.emit(value);
            this._setTabFocus(value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
     * providing a valid index and return true.
     */
    MdTabHeader.prototype._isValidIndex = function (index) {
        if (!this._labelWrappers) {
            return true;
        }
        var tab = this._labelWrappers.toArray()[index];
        return tab && !tab.disabled;
    };
    /**
     * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
     * scrolling is enabled.
     */
    MdTabHeader.prototype._setTabFocus = function (tabIndex) {
        if (this._showPaginationControls) {
            this._scrollToLabel(tabIndex);
        }
        if (this._labelWrappers && this._labelWrappers.length) {
            this._labelWrappers.toArray()[tabIndex].focus();
            // Do not let the browser manage scrolling to focus the element, this will be handled
            // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
            // should be the full width minus the offset width.
            var containerEl = this._tabListContainer.nativeElement;
            var dir = this._getLayoutDirection();
            if (dir == 'ltr') {
                containerEl.scrollLeft = 0;
            }
            else {
                containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
            }
        }
    };
    /**
     * Moves the focus towards the beginning or the end of the list depending on the offset provided.
     * Valid offsets are 1 and -1.
     */
    MdTabHeader.prototype._moveFocus = function (offset) {
        if (this._labelWrappers) {
            var tabs = this._labelWrappers.toArray();
            for (var i = this.focusIndex + offset; i < tabs.length && i >= 0; i += offset) {
                if (this._isValidIndex(i)) {
                    this.focusIndex = i;
                    return;
                }
            }
        }
    };
    /** Increment the focus index by 1 until a valid tab is found. */
    MdTabHeader.prototype._focusNextTab = function () {
        this._moveFocus(this._getLayoutDirection() == 'ltr' ? 1 : -1);
    };
    /** Decrement the focus index by 1 until a valid tab is found. */
    MdTabHeader.prototype._focusPreviousTab = function () {
        this._moveFocus(this._getLayoutDirection() == 'ltr' ? -1 : 1);
    };
    /** The layout direction of the containing app. */
    MdTabHeader.prototype._getLayoutDirection = function () {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
    };
    /** Performs the CSS transformation on the tab list that will cause the list to scroll. */
    MdTabHeader.prototype._updateTabScrollPosition = function () {
        var translateX = this.scrollDistance + 'px';
        if (this._getLayoutDirection() == 'ltr') {
            translateX = '-' + translateX;
        }
        applyCssTransform(this._tabList.nativeElement, "translate3d(" + translateX + ", 0, 0)");
    };
    Object.defineProperty(MdTabHeader.prototype, "scrollDistance", {
        get: function () { return this._scrollDistance; },
        /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */
        set: function (v) {
            this._scrollDistance = Math.max(0, Math.min(this._getMaxScrollDistance(), v));
            // Mark that the scroll distance has changed so that after the view is checked, the CSS
            // transformation can move the header.
            this._scrollDistanceChanged = true;
            this._checkScrollingControls();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
     * the end of the list, respectively). The distance to scroll is computed to be a third of the
     * length of the tab list view window.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    MdTabHeader.prototype._scrollHeader = function (scrollDir) {
        var viewLength = this._tabListContainer.nativeElement.offsetWidth;
        // Move the scroll distance one-third the length of the tab list's viewport.
        this.scrollDistance += (scrollDir == 'before' ? -1 : 1) * viewLength / 3;
    };
    /**
     * Moves the tab list such that the desired tab label (marked by index) is moved into view.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    MdTabHeader.prototype._scrollToLabel = function (labelIndex) {
        var selectedLabel = this._labelWrappers.toArray()[labelIndex];
        if (!selectedLabel) {
            return;
        }
        // The view length is the visible width of the tab labels.
        var viewLength = this._tabListContainer.nativeElement.offsetWidth;
        var labelBeforePos, labelAfterPos;
        if (this._getLayoutDirection() == 'ltr') {
            labelBeforePos = selectedLabel.getOffsetLeft();
            labelAfterPos = labelBeforePos + selectedLabel.getOffsetWidth();
        }
        else {
            labelAfterPos = this._tabList.nativeElement.offsetWidth - selectedLabel.getOffsetLeft();
            labelBeforePos = labelAfterPos - selectedLabel.getOffsetWidth();
        }
        var beforeVisiblePos = this.scrollDistance;
        var afterVisiblePos = this.scrollDistance + viewLength;
        if (labelBeforePos < beforeVisiblePos) {
            // Scroll header to move label to the before direction
            this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
        }
        else if (labelAfterPos > afterVisiblePos) {
            // Scroll header to move label to the after direction
            this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
        }
    };
    /**
     * Evaluate whether the pagination controls should be displayed. If the scroll width of the
     * tab list is wider than the size of the header container, then the pagination controls should
     * be shown.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    MdTabHeader.prototype._checkPaginationEnabled = function () {
        this._showPaginationControls =
            this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;
        if (!this._showPaginationControls) {
            this.scrollDistance = 0;
        }
    };
    /**
     * Evaluate whether the before and after controls should be enabled or disabled.
     * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
     * before button. If the header is at the end of the list (scroll distance is equal to the
     * maximum distance we can scroll), then disable the after button.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    MdTabHeader.prototype._checkScrollingControls = function () {
        // Check if the pagination arrows should be activated.
        this._disableScrollBefore = this.scrollDistance == 0;
        this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();
    };
    /**
     * Determines what is the maximum length in pixels that can be set for the scroll distance. This
     * is equal to the difference in width between the tab list container and tab header container.
     *
     * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
     * should be called sparingly.
     */
    MdTabHeader.prototype._getMaxScrollDistance = function () {
        var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
        var viewLength = this._tabListContainer.nativeElement.offsetWidth;
        return lengthOfTabList - viewLength;
    };
    /** Tells the ink-bar to align itself to the current label wrapper */
    MdTabHeader.prototype._alignInkBarToSelectedTab = function () {
        var selectedLabelWrapper = this._labelWrappers && this._labelWrappers.length
            ? this._labelWrappers.toArray()[this.selectedIndex].elementRef.nativeElement
            : null;
        this._inkBar.alignToElement(selectedLabelWrapper);
    };
    return MdTabHeader;
}());
__decorate$52([
    _angular_core.ContentChildren(MdTabLabelWrapper),
    __metadata$41("design:type", _angular_core.QueryList)
], MdTabHeader.prototype, "_labelWrappers", void 0);
__decorate$52([
    _angular_core.ViewChild(MdInkBar),
    __metadata$41("design:type", MdInkBar)
], MdTabHeader.prototype, "_inkBar", void 0);
__decorate$52([
    _angular_core.ViewChild('tabListContainer'),
    __metadata$41("design:type", _angular_core.ElementRef)
], MdTabHeader.prototype, "_tabListContainer", void 0);
__decorate$52([
    _angular_core.ViewChild('tabList'),
    __metadata$41("design:type", _angular_core.ElementRef)
], MdTabHeader.prototype, "_tabList", void 0);
__decorate$52([
    _angular_core.Input(),
    __metadata$41("design:type", Number),
    __metadata$41("design:paramtypes", [Number])
], MdTabHeader.prototype, "selectedIndex", null);
__decorate$52([
    _angular_core.Input(),
    __metadata$41("design:type", Boolean),
    __metadata$41("design:paramtypes", [Boolean])
], MdTabHeader.prototype, "centerLabels", null);
__decorate$52([
    _angular_core.Output(),
    __metadata$41("design:type", Object)
], MdTabHeader.prototype, "selectFocusedIndex", void 0);
__decorate$52([
    _angular_core.Output(),
    __metadata$41("design:type", Object)
], MdTabHeader.prototype, "indexFocused", void 0);
MdTabHeader = __decorate$52([
    _angular_core.Component({
        selector: 'md-tab-header',
        template: require('./tab-header.html').toString(),
        styles: [require('./tab-header.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
        host: {
            'class': 'md-tab-header',
            '[class.md-tab-header-pagination-controls-enabled]': '_showPaginationControls',
            '[class.md-tab-header-rtl]': "_getLayoutDirection() == 'rtl'",
        }
    }),
    __param$10(2, _angular_core.Optional()),
    __metadata$41("design:paramtypes", [_angular_core.NgZone,
        _angular_core.ElementRef,
        exports.Dir])
], MdTabHeader);

var __decorate$45 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$34 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/** Used to generate unique ID's for each tab component */
var nextId$2 = 0;
/** A simple change event emitted on focus or selection changes. */
var MdTabChangeEvent = (function () {
    function MdTabChangeEvent() {
    }
    return MdTabChangeEvent;
}());
exports.MdTabGroup = (function () {
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
        this._onFocusChange = new _angular_core.EventEmitter();
        this._onSelectChange = new _angular_core.EventEmitter(true);
        this._groupId = nextId$2++;
    }
    Object.defineProperty(MdTabGroup.prototype, "dynamicHeight", {
        set: function (value) {
            this._dynamicHeight = coerceBooleanProperty(value);
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
__decorate$45([
    _angular_core.ContentChildren(MdTab),
    __metadata$34("design:type", _angular_core.QueryList)
], exports.MdTabGroup.prototype, "_tabs", void 0);
__decorate$45([
    _angular_core.ViewChild('tabBodyWrapper'),
    __metadata$34("design:type", _angular_core.ElementRef)
], exports.MdTabGroup.prototype, "_tabBodyWrapper", void 0);
__decorate$45([
    _angular_core.Input('md-dynamic-height'),
    __metadata$34("design:type", Boolean),
    __metadata$34("design:paramtypes", [Boolean])
], exports.MdTabGroup.prototype, "dynamicHeight", null);
__decorate$45([
    _angular_core.Input(),
    __metadata$34("design:type", Number),
    __metadata$34("design:paramtypes", [Number])
], exports.MdTabGroup.prototype, "selectedIndex", null);
__decorate$45([
    _angular_core.Input(),
    __metadata$34("design:type", Boolean),
    __metadata$34("design:paramtypes", [Boolean])
], exports.MdTabGroup.prototype, "centerLabels", null);
__decorate$45([
    _angular_core.Output(),
    __metadata$34("design:type", rxjs_Observable.Observable),
    __metadata$34("design:paramtypes", [])
], exports.MdTabGroup.prototype, "selectedIndexChange", null);
__decorate$45([
    _angular_core.Output(),
    __metadata$34("design:type", rxjs_Observable.Observable),
    __metadata$34("design:paramtypes", [])
], exports.MdTabGroup.prototype, "focusChange", null);
__decorate$45([
    _angular_core.Output(),
    __metadata$34("design:type", rxjs_Observable.Observable),
    __metadata$34("design:paramtypes", [])
], exports.MdTabGroup.prototype, "selectChange", null);
exports.MdTabGroup = __decorate$45([
    _angular_core.Component({
        selector: 'md-tab-group',
        template: require('./tab-group.html'),
        styles: [require('./tab-group.css').toString()],
    }),
    __metadata$34("design:paramtypes", [_angular_core.Renderer])
], exports.MdTabGroup);
exports.MdTabsModule = MdTabsModule_1 = (function () {
    function MdTabsModule() {
    }
    MdTabsModule.forRoot = function () {
        return {
            ngModule: MdTabsModule_1,
            providers: [ViewportRuler]
        };
    };
    return MdTabsModule;
}());
exports.MdTabsModule = MdTabsModule_1 = __decorate$45([
    _angular_core.NgModule({
        imports: [_angular_common.CommonModule, exports.PortalModule, exports.MdRippleModule],
        // Don't export all components because some are only to be used internally.
        exports: [exports.MdTabGroup, MdTabLabel, MdTab, exports.MdTabNavBar, exports.MdTabLink, exports.MdTabLinkRipple],
        declarations: [exports.MdTabGroup, MdTabLabel, MdTab, MdInkBar, MdTabLabelWrapper,
            exports.MdTabNavBar, exports.MdTabLink, MdTabBody, exports.MdTabLinkRipple, MdTabHeader],
    })
], exports.MdTabsModule);
var MdTabsModule_1;

var __decorate$53 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$42 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdToolbarRow = (function () {
    function MdToolbarRow() {
    }
    return MdToolbarRow;
}());
exports.MdToolbarRow = __decorate$53([
    _angular_core.Directive({
        selector: 'md-toolbar-row, mat-toolbar-row'
    })
], exports.MdToolbarRow);
exports.MdToolbar = (function () {
    function MdToolbar(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    Object.defineProperty(MdToolbar.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    MdToolbar.prototype._updateColor = function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    MdToolbar.prototype._setElementColor = function (color, isAdd) {
        if (color != null && color != '') {
            this.renderer.setElementClass(this.elementRef.nativeElement, "md-" + color, isAdd);
        }
    };
    return MdToolbar;
}());
__decorate$53([
    _angular_core.Input(),
    __metadata$42("design:type", String),
    __metadata$42("design:paramtypes", [String])
], exports.MdToolbar.prototype, "color", null);
exports.MdToolbar = __decorate$53([
    _angular_core.Component({
        selector: 'md-toolbar, mat-toolbar',
        template: require('./toolbar.html').toString(),
        styles: [require('./toolbar.css').toString()],
        changeDetection: _angular_core.ChangeDetectionStrategy.OnPush,
        encapsulation: _angular_core.ViewEncapsulation.None
    }),
    __metadata$42("design:paramtypes", [_angular_core.ElementRef, _angular_core.Renderer])
], exports.MdToolbar);
exports.MdToolbarModule = MdToolbarModule_1 = (function () {
    function MdToolbarModule() {
    }
    MdToolbarModule.forRoot = function () {
        return {
            ngModule: MdToolbarModule_1,
            providers: []
        };
    };
    return MdToolbarModule;
}());
exports.MdToolbarModule = MdToolbarModule_1 = __decorate$53([
    _angular_core.NgModule({
        imports: [exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdToolbar, exports.MdToolbarRow, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdToolbar, exports.MdToolbarRow],
    })
], exports.MdToolbarModule);
var MdToolbarModule_1;

var __extends$17 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Exception thrown when a tooltip has an invalid position. */
var MdTooltipInvalidPositionError = (function (_super) {
    __extends$17(MdTooltipInvalidPositionError, _super);
    function MdTooltipInvalidPositionError(position) {
        return _super.call(this, "Tooltip position \"" + position + "\" is invalid.") || this;
    }
    return MdTooltipInvalidPositionError;
}(MdError));

var __decorate$54 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$43 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$11 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
/** Time in ms to delay before changing the tooltip visibility to hidden */
var TOUCHEND_HIDE_DELAY = 1500;
exports.MdTooltip = (function () {
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
        var portal = new ComponentPortal(exports.TooltipComponent, this._viewContainerRef);
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
        var config = new OverlayState();
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
        throw new MdTooltipInvalidPositionError(this.position);
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
        throw new MdTooltipInvalidPositionError(this.position);
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
__decorate$54([
    _angular_core.Input('tooltip-position'),
    __metadata$43("design:type", String),
    __metadata$43("design:paramtypes", [String])
], exports.MdTooltip.prototype, "position", null);
__decorate$54([
    _angular_core.Input('md-tooltip'),
    __metadata$43("design:type", Object),
    __metadata$43("design:paramtypes", [String])
], exports.MdTooltip.prototype, "message", null);
exports.MdTooltip = __decorate$54([
    _angular_core.Directive({
        selector: '[md-tooltip], [mat-tooltip]',
        host: {
            '(longpress)': 'show()',
            '(touchend)': 'hide(' + TOUCHEND_HIDE_DELAY + ')',
            '(mouseenter)': 'show()',
            '(mouseleave)': 'hide()',
        },
        exportAs: 'mdTooltip',
    }),
    __param$11(4, _angular_core.Optional()),
    __metadata$43("design:paramtypes", [exports.Overlay, _angular_core.ElementRef,
        _angular_core.ViewContainerRef, _angular_core.NgZone,
        exports.Dir])
], exports.MdTooltip);
exports.TooltipComponent = (function () {
    function TooltipComponent(_dir) {
        this._dir = _dir;
        /** Whether interactions on the page should close the tooltip */
        this._closeOnInteraction = false;
        /** The transform origin used in the animation for showing and hiding the tooltip */
        this._transformOrigin = 'bottom';
        /** Subject for notifying that the tooltip has been hidden from the view */
        this._onHide = new rxjs_Subject.Subject();
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
            default: throw new MdTooltipInvalidPositionError(value);
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
exports.TooltipComponent = __decorate$54([
    _angular_core.Component({
        selector: 'md-tooltip-component, mat-tooltip-component',
        template: require('./tooltip.html'),
        styles: [require('./tooltip.css').toString()],
        animations: [
            _angular_core.trigger('state', [
                _angular_core.state('void', _angular_core.style({ transform: 'scale(0)' })),
                _angular_core.state('visible', _angular_core.style({ transform: 'scale(1)' })),
                _angular_core.state('hidden', _angular_core.style({ transform: 'scale(0)' })),
                _angular_core.transition('* => visible', _angular_core.animate('150ms cubic-bezier(0.0, 0.0, 0.2, 1)')),
                _angular_core.transition('* => hidden', _angular_core.animate('150ms cubic-bezier(0.4, 0.0, 1, 1)')),
            ])
        ],
        host: {
            '(body:click)': 'this._handleBodyInteraction()'
        }
    }),
    __param$11(0, _angular_core.Optional()),
    __metadata$43("design:paramtypes", [exports.Dir])
], exports.TooltipComponent);
exports.MdTooltipModule = MdTooltipModule_1 = (function () {
    function MdTooltipModule() {
    }
    MdTooltipModule.forRoot = function () {
        return {
            ngModule: MdTooltipModule_1,
            providers: OVERLAY_PROVIDERS,
        };
    };
    return MdTooltipModule;
}());
exports.MdTooltipModule = MdTooltipModule_1 = __decorate$54([
    _angular_core.NgModule({
        imports: [exports.OverlayModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdTooltip, exports.TooltipComponent, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdTooltip, exports.TooltipComponent],
        entryComponents: [exports.TooltipComponent],
    })
], exports.MdTooltipModule);
var MdTooltipModule_1;

var __extends$18 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Exception thrown when menu trigger doesn't have a valid md-menu instance
 */
var MdMenuMissingError = (function (_super) {
    __extends$18(MdMenuMissingError, _super);
    function MdMenuMissingError() {
        return _super.call(this, "md-menu-trigger: must pass in an md-menu instance.\n\n    Example:\n      <md-menu #menu=\"mdMenu\"></md-menu>\n      <button [md-menu-trigger-for]=\"menu\"></button>\n    ") || this;
    }
    return MdMenuMissingError;
}(MdError));
/**
 * Exception thrown when menu's x-position value isn't valid.
 * In other words, it doesn't match 'before' or 'after'.
 */
var MdMenuInvalidPositionX = (function (_super) {
    __extends$18(MdMenuInvalidPositionX, _super);
    function MdMenuInvalidPositionX() {
        return _super.call(this, "x-position value must be either 'before' or after'.\n      Example: <md-menu x-position=\"before\" #menu=\"mdMenu\"></md-menu>\n    ") || this;
    }
    return MdMenuInvalidPositionX;
}(MdError));
/**
 * Exception thrown when menu's y-position value isn't valid.
 * In other words, it doesn't match 'above' or 'below'.
 */
var MdMenuInvalidPositionY = (function (_super) {
    __extends$18(MdMenuInvalidPositionY, _super);
    function MdMenuInvalidPositionY() {
        return _super.call(this, "y-position value must be either 'above' or below'.\n      Example: <md-menu y-position=\"above\" #menu=\"mdMenu\"></md-menu>\n    ") || this;
    }
    return MdMenuInvalidPositionY;
}(MdError));

var __decorate$57 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$45 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdMenuItem = (function () {
    function MdMenuItem(_renderer, _elementRef) {
        this._renderer = _renderer;
        this._elementRef = _elementRef;
    }
    MdMenuItem.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._elementRef.nativeElement, 'focus');
    };
    Object.defineProperty(MdMenuItem.prototype, "disabled", {
        // this is necessary to support anchors
        get: function () {
            return this._disabled;
        },
        set: function (value) {
            this._disabled = (value === false || value === undefined) ? null : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMenuItem.prototype, "isAriaDisabled", {
        get: function () {
            return String(!!this.disabled);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdMenuItem.prototype, "_tabindex", {
        get: function () {
            return this.disabled ? '-1' : '0';
        },
        enumerable: true,
        configurable: true
    });
    MdMenuItem.prototype._getHostElement = function () {
        return this._elementRef.nativeElement;
    };
    MdMenuItem.prototype._checkDisabled = function (event) {
        if (this.disabled) {
            event.preventDefault();
            event.stopPropagation();
        }
    };
    return MdMenuItem;
}());
__decorate$57([
    _angular_core.HostBinding('attr.disabled'),
    _angular_core.Input(),
    __metadata$45("design:type", Boolean),
    __metadata$45("design:paramtypes", [Boolean])
], exports.MdMenuItem.prototype, "disabled", null);
__decorate$57([
    _angular_core.HostBinding('attr.aria-disabled'),
    __metadata$45("design:type", String),
    __metadata$45("design:paramtypes", [])
], exports.MdMenuItem.prototype, "isAriaDisabled", null);
exports.MdMenuItem = __decorate$57([
    _angular_core.Component({
        selector: '[md-menu-item], [mat-menu-item]',
        host: {
            'role': 'menuitem',
            '(click)': '_checkDisabled($event)',
            '[attr.tabindex]': '_tabindex'
        },
        template: require('./menu-item.html'),
        exportAs: 'mdMenuItem'
    }),
    __metadata$45("design:paramtypes", [_angular_core.Renderer, _angular_core.ElementRef])
], exports.MdMenuItem);

/**
 * Below are all the animations for the md-menu component.
 * Animation duration and timing values are based on Material 1.
 */
/**
 * This animation controls the menu panel's entry and exit from the page.
 *
 * When the menu panel is added to the DOM, it scales in and fades in its border.
 *
 * When the menu panel is removed from the DOM, it simply fades out after a brief
 * delay to display the ripple.
 *
 * TODO(kara): switch to :enter and :leave once Mobile Safari is sorted out.
 */
var transformMenu = _angular_core.trigger('transformMenu', [
    _angular_core.state('showing', _angular_core.style({
        opacity: 1,
        transform: "scale(1)"
    })),
    _angular_core.transition('void => *', [
        _angular_core.style({
            opacity: 0,
            transform: "scale(0)"
        }),
        _angular_core.animate("200ms cubic-bezier(0.25, 0.8, 0.25, 1)")
    ]),
    _angular_core.transition('* => void', [
        _angular_core.animate('50ms 100ms linear', _angular_core.style({ opacity: 0 }))
    ])
]);
/**
 * This animation fades in the background color and content of the menu panel
 * after its containing element is scaled in.
 */
var fadeInItems = _angular_core.trigger('fadeInItems', [
    _angular_core.state('showing', _angular_core.style({ opacity: 1 })),
    _angular_core.transition('void => *', [
        _angular_core.style({ opacity: 0 }),
        _angular_core.animate("200ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")
    ])
]);

// TODO(kara): prevent-close functionality
var __decorate$56 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$44 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$12 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.MdMenu = (function () {
    function MdMenu(posX, posY) {
        /** Config object to be passed into the menu's ngClass */
        this._classList = {};
        this.positionX = 'after';
        this.positionY = 'below';
        this.close = new _angular_core.EventEmitter();
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
        this._keyManager = new ListKeyManager(this.items).withFocusWrap();
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
            throw new MdMenuInvalidPositionX();
        }
        this.positionX = pos;
    };
    MdMenu.prototype._setPositionY = function (pos) {
        if (pos !== 'above' && pos !== 'below') {
            throw new MdMenuInvalidPositionY();
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
__decorate$56([
    _angular_core.ViewChild(_angular_core.TemplateRef),
    __metadata$44("design:type", _angular_core.TemplateRef)
], exports.MdMenu.prototype, "templateRef", void 0);
__decorate$56([
    _angular_core.ContentChildren(exports.MdMenuItem),
    __metadata$44("design:type", _angular_core.QueryList)
], exports.MdMenu.prototype, "items", void 0);
__decorate$56([
    _angular_core.Input('class'),
    __metadata$44("design:type", String),
    __metadata$44("design:paramtypes", [String])
], exports.MdMenu.prototype, "classList", null);
__decorate$56([
    _angular_core.Output(),
    __metadata$44("design:type", Object)
], exports.MdMenu.prototype, "close", void 0);
exports.MdMenu = __decorate$56([
    _angular_core.Component({
        selector: 'md-menu, mat-menu',
        host: { 'role': 'menu' },
        template: require('./menu.html'),
        styles: [require('./menu.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
        animations: [
            transformMenu,
            fadeInItems
        ],
        exportAs: 'mdMenu'
    }),
    __param$12(0, _angular_core.Attribute('x-position')),
    __param$12(1, _angular_core.Attribute('y-position')),
    __metadata$44("design:paramtypes", [String, String])
], exports.MdMenu);

var __decorate$58 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$46 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param$13 = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
exports.MdMenuTrigger = (function () {
    function MdMenuTrigger(_overlay, _element, _viewContainerRef, _renderer, _dir) {
        this._overlay = _overlay;
        this._element = _element;
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._dir = _dir;
        this._menuOpen = false;
        // tracking input type is necessary so it's possible to only auto-focus
        // the first item of the list when the menu is opened via the keyboard
        this._openedByMouse = false;
        this.onMenuOpen = new _angular_core.EventEmitter();
        this.onMenuClose = new _angular_core.EventEmitter();
    }
    MdMenuTrigger.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._checkMenu();
        this.menu.close.subscribe(function () { return _this.closeMenu(); });
    };
    MdMenuTrigger.prototype.ngOnDestroy = function () { this.destroyMenu(); };
    Object.defineProperty(MdMenuTrigger.prototype, "menuOpen", {
        get: function () { return this._menuOpen; },
        enumerable: true,
        configurable: true
    });
    MdMenuTrigger.prototype.toggleMenu = function () {
        return this._menuOpen ? this.closeMenu() : this.openMenu();
    };
    MdMenuTrigger.prototype.openMenu = function () {
        if (!this._menuOpen) {
            this._createOverlay();
            this._overlayRef.attach(this._portal);
            this._subscribeToBackdrop();
            this._initMenu();
        }
    };
    MdMenuTrigger.prototype.closeMenu = function () {
        if (this._overlayRef) {
            this._overlayRef.detach();
            this._backdropSubscription.unsubscribe();
            this._resetMenu();
        }
    };
    MdMenuTrigger.prototype.destroyMenu = function () {
        if (this._overlayRef) {
            this._overlayRef.dispose();
            this._overlayRef = null;
            this._cleanUpSubscriptions();
        }
    };
    MdMenuTrigger.prototype.focus = function () {
        this._renderer.invokeElementMethod(this._element.nativeElement, 'focus');
    };
    Object.defineProperty(MdMenuTrigger.prototype, "dir", {
        /** The text direction of the containing app. */
        get: function () {
            return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * This method ensures that the menu closes when the overlay backdrop is clicked.
     * We do not use first() here because doing so would not catch clicks from within
     * the menu, and it would fail to unsubscribe properly. Instead, we unsubscribe
     * explicitly when the menu is closed or destroyed.
     */
    MdMenuTrigger.prototype._subscribeToBackdrop = function () {
        var _this = this;
        this._backdropSubscription = this._overlayRef.backdropClick().subscribe(function () {
            _this.closeMenu();
        });
    };
    /**
     * This method sets the menu state to open and focuses the first item if
     * the menu was opened via the keyboard.
     */
    MdMenuTrigger.prototype._initMenu = function () {
        this._setIsMenuOpen(true);
        // Should only set focus if opened via the keyboard, so keyboard users can
        // can easily navigate menu items. According to spec, mouse users should not
        // see the focus style.
        if (!this._openedByMouse) {
            this.menu.focusFirstItem();
        }
    };
    ;
    /**
     * This method resets the menu when it's closed, most importantly restoring
     * focus to the menu trigger if the menu was opened via the keyboard.
     */
    MdMenuTrigger.prototype._resetMenu = function () {
        this._setIsMenuOpen(false);
        // Focus only needs to be reset to the host element if the menu was opened
        // by the keyboard and manually shifted to the first menu item.
        if (!this._openedByMouse) {
            this.focus();
        }
        this._openedByMouse = false;
    };
    // set state rather than toggle to support triggers sharing a menu
    MdMenuTrigger.prototype._setIsMenuOpen = function (isOpen) {
        this._menuOpen = isOpen;
        this._menuOpen ? this.onMenuOpen.emit() : this.onMenuClose.emit();
    };
    /**
     *  This method checks that a valid instance of MdMenu has been passed into
     *  md-menu-trigger-for.  If not, an exception is thrown.
     */
    MdMenuTrigger.prototype._checkMenu = function () {
        if (!this.menu) {
            throw new MdMenuMissingError();
        }
    };
    /**
     *  This method creates the overlay from the provided menu's template and saves its
     *  OverlayRef so that it can be attached to the DOM when openMenu is called.
     */
    MdMenuTrigger.prototype._createOverlay = function () {
        if (!this._overlayRef) {
            this._portal = new TemplatePortal(this.menu.templateRef, this._viewContainerRef);
            var config = this._getOverlayConfig();
            this._subscribeToPositions(config.positionStrategy);
            this._overlayRef = this._overlay.create(config);
        }
    };
    /**
     * This method builds the configuration object needed to create the overlay, the OverlayState.
     * @returns OverlayState
     */
    MdMenuTrigger.prototype._getOverlayConfig = function () {
        var overlayState = new OverlayState();
        overlayState.positionStrategy = this._getPosition()
            .withDirection(this.dir);
        overlayState.hasBackdrop = true;
        overlayState.backdropClass = 'md-overlay-transparent-backdrop';
        overlayState.direction = this.dir;
        return overlayState;
    };
    /**
     * Listens to changes in the position of the overlay and sets the correct classes
     * on the menu based on the new position. This ensures the animation origin is always
     * correct, even if a fallback position is used for the overlay.
     */
    MdMenuTrigger.prototype._subscribeToPositions = function (position) {
        var _this = this;
        this._positionSubscription = position.onPositionChange.subscribe(function (change) {
            var posX = change.connectionPair.originX === 'start' ? 'after' : 'before';
            var posY = change.connectionPair.originY === 'top' ? 'below' : 'above';
            _this.menu.setPositionClasses(posX, posY);
        });
    };
    /**
     * This method builds the position strategy for the overlay, so the menu is properly connected
     * to the trigger.
     * @returns ConnectedPositionStrategy
     */
    MdMenuTrigger.prototype._getPosition = function () {
        var _a = this.menu.positionX === 'before' ? ['end', 'start'] : ['start', 'end'], posX = _a[0], fallbackX = _a[1];
        var _b = this.menu.positionY === 'above' ? ['bottom', 'top'] : ['top', 'bottom'], posY = _b[0], fallbackY = _b[1];
        return this._overlay.position()
            .connectedTo(this._element, { originX: posX, originY: posY }, { overlayX: posX, overlayY: posY })
            .withFallbackPosition({ originX: fallbackX, originY: posY }, { overlayX: fallbackX, overlayY: posY })
            .withFallbackPosition({ originX: posX, originY: fallbackY }, { overlayX: posX, overlayY: fallbackY })
            .withFallbackPosition({ originX: fallbackX, originY: fallbackY }, { overlayX: fallbackX, overlayY: fallbackY });
    };
    MdMenuTrigger.prototype._cleanUpSubscriptions = function () {
        if (this._backdropSubscription) {
            this._backdropSubscription.unsubscribe();
        }
        if (this._positionSubscription) {
            this._positionSubscription.unsubscribe();
        }
    };
    MdMenuTrigger.prototype._handleMousedown = function (event) {
        if (!isFakeMousedownFromScreenReader(event)) {
            this._openedByMouse = true;
        }
    };
    return MdMenuTrigger;
}());
__decorate$58([
    _angular_core.Input('md-menu-trigger-for'),
    __metadata$46("design:type", Object)
], exports.MdMenuTrigger.prototype, "menu", void 0);
__decorate$58([
    _angular_core.Output(),
    __metadata$46("design:type", Object)
], exports.MdMenuTrigger.prototype, "onMenuOpen", void 0);
__decorate$58([
    _angular_core.Output(),
    __metadata$46("design:type", Object)
], exports.MdMenuTrigger.prototype, "onMenuClose", void 0);
exports.MdMenuTrigger = __decorate$58([
    _angular_core.Directive({
        selector: '[md-menu-trigger-for], [mat-menu-trigger-for]',
        host: {
            'aria-haspopup': 'true',
            '(mousedown)': '_handleMousedown($event)',
            '(click)': 'toggleMenu()',
        },
        exportAs: 'mdMenuTrigger'
    }),
    __param$13(4, _angular_core.Optional()),
    __metadata$46("design:paramtypes", [exports.Overlay, _angular_core.ElementRef,
        _angular_core.ViewContainerRef, _angular_core.Renderer,
        exports.Dir])
], exports.MdMenuTrigger);

var __decorate$55 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.MdMenuModule = MdMenuModule_1 = (function () {
    function MdMenuModule() {
    }
    MdMenuModule.forRoot = function () {
        return {
            ngModule: MdMenuModule_1,
            providers: OVERLAY_PROVIDERS,
        };
    };
    return MdMenuModule;
}());
exports.MdMenuModule = MdMenuModule_1 = __decorate$55([
    _angular_core.NgModule({
        imports: [exports.OverlayModule, _angular_common.CommonModule, exports.MdRippleModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdMenu, exports.MdMenuItem, exports.MdMenuTrigger, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdMenu, exports.MdMenuItem, exports.MdMenuTrigger],
    })
], exports.MdMenuModule);
var MdMenuModule_1;

;
/**
 * Configuration for opening a modal dialog with the MdDialog service.
 */
var MdDialogConfig = (function () {
    function MdDialogConfig() {
        /** The ARIA role of the dialog element. */
        this.role = 'dialog';
        /** Whether the user can use escape or clicking outside to close a modal. */
        this.disableClose = false;
        /** Width of the dialog. */
        this.width = '';
        /** Height of the dialog. */
        this.height = '';
        // TODO(jelbourn): add configuration for lifecycle hooks, ARIA labelling.
    }
    return MdDialogConfig;
}());

// TODO(jelbourn): resizing
// TODO(jelbourn): afterOpen and beforeClose
/**
 * Reference to a dialog opened via the MdDialog service.
 */
var MdDialogRef = (function () {
    function MdDialogRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /** Subject for notifying the user that the dialog has finished closing. */
        this._afterClosed = new rxjs_Subject.Subject();
    }
    /**
     * Close the dialog.
     * @param dialogResult Optional result to return to the dialog opener.
     */
    MdDialogRef.prototype.close = function (dialogResult) {
        this._overlayRef.dispose();
        this._afterClosed.next(dialogResult);
        this._afterClosed.complete();
    };
    /** Gets an observable that is notified when the dialog is finished closing. */
    MdDialogRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    return MdDialogRef;
}());

/** Custom injector type specifically for instantiating components with a dialog. */
var DialogInjector = (function () {
    function DialogInjector(_dialogRef, _parentInjector) {
        this._dialogRef = _dialogRef;
        this._parentInjector = _parentInjector;
    }
    DialogInjector.prototype.get = function (token, notFoundValue) {
        if (token === MdDialogRef) {
            return this._dialogRef;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return DialogInjector;
}());

var __extends$20 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/** Exception thrown when a ComponentPortal is attached to a DomPortalHost without an origin. */
var MdDialogContentAlreadyAttachedError = (function (_super) {
    __extends$20(MdDialogContentAlreadyAttachedError, _super);
    function MdDialogContentAlreadyAttachedError() {
        return _super.call(this, 'Attempting to attach dialog content after content is already attached') || this;
    }
    return MdDialogContentAlreadyAttachedError;
}(MdError));

var __extends$19 = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate$60 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$48 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdDialogContainer = (function (_super) {
    __extends$19(MdDialogContainer, _super);
    function MdDialogContainer(_ngZone) {
        var _this = _super.call(this) || this;
        _this._ngZone = _ngZone;
        /** Element that was focused before the dialog was opened. Save this to restore upon close. */
        _this._elementFocusedBeforeDialogWasOpened = null;
        return _this;
    }
    /** Attach a portal as content to this dialog container. */
    MdDialogContainer.prototype.attachComponentPortal = function (portal) {
        var _this = this;
        if (this._portalHost.hasAttached()) {
            throw new MdDialogContentAlreadyAttachedError();
        }
        var attachResult = this._portalHost.attachComponentPortal(portal);
        // If were to attempt to focus immediately, then the content of the dialog would not yet be
        // ready in instances where change detection has to run first. To deal with this, we simply
        // wait for the microtask queue to be empty.
        this._ngZone.onMicrotaskEmpty.first().subscribe(function () {
            _this._elementFocusedBeforeDialogWasOpened = document.activeElement;
            _this._focusTrap.focusFirstTabbableElement();
        });
        return attachResult;
    };
    MdDialogContainer.prototype.attachTemplatePortal = function (portal) {
        throw Error('Not yet implemented');
    };
    /** Handles the user pressing the Escape key. */
    MdDialogContainer.prototype.handleEscapeKey = function () {
        if (!this.dialogConfig.disableClose) {
            this.dialogRef.close();
        }
    };
    MdDialogContainer.prototype.ngOnDestroy = function () {
        var _this = this;
        // When the dialog is destroyed, return focus to the element that originally had it before
        // the dialog was opened. Wait for the DOM to finish settling before changing the focus so
        // that it doesn't end up back on the <body>.
        this._ngZone.onMicrotaskEmpty.first().subscribe(function () {
            _this._elementFocusedBeforeDialogWasOpened.focus();
        });
    };
    return MdDialogContainer;
}(BasePortalHost));
__decorate$60([
    _angular_core.ViewChild(exports.PortalHostDirective),
    __metadata$48("design:type", exports.PortalHostDirective)
], exports.MdDialogContainer.prototype, "_portalHost", void 0);
__decorate$60([
    _angular_core.ViewChild(exports.FocusTrap),
    __metadata$48("design:type", exports.FocusTrap)
], exports.MdDialogContainer.prototype, "_focusTrap", void 0);
exports.MdDialogContainer = __decorate$60([
    _angular_core.Component({
        selector: 'md-dialog-container, mat-dialog-container',
        template: require('./dialog-container.html'),
        styles: [require('./dialog-container.css').toString()],
        host: {
            'class': 'md-dialog-container',
            '[attr.role]': 'dialogConfig?.role',
            '(keydown.escape)': 'handleEscapeKey()',
        },
        encapsulation: _angular_core.ViewEncapsulation.None,
    }),
    __metadata$48("design:paramtypes", [_angular_core.NgZone])
], exports.MdDialogContainer);

var __decorate$59 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata$47 = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
exports.MdDialog = (function () {
    function MdDialog(_overlay, _injector) {
        this._overlay = _overlay;
        this._injector = _injector;
        /** Keeps track of the currently-open dialogs. */
        this._openDialogs = [];
    }
    /**
     * Opens a modal dialog containing the given component.
     * @param component Type of the component to load into the load.
     * @param config
     */
    MdDialog.prototype.open = function (component, config) {
        var _this = this;
        config = _applyConfigDefaults$1(config);
        var overlayRef = this._createOverlay(config);
        var dialogContainer = this._attachDialogContainer(overlayRef, config);
        var dialogRef = this._attachDialogContent(component, dialogContainer, overlayRef);
        this._openDialogs.push(dialogRef);
        dialogRef.afterClosed().subscribe(function () { return _this._removeOpenDialog(dialogRef); });
        return dialogRef;
    };
    /**
     * Closes all of the currently-open dialogs.
     */
    MdDialog.prototype.closeAll = function () {
        var i = this._openDialogs.length;
        while (i--) {
            // The `_openDialogs` property isn't updated after close until the rxjs subscription
            // runs on the next microtask, in addition to modifying the array as we're going
            // through it. We loop through all of them and call close without assuming that
            // they'll be removed from the list instantaneously.
            this._openDialogs[i].close();
        }
    };
    /**
     * Creates the overlay into which the dialog will be loaded.
     * @param dialogConfig The dialog configuration.
     * @returns A promise resolving to the OverlayRef for the created overlay.
     */
    MdDialog.prototype._createOverlay = function (dialogConfig) {
        var overlayState = this._getOverlayState(dialogConfig);
        return this._overlay.create(overlayState);
    };
    /**
     * Attaches an MdDialogContainer to a dialog's already-created overlay.
     * @param overlay Reference to the dialog's underlying overlay.
     * @param config The dialog configuration.
     * @returns A promise resolving to a ComponentRef for the attached container.
     */
    MdDialog.prototype._attachDialogContainer = function (overlay, config) {
        var viewContainer = config ? config.viewContainerRef : null;
        var containerPortal = new ComponentPortal(exports.MdDialogContainer, viewContainer);
        var containerRef = overlay.attach(containerPortal);
        containerRef.instance.dialogConfig = config;
        return containerRef.instance;
    };
    /**
     * Attaches the user-provided component to the already-created MdDialogContainer.
     * @param component The type of component being loaded into the dialog.
     * @param dialogContainer Reference to the wrapping MdDialogContainer.
     * @param overlayRef Reference to the overlay in which the dialog resides.
     * @returns A promise resolving to the MdDialogRef that should be returned to the user.
     */
    MdDialog.prototype._attachDialogContent = function (component, dialogContainer, overlayRef) {
        // Create a reference to the dialog we're creating in order to give the user a handle
        // to modify and close it.
        var dialogRef = new MdDialogRef(overlayRef);
        if (!dialogContainer.dialogConfig.disableClose) {
            // When the dialog backdrop is clicked, we want to close it.
            overlayRef.backdropClick().first().subscribe(function () { return dialogRef.close(); });
        }
        // Set the dialogRef to the container so that it can use the ref to close the dialog.
        dialogContainer.dialogRef = dialogRef;
        // We create an injector specifically for the component we're instantiating so that it can
        // inject the MdDialogRef. This allows a component loaded inside of a dialog to close itself
        // and, optionally, to return a value.
        var dialogInjector = new DialogInjector(dialogRef, this._injector);
        var contentPortal = new ComponentPortal(component, null, dialogInjector);
        var contentRef = dialogContainer.attachComponentPortal(contentPortal);
        dialogRef.componentInstance = contentRef.instance;
        return dialogRef;
    };
    /**
     * Creates an overlay state from a dialog config.
     * @param dialogConfig The dialog configuration.
     * @returns The overlay configuration.
     */
    MdDialog.prototype._getOverlayState = function (dialogConfig) {
        var state = new OverlayState();
        var strategy = this._overlay.position().global();
        var position = dialogConfig.position;
        state.hasBackdrop = true;
        state.positionStrategy = strategy;
        if (position && (position.left || position.right)) {
            position.left ? strategy.left(position.left) : strategy.right(position.right);
        }
        else {
            strategy.centerHorizontally();
        }
        if (position && (position.top || position.bottom)) {
            position.top ? strategy.top(position.top) : strategy.bottom(position.bottom);
        }
        else {
            strategy.centerVertically();
        }
        strategy.width(dialogConfig.width).height(dialogConfig.height);
        return state;
    };
    /**
     * Removes a dialog from the array of open dialogs.
     */
    MdDialog.prototype._removeOpenDialog = function (dialogRef) {
        var index = this._openDialogs.indexOf(dialogRef);
        if (index > -1) {
            this._openDialogs.splice(index, 1);
        }
    };
    return MdDialog;
}());
exports.MdDialog = __decorate$59([
    _angular_core.Injectable(),
    __metadata$47("design:paramtypes", [exports.Overlay, _angular_core.Injector])
], exports.MdDialog);
/**
 * Applies default options to the dialog config.
 * @param dialogConfig Config to be modified.
 * @returns The new configuration object.
 */
function _applyConfigDefaults$1(dialogConfig) {
    return extendObject(new MdDialogConfig(), dialogConfig);
}
exports.MdDialogModule = MdDialogModule_1 = (function () {
    function MdDialogModule() {
    }
    MdDialogModule.forRoot = function () {
        return {
            ngModule: MdDialogModule_1,
            providers: [exports.MdDialog, OVERLAY_PROVIDERS, exports.InteractivityChecker, exports.MdPlatform],
        };
    };
    return MdDialogModule;
}());
exports.MdDialogModule = MdDialogModule_1 = __decorate$59([
    _angular_core.NgModule({
        imports: [exports.OverlayModule, exports.PortalModule, exports.A11yModule, exports.DefaultStyleCompatibilityModeModule],
        exports: [exports.MdDialogContainer, exports.DefaultStyleCompatibilityModeModule],
        declarations: [exports.MdDialogContainer],
        entryComponents: [exports.MdDialogContainer],
    })
], exports.MdDialogModule);
var MdDialogModule_1;

var __decorate$62 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MdAutocomplete = (function () {
    function MdAutocomplete() {
    }
    return MdAutocomplete;
}());
MdAutocomplete = __decorate$62([
    _angular_core.Component({
        selector: 'md-autocomplete, mat-autocomplete',
        template: require('./autocomplete.html'),
        styles: [require('./autocomplete.css').toString()],
        encapsulation: _angular_core.ViewEncapsulation.None,
    })
], MdAutocomplete);

var __decorate$61 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MdAutocompleteModule = MdAutocompleteModule_1 = (function () {
    function MdAutocompleteModule() {
    }
    MdAutocompleteModule.forRoot = function () {
        return {
            ngModule: MdAutocompleteModule_1,
            providers: []
        };
    };
    return MdAutocompleteModule;
}());
MdAutocompleteModule = MdAutocompleteModule_1 = __decorate$61([
    _angular_core.NgModule({
        imports: [exports.DefaultStyleCompatibilityModeModule],
        exports: [MdAutocomplete, exports.DefaultStyleCompatibilityModeModule],
        declarations: [MdAutocomplete],
    })
], MdAutocompleteModule);
var MdAutocompleteModule_1;

var __decorate$19 = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var MATERIAL_MODULES = [
    MdAutocompleteModule,
    exports.MdButtonModule,
    exports.MdButtonToggleModule,
    exports.MdCardModule,
    exports.MdChipsModule,
    exports.MdCheckboxModule,
    exports.MdDialogModule,
    exports.MdGridListModule,
    exports.MdIconModule,
    exports.MdInputModule,
    exports.MdListModule,
    exports.MdMenuModule,
    exports.MdProgressBarModule,
    exports.MdProgressCircleModule,
    exports.MdRadioModule,
    exports.MdRippleModule,
    exports.MdSelectModule,
    exports.MdSidenavModule,
    exports.MdSliderModule,
    exports.MdSlideToggleModule,
    exports.MdSnackBarModule,
    exports.MdTabsModule,
    exports.MdToolbarModule,
    exports.MdTooltipModule,
    exports.OverlayModule,
    exports.PortalModule,
    exports.RtlModule,
    exports.A11yModule,
    exports.PlatformModule,
    exports.ProjectionModule,
    exports.DefaultStyleCompatibilityModeModule,
];
exports.MaterialRootModule = (function () {
    function MaterialRootModule() {
    }
    return MaterialRootModule;
}());
exports.MaterialRootModule = __decorate$19([
    _angular_core.NgModule({
        imports: [
            MdAutocompleteModule.forRoot(),
            exports.MdButtonModule.forRoot(),
            exports.MdCardModule.forRoot(),
            exports.MdChipsModule.forRoot(),
            exports.MdCheckboxModule.forRoot(),
            exports.MdGridListModule.forRoot(),
            exports.MdInputModule.forRoot(),
            exports.MdListModule.forRoot(),
            exports.MdProgressBarModule.forRoot(),
            exports.MdProgressCircleModule.forRoot(),
            exports.MdRippleModule.forRoot(),
            exports.MdSelectModule.forRoot(),
            exports.MdSidenavModule.forRoot(),
            exports.MdTabsModule.forRoot(),
            exports.MdToolbarModule.forRoot(),
            exports.PortalModule.forRoot(),
            exports.ProjectionModule.forRoot(),
            exports.RtlModule.forRoot(),
            // These modules include providers.
            exports.A11yModule.forRoot(),
            exports.MdButtonToggleModule.forRoot(),
            exports.MdDialogModule.forRoot(),
            exports.MdIconModule.forRoot(),
            exports.MdMenuModule.forRoot(),
            exports.MdRadioModule.forRoot(),
            exports.MdSliderModule.forRoot(),
            exports.MdSlideToggleModule.forRoot(),
            exports.MdSnackBarModule.forRoot(),
            exports.MdTooltipModule.forRoot(),
            exports.PlatformModule.forRoot(),
            exports.OverlayModule.forRoot(),
            exports.DefaultStyleCompatibilityModeModule.forRoot(),
        ],
        exports: MATERIAL_MODULES,
    })
], exports.MaterialRootModule);
exports.MaterialModule = (function () {
    function MaterialModule() {
    }
    MaterialModule.forRoot = function () {
        return { ngModule: exports.MaterialRootModule };
    };
    return MaterialModule;
}());
exports.MaterialModule = __decorate$19([
    _angular_core.NgModule({
        imports: MATERIAL_MODULES,
        exports: MATERIAL_MODULES,
    })
], exports.MaterialModule);

exports.Portal = Portal;
exports.BasePortalHost = BasePortalHost;
exports.ComponentPortal = ComponentPortal;
exports.TemplatePortal = TemplatePortal;
exports.DomPortalHost = DomPortalHost;
exports.OVERLAY_PROVIDERS = OVERLAY_PROVIDERS;
exports.OverlayContainer = OverlayContainer;
exports.OverlayRef = OverlayRef;
exports.OverlayState = OverlayState;
exports.LIVE_ANNOUNCER_ELEMENT_TOKEN = LIVE_ANNOUNCER_ELEMENT_TOKEN;
exports.isFakeMousedownFromScreenReader = isFakeMousedownFromScreenReader;
exports.MdLineSetter = MdLineSetter;
exports.applyCssTransform = applyCssTransform;
exports.MdError = MdError;
exports.coerceBooleanProperty = coerceBooleanProperty;
exports.coerceNumberProperty = coerceNumberProperty;
exports.ConnectedPositionStrategy = ConnectedPositionStrategy;
exports.ConnectionPositionPair = ConnectionPositionPair;
exports.ConnectedOverlayPositionChange = ConnectedOverlayPositionChange;
exports.UP_ARROW = UP_ARROW;
exports.DOWN_ARROW = DOWN_ARROW;
exports.RIGHT_ARROW = RIGHT_ARROW;
exports.LEFT_ARROW = LEFT_ARROW;
exports.PAGE_UP = PAGE_UP;
exports.PAGE_DOWN = PAGE_DOWN;
exports.HOME = HOME;
exports.END = END;
exports.ENTER = ENTER;
exports.SPACE = SPACE;
exports.TAB = TAB;
exports.MATERIAL_COMPATIBILITY_MODE = MATERIAL_COMPATIBILITY_MODE;
exports.MAT_ELEMENTS_SELECTOR = MAT_ELEMENTS_SELECTOR;
exports.AnimationCurves = AnimationCurves;
exports.AnimationDurations = AnimationDurations;
exports.MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR = MD_BUTTON_TOGGLE_GROUP_VALUE_ACCESSOR;
exports.MdButtonToggleChange = MdButtonToggleChange;
exports.MD_CHECKBOX_CONTROL_VALUE_ACCESSOR = MD_CHECKBOX_CONTROL_VALUE_ACCESSOR;
exports.MdCheckboxChange = MdCheckboxChange;
exports.MdDialogConfig = MdDialogConfig;
exports.MdDialogRef = MdDialogRef;
exports.MdIconInvalidNameError = MdIconInvalidNameError;
exports.MD_INPUT_CONTROL_VALUE_ACCESSOR = MD_INPUT_CONTROL_VALUE_ACCESSOR;
exports.MdInputPlaceholderConflictError = MdInputPlaceholderConflictError;
exports.MdInputUnsupportedTypeError = MdInputUnsupportedTypeError;
exports.MdInputDuplicatedHintError = MdInputDuplicatedHintError;
exports.MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR = MD_RADIO_GROUP_CONTROL_VALUE_ACCESSOR;
exports.MdRadioChange = MdRadioChange;
exports.SELECT_OPTION_HEIGHT = SELECT_OPTION_HEIGHT;
exports.SELECT_PANEL_MAX_HEIGHT = SELECT_PANEL_MAX_HEIGHT;
exports.SELECT_MAX_OPTIONS_DISPLAYED = SELECT_MAX_OPTIONS_DISPLAYED;
exports.SELECT_TRIGGER_HEIGHT = SELECT_TRIGGER_HEIGHT;
exports.SELECT_OPTION_HEIGHT_ADJUSTMENT = SELECT_OPTION_HEIGHT_ADJUSTMENT;
exports.SELECT_PANEL_PADDING_X = SELECT_PANEL_PADDING_X;
exports.SELECT_PANEL_PADDING_Y = SELECT_PANEL_PADDING_Y;
exports.SELECT_PANEL_VIEWPORT_PADDING = SELECT_PANEL_VIEWPORT_PADDING;
exports.MdSidenavToggleResult = MdSidenavToggleResult;
exports.MD_SLIDER_VALUE_ACCESSOR = MD_SLIDER_VALUE_ACCESSOR;
exports.MdSliderChange = MdSliderChange;
exports.SliderRenderer = SliderRenderer;
exports.MD_SLIDE_TOGGLE_VALUE_ACCESSOR = MD_SLIDE_TOGGLE_VALUE_ACCESSOR;
exports.MdSlideToggleChange = MdSlideToggleChange;
exports.SHOW_ANIMATION = SHOW_ANIMATION;
exports.HIDE_ANIMATION = HIDE_ANIMATION;
exports.MdSnackBarConfig = MdSnackBarConfig;
exports.MdSnackBarRef = MdSnackBarRef;
exports.MdTabChangeEvent = MdTabChangeEvent;
exports.TOUCHEND_HIDE_DELAY = TOUCHEND_HIDE_DELAY;

Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=./material.umd.js.map
