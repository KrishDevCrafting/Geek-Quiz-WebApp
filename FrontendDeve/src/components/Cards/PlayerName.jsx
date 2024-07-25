import React, { useEffect } from "react";
import "../Cards/PlayerName.css";
const DynamicName = () => {
  const [data, setdata] = React.useState([]);
  const holdData = "http://localhost:7000/user/get";

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
        <div className="">
          <h1 id="">Top player 🎮</h1>
          <ul>
            {data.map((e) => (
              <li>{e.title}</li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default DynamicName;
