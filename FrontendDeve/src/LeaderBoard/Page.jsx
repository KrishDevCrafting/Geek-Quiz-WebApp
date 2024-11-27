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
        <div className="heading-div bg-red-900">
          <h1 className="text-black">See where You are!</h1>
          <div>
            <span>Showing:</span>
            <span>
              <input type="text" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderPageComponent;
