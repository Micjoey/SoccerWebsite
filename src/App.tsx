import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import SchedulePage from "./components/SchedulePage/SchedulePage";
import Header from "./components/Header/Header";
import GameScheduleManager from "./components/GameScheduleManager/GameScheduleManager";
import Profile from "./components/Profile/profile";
import Login from "./components/LoginFlow/Login/login";
import PrivateRoute from "./components/LoginFlow/privateRoute";
import SignupScreen from "./components/LoginFlow/SignUp/signup";

function App() {
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated (e.g., by verifying a token in localStorage)
    const token = localStorage.getItem("authToken"); // Replace with your actual token key
    if (token) {
      // User is authenticated, set authenticated state to true
      setAuthenticated(true);
    } else {
      // User is not authenticated, set authenticated state to false
      setAuthenticated(false);
    }
  }, []);

  // Define your route configurations with an isPrivate property
  const routes = [
    { path: "/login", element: <Login />, isPrivate: false },
    { path: "/signup", element: <SignupScreen />, isPrivate: false },
    { path: "/", element: <HomePage />, isPrivate: true },
    { path: "/schedule", element: <SchedulePage />, isPrivate: true },
    { path: "/game", element: <GameScheduleManager />, isPrivate: true },
    { path: "/profile", element: <Profile />, isPrivate: true },
  ];

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                route.isPrivate ? (
                  <PrivateRoute
                    element={route.element}
                    authenticated={authenticated}
                  />
                ) : (
                  route.element
                )
              }
            />
          ))}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
