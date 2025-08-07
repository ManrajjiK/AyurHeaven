import React, { useState } from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import MainSection from './Components/MainSection';
import PlantSection from './Components/PlantSection';
import PlantModal from './Components/PlantModal';
import './App.css';
import LearnAyurvedaSection from './Components/LearnAyurvedaSection';
import VirtualTourSection from './Components/VirtualTourSection';
function App() {
  const [selectedPlant, setSelectedPlant] = useState(null);

  return (
    <div className="app-container">
      {/* Header once */}
      <Header />

      {/* Main sections with IDs for scroll */}
      <section id="home">
        <MainSection />
      </section>

      <section id="plants">
        <PlantSection onPlantClick={setSelectedPlant} />
      </section>

      <section id="learn">
        <div className="section-content">
          <LearnAyurvedaSection/>
        </div>
      </section>

      <section id="virtual-tour">
        <div className="section-content">
         <VirtualTourSection/>
        </div>
      </section>

      <section id="contact">
        <div className="section-content">
          <h2>Connect With Us</h2>
          <p>Have questions? Reach out to our team of Ayurveda experts.</p>
        </div>
      </section>

      {/* Modal Show */}
      {selectedPlant && (
        <PlantModal
          plant={selectedPlant}
          onClose={() => setSelectedPlant(null)}
        />
      )}

      {/* Footer once */}
      <Footer />
    </div>
  );
}

export default App;
