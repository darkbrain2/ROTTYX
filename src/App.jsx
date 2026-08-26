import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import EconomySection from './components/EconomySection';
import MarketplacePreview from './components/MarketplacePreview';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 font-sans text-slate-200">
      <Navbar />
      <main>
        <Hero />
        <div 
          className="w-full relative bg-cover bg-center bg-no-repeat bg-fixed" 
          style={{ backgroundImage: "url('/marble-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-white/20 pointer-events-none"></div>
          <div className="relative z-10">
            <EconomySection />
            <MarketplacePreview />
            <Footer />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
