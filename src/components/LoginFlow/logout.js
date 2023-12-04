export const logout = () => {
  // Clear the "authToken" from sessionStorage
  sessionStorage.removeItem("authToken");
  window.location = "/login";
};
