import React from 'react';
import './HomePage.scss';
import Header from '../Header/Header';

export const HomePage: React.FC = () => {
  return (
    <div className="homepage">
      <Header />
      <main>
        {/* Remaining sections */}
      </main>
    </div>
  );
};

export default HomePage;
