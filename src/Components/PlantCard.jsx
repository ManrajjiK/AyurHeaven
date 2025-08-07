import React from 'react';

const PlantCard = ({ plant, onClick }) => {
  return (
    <div className="w-60 m-4 shadow-lg rounded-lg overflow-hidden hover:scale-105 transition" onClick={() => onClick(plant)}>
      <img src={plant.image} alt={plant.name} className="w-full h-40 object-cover" />
      <div className="p-2 bg-green-100">
        <h3 className="font-bold text-lg text-green-800">{plant.name}</h3>
        <p className="text-xs italic text-gray-500">{plant.scientificName}</p>
      </div>
    </div>
  );
};

export default PlantCard;
