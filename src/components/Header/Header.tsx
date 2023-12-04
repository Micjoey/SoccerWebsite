import React from "react";
import "./Header.scss";
import ContactLink from "./Contact";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="brand-container">
        <a href="/" className="navbar-brand">
          GoalNetServer
        </a>
      </div>
      <nav className="navbar">
        <a href="/schedule" className="nav-link">
          Schedule
        </a>
        <a href="/game" className="nav-link">
          Game Manager
        </a>
        <a href="/profile" className="nav-link">
          Profile
        </a>
        <ContactLink />
      </nav>
    </header>
  );
};

export default Header;
