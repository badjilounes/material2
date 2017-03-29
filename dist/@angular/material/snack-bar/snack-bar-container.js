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
var core_2 = require("../core");
var snack_bar_errors_1 = require("./snack-bar-errors");
var Subject_1 = require("rxjs/Subject");
// TODO(jelbourn): we can't use constants from animation.ts here because you can't use
// a text interpolation in anything that is analyzed statically with ngc (for AoT compile).
exports.SHOW_ANIMATION = '225ms cubic-bezier(0.4,0.0,1,1)';
exports.HIDE_ANIMATION = '195ms cubic-bezier(0.0,0.0,0.2,1)';
/**
 * Internal component that wraps user-provided snack bar content.
 */
var MdSnackBarContainer = (function (_super) {
    __extends(MdSnackBarContainer, _super);
    function MdSnackBarContainer(_ngZone) {
        var _this = _super.call(this) || this;
        _this._ngZone = _ngZone;
        /** Subject for notifying that the snack bar has exited from view. */
        _this.onExit = new Subject_1.Subject();
        /** Subject for notifying that the snack bar has finished entering the view. */
        _this.onEnter = new Subject_1.Subject();
        /** The state of the snack bar animations. */
        _this.animationState = 'initial';
        return _this;
    }
    /** Attach a component portal as content to this snack bar container. */
    MdSnackBarContainer.prototype.attachComponentPortal = function (portal) {
        if (this._portalHost.hasAttached()) {
            throw new snack_bar_errors_1.MdSnackBarContentAlreadyAttached();
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
}(core_2.BasePortalHost));
__decorate([
    core_1.ViewChild(core_2.PortalHostDirective),
    __metadata("design:type", core_2.PortalHostDirective)
], MdSnackBarContainer.prototype, "_portalHost", void 0);
MdSnackBarContainer = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'snack-bar-container',
        templateUrl: 'snack-bar-container.html',
        styleUrls: ['snack-bar-container.css'],
        host: {
            'role': 'alert',
            '[@state]': 'animationState',
            '(@state.done)': 'onAnimationEnd($event)'
        },
        animations: [
            core_1.trigger('state', [
                core_1.state('initial', core_1.style({ transform: 'translateY(100%)' })),
                core_1.state('visible', core_1.style({ transform: 'translateY(0%)' })),
                core_1.state('complete', core_1.style({ transform: 'translateY(100%)' })),
                core_1.transition('visible => complete', core_1.animate(exports.HIDE_ANIMATION)),
                core_1.transition('initial => visible, void => visible', core_1.animate(exports.SHOW_ANIMATION)),
            ])
        ],
    }),
    __metadata("design:paramtypes", [core_1.NgZone])
], MdSnackBarContainer);
exports.MdSnackBarContainer = MdSnackBarContainer;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/snack-bar/snack-bar-container.js.map