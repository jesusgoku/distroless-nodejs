import * as controllers from './controllers';

async function getHashStr(ctx) {
  const { algo = 'md5', str, format } = ctx.query;

  const hash = controllers.hashStr(algo, str);

  switch (format || ctx.request.accepts(['json', 'text'])) {
    case 'json':
      ctx.body = { hash, algo };
      break;
    case 'text':
      ctx.body = hash;
      break;
    default:
      ctx.throw(406, 'Return only json and text');
  }
}

async function getHealth(ctx) {
  ctx.body = controllers.getHealth();
}

export { getHashStr, getHealth };
