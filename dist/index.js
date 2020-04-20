"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ErrorDeets extends Error {
    constructor(m, opts) {
        super(m);
        const { details, code } = Object.assign({
            details: undefined,
            code: undefined
        }, opts);
        this.details = details;
        this.code = code;
        // Set the prototype explicitly.
        Object.setPrototypeOf(this, ErrorDeets.prototype);
    }
}
exports.ErrorDeets = ErrorDeets;
//# sourceMappingURL=index.js.map