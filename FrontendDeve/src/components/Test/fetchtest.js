import React, { useEffect } from "react";

export const Fixerror = () => {
  const [data, setdata] = React.useState([]);
  const fetchData =
    "https://raw.githubusercontent.com/KrishDevCrafting/review-sentiment-analysis/main/reviewsData.json";
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
      <table className="table-auto text-center">
        <tr className=" border-collapse">
          {data.map((e) => (
            <td>{e.category}</td>
          ))}
        </tr>
        <tr>
          {data.map((i) => (
            <td>{i.reviewer_name}</td>
          ))}
        </tr>
      </table>
    </>
  );
};
