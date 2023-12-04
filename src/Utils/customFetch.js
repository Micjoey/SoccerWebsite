import getAuthorizationHeaders from "../components/LoginFlow/authorizeJwtToken";

// Create a custom fetch function that adds authorization headers
const customFetch = async (url, options = {}) => {
  const headers = getAuthorizationHeaders();

  // Merge the headers with any additional headers provided in the options
  options.headers = {
    ...headers,
    ...options.headers,
  };

  const response = await fetch(url, options);

  if (!response.ok) {
    // Handle error responses here, if needed
    throw new Error(`Request to ${url} failed with status ${response.status}`);
  }

  return response;
};

export default customFetch;
