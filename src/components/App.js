import React from "react";
import { Route, Switch } from 'react-router-dom';

import NavBar from "./NavBar";
import Footer from "./Footer";
import SlideShow from "./SlideShow";
import About from "./About";
import YogaIntegral from "./YogaIntegral";
import YogaAndWine from "./YogaAndWine";
import Practice from "./Practice";
import Contact from "./Contact";

import "../styles/App.css";


function App() {
  return (
    <div className="app-container">
      <NavBar />
      <Switch>
        <Route exact path="/" component={SlideShow} />
        <Route path="/about" component={About} />
        <Route path="/yogaintegral" component={YogaIntegral} />
        <Route path="/yogaandwine" component={YogaAndWine} />
        <Route path="/practice" component={Practice} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
