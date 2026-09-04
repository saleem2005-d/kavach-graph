export const API_BASE = "https://tracegraph-api-production.up.railway.app";

export async function fetchWithFallback(endpoint, options = {}) {
  try {
    const res = await fetch(\\, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        ...(options.headers || {})
      }
    });
    if (!res.ok) throw new Error(HTTP \);
    return await res.json();
  } catch (err) {
    console.warn([TraceGraph API Network Issue on \]:, err);
    throw err;
  }
}
