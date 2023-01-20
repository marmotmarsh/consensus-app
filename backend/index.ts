import * as http from 'http';
import express from 'express';
import cors from 'cors';

import App from './app';
import { Logger } from './app/logger';
import db from './app/models';

const port = 5273;

// var env = process.env.NODE_ENV || 'development';
// var config = require('./config')[env];

App.set('port', port);
const server = http.createServer(App);
server.listen(port);

const logger = new Logger();

// App.use(
//   cors({
//     origin: 'http://localhost:8081',
//   })
// );

// parse requests of content-type - application/json
App.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
App.use(express.urlencoded({ extended: true }));

db.sequelize
  .sync()
  .then(() => {
    console.log('Synced db.');
  })
  .catch((err) => {
    console.log('Failed to sync db: ' + err.message);
  });

server.on('listening', function (): void {
  const addr = server.address();
  const bind = typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
  logger.info(`Listening on ${bind}`);
});

module.exports = App;
