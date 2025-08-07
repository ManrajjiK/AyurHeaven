import React, { useState } from 'react';
import './PlantSection.css';

const plants = [
  {
    name: 'Neem',
    scientificName: ' scientific Name: Azadirachta indica',
    video: '/neem.mp4',
    uses: 'Neem is widely used in Ayurvedic formulations to treat skin disorders, purify blood, control diabetes, and boost immunity. It is also commonly found in oral care, hair care, and anti-inflammatory preparations.',
  qualities: 'Possesses strong anti-bacterial, anti-fungal, anti-viral, and blood purifying properties. It also has anti-inflammatory, detoxifying, and wound-healing capabilities, making it a powerful natural healer.',

    img: '/neem.png',
  },
  {
    name: 'Tulsi',
    scientificName: 'Ocimum sanctum',
    video: '/Videos/tulsi.mp4',
    uses: 'Boosts immunity, relieves cold and stress.',
    qualities: 'Anti-inflammatory, immunity booster, stress reliever.',
    img: '/Tulsi.png',
  },
  {
    name: 'Ashwagandha',
    scientificName: 'Withania somnifera',
    video: '/Videos/ashwagandha.mp4',
    uses: 'Reduces stress, increases energy, boosts testosterone.',
    qualities: 'Adaptogen, rejuvenating, energy booster.',
    img: '/Ashwagandha.png',
  },
  {
    name: 'Amla',
    scientificName: 'Phyllanthus emblica',
    video: '/Videos/amla.mp4',
    uses: 'Hair growth, Vitamin C source, anti-aging.',
    qualities: 'Antioxidant, immunity booster, skin health.',
    img: '/Amla.png',
  },
  {
    name: 'Giloy',
    scientificName: 'Tinospora cordifolia',
    video: '/Videos/giloy.mp4',
    uses: 'Fever reducer, detox, improves digestion.',
    qualities: 'Anti-pyretic, liver protector, immunity booster.',
    img: '/Giloy.png',
  },
  {
    name: 'Brahmi',
    scientificName: 'Bacopa monnieri',
    video: '/Videos/brahmi.mp4',
    uses: 'Enhances memory, reduces anxiety.',
    qualities: 'Cognitive enhancer, neuro-protective, calming.',
    img: '/Brahmi.png',
  },
  {
    name: 'Aloe Vera',
    scientificName: 'Aloe barbadensis miller',
    video: '/Videos/aloe.mp4',
    uses: 'Skin treatment, hair care, digestion aid.',
    qualities: 'Cooling, moisturizing, antioxidant.',
    img: '/Aloe Vera.png',
  },
  {
    name: 'Shatavari',
    scientificName: 'Asparagus racemosus',
    video: '/Videos/shatavari.mp4',
    uses: 'Supports reproductive health, especially for women.',
    qualities: 'Hormonal balance, fertility booster.',
    img: '/Shatavari.png',
  },
  {
    name: 'Haritaki',
    scientificName: 'Terminalia chebula',
    video: '/Videos/haritaki.mp4',
    uses: 'Aids digestion, detoxification.',
    qualities: 'Triphala component, rejuvenating, bowel regulator.',
    img: '/Haritaki.png',
  },
  {
    name: 'Manjistha',
    scientificName: 'Rubia cordifolia',
    video: '/Videos/manjistha.mp4',
    uses: 'Purifies blood, treats acne.',
    qualities: 'Anti-inflammatory, blood purifier.',
    img: '/Manjistha.png',
  },
  {
    name: 'Arjuna',
    scientificName: 'Terminalia arjuna',
    video: '/Videos/arjuna.mp4',
    uses: 'Supports heart health.',
    qualities: 'Cardio tonic, antioxidant.',
    img: '/Arjuna.png',
  },
  {
    name: 'Vasaka',
    scientificName: 'Adhatoda vasica',
    video: '/Videos/vasaka.mp4',
    uses: 'Treats respiratory disorders, cough.',
    qualities: 'Bronchodilator, anti-tussive, anti-inflammatory.',
    img: '/vasaka.png',
  }
  // ... [Same 12 plant objects as you already wrote]
];

const PlantSection = ({ onPlantClick }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredPlants = plants.filter((plant) => {
    const keyword = searchTerm.toLowerCase();
    return (
      plant.name.toLowerCase().includes(keyword) ||
      plant.scientificName.toLowerCase().includes(keyword) ||
      plant.uses.toLowerCase().includes(keyword) ||
      plant.qualities.toLowerCase().includes(keyword)
    );
  });

  return (
    <section className="plant-section">
      <h2 className="section-title">🌿Welcome To Virtual Herbal Garden</h2>

      <input
        type="text"
        className="search-input"
        placeholder="Search by name, use, quality, etc..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div className="plant-grid">
        {filteredPlants.length > 0 ? (
          filteredPlants.map((plant, index) => (
            <div className="plant-card" key={index}>
              <h3>{plant.name}</h3>
              <img className="img" src={plant.img} alt={plant.name} />
              <button
                className="view-details"
                onClick={() => onPlantClick(plant)}
              >
                View Details
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No matching plants found.</p>
        )}
      </div>
    </section>
  );
};

export default PlantSection;
