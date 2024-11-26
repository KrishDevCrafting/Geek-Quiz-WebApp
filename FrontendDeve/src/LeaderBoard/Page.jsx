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
          <h1 className="text-red-900">See where You are!</h1>
          
        </div>
      </div>
    </>
  );
};

export default LeaderPageComponent;
