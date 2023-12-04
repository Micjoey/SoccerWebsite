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

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignupScreen />} />
          <Route
            path="/"
            element={
              <PrivateRoute
                element={<HomePage />}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/schedule"
            element={
              <PrivateRoute
                element={<SchedulePage />}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/game"
            element={
              <PrivateRoute
                element={<GameScheduleManager />}
                authenticated={authenticated}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute
                element={<Profile />}
                authenticated={authenticated}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
