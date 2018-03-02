

export interface ErrorDetails {
  details?: any;
  code?: number | string;
}

export class ErrorDeets extends Error {
  readonly details: any;
  readonly code: number | string;
  constructor(
    m: string, opts?: ErrorDetails) {
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
