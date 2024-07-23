import React from "react";
import "./quizStyle.css";
export const QuizComponent = () => {
  return (
    <>
      <div
        className="flex justify-center  items-center"
        style={{ border: "1px solid red", height: "50vh" }}>
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

          {/* <label>
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
              ea.
            </h1>
          </label>
          <section className="text-center">
            <div>
              <h3 className="inline-block">option-1</h3>
              <input type="checkbox" name="" id="" />
            </div>
            <div>
              <h3 className="inline-block">option-2</h3>
              <input type="checkbox" name="" id="" />
            </div>
            <div>
              <h3 className="inline-block">option-3</h3>
              <input type="checkbox" name="" id="" />
            </div>
            <div>
              <h3 className="inline-block">option-4</h3>
              <input type="checkbox" name="" id="" />
            </div>
          </section> */}
        </form>
      </div>
    </>
  );
};
