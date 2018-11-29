// Library
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as next from 'next';

// lib
import * as Logger from './src/lib/logger';

// setting
const dev = process.env.NODE_ENV !== 'production';
const dir = './';
const app = next({ dev, dir });
const PORT = process.env.PORT || 3000;

Logger.log(`> Starting server on PORT ${PORT} in ${process.env.NODE_ENV}`);

/**
 * Normalize a port into a number, string, or false.
 */
const normalizePort = (val) => {
  Logger.error(`> PORT ${val}`);
  const port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
};

/**
 * Event listener for HTTP server "error" event.
 */

function onError(error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const port = normalizePort(PORT);
  const bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
  case 'EACCES':
    Logger.error(bind + ' requires elevated privileges');
    process.exit(1);
    break;
  case 'EADDRINUSE':
    Logger.error(bind + ' is already in use');
    process.exit(1);
    break;
  default:
    throw error;
  }
}

app.prepare()
  .then(async () => {
    const server = express();
    server.disable('x-powered-by');
    server.use(cors());
    server.use(bodyParser.json());
    server.set('trust proxy', 1);
    server.use(compression());
    server.use(helmet());
    server.on('error', onError);

    const handle = app.getRequestHandler();

    server.get('/', (req, res) => {
      const actualPage = '/';
      app.render(req, res, actualPage);
    });

    server.get('/count', (req, res) => {
      const actualPage = '/count';
      app.render(req, res, actualPage);
    });

    server.get('*', (req, res) => {
      return handle(req, res);
    });

    server.listen(normalizePort(PORT), (error: any) => {
      if (error) { throw error; }
      Logger.log(`> Ready on PORT ${PORT}`);
    });
  })
  .catch((ex) => {
    Logger.error(ex.stack);
    process.exit(1);
  });
