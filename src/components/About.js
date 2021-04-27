import React, { Component } from "react";
import alResume from "../pdfs/al-shinkel-resume.pdf";

class About extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-4 order-2 order-lg-1 credentials">
              <h3>Credentials</h3>
              <ul>
                <li>
                  <strong>Counseling Psychology, Ed.D.</strong>
                  <br />
                  Boston University
                </li>
                <li>
                  <strong>Vocational Rehabilation Counseling M.Ed.</strong>
                  <br />
                  Michigan State University
                </li>
              </ul>
              <a class="btn btn-primary" href={alResume} role="button">
                <span class="icon"></span> Resume
              </a>
            </div>
            <div className="col-lg-8 order-1 order-lg-2 personal">
              <h3>About Dr. Shinkel</h3>
              <p>
                Al Shinkel's achievements in career consulting are many and they
                have been recognized often, but the achievement that means the
                most to him is helping hundreds of people identify satisfying
                career paths and life directions consistent with their values
                and “central life theme.” He has worked with people from four
                continents, of all ages and at all stages in life, particularly
                at times of choosing -- before and after college, in mid-life
                when a career change is required or desired, and before or after
                retirement, when many people want to identify another career
                that will be personally rewarding and re-engaging.
              </p>

              <p>
                With more than three decades of experience, Al has streamlined
                the process of helping clients clarify their values and
                inventory their interests. Working with Al, clients learn to
                “speak from the heart” as to what has the most meaning for them
                in life.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
