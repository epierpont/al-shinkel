import React, { Component } from "react";

class Callout extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="callout py-5">
        <div className="wrapper">
          <div className="container">
            <div className="row">
              <div class="col-md-8 offset-md-2">
                <h3 className="text-center">
                  If you don’t know where you’re headed, you’ll end up somewhere
                  else!
                </h3>
                <p className="text-end">- David Campbell</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Callout;
