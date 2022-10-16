import Topbar from "./Components/Header/Topbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Components/Home";
import Resume from "./Components/Resume";
import AboutUs from "./Components/About";
import Contact from "./Components/Contact";
import Project from "./Components/Project";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
        <Router>
      <div className="App">
          <Topbar />
          <Home />
          <Resume />
          <AboutUs />
          <Project />
          <Contact />
          <Footer />
      </div>
      <Switch>
        <Route path="/home" component={Home}></Route>
        <Route path="/about" component={AboutUs}></Route>
        <Route path="/resume" component={Resume}></Route>
        <Route path="/project" component={Project}></Route>
        <Route path="/contact" component={Contact}></Route>
      </Switch>
      </Router>
    </>
  );
}

export default App;
