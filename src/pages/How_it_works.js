import React, { Component } from "react";
import "../CSS/How_it_works.css";

class How_it_works extends Component {
  render() {
    return (
      <div>
        <br />
        <div className="leftbox">
          <h1>
            <span className="bol">HOW IT WORKS</span>
          </h1>

          <div>
            <p>
              Donating blood plasma is a safe process that has been used for
              more than one hundred years to help save lives. Thousands of
              people safely and painlessly donate every day. Blood plasma
              donation is performed in a highly regulated environment by
              professionally trained staff using sterile, one-time-use,
              disposable materials. Facilities follow strict guidelines when
              collecting plasma to ensure the donor’s safety and comfort.
            </p>
            <p>Here are some of the key steps to donate:</p>
            <div>
              <div>
                <div>
                  <img alt="" src="assets/images/eligibility.svg" />
                </div>
                <div>
                  <ol>1. ELIGIBILITY</ol>
                  <p>
                    You must have had COVID-19 documented by a laboratory test,
                    an antibody test, or clinical diagnosis and meet other donor
                    criteria. You must also be symptom free for at least 14 days
                    prior to visiting a donor center.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img alt="" src="assets/images/registration.svg" />
                </div>
                <div>
                  <ol>2. REGISTRATION</ol>
                  <p>
                    You will be asked to show proof of identification and share
                    your contact information when you arrive at the donor
                    center. Some centers may have additional registration
                    requirements. All information will be kept strictly
                    confidential.{" "}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img alt="" src="assets/images/screening.svg" />
                </div>
                <div>
                  <ol>3. SCREENING</ol>
                  <p>
                    You must pass a pre-donation screening at every visit,
                    including a brief exam to check your body temperature, blood
                    pressure, and pulse rate. The goal of this screening is to
                    make sure that the donation is safe for both you and the
                    recipients of the final product.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img alt="" src="assets/images/donationProcess.svg" />
                </div>
                <div>
                  <ol>4. DONATION PROCESS</ol>
                  <p>
                    Once your eligibility is confirmed, you will move to a
                    donation area where you will rest on a donor bed while
                    connected to an automated machine that will collect your
                    plasma. You will be carefully monitored by staff throughout
                    the donation process. Your donor bed will be socially
                    distanced at least six feet from other donors and/or
                    personal protective equipment will be provided.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <img alt="" src="assets/images/plasmaCollection.svg" />
                </div>
                <div>
                  <ol>5. PLASMA COLLECTION</ol>
                  <p>
                    Blood plasma is collected through an automated process that
                    separates plasma from other blood components, then returns
                    your red blood cells and platelets to you. This process
                    continues until a target amount of plasma has been
                    collected.
                    <br />
                    <br />
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rightbox">
          <div>
            <h4>
              <span className="bol">WHAT IS BLOOD PLASMA?</span>
            </h4>
            <p>
              Plasma – the liquid portion of your blood – can be easily replaced
              by your body. It consists mainly of water, proteins, and
              antibodies that help your body to function. If you have survived
              COVID-19 then your plasma includes antibodies that could help
              others fight the virus.
            </p>
            <div>
              <div>
                <img
                  alt="Pie chart showing that blood plasma is composed of:"
                  src="assets/images/piechart.svg"
                />
              </div>
              <div>
                <p>
                  <img
                    alt="Green section of pie chart is"
                    src="assets/images/drop-green.svg"
                  />
                  55% PLASMA
                </p>
                <p>
                  <img
                    alt="White section of pie chart is"
                    src="assets/images/drop-white.svg"
                  />
                  1% White Blood Cells
                </p>
                <p>
                  <img
                    alt="Black section of pie chart is"
                    src="assets/images/drop-black.svg"
                  />
                  44% Red Blood Cells
                </p>
              </div>
            </div>
          </div>

          <h4>
            <span className="bol">HOW IS BLOOD PLASMA USED?</span>
          </h4>
          <p>
            Plasma from those who have recovered could be a key part of the
            fight against COVID-19. Once the COVID-19 plasma is donated, it can
            take one of two paths: be directly transfused into patients or be
            used to make a potential medicine.
            <strong>
              Learn more about the two paths{" "}
              <a
                title="Two ways plasma could help fight COVID-19(PDF)"
                href="assets/images/TwoPaths.pdf"
              >
                here.
              </a>
            </strong>
          </p>
        </div>

        <br />
      </div>
    );
  }
}
export default How_it_works;
