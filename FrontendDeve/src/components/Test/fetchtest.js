import React, { useEffect } from "react";
export const Fixerror = () => {
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
      <div></div>
    </>
  );
};
