import React, { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);

  // Function to clear userInfo
  const clearUserInfo = () => {
    setUserInfo(null);
  };

  // Check the validity of the token when the component mounts
  useEffect(() => {
    console.log("UserProvider initialized", userInfo);
    const token = sessionStorage.getItem("authToken");

    // Token validation logic here
    if (token) {
      try {
        const decodedToken = JSON.parse(atob(token.split(".")[1])); // Decode the token payload
        const currentTime = Date.now() / 1000; // Get current time in seconds

        // Check if the token has expired
        if (decodedToken.exp < currentTime) {
          // Token is expired, clear userInfo
          console.log("hit clearing");
          clearUserInfo();
        }
      } catch (error) {
        // An error occurred while decoding the token, clear userInfo
        clearUserInfo();
      }
    }
  }, []);

  return (
    <UserContext.Provider value={{ userInfo, setUserInfo, clearUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  console.log(context);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
