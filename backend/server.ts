// Library
import bodyParser from 'body-parser';
import compression from 'compression';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

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
