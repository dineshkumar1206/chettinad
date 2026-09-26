import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../home/Hero';

// Lazy load components below the fold to improve initial load time
const South = lazy(() => import('../home/South'));
const Intrest = lazy(() => import('../home/Intrest'));
const NonVeg = lazy(() => import('../home/NonVeg'));
const Story = lazy(() => import('../home/Story'));
const StoryBegins = lazy(() => import('../home/StoryBegins'));
const BeyondHome = lazy(() => import('../home/BeyondHome'));
const Speciality = lazy(() => import('../home/Speciality'));
const FromOurHome = lazy(() => import('../home/FromOurHome'));

const Home = () => {
  return (
    <div className="w-full min-h-screen flex flex-col">
      <Navbar />
      {/* Hero section loads immediately as it is above the fold */}
      <Hero />
      
      {/* Other sections load lazily */}
      <Suspense fallback={<div className="w-full min-h-[50vh] flex items-center justify-center bg-transparent text-[#4a4036] font-serif">Loading content...</div>}>
        <South />
        <Intrest />
        <NonVeg />
        <Story />
        <StoryBegins />
        <BeyondHome />
        <Speciality />
        <FromOurHome />
      </Suspense>
    </div>
  );
};

export default Home;
