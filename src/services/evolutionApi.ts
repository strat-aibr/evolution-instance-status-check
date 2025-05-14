
// This file contains the services for communicating with the Evolution API

/**
 * Gets the API URL from environment variables
 * Falls back to a default if not set
 */
const getApiUrl = () => {
  return import.meta.env.VITE_API_URL || 'https://evolution.metricaas.com.br';
};

/**
 * Gets the API key from environment variables
 */
const getApiKey = () => {
  return import.meta.env.VITE_API_KEY || '';
};

/**
 * Interface for the connection status response
 */
interface ConnectionStatusResponse {
  connected: boolean;
  qrcode?: string;
  code?: string;
  status?: string;
  pairingCode?: string;
}

/**
 * Checks the connection status of a WhatsApp instance
 * @param {string} instance - The instance ID to check
 * @returns {Promise<ConnectionStatusResponse>}
 */
export const checkInstanceConnection = async (instance: string): Promise<ConnectionStatusResponse> => {
  try {
    const apiUrl = getApiUrl();
    const apiKey = getApiKey();
    
    // Build the request URL
    const url = `${apiUrl}/instance/connect/${instance}`;
    
    const headers: HeadersInit = {};
    if (apiKey) {
      headers['Authorization'] = `Bearer ${apiKey}`;
    }

    console.log(`Checking connection for instance: ${instance} at ${url}`);
    
    const response = await fetch(url, { headers });
    
    if (!response.ok) {
      throw new Error(`API responded with status ${response.status}`);
    }
    
    const data: ConnectionStatusResponse = await response.json();
    console.log('API Response:', data);
    
    return data;
  } catch (error) {
    console.error("Error checking connection:", error);
    throw error;
  }
};
