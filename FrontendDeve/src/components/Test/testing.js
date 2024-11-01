import React, { useEffect, useState } from "react";
import "./testing.css";

const Testing = () => {
  const [data, setData] = useState([
    {
      name: "krish",
    },
    { name: "Vaishali" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("./test.json");
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error("Error Fetching Data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container-love">
      {data.map((item, index) => (
        <div key={index} className="box">
          <p>{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Testing;
