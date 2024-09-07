import React from 'react';
import How from './How';
import Howtoplay from './Howtoplay';
import PlayCards from './PlayCards';
import Tokenomics from './Tokenomics';
import Roadmap from './Roadmap';
import Team from './Team';
import Hero from './Hero'; // Import Hero only once

function Home() {
  return (
    <div className=' '>
      <Hero />
      <How />
      <Howtoplay />
      <PlayCards />
      <Tokenomics />
      <Roadmap />
      <Team />
    </div>
  );
}

export default Home;
