import {jsonResponse} from "../utils/jsonResponse";

export const onRequestGet: PagesFunction<Env> = async ({request, env: Env}) => {
    return jsonResponse(
        {status: 200}
    );
}
