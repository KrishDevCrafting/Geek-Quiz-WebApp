import React, { useEffect } from "react";

export const Fixerror = () => {
  const [data, setdata] = React.useState([]);
  // const fetchData = "http://localhost:7000/user/getdata";
  const fetchData = "http://localhost:7000/user/get";
  useEffect(() => {
    const fetchPromise = () => {
      fetch(fetchData)
        .then((res) => res.json())
        .then((data) => {
          setdata(data);
        });
    };
    fetchPromise();
  }, []);
  return (
    <>
      <div>
        <h1 className="text-red-400">work.. !</h1>
      </div>
      <div className="flex justify-center">
        <ul>
          {data.map((e) => (
            <li>{e.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
