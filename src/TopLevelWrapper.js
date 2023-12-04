// TopLevelWrapper.js
import React from "react";
import { UserProvider } from "./components/Profile/UserContext";

const TopLevelWrapper = ({ children }) => {
  return <UserProvider>{children}</UserProvider>;
};

export default TopLevelWrapper;
