import React from 'react';
import './App.css';
import MyParticles from './Components/Particles/Particles';
import Header from './Components/Header/Header';
import { OurStory } from './Components/Sections/OurStory';
import {ContactSection} from './Components/Sections/ContactSection';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div  id='main-contain'className="App">
      <div id='section-wrapper'>
        <Header/>
        <MyParticles/>
        <OurStory/>
        <ContactSection/>
      </div>
  
    <Footer/>
    </div>
  );
}

export default App;
