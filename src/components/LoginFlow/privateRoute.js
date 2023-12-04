import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const authToken = sessionStorage.getItem("authToken");

  // Check if the user is authenticated based on the presence of the authToken
  if (!authToken) {
    // If not authenticated, redirect to the login page
    return (
      <Navigate
        to="/login"
        replace
        state={{ from: window.location.pathname }}
      />
    );
  }

  // If authenticated, render the protected route
  return element;
};

export default PrivateRoute;
