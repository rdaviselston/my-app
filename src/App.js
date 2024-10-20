import logo from "./logo.svg";
import "./App.css";
import React from "react";
import { Navbar } from "./components/shared";

const activeStyle = {
  fontweight: "bold",
  color: "red",
};

function App() {
  return (
    <div className="AppLanding">
      <h1>This is just a holding page, May remove</h1>
      <Router>
        <Navbar />
      </Router>
    </div>
  );
}

export default App;
