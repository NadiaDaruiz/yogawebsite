import React from "react";
import SlideShow from "./SlideShow";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/App.css";



function App() {
  return (
    <div className="app-container">
      <NavBar />
      <SlideShow />
      <Footer />
    </div>
  );
}

export default App;
