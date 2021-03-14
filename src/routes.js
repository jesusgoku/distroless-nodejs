import Router from 'koa-router';

import * as handlers from './handlers';

const router = new Router();

router.get('/hash', handlers.getHashStr);
router.get('/health', handlers.getHealth);

export default router;
