// Library
import * as express from 'express';
const router = express.Router();

export default (app) => {
  const handle = app.getRequestHandler();

  router.get('/', (req, res) => {
    const actualPage = '/';
    app.render(req, res, actualPage);
  });

  router.get('/count', (req, res) => {
    const actualPage = '/count';
    app.render(req, res, actualPage);
  });

  router.get('*', (req, res) => {
    return handle(req, res);
  });

  return router;
};
