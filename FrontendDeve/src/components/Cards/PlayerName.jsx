import React, { useEffect } from "react";
import "../Cards/PlayerName.css";

const DynamicName = () => {
  const [data, setdata] = React.useState([]);
  // const holdData = "http://localhost:7000/user/get";
  const holdData = "https://geek-quiz.onrender.com/user/getdata";
  useEffect(() => {
    const dynamicData = async () => {
      const response = await fetch(holdData);
      const res = await response.json();
      setdata(res);
    };
    dynamicData();
  }, []);

  return (
    <>
      {/* section 2 started here */}
      <section className="section2">
        <div className="box">
          <h1 className="text-4xl text-center text-white">Top player 🎮</h1>

          <div className="">
            <div className="player-name-container">
              {data.slice(0, 3).map((e) => (
                <p className="player-name-box">{e.name}</p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DynamicName;
