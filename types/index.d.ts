export interface INewProposal {
  title: string;
  description: string;
  name: string;
  email: string;
}

export interface IProposal extends INewProposal {
  id: string;
}
