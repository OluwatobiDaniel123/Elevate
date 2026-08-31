const API_BASE_URL = import.meta.env.VITE_API_URL ?? '';

export type LeadPayload = {
  lead_source: string;
  form_data: Record<string, unknown>;
};

export async function submitLead(payload: LeadPayload): Promise<void> {
  if (!API_BASE_URL) {
    throw new Error('VITE_API_URL is not set. Add it to your .env when your backend is ready.');
  }

  const response = await fetch(`${API_BASE_URL}/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }
}
