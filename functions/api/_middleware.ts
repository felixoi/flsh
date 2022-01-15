import { createRemoteJWKSet, jwtVerify } from "jose"

const validateJWT = async (jwtAssertion: string | null, aud: string, teamsUrl: string) => {
    const JWKS = createRemoteJWKSet(new URL(`${teamsUrl}/cdn-cgi/access/certs`))

    const { payload } = await jwtVerify(jwtAssertion, JWKS, {
        issuer: teamsUrl,
        audience: aud
    })

    if(payload == null) {
        return false;
    }

    return payload;
};

const cloudflareAccessMiddleware: PagesFunction<Env> =
    async ({ request, env, next, data }) => {
        const jwtPayload = await validateJWT(
            request.headers.get("CF-Access-JWT-Assertion"),
            env.AUD,
            env.TEAM_DOMAIN
        );

        if (jwtPayload === false)
            return new Response("Access denied.", { status: 403 });

        // We could also use the data object to pass information between middlewares
        data.user = jwtPayload.email;

        return next();
    };

export const onRequest = [cloudflareAccessMiddleware];
