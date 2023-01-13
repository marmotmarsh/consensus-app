import type { IProposal, INewProposal } from '../../../types';

export async function createProposal(
  proposal: INewProposal
): Promise<IProposal> {
  console.log('Attempting to create Proposal');
  const response = await fetch(`/api/proposal/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ proposal }),
  });
  return await response.json();
}

export async function updateProposal(proposal: IProposal): Promise<IProposal> {
  const response = await fetch(`/api/proposal/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ proposal }),
  });
  return await response.json();
}

export async function getProposal(id: string): Promise<IProposal> {
  const response = await fetch('/api/get-proposal');
  return await response.json();
}
