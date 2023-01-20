import { Op } from 'sequelize';
import _ from 'lodash';

import type { NewProposal, Proposal } from '../../../types';

import db from '../models';

const ProposalDB = db.proposals;

// Create and Save a new Proposal
export async function create(req: any, res: any) {
  // Validate request
  if (!req.body.title || !req.body.description) {
    res.status(400).send({
      message: 'Title and Description fields can not be empty!',
    });
    return;
  }

  // Save Proposal in the database
  try {
    const proposal: NewProposal = _.pick(req.body, [
      'title',
      'description',
      'email',
      'userId',
      'userName',
    ]);
    const data = await ProposalDB.create(proposal as any);
    return data;
  } catch (e) {
    res.status(500).send({
      message: e.message || 'Some error occurred while creating the Proposal.',
    });
  }
}

// Retrieve all Tutorials from the database.
export function findAll(req: any, res: any) {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  ProposalDB.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      });
    });
}

// Find a single Tutorial with an id
export function findOne(req: any, res: any) {
  const id = req.params.id;

  ProposalDB.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Tutorial with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error retrieving Tutorial with id=' + id,
      });
    });
}

// Update a Tutorial by the id in the request
export function update(req: any, res: any) {
  const id = req.params.id;

  ProposalDB.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num.length == 1) {
        res.send({
          message: 'Tutorial was updated successfully.',
        });
      } else {
        res.send({
          message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Tutorial with id=' + id,
      });
    });
}

// Delete a Tutorial with the specified id in the request
export function deleteOne(req: any, res: any) {
  const id = req.params.id;

  ProposalDB.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: 'Tutorial was deleted successfully!',
        });
      } else {
        res.send({
          message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Tutorial with id=' + id,
      });
    });
}

// Delete all Tutorials from the database.
export function deleteAll(req: any, res: any) {
  ProposalDB.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Tutorials were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while removing all tutorials.',
      });
    });
}

// find all published Tutorial
export function findAllPublished(req: any, res: any) {
  ProposalDB.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || 'Some error occurred while retrieving tutorials.',
      });
    });
}
