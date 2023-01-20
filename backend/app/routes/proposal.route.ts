import * as bodyParser from 'body-parser';
import express from 'express';
import expressAsyncHandler from 'express-async-handler';

import type { NewProposal } from '../../../types';

import { Logger } from '../logger';
import { create as createProposal } from '../controllers/proposal.controller';

class ProposalRouter {
  public express: express.Application;
  public logger: Logger;

  // array to hold proprosals
  public newProposals: NewProposal[];

  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
    this.newProposals = [];
    this.logger = new Logger();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes(): void {
    // request to post new proposal
    this.express.post(
      '/proposal/create',
      expressAsyncHandler(async (req, res, next) => {
        this.logger.info('url:::::::' + req.url);
        this.newProposals.push(req.body.proposal);
        const proposal = await createProposal(req, res);
        res.json(proposal);
      })
    );

    // // request to get all the users
    // this.express.get('/users', (req, res, next) => {
    //   this.logger.info('url:' + req.url);
    //   res.json(this.users);
    // });

    // // request to get all the users by userName
    // this.express.get('/users/:userName', (req, res, next) => {
    //   this.logger.info('url:::::' + req.url);
    //   const user = this.users.filter(function (user) {
    //     if (req.params.userName === user.userName) {
    //       return user;
    //     }
    //   });
    //   res.json(user);
    // });

    // // request to post the user
    // // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
    // this.express.post('/user', (req, res, next) => {
    //   this.logger.info('url:::::::' + req.url);
    //   this.users.push(req.body.user);
    //   res.json(this.users);
    // });
  }
}

export default new ProposalRouter().express;
