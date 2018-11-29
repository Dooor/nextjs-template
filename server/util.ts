// lib
import * as Logger from '../src/lib/logger';

// Event listener for HTTP server "error" event.
export const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }

  const port = normalizePort(process.env.PORT);
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
};

/**
 * Normalize a port into a number, string, or false.
 */
export const normalizePort = (val) => {
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