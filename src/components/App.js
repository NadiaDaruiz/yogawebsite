import React from "react";
import SlideShow from "./SlideShow";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "../styles/App.css";
import Contact from "./Contact";



function App() {
  return (
    <div className="app-container">
      <NavBar />
      <SlideShow />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
