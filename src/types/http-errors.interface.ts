interface Problem {
    title: string
    status?: number
    details?: string
    errors?: Record<string, string[]>
}

//400
interface BadRequestError extends Problem {}
//403
interface UnauthorizedError extends Problem {}
//400
interface ValidationError extends Problem {}
//404
interface NotFoundError extends Problem {}
//500
interface UnhandledException extends Problem {}

interface NetworkError extends Problem {}

type ApiError =
    | BadRequestError
    | NetworkError
    | NotFoundError
    | UnhandledException
    | UnauthorizedError
    | ValidationError

export type {
    Problem,
    BadRequestError,
    NetworkError,
    NotFoundError,
    UnauthorizedError,
    UnhandledException,
    ValidationError,
    ApiError,
}
