import type { Proposal, NewProposal } from '../../../types';

const URL = process.env.API_URL;

export async function createProposal(proposal: NewProposal): Promise<Proposal> {
  console.log('Attempting to create Proposal');
  const response = await fetch(`${URL}/proposals/create`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      ...proposal,
      userId: proposal.userId || null,
      userName: proposal.userName || null,
      email: proposal.email || null,
    }),
  });
  return await response.json();
}

export async function updateProposal(proposal: Proposal): Promise<Proposal> {
  const response = await fetch(`${URL}/proposals/update`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ proposal }),
  });
  return await response.json();
}

export async function getProposal(id: string): Promise<Proposal> {
  const response = await fetch('/api/get-proposal');
  return await response.json();
}
