// Centralized TraceGraph API Configuration
const BASE_URL = import.meta.env.VITE_API_BASE_URL || "https://tracegraph-api-production.up.railway.app";

export const API_ENDPOINTS = {
  HEALTH: ${BASE_URL}/health,
  HEAT_MATRIX: ${BASE_URL}/api/v1/atms/heat-matrix,
  PROCESS_FIR: ${BASE_URL}/api/v1/incident/process-fir,
  BASE: BASE_URL
};

export default API_ENDPOINTS;
