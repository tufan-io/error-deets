"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorDeets = void 0;
class ErrorDeets extends Error {
    constructor(m, opts) {
        super(m);
        const { details, code } = Object.assign({
            details: undefined,
            code: undefined,
        }, opts);
        this.details = details;
        this.code = code;
        // Maintainer warning:
        // only one leg of this conditional can be exercised on an OS.
        // So we ignore coverage after having tested this manually.
        /* istanbul ignore next */
        this.stack = this.stack
            ? this.stack
                .split("\n")
                .map((l) => l.replace(/\\+/g, "/"))
                .join("\n")
            : this.stack;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ErrorDeets.prototype);
    }
}
exports.ErrorDeets = ErrorDeets;
//# sourceMappingURL=index.js.map