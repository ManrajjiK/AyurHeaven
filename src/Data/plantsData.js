// data/plantsData.js

export const plants = [
  {
    id: 1,
    name: 'Neem',
    scientificName: 'Azadirachta indica',
    image: process.env.PUBLIC_URL + '/Photos/neem.png',
    video: process.env.PUBLIC_URL + '/Videos/neem.mp4',
    uses: 'Antibacterial, skin treatment, dental hygiene',
    qualities: 'Detoxifying, Blood Purifier, Anti-fungal'
  },
  {
    id: 2,
    name: 'Tulsi',
    scientificName: 'Ocimum sanctum',
    image: '/assets/tulsi.jpg',
    video: '/assets/tulsi3D.mp4',
    uses: 'Cold & cough remedy, immunity booster',
    qualities: 'Anti-inflammatory, antioxidant-rich',
  },
  // aur bhi add karte jao
];
