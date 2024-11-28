import React from "react";
import "./page.css";

const LeaderPageComponent = () => {
  return (
    <>
      <div className="leftSide-nav">
        <div className="sideNavbar-div">
          <div>
            <ol>
              <li className="py-4 px-16">GeekQuiz</li>
              <li className="px-4 nav-input">
                <input type="text" placeholder="search" />
              </li>
            </ol>

            <ul className="p-4">
              <li className="p-4">Home</li>
              <li className="p-4">FeedBack</li>
              <li className="p-4">Update</li>
              <li className="p-4">Browrse-more</li>
            </ul>
          </div>
        </div>
        <div className="heading-div">
          <h1 className="text-black">See where You are!</h1>

          {/* section for showing text */}
          <div>
            <span className="text-black">Showing:</span>
            <span>
              <input type="text" id="input-option" />
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
