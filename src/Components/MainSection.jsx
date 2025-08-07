import React from 'react';
import './MainSection.css';

const MainSection = () => {
  return (
    <main className="main-section">

      <section className="hero">
        <h1>Welcome to E-AYURVEDA 🌿
       
        </h1>
        <div className="marquee-wrapper">
  <p className="marquee-text">🌿Walk through a digital forest of ancient cures, learn their secrets, and let nature be your guide to wellness and vitality🌿
   
  </p>
</div>
        <button className="explore-btn">Explore Now</button>
      </section>

      <section className="categories">
        <h2>Search by Category</h2>
        <div className="category-cards">
          <div className="card">Digestive</div>
          <div className="card">Respiratory</div>
          <div className="card">Skin Care</div>
          <div className="card">Immunity Boost</div>
        </div>
      </section>

      


      {/* Aage aur bhi sections add karte chalna */}

    </main>
  );
};

export default MainSection;
