import {Router} from 'itty-router'

import UrlGet from './handler/url-get'
import UrlPost from './handler/url-post'
import CFAccess from "./middleware/cf-access";

const router: Router<Request> = Router()

router
    .get('/api/urls/:name', UrlGet)
    .post('/api/urls', (request: Request, env: Env) => CFAccess(request, env), UrlPost)
    .get('*', () => new Response("Not found", { status: 404 }))

export default {
    async fetch(request: Request, environment: Env, context: ExecutionContext) {
        return router.handle(request, environment, context);
    }
}
