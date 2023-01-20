import * as bodyParser from 'body-parser';
import express from 'express';

import { Logger } from './app/logger';
import Routes from './app/routes';

class App {
  public express: express.Application;
  public logger: Logger;

  // array to hold users
  public users: any[];

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.users = [];
    this.logger = new Logger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    this.express.use(express.static(process.cwd() + '/my-app/dist/'));
  }

  private routes(): void {
    this.express.get('/', (req, res, next) => {
      res.sendFile(process.cwd() + '/my-app/dist/index.html');
    });

    // user route
    this.express.use('/api', Routes);

    // handle undefined routes
    this.express.use('*', (req, res, next) => {
      res.send('Make sure url is correct!');
      console.log(req);
    });
  }
}

export default new App().express;
