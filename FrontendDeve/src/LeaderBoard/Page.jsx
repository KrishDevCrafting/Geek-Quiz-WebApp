import React from "react";
import "./page.css";

const LeaderPageComponent = () => {
  return (
    <>
      <div className="leftSide-nav">
        <div className="leftside-navBox">
          <ol>
            <li>GeekQuiz</li>
            <li>
              <input type="text" placeholder="search" />
            </li>
          </ol>
        </div>
        <div className="leftside-navBox">
          <ul>
            <li>Home</li>
            <li>FeedBack</li>
            <li>Update</li>
            <li>Browrse-more</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default LeaderPageComponent;
