export interface NewProposal {
  title: string;
  description: string;
  email?: string;
  userId?: string;
  userName?: string;
}

export interface Proposal extends NewProposal {
  id: string;
  createdAt: string;
  updatedAt: string;
}

export interface PublicUser {
  name: string;
  email: string;
}

export interface User extends PublicUser {
  id: string;
  createdAt: string;
  updatedAt: string;
  isPremium: boolean;
}

export enum ThumbEnum {
  Yes = 'Yes',
  No = 'No',
  Sideways = 'Sideways',
  NoReply = 'No Reply',
}

export interface ProposalResponse {
  id: string;
  proposalId: string;
  thumb: ThumbEnum;
  comment: string;
}
