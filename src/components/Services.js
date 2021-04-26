import React, { Component } from "react";

class Services extends Component {
  componentDidMount() {}

  render() {
    return (
      <div className="services">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-6">
              <h4>Career Development Services</h4>
              <p>
                Career development services are offered to individuals to help
                them inventory their values, interests, needs, skills, and
                goals. Individuals become more certain about where they are
                going in their lives and generally feel better about themselves
                as a result of counseling. Career counseling and life planning
                minimizes the risk of their floundering needlessly and maximizes
                their ability to take responsibility for their lives.
              </p>
              <hr />
              <h4>Career Counseling</h4>
              <p>
                Designed for individuals who are trying to make a decision about
                a career choice. The choice is usually about an occupation or
                job. The outcome of counseling is a determination not only of
                the appropriate choices, but more importantly, why those choices
                might be best for the individual. This service begins with an
                initial interview in which the client’s background and interests
                are discussed in some depth.
              </p>
              <hr />
              <h4>College Counseling</h4>
              <p>
                Designed for a student of any age who needs help in selecting a
                major, planning for a career, and/or choosing an education
                program that will prepare him/her for such a career. Career
                planning is a personal assessment of skills, interests, values,
                and education in relation to opportunities and goals over a
                lifetime. For many students, the setting of realistic goals
                reduces anxiety and allows them to focus on the immediate
                concern of their education.
              </p>
              <hr class="d-lg-none" />
            </div>
            <div className="col-lg-6">
              <h4>Life Planning</h4>
              <p>
                Designed for individuals who are attempting to make significant
                life decisions. The client will not only make a career decision,
                but he/she will also clarify values and goals, setting life on a
                course that will provide more personal satisfaction. This
                service begins with an initial interview to understand the
                client and to determine whether the client and career
                development consultant are suitable for each other. The outcome
                of this service might be a mapping out of life goals and steps
                to achieve such goals. At the conclusion of this experience, the
                client may expect to have:
              </p>
              <ul class="mb-4">
                <li>Defined and clarified life goals in six different areas</li>
                <li>Developed strategic plans to achieve those goals</li>
                <li>Increased sense of self-awareness</li>
                <li>Selected appropriate career path</li>
                <li>
                  Learned to adjust life to a more personally satisfying
                  lifestyle
                </li>
              </ul>
              <hr style={{ "margin-top": "2.1rem" }} />
              <h4>Special Consulting Services</h4>
              <p>
                Special medical and management consulting services offered are:
              </p>
              <ul>
                <li>Vocational Evaluations</li>
                <li>Rehabilitation Counseling</li>
                <li>Outplacement Counseling</li>
                <li>Management Counseling and Training</li>
              </ul>
              <p>
                Individual programs will be designed at the client’s request
                with Dr. Shinkel’s input.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
