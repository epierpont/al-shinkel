import React, { Component } from "react";
import "./styles/base.scss";
import Header from "./components/Header";
import About from "./components/About";
import Callout from "./components/Callout";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <main>
          <Header />
          <About />
          <Callout />
          <Services />
          <Contact />
          <Footer />
        </main>
      </div>
    );
  }
}

export default App;
