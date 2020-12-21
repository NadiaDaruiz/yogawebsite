import React from "react";
import { Route, Switch } from "react-router-dom";

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
    <div id="app-container">
      <NavBar className="nav-space" />

      <Switch>
        <Route exact path="/" component={SlideShow} />
        <Route path="/yogaandwine" component={YogaAndWine} />
        <Route path="/yogaintegral" component={YogaIntegral} />
        <Route path="/practice" component={Practice} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer className="footer-space" />
    </div>
  );
}
export default App;
