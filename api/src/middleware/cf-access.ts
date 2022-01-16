import { createRemoteJWKSet, jwtVerify } from "jose"
import {jsonResponse} from "../utils/jsonResponse";

const validateJWT = async (jwtAssertion: string | null, aud: string, teamsUrl: string) => {
    if(jwtAssertion == null) return false;

    const JWKS = createRemoteJWKSet(new URL(`${teamsUrl}/cdn-cgi/access/certs`))

    const { payload } = await jwtVerify(jwtAssertion, JWKS, {
        issuer: teamsUrl,
        audience: aud
    })

    if(payload == null) return false;

    return payload;
};


const CFAccess = async (request: Request, env: Env) => {
    const jwtPayload = await validateJWT(
        request.headers.get("CF-Access-JWT-Assertion"),
        env.AUD,
        env.TEAM_DOMAIN
    );

    if (jwtPayload === false)
        return jsonResponse({
            error: "Access Denied"
        }, {
            status: 403
        });
}

export default CFAccess
