// Library
import * as bodyParser from 'body-parser';
import * as compression from 'compression';
import * as cors from 'cors';
import * as express from 'express';
import * as helmet from 'helmet';

// util
import { onError, onListening } from './util';

const server = express();
server.disable('x-powered-by');
server.use(cors());
server.use(bodyParser.json());
server.set('trust proxy', 1);
server.use(compression());
server.use(helmet());
server.on('listening', onListening);
server.on('error', onError);

export default server;
