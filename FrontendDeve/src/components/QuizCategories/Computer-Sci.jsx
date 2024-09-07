import React from "react";
import bgImage from "../../assets/DATA-STRUCTURE-ALGORITHUM.gif";
import computerNetworkImg from "../../assets/Computer-network.gif";
import dbmsImage from "../../assets/dbms.gif";
import cloudComputingImage from "../../assets/cloud.gif";
import sqlImage from "../../assets/SQL.gif";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userLogic } from "../Features/user"; // Import the correct action
import "./cs.css";
const PageCs = () => {
  const navigate = useNavigate();
  const [dsa, setdsa] = React.useState(2);
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate("/quizPage");
    console.log("Navigating to /quizPage with user:");
  };

  const handleRoute = () => {
    dispatch(userLogic(dsa));
    console.log(setdsa);
  };
  return (
    <>
      <div>
        <style>
          {`
      .box-card {
        background-image: url(${bgImage}) !important;
      }

      .box-card-two {
        background-image: url(${computerNetworkImg}) !important;
      }

      .box-card-three {
        background-image: url(${dbmsImage}) !important;
      }

      .box-card-four {
        background-image: url(${cloudComputingImage}) !important;
      }
        .box-card-five{
        background-image: url(${sqlImage}) !important;
    `}
        </style>
      </div>
      <div className="parent-container">
        <nav>
          <h1 className="text-white text-4xl text-center">
            Computer-science-page!
          </h1>
        </nav>
        {/* section-1 */}
        <div className="main-card" onClick={handleNavigate}>
          <section>
            <div className="card">
              <div className="box-card card-2 w-3 bg-hero-pattern">
                <div className="border-2"></div>
                <div className="content-2">
                  <div className="card-logo-2">
                    <div className="logo2">
                      <div className="logo2">
                        <span>DSA</span>
                      </div>
                    </div>
                    <span className="trail-2"></span>
                  </div>
                  <span className="logo-bottom-text-2">Krish.io</span>
                </div>
                <span className="bottom-text-2">Space.io</span>
              </div>
            </div>
          </section>
          {/* section-end */}

          {/* box-2 started */}
          <section>
            <div className="card">
              <div className="box-card-two card-2 w-3">
                <div className="border-2"></div>
                <div className="content-2">
                  <div className="card-logo-2">
                    <div className="logo2">
                      <div className="logo2">
                        <span>Computer-Networking</span>
                      </div>
                    </div>
                    <span className="trail-2"></span>
                  </div>
                  <span className="logo-bottom-text-2">Krish.io</span>
                </div>
                <span className="bottom-text-2">Space.io</span>
              </div>
            </div>
          </section>
          {/* box-2 End */}

          {/* box-3 started */}

          <div className="card">
            <div className="box-card-three card-2 w-3">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <div className="logo2">
                      <span>Database-Management-System</span>
                    </div>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>
          {/* box-3 Ended */}
        </div>
        {/* Section-2 covering all cards */}
        <section className="flex justify-around">
          <div className="card">
            <div className="box-card-four card-2 w-3 bg-hero-pattern">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <span>Cloud-Computing</span>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
                {/* Add a unique identifier */}
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>

          <div className="card">
            <div className="box-card-five card-2 w-3 bg-hero-pattern">
              <div className="border-2-"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <span className="text-red-400 text-2xl">SQL-database</span>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
                {/* Add a unique identifier */}
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>

          <div className="card">
            <div className="box-card-six card-2 w-3">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <span>Operating-system</span>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
                {/* Add a unique identifier */}
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>
        </section>
        {/* End of Section covering all cards */}

        {/* Section-3 */}

        <section className="flex justify-around">
          <div className="card">
            <div className="box-card-seven card-2 w-3 bg-hero-pattern">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <span>Cyber-Security</span>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
                {/* Add a unique identifier */}
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>

          <div className="card">
            <div className="box-card-eight card-2 w-3 bg-hero-pattern">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <span>Programming</span>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
                {/* Add a unique identifier */}
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>

          <div className="card">
            <div className="box-card-nine card-2 w-3 bg-hero-pattern">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <span>Software-engineering</span>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
                {/* Add a unique identifier */}
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>
        </section>
        {/* Section-3 End! */}

        <section className="flex justify-around">
          <div className="card">
            <div className="box-card-ten card-2 w-3 bg-hero-pattern">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <span>Blockchian</span>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
                {/* Add a unique identifier */}
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>

          <div className="card">
            <div className="box-card-twelve card-2 w-3 bg-hero-pattern">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <span className="text-black">AI and ML</span>
                  </div>
                  <span className="trail-2"></span>
                </div>

                <span className="logo-bottom-text-2">Krish.io</span>
                {/* Add a unique identifier */}
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>

          <div className="card">
            <div className="box-card-thirteen card-2 w-3 bg-hero-pattern">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <span>System-Design</span>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
                {/* Add a unique identifier */}
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>
        </section>

        {/* Section-4 Started */}
        {/* Section code 2.1 */}
      </div>
      {/* 👆🏻 Main div for whole component! */}
    </>
  );
};

export default PageCs;
