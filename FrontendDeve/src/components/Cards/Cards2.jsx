import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card2.css";
import ".././styles.css";
const Card2 = () => {
  const handleNavigate = () => {
    Navigate("/quizPage");
  };

  const Navigate = useNavigate();
  return (
    <>
      <div className="align-text lg:text-white">
        <h1 id="text">MotorCar-QUIZ</h1>
      </div>

      <div
        className="main-card sm:flex-col lg:flex-row"
        onClick={handleNavigate}
      >
        {/* card-1   */}

        <section>
          <div className="main-container-2">
            <div className="box-card card-2 w-3">
              <div className="border-2"></div>

              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <div className="logo2">
                      <span>BMW' Werke</span>
                    </div>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>
          {Navigate("/quizPage")}
        </section>

        {/* End-card-1 */}
        {/* Card-2 */}
        <section>
          <div className="main-container-2">
            <div className="box-card-3 card-2">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <div className="logo2">
                      <h1>Empty-Space</h1>
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

        {/* card-End-2 */}

        <section>
          {/* Card-3 */}

          <div className="main-container-2">
            <div className="box-card-2 card-2">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <div className="logo2">
                      <h1>Horror</h1>
                    </div>
                  </div>
                  <span className="trail-2"></span>
                </div>
                <span className="logo-bottom-text-2">Krish.io</span>
              </div>
              <span className="bottom-text-2">Space.io</span>
            </div>
          </div>

          {/* End-card-3 */}
        </section>
      </div>
    </>
  );
};

export default Card2;

// hello world
