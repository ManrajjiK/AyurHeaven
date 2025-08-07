const VirtualTourSection = () => {
  return (
    <div
      id="virtual-tour"
      style={{
        backgroundColor: "rgba(46, 170, 255, 0.2)",
        margin: "40px auto",
        width: "80%",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
        padding: "40px",
        display: "block",
      }}
    >
      <h2 style={{ textAlign: "center" ,color:"green"}}>Virtual Herbal Garden Tour 🌱</h2>
      
      <div style={{ textAlign: "left", lineHeight: "1.8" }}>
        <p>
          Take a digital walk through a serene herbal garden, where each plant has a story,
          a purpose, and a healing touch. Witness how nature nurtures health, from Tulsi to Neem,
          from Ashwagandha to Brahmi.
        </p>
        <p>
          🚶‍♀️ Walk through different zones <br />
          🔍 Click on plants to know their uses <br />
          🎧 Optional audio guide for immersive experience
        </p>
      </div>
    </div>
  );
};

export default VirtualTourSection;
