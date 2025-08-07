const LearnAyurvedaSection = () => {
  return (
    <div
      id="learn"
      style={{
        padding: "2rem",
        backgroundColor: "rgba(46, 170, 255, 0.2)",
        textAlign: "center", // only for heading
        display: "block",
        margin: "40px auto",
        width: "80%",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
      }}
    >
      <h2 style={{ fontSize: "2rem", marginBottom: "1rem",color:"green" }}>Learn Ayurveda</h2>

      <div style={{ textAlign: "left", lineHeight: "1.8", fontSize: "1.1rem" }}>
        <p>
          Ayurveda, meaning "the science of life", is one of the world’s oldest holistic healing systems. 
          Developed more than 5,000 years ago in India, it’s based on the belief that health and wellness 
          depend on a delicate balance between the mind, body, and spirit. 🌿🧘
        </p>

        <p>
          In Ayurveda, there are three main life energies or doshas: <b>Vata (Air)</b>, <b>Pitta (Fire)</b>, 
          and <b>Kapha (Earth & Water)</b>. Understanding your dosha helps guide diet, lifestyle, and treatments. 
          Want to know your dosha? 
          <a
            href="https://www.banyanbotanicals.com/info/ayurvedic-living/learning-ayurveda/dosha-quiz/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline", marginLeft: "5px" }}
          >
            Take this Dosha Quiz
          </a>.
        </p>

        <p>
          Ayurveda emphasizes <b>Dinacharya</b> (daily routine) and <b>Ritucharya</b> (seasonal routine) to live 
          in harmony with nature. From tongue scraping in the morning to oil massage (Abhyanga) and herbal teas – 
          every ritual is designed to keep you balanced. ✨
        </p>

        <p>
          Curious to learn the real principles behind Ayurvedic healing? Check out this beginner's guide from the
          <a
            href="https://www.ayurveda.com/what-is-ayurveda"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline", marginLeft: "5px" }}
          >
            Ayurveda Institute
          </a>
          or explore practical tips at
          <a
            href="https://www.artofliving.org/in-en/ayurveda"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "blue", textDecoration: "underline", marginLeft: "5px" }}
          >
            Art of Living's Ayurveda Section
          </a>.
        </p>

        <p>
          Whether you're looking to balance your body, detox naturally, or just explore ancient wisdom in a modern world – 
          Ayurveda is your path to conscious living. 🌺
        </p>
      </div>
    </div>
  );
};

export default LearnAyurvedaSection;
