import React, { useEffect } from "react";
import "./quizStyle.css";
export const QuizComponent = () => {
  const [value, setvalue] = React.useState([]);
  const hello = "http://localhost:7000/user/get";

  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(hello);
      const res = await response.json();
      setvalue(res);
    };
    fetchdata();
  }, []);

  return (
    <>
      <div
        className="flex justify-center  items-center"
        style={{ border: "1px solid red", height: "50vh" }}
      >
        <form action="">
          <div className="text-center my-4">
            <h1 className="text-4xl"> Which book is writen by Napoleon Hill</h1>
          </div>
          <div id="checklist">
            <input value="1" name="r" type="checkbox" id="01" />
            <label for="01" className="">
              Think and Grow Rich
            </label>
            <input value="2" name="r" type="checkbox" id="02" />
            <label for="02">48 Laws Power</label>
            <input value="3" name="r" type="checkbox" id="03" />
            <label for="03">Rich Dad and Poor Dad</label>
            <input value="3" name="r" type="checkbox" id="04" />
            <label for="04">Dark Psychology</label>
          </div>
        </form>
        <div>
          <ul>
            {value.map((e) => (
              <li>{}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
