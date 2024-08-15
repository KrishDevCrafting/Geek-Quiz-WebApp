import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card2.css";
import "../styles.css";
import { useDispatch } from "react-redux";
import { userLogic } from "../Features/user"; // Import the correct action

const Card2 = () => {
  const [data, setData] = React.useState(2);
  const [bmw, setBmw] = React.useState(0);
  const [random, setRandom] = React.useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/quizPage");
    console.log("Navigating to /quizPage with user:", data);
  };

  const handleClick = () => {
    dispatch(userLogic(data)); // Dispatch with the correct action creator
    handleNavigate(); // Navigate after dispatching the action
  };

  const handlePower = () => {
    dispatch(userLogic(bmw));
  };

  const handleRandom = () => {
    dispatch(userLogic(random));
  };
  return (
    <>
      <div className="align-text lg:text-white">
        <h1 id="text">MotorCar-QUIZ</h1>
      </div>

      <div className="main-card sm:flex-col lg:flex-row"
      onClick={handleNavigate}>
        {/* Card-1 */}
        <section>
          <div className="main-container-2" onClick={handlePower}>
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
        </section>

        {/* Card-2 */}
        <section onClick={handleClick}>
          <div className="main-container-2">
            <div className="box-card-3 card-2">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <div className="logo2">
                      <h1>Nissan-Supra</h1>
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

        {/* Card-3 */}
        <section onClick={handleRandom}>
          <div className="main-container-2">
            <div className="box-card-2 card-2">
              <div className="border-2"></div>
              <div className="content-2">
                <div className="card-logo-2">
                  <div className="logo2">
                    <div className="logo2">
                      <h1>Nissan GT-R</h1>
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
      </div>
    </>
  );
};

export default Card2;

// hello world
