import React from "react";

export const QuizComponent = () => {
  return (
    <>
      <div
        className="flex justify-center  items-center"
        style={{ border: "1px solid red", height: "50vh" }}>
        <form action="">
          <label>
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
          </section>
        </form>
      </div>
    </>
  );
};
