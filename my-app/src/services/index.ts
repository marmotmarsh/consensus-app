export async function getAllConsenses() {
  const response = await fetch('/api/consensus/all');
  return await response.json();
}

export async function createUser(data) {
  const response = await fetch(`/api/user`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ user: data }),
  });
  return await response.json();
}
