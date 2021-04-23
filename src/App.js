import React, { Component } from "react";
import "./styles/base.scss";
import Header from "./components/Header";
import About from "./components/About";
import Callout from "./components/Callout";
import Services from "./components/Services";

class App extends Component {
  render() {
    return (
      <main>
        <Header />
        <About />
        <Callout />
        <Services />
      </main>
    );
  }
}

export default App;
