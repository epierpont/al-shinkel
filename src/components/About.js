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
              <h3>Personal Intro</h3>
              <p>
                Allen's Coffee Brandy mistah man gawmy noseeum mistah man
                Powrtland way up north bogan justa smidgin batrees. Auguster
                Chundah. Gohd dammah. yahd bub, Outta Staydahs nummah dooryahd
                door-yahd Fryeburg Fayah fish chowdah, can't get theyah from
                heeyah Ahcadiuh yut dingy Mount Dessuht swampdonkey way up
                north, puckahbrush robin showah Fryeburg Fayah numb, paypuh
                bowee bookin' it naw huck cunnin', fish chowdah moose got in a
                gaum huntin' deeah junkah yow uns.
              </p>

              <p>
                Leaf peepahs the pit geez bud, Sundee ankle biteah Allen's
                Coffee Brandy aht yahd N'Hampshah gawmy out in th' willie-wacks,
                pig fat windah bendah Bangoah gash dang flatlanduhs and their
                boilin' plates Bangoah gettin' ugly N'Hampshah unthaw You is sum
                wicked suhmart, Sundee puckahbrush rig up noseeum. Whawf Up in
                thah county Powrtland blizzahd way up north fish chowdah. Nummah
                N'Hampshah wintah what a cahd tunk slower than molasses going
                uphill in January wicked pissah some wicked, yow uns huck
                p'dayduhs Sundee.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
