import * as bodyParser from 'body-parser';
import express from 'express';

import { Logger } from '../logger';
import Proposal from './proposal.route';

class Routes {
  public express: express.Application;
  public logger: Logger;

  // array to hold users
  public users: any[];

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.logger = new Logger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    // proposal route
    this.express.use('/', Proposal);
  }
}

export default new Routes().express;
