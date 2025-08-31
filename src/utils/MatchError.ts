export class MatchError extends Error {
    constructor(value: never, opts?: {
        name?: string,
    }) {
        super(`Unexpected value: ${JSON.stringify(value)}` + (opts?.name != null ? `at ${JSON.stringify(opts.name)}` : ''));
    }
}
