import React, { Component } from "react";
import alShinkel from "../images/al-shinkel.png";

class Header extends Component {
  componentDidMount() {}

  render() {
    return (
      <header>
        <div className="container">
          <div className="intro">
            <div className="row">
              <div className="col-6 text-end">
                <h1>
                  Al Shinkel
                  <br />
                  <span>Ed.D.</span>
                </h1>
              </div>
              <div className="col-6 d-flex flex-column justify-content-center ">
                <img src={alShinkel} alt="Al Shinkel" />
              </div>
            </div>
            <div className="row divider">
              <div className="col-md-6 offset-md-3">
                <hr />
              </div>
            </div>
            <div className="row">
              <div className="col text-center">
                <h2>
                  <em>Career Consultant / 207.282.5893</em>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
