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

  if (response.status === 401) {
    // Clear the authToken from sessionStorage
    sessionStorage.removeItem("authToken");

    // Redirect the user to the login screen
    window.location.href = "/login";
  }

  return response;
};

export default customFetch;
