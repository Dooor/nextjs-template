// Library
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';
import * as next from 'next';

// lib
import * as Logger from '../src/lib/logger';

// util
import { normalizePort, onError } from './util';

// setting
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const PORT = normalizePort(process.env.PORT || 3000);

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

    server.listen(PORT, (error: any) => {
      if (error) { throw error; }
      Logger.log(`> Ready on PORT ${PORT}`);
    });
  })
  .catch((ex) => {
    Logger.error(ex.stack);
    process.exit(1);
  });
