import getAuthorizationHeaders from "./authorizeJwtToken";

export const logout = () => {
  // Clear the "authToken" from sessionStorage
  sessionStorage.removeItem("authToken");
  window.location = "/login";
};

export const isLoggedIn = () => {
  const hasJWTtoken = !!getAuthorizationHeaders();
};
