import React from 'react';
import Hero from '../home/Hero';
import South from '../home/South';
import Intrest from '../home/Intrest';
import NonVeg from '../home/NonVeg';
import Story from '../home/Story';
import StoryBegins from '../home/StoryBegins';
import BeyondHome from '../home/BeyondHome';
import Speciality from '../home/Speciality';
import FromOurHome from '../home/FromOurHome';

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Hero />
      <South />
      <Intrest />
      <NonVeg />
      <Story />
      <StoryBegins />
      <BeyondHome />
      <Speciality />
      <FromOurHome />
    </div>
  );
};

export default Home;
