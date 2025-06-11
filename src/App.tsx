import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Splash from './components/Splash';
import Overview from './components/Overview';
import GenerateAndMigrate from './components/GenerateAndMigrate';
import CaseStudies from './components/CaseStudies';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Splash />
      <Overview />
      <GenerateAndMigrate />
      <CaseStudies />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
