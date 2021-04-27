import React, { Component } from "react";
import careerConsultant from "../images/career-consultant.jpg";

class Contact extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="contact">
        <div className="container">
          <div className="row">
            <div class="col">
              <div className="row">
                <div className="col-md-3 order-2 order-md-1">
                  <img
                    src={careerConsultant}
                    alt="Career Consultant"
                    className="shadow mx-auto"
                  />
                </div>
                <div className="col-md-9 order-1 order-md-2">
                  <h4>Contact Dr. Shinkel</h4>
                  <p>
                    If you are seeking clarity as to life's purpose and to
                    communicate better with others not just intellectually but
                    emotionally as well, please contact Dr. Al Shinkel. A
                    telephone call is the preferred initial method.
                  </p>
                  <div className="row info gx-5">
                    <div className="col-md-4">
                      <h5>
                        Email
                        <br />
                        <span>
                          <a href="mailto:alshinkel@gmail.com">
                            alshinkel@gmail.com
                          </a>
                        </span>
                      </h5>
                    </div>
                    <div className="col-md-4">
                      <h5>
                        Phone
                        <br />
                        <span>
                          <a href="tel:207-282-5893">207.282.5893</a>
                        </span>
                      </h5>
                    </div>
                    <div className="col-md-4">
                      <h5>
                        Address
                        <br />
                        <span>
                          <a href="https://goo.gl/maps/8RmV8i4eHAfhtKoh7">
                            716 Pool Street, Biddeford, ME
                          </a>
                        </span>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
