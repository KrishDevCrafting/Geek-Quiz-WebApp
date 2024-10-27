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
          <h1 className="text-4xl text-center">Top player 🎮</h1>
          <ul>
            {data.map((e) => (
              <li>{e.name}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default DynamicName;
