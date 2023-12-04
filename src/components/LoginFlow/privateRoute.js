import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element }) => {
  const authenticated = sessionStorage.getItem("authToken");
  return authenticated ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
};

export default PrivateRoute;
