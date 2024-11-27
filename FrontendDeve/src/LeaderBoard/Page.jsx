import React from "react";
import "./page.css";

const LeaderPageComponent = () => {
  return (
    <>
      <div className="leftSide-nav">
        <div className="sideNavbar-div">
          <div>
            <ol>
              <li>GeekQuiz</li>
              <li>
                <input type="text" placeholder="search" />
              </li>
            </ol>

            <ul>
              <li>Home</li>
              <li>FeedBack</li>
              <li>Update</li>
              <li>Browrse-more</li>
            </ul>
          </div>
        </div>
        <div className="heading-div">
          <h1 className="text-black">See where You are!</h1>

          {/* section for showing text */}
          <div>
            <span className="text-black">Showing:</span>
            <span>
              <input type="text" />
            </span>
          </div>
          {/* End Section */}

          <div className="top-parent-container text-black my-4">
            <div className="top-div-boxs">Karan</div>
            <div className="top-div-boxs">Ashoka</div>
            <div className="top-div-boxs">Divyansh</div>
            <div className="top-div-boxs">Joe</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderPageComponent;
