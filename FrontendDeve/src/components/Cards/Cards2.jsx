import React from "react";
import "./Card2.css";
import ".././styles.css";
const Card2 = () => {
  return (
    <>
      <div className="align-text sm:text-blue-500 lg:text-red-800">
        <h1 id="text">MotorCar-QUIZ</h1>
      </div>

      <div className="main-card sm: flex-col lg:flex-row">
        {/* card-1   */}

        <section>
          <div className="main-container-2">
            <div class="box-card card-2">
              <div class="border-2"></div>
              <div class="content-2">
                <div class="card-logo-2">
                  <div class="logo2">
                    <div className="logo2">
                      <h1>Sport-Car</h1>
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

          <div className="main-1">
            <div class="card card-1">
              <div class="border"></div>
              <div class="content">
                <div class="logo">
                  <div class="logo1">
                    <div className="logo2">
                      <h1>Horror</h1>
                    </div>
                  </div>
                  <span class="trail"></span>
                </div>
                <span class="logo-bottom-text">Krish.io</span>
              </div>
              <span class="bottom-text">Space.io</span>
            </div>
          </div>

          {/* End-card-3 */}
        </section>
      </div>
    </>
  );
};

export default Card2;
