"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
// Whether the current platform supports the V8 Break Iterator. The V8 check
// is necessary to detect all Blink based browsers.
var hasV8BreakIterator = (window.Intl && window.Intl.v8BreakIterator);
/**
 * Service to detect the current platform by comparing the userAgent strings and
 * checking browser-specific global properties.
 */
var MdPlatform = (function () {
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
MdPlatform = __decorate([
    core_1.Injectable()
], MdPlatform);
exports.MdPlatform = MdPlatform;
var PlatformModule = PlatformModule_1 = (function () {
    function PlatformModule() {
    }
    PlatformModule.forRoot = function () {
        return {
            ngModule: PlatformModule_1,
            providers: [MdPlatform],
        };
    };
    return PlatformModule;
}());
PlatformModule = PlatformModule_1 = __decorate([
    core_1.NgModule({})
], PlatformModule);
exports.PlatformModule = PlatformModule;
var PlatformModule_1;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/core/platform/platform.js.map