import { Sequelize, Model, DataTypes } from 'sequelize';

import type { Proposal } from '../../../types';

export class ProposalDB extends Model implements Proposal {
  declare id: string; // UUID4
  declare createdAt: string;
  declare updatedAt: string;
  title: string;
  description: string;
  email?: string;
  userId?: string;
  userName?: string;
}

export function proposalDBModel(sequelize: Sequelize) {
  return ProposalDB.init(
    {
      id: {
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      title: {
        type: DataTypes.STRING,
      },
      description: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      userName: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: 'Proposal',
    }
  );
}
