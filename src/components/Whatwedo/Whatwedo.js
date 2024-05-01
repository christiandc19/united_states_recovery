import React from "react";
import "./Whatwedo.css";
import Fade from 'react-reveal/Fade';

import wrapper1 from "../../assets/wrapper1-min.jpg";

const WhatWeDo = () => {
  return (
    <>
      <div className="wrapper1 ">
        <div className="wrapper-content container">

        <div className="whatWeDo-header">
              <Fade left>
              <h1>What We Do</h1> <br />
              </Fade>

              <Fade right>
              <h2>
              <i>We care about your mental health</i>
              </h2>
              </Fade>
            <br />

            <Fade left>
            <p>
              At Redding Rehab Treatment Center, we offer different levels of
              care based on each individual’s needs. Our programs consist of an
              intensive outpatient program (IOP) and a more demanding and
              structured partial hospitalization program (PHP). You can be
              confident that our caring and professional staff will recommend
              the right level of care for you or your loved one. <br />
            </p>
            </Fade>
            <br />
</div>
          <Fade left>
          <div className="wrapper-content-left">
            <img src={wrapper1} alt="nurse" loading="lazy" />
          </div>
          </Fade>

          <Fade right>
          <div className="wrapper-content-right">
            <h1>Treatment</h1> <br />
            <p>
              All treatment clients will have a recovery/treatment plan
              developed within 30 days of admission. Measurement and
              reassessment of treatment plan progress happen on a weekly basis
              through the weekly summary. <br />
              <br /> In the weekly summary, the drug and alcohol counselor will
              ensure that action steps to be taken by client or counselor are on
              target and that the action step achievements will enable
              resolution of the objective. All treatment plans are reviewed by
              and signed off on by the clinical director.
            </p>
          </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default WhatWeDo;
