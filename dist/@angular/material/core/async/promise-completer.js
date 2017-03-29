"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PromiseCompleter = (function () {
    function PromiseCompleter() {
        var _this = this;
        this.promise = new Promise(function (res, rej) {
            _this.resolve = res;
            _this.reject = rej;
        });
    }
    return PromiseCompleter;
}());
exports.PromiseCompleter = PromiseCompleter;
//# sourceMappingURL=/Users/lounesbadji/workspace_ubilab/material2/src/lib/core/async/promise-completer.js.map