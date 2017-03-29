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
// "Polyfill" for `Node.replaceWith()`.
// cf. https://developer.mozilla.org/en-US/docs/Web/API/ChildNode/replaceWith
function _replaceWith(toReplaceEl, otherEl) {
    toReplaceEl.parentElement.replaceChild(otherEl, toReplaceEl);
}
var DomProjectionHost = (function () {
    function DomProjectionHost(ref) {
        this.ref = ref;
    }
    return DomProjectionHost;
}());
DomProjectionHost = __decorate([
    core_1.Directive({
        selector: 'dom-projection-host'
    }),
    __metadata("design:paramtypes", [core_1.ElementRef])
], DomProjectionHost);
exports.DomProjectionHost = DomProjectionHost;
var DomProjection = (function () {
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
DomProjection = __decorate([
    core_1.Injectable()
], DomProjection);
exports.DomProjection = DomProjection;
var ProjectionModule = ProjectionModule_1 = (function () {
    function ProjectionModule() {
    }
    ProjectionModule.forRoot = function () {
        return {
            ngModule: ProjectionModule_1,
            providers: [DomProjection]
        };
    };
    return ProjectionModule;
}());
ProjectionModule = ProjectionModule_1 = __decorate([
    core_1.NgModule({
        exports: [DomProjectionHost],
        declarations: [DomProjectionHost],
    })
], ProjectionModule);
exports.ProjectionModule = ProjectionModule;
var ProjectionModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_perso/material2-2.0.0-alpha.11/src/lib/core/projection/projection.js.map