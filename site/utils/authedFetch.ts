export const authedFetch = (value: string | Request, init: RequestInit, jwt: string) =>
    fetch(value, {
        headers: {
            'CF-Access-JWT-Assertion': jwt,
            ...init.headers
        },
        ...init
    })
