import React from "react";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="header">
      <h1 className="title">Our Soccer Team</h1>
      <nav className="navigation">
        <a href="/schedule">Schedule</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
