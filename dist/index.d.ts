export interface ErrorDetails {
    details?: any;
    code?: number | string;
}
export declare class ErrorDeets extends Error {
    readonly details: any;
    readonly code: number | string;
    constructor(m: string, opts?: ErrorDetails);
}
