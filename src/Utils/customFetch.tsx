import getAuthorizationHeaders from "../components/LoginFlow/authorizeJwtToken";

// Create a custom fetch function that adds authorization headers
const customFetch = async (
  url: string,
  options: RequestInit = {},
): Promise<Response> => {
  const headers = getAuthorizationHeaders();

  // Merge the headers with any additional headers provided in the options
  options.headers = {
    ...headers,
    ...options.headers,
  };

  const response = await fetch(url, options);
  console.log(response);
  return response;
};

export default customFetch;
