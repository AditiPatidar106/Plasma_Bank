import React, { Component } from "react";
import "../../src/index.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <>
        <h2>
          <center>
            Find out more{" "}
            <a href="https://www.mygov.in/covid-19/">About COVID-19</a>
          </center>

          <center>
            Find a{" "}
            <a href="https://www.cowin.gov.in/">COVID-19 vaccination centre</a>{" "}
            near you!
          </center>
        </h2>

        <div>
          <center>
            <div className="cont">
              <button className="btn btn-lg btn-outline-danger">
                <Link className="link" to="/DonorForm1">
                  DONATE PLASMA
                </Link>
              </button>

              <button className="btn btn-lg btn-outline-danger">
                <Link className="link" to="/DoneeForm1">
                  FIND PLASMA
                </Link>
              </button>
            </div>
          </center>

          <br />

          <center>
            <img src="assets/images/marcus-smart-mobile.jpg" alt="" />
          </center>

          <br />
          <br />
          <div className="banner middle-banner">
            <div className="text">
              <h1>
                <strong>
                  <center>DONATE PLASMA | SAVE LIVES</center>
                </strong>
              </h1>
            </div>
          </div>
          <div>
            <div className="leftside">
              <h1>
                <span className="bol">FIGHT IT FORWARD</span>
              </h1>
              <p>COVID-19 survivors: you’ve got a lot of fight in you.</p>
              <p>
                Donation to save a life comes in many forms including blood and
                plasma. Your local blood or plasma center will inform you of
                your community needs and the ways you can help others.
              </p>
              <p>
                There continues to be an urgent need for plasma to make critical
                medicines that help treat people with rare and chronic
                conditions. The COVID-19 pandemic has impacted collections.
                Blood and plasma donors are needed now more than ever to produce
                these important treatments that patients in your community and
                globally depend on to live more normal lives.
              </p>
              <center>
                <h3>
                  <p>Know Survivors? Share The Fight!</p>
                </h3>
                <div>
                  <a href="https://www.facebook.com/MyGovIndia/" target="_self">
                    <img src="assets/images/fb.svg" alt="Share to facebook" />
                  </a>
                  <a href="https://twitter.com/mygovindia" target="_self">
                    <img
                      src="assets/images/twitter.svg"
                      alt="Share to twitter"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/mygov-india/"
                    target="_self"
                  >
                    <img
                      src="assets/images/linkedin.svg"
                      alt="Share to linkedin"
                    />
                  </a>
                </div>
              </center>
              <br />
              <div className="banner">
                <h1>
                  <div className="text">
                    <strong>AND MAKE A DIFFERENCE</strong>
                  </div>
                </h1>
              </div>
              <br />
              <br />
              <br />
              <br />
            </div>

            <center>
              <br />
              <br />
              <br />
              <br />
              <img
                alt="video thumbnail"
                loading="lazy"
                src="assets/images/mqdefault_6s.webp"
              />
            </center>
          </div>

          <div className="rightside">
            <center>
              <div>
                I have been informed that you donated blood/plasma for my wife.
                Words cannot express my gratitude for this act of selflessness.
                She is improving slowly from COVID and we are hopeful that she
                will be strong enough to be brought out of her induced coma
                soon. On behalf of her, the extended family, and myself, thank
                you!
              </div>

              <div>
                <div>Courtesy of</div>
                <img src="assets/images/ttdlogo.svg" alt="Thank the donor" />
              </div>
            </center>
          </div>
        </div>

        <br />
      </>
    );
  }
}
export default Home;
