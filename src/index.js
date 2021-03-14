import http from 'http';

import app from './app';
import logger from './logger';
import { PORT, NODE_ENV } from './config';

const server = http.createServer(app.callback());

server.listen(PORT, () => {
  logger.info(`PID: ${process.pid}`);
  logger.info(`Environment: ${NODE_ENV}`);
  logger.info(`Listen on: http://0.0.0.0:${PORT}`);
});

app.on('error', (err, ctx) => {
  logger.error(err);
});

function handleSignal(signal) {
  return () => {
    logger.info(`${signal} signal received.`);

    server.close((err) => {
      if (err) {
        logger.error(err);

        process.exit(1);
      }

      process.exit(0);
    });
  };
}

function handleErrors(err) {
  logger.error(err);

  process.exit(1);
}

process.on('SIGTERM', handleSignal('SIGTERM'));
process.on('SIGINT', handleSignal('SIGINT'));
process.on('SIGQUIT', handleSignal('SIGQUIT'));

process.on('uncaughtException', handleErrors);
process.on('uncaughtRejection', handleErrors);
