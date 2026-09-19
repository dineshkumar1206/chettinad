import React from 'react';
import Hero from '../home/Hero';
import South from '../home/South';

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Hero />
      <South />
    </div>
  );
};

export default Home;
