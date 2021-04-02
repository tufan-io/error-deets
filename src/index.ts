export interface ErrorDetails {
  details?: unknown;
  code?: number | string;
}

export class ErrorDeets extends Error {
  readonly details: unknown;
  readonly code: number | string;
  constructor(m: string, opts?: ErrorDetails) {
    super(m);
    const { details, code } = Object.assign(
      {
        details: undefined,
        code: undefined,
      },
      opts
    );
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
