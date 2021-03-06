import React from 'react';
import MyParticles from '../Components/Particles/Particles';
import Header from '../Components/Header/Header';
import { OurStory } from '../Components/Sections/OurStory';
import { ContactSection } from '../Components/Sections/ContactSection';
import Footer from '../Components/Footer/Footer';
import '../App.css';


const Landing = () => (
    <div id='main-contain' className="App">
        <div id='section-wrapper'>

            <Header />
            <MyParticles />
            <OurStory />
            <ContactSection />
        </div>

        <Footer />
    </div>

);


export default Landing;