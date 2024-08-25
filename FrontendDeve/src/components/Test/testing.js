import React from "react";
import "./testing.css";
const InputComponent = () => {
  return (
    <>
      <label for="input" class="text">
        Name:
      </label>
      <input
        type="text"
        placeholder="Write here..."
        name="input"
        class="input"
      />
    </>
  );
};

export default InputComponent;
