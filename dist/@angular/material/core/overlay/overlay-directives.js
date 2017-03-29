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
var overlay_1 = require("./overlay");
var portal_1 = require("../portal/portal");
var overlay_state_1 = require("./overlay-state");
var connected_position_1 = require("./position/connected-position");
var portal_directives_1 = require("../portal/portal-directives");
var dir_1 = require("../rtl/dir");
/** Default set of positions for the overlay. Follows the behavior of a dropdown. */
var defaultPositionList = [
    new connected_position_1.ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    new connected_position_1.ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'start', overlayY: 'bottom' }),
];
/**
 * Directive applied to an element to make it usable as an origin for an Overlay using a
 * ConnectedPositionStrategy.
 */
var OverlayOrigin = (function () {
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
OverlayOrigin = __decorate([
    core_1.Directive({
        selector: '[overlay-origin]',
        exportAs: 'overlayOrigin',
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], OverlayOrigin);
exports.OverlayOrigin = OverlayOrigin;
/**
 * Directive to facilitate declarative creation of an Overlay using a ConnectedPositionStrategy.
 */
var ConnectedOverlayDirective = (function () {
    // TODO(jelbourn): inputs for size, scroll behavior, animation, etc.
    function ConnectedOverlayDirective(_overlay, templateRef, viewContainerRef, _dir) {
        this._overlay = _overlay;
        this._dir = _dir;
        this._open = false;
        this._hasBackdrop = false;
        this._offsetX = 0;
        this._offsetY = 0;
        /** Event emitted when the backdrop is clicked. */
        this.backdropClick = new core_1.EventEmitter();
        this.positionChange = new core_1.EventEmitter();
        this.attach = new core_1.EventEmitter();
        this.detach = new core_1.EventEmitter();
        this._templatePortal = new portal_1.TemplatePortal(templateRef, viewContainerRef);
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
        var overlayConfig = new overlay_state_1.OverlayState();
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
__decorate([
    core_1.Input(),
    __metadata("design:type", OverlayOrigin)
], ConnectedOverlayDirective.prototype, "origin", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], ConnectedOverlayDirective.prototype, "positions", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], ConnectedOverlayDirective.prototype, "offsetX", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Number])
], ConnectedOverlayDirective.prototype, "offsetY", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "width", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "height", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "minWidth", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "minHeight", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", String)
], ConnectedOverlayDirective.prototype, "backdropClass", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], ConnectedOverlayDirective.prototype, "hasBackdrop", null);
__decorate([
    core_1.Input(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Boolean])
], ConnectedOverlayDirective.prototype, "open", null);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "backdropClick", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "positionChange", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "attach", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ConnectedOverlayDirective.prototype, "detach", void 0);
ConnectedOverlayDirective = __decorate([
    core_1.Directive({
        selector: '[connected-overlay]',
        exportAs: 'connectedOverlay'
    }),
    __param(3, core_1.Optional()),
    __metadata("design:paramtypes", [overlay_1.Overlay,
        core_1.TemplateRef,
        core_1.ViewContainerRef,
        dir_1.Dir])
], ConnectedOverlayDirective);
exports.ConnectedOverlayDirective = ConnectedOverlayDirective;
var OverlayModule = OverlayModule_1 = (function () {
    function OverlayModule() {
    }
    OverlayModule.forRoot = function () {
        return {
            ngModule: OverlayModule_1,
            providers: overlay_1.OVERLAY_PROVIDERS,
        };
    };
    return OverlayModule;
}());
OverlayModule = OverlayModule_1 = __decorate([
    core_1.NgModule({
        imports: [portal_directives_1.PortalModule],
        exports: [ConnectedOverlayDirective, OverlayOrigin],
        declarations: [ConnectedOverlayDirective, OverlayOrigin],
    })
], OverlayModule);
exports.OverlayModule = OverlayModule;
var OverlayModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/core/overlay/overlay-directives.js.map