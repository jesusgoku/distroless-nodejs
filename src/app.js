import Koa from 'koa';

import routes from './routes';
import * as middleware from './middleware';

const app = new Koa();

app.use(middleware.errorHandler);

app.use(routes.routes());
app.use(routes.allowedMethods());

export default app;
