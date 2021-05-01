import React, { Component } from "react";
import { Helmet } from "react-helmet";
import "./styles/base.scss";
import Header from "./components/Header";
import About from "./components/About";
import Callout from "./components/Callout";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import alShinkel from "./images/al-shinkel.png";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            Dr. Al Shinkel, Ed.D. | Career Consultant | Biddeford Pool, Maine
          </title>
          <meta
            name="description"
            content="Dr. Al Shinkel specializes in career development services, career counseling, college counseling, life planning and special consulting services out of Biddeford Pool, ME."
          />
          <meta property="og:image" content={alShinkel} />
          <meta
            property="og:title"
            content="Dr. Al Shinkel, Ed.D. | Career Consultant | Biddeford Pool, Maine"
          />
          <meta
            property="og:description"
            content="Dr. Al Shinkel specializes in career development services, career counseling, college counseling, life planning and special consulting services out of Biddeford Pool, ME."
          />
          <link rel="canonical" href="https://alshinkel.com/" />
        </Helmet>
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
