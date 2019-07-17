// Library
import next from 'next';

// express
import router from './router';
import server from './server';

// lib
import * as Logger from '../src/lib/logger';

// util
import { normalizePort } from './util';

// setting
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const PORT = normalizePort(process.env.PORT || 3000);

const onPrepare = async () => {
  server.use('/', router(app));
  server.listen(PORT);
};

const onError = (ex) => {
  Logger.error(ex.stack);
  process.exit(1);
};

app.prepare()
  .then(onPrepare)
  .catch(onError);
