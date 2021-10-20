import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Cards from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      
        <Router>
          <Nav />
          <Header />
          <main className="container">
          <Switch>
            <Route path="/portfolio">
              <Portfolio />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/">
              <About />
            </Route>
          </Switch>
          </main>
        </Router>
        <Footer />
      
    </div>
  );
}

export default App;
