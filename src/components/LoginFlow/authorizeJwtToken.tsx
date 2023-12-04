const getAuthorizationHeaders = (): HeadersInit => {
  const token = localStorage.getItem("authToken"); // Retrieve the JWT token from localStorage

  if (token) {
    return {
      Authorization: `Bearer ${token}`, // Include the token in the headers
    };
  } else {
    return {}; // No token found, return empty headers
  }
};

export default getAuthorizationHeaders;
