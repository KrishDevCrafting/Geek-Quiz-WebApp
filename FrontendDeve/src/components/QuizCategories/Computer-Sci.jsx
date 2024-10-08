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
import AOS from "aos";
import "aos/dist/aos.css";
const PageCs = () => {
  AOS.init();
  const navigate = useNavigate();
  const [dsa, setdsa] = React.useState(3);
  const [CN, setCN] = React.useState(4);
  const [dbms, setdata] = React.useState(5);
  const [cloud, setcloud] = React.useState(6);
  const [SQL, setSql] = React.useState(7);
  const [OS, setOS] = React.useState(8);
  const [CyberS, setCyber] = React.useState(9);
  const [Programming, setProgramming] = React.useState(10);
  const [software, setSoftware] = React.useState(11);
  const [BlockChain, setBC] = React.useState(12);
  const [AI, setAi] = React.useState(13);
  const [SD, SetSD] = React.useState(14);

  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate("/quizPage");
    console.log("Navigating to /quizPage with user:");
  };

  const handleRoute = () => {
    dispatch(userLogic(dsa));
    console.log(setdsa);
  };

  const handleCN = () => {
    dispatch(userLogic(CN));
  };
  const handleDbms = () => {
    dispatch(userLogic(dbms));
  };
  const handleCloud = () => {
    dispatch(userLogic(cloud));
  };
  const handleSQL = () => {
    dispatch(userLogic(SQL));
  };
  const handleCyber = () => {
    dispatch(userLogic(CyberS));
  };
  const handleProgramming = () => {
    dispatch(userLogic(Programming));
  };
  const handleSoftware = () => {
    dispatch(userLogic(software));
  };
  const handleOS = () => {
    dispatch(userLogic(OS));
  };
  const handleBlockChain = () => {
    dispatch(userLogic(BlockChain));
  };
  const handleAi = () => {
    dispatch(userLogic(OS));
  };
  const handleSD = () => {
    dispatch(userLogic(SD));
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
            Computer-Science-Quiz!
          </h1>
        </nav>
        {/* section-1 */}

        <div className="main-card" onClick={handleNavigate}>
          <section>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
              <div className="card" onClick={handleRoute}>
                <div className="box-card card-2 w-3 ">
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
            </div>
          </section>

          {/* section-end */}

          {/* box-2 started */}
          <section onClick={handleCN}>
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
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
            </div>
          </section>
          {/* box-2 End */}

          {/* box-3 started */}

          <div className="card" onClick={handleDbms}>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
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
          </div>
          {/* box-3 Ended */}
        </div>
        {/* Section-2 covering all cards */}
        <section
          className="flex justify-around card-responsive"
          onClick={handleNavigate}>
          <div className="card" onClick={handleCloud}>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
              <div className="box-card-four card-2 w-3">
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
          </div>

          <div className="card" onClick={handleSQL}>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
              <div className="box-card-five card-2 w-3">
                <div className="border-2-"></div>
                <div className="content-2">
                  <div className="card-logo-2">
                    <div className="logo2">
                      <span className="text-red-400 text-2xl">
                        SQL-database
                      </span>
                    </div>
                    <span className="trail-2"></span>
                  </div>
                  <span className="logo-bottom-text-2">Krish.io</span>
                  {/* Add a unique identifier */}
                </div>
                <span className="bottom-text-2">Space.io</span>
              </div>
            </div>
          </div>

          <div className="card" onClick={handleOS}>
            <div
              data-aos="fade-left"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              data-aos-mirror="true"
              data-aos-once="true"
              data-aos-anchor-placement="top-center">
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
          </div>
        </section>
        {/* End of Section covering all cards */}

        {/* Section-3 */}

        <section
          className="flex justify-around card-responsive"
          onClick={handleNavigate}>
          <div className="card" onClick={handleCyber}>
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

          <div className="card" onClick={handleProgramming}>
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

          <div className="card" onClick={handleSoftware}>
            <div className="box-card-nine card-2 w-3">
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

        <section
          className="flex justify-around card-responsive"
          onClick={handleNavigate}>
          <div className="card" onClick={handleBlockChain}>
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

          <div className="card" onClick={handleAi}>
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

          <div className="card" onClick={handleSD}>
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
