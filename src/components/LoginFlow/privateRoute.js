import { Route, Navigate } from "react-router-dom";

const PrivateRoute = ({ element, authenticated }) => {
  console.log("I am: ", authenticated);
  return authenticated ? (
    element
  ) : (
    <Navigate to="/login" replace state={{ from: window.location.pathname }} />
  );
};

export default PrivateRoute;
