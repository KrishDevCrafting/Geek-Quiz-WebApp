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
            <div class="box-card card-2 w-3">
              <div class="border-2"></div>

              <div class="content-2">
                <div class="card-logo-2">
                  <div class="logo2">
                    <div className="logo2">
                      <h1>BMW' Werke</h1>
                    </div>
                  </div>
                  <span class="trail-2"></span>
                </div>
                <span class="logo-bottom-text-2">Krish.io</span>
              </div>
              <span class="bottom-text-2">Space.io</span>
            </div>
          </div>
          {Navigate("/quizPage")}
        </section>

        {/* End-card-1 */}
        {/* Card-2 */}
        <section>
          <div className="main-container-2">
            <div class="box-card-3 card-2">
              <div class="border-2"></div>
              <div class="content-2">
                <div class="card-logo-2">
                  <div class="logo2">
                    <div className="logo2">
                      <h1>Empty-Space</h1>
                    </div>
                  </div>
                  <span class="trail-2"></span>
                </div>
                <span class="logo-bottom-text-2">Krish.io</span>
              </div>
              <span class="bottom-text-2">Space.io</span>
            </div>
          </div>
        </section>

        {/* card-End-2 */}

        <section>
          {/* Card-3 */}

          <div className="main-container-2">
            <div class="box-card-2 card-2">
              <div class="border-2"></div>
              <div class="content-2">
                <div class="card-logo-2">
                  <div class="logo2">
                    <div className="logo2">
                      <h1>Horror</h1>
                    </div>
                  </div>
                  <span class="trail-2"></span>
                </div>
                <span class="logo-bottom-text-2">Krish.io</span>
              </div>
              <span class="bottom-text-2">Space.io</span>
            </div>
          </div>

          {/* End-card-3 */}
        </section>
      </div>
    </>
  );
};

export default Card2;
