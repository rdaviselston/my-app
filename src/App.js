import "./App.css";
import React from "react";
import Navbar from "./components/shared";

const HeroImage = () => (
  <div className="hero-image">
    <img src="hero.png" alt="hero" />
  </div>
);

function App() {
  return (
    <div className="AppLanding">
      <HeroImage />
      <h1>This is just a holding page, May remove</h1>

      <Navbar />
    </div>
  );
}

export default App;
