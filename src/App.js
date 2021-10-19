import React from "react";
import Nav from "./components/Nav";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Cards from "./components/Portfolio";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div>
      
      <main>
        <Nav></Nav>
        <Header></Header>
        <About></About>
        <Portfolio></Portfolio>
        <Resume></Resume>
        <Contact></Contact>
        <Footer></Footer>
      </main>
    </div>
  );
}

export default App;
