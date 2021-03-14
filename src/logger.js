import pino from 'pino';

import { LOGGER_LEVEL } from './config';

const logger = pino({
  level: LOGGER_LEVEL,
});

export default logger;
