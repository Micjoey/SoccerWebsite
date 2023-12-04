import React from "react";
import "./Header.scss";
import ContactLink from "./Contact";
import { logout } from "../LoginFlow/logout";
import getAuthorizationHeaders from "../LoginFlow/authorizeJwtToken";

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="brand-container">
        <a href="/" className="navbar-brand">
          GoalNetServer
        </a>
      </div>
      <nav className="navbar">
        <div>
          <a href="/schedule" className="nav-link">
            Schedule (GSSL)
          </a>
          <a href="/game" className="nav-link">
            Game Manager
          </a>
          <a href="/profile" className="nav-link">
            Profile
          </a>
        </div>
        {Object.keys(getAuthorizationHeaders()).length ? (
          <button onClick={() => logout()}>Logout</button>
        ) : null}
        {/* <ContactLink /> */}
      </nav>
    </header>
  );
};

export default Header;
