export interface ErrorDetails {
    details?: unknown;
    code?: number | string;
}
export declare class ErrorDeets extends Error {
    readonly details: unknown;
    readonly code: number | string;
    constructor(m: string, opts?: ErrorDetails);
}
