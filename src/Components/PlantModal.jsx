import React from 'react';
import './PlantModal.css'; // CSS file include kar

const PlantModal = ({ plant, onClose }) => {
  if (!plant) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-btn" onClick={onClose}>✖️</button>
        <h2>{plant.name}</h2>
        <p className="sci-name"> scientific name:{plant.scientificName}</p>
        <video controls className="plant-video">
          <source src={plant.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <p><strong>Uses:</strong> {plant.uses}</p>
        <p><strong>Qualities:</strong> {plant.qualities}</p>
      </div>
    </div>
  );
};

export default PlantModal;
