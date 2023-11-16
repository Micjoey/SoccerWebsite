// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage/HomePage";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";
import ScheduleComponent from "./components/ScheduleComponent/ScheduleComponent";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/schedule" element={<ScheduleComponent />} />{" "}
          {/* Add the schedule route */}
          {/* Define other routes as needed */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
