import Hero from '@components/Hero';
import Services from '@components/Services';

import React from 'react';

const Home = () => (
  <div className="pt-16 md:pt-20 bg-gradient-to-br from-blue to-red">
    <Hero />
    <Services />
  </div>
);
export default Home;
