/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./HomePage.scss";

const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <main>
        <section className="text-center mt-5">
          <h1>Welcome to Our Team's Website</h1>
          <p className="lead">Your Source for Team Information</p>
          <p className="mt-4">
            This website is designed to help team managers efficiently manage
            team availability and provide easy access to the team schedule.
          </p>
          <a href="/schedule" className="btn btn-primary mt-3">
            View Schedule
          </a>
          {/* Add more links or buttons to other sections of the website */}
        </section>
      </main>
    </div>
  );
};

export default HomePage;
