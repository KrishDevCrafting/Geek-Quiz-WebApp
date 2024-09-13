import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
function Dropdown() {
  const notify = () =>
    toast.success("🦄 Wow so easy!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <>
      {" "}
      <div className="text-center">
        <h1>Hello-World!</h1>
        <form onSubmit={handleSubmit}>
          <label className="px-4 text-2xl">Name</label>
          <input type="text" placeholder="name" />
          <br />
          <label className="px-4 text-2xl">Email</label>

          <input type="email" placeholder="Enter Email id!" />
          <br />
          <label className="px-4 text-2xl">Password</label>

          <input type="password" placeholder="Password" />
          <br />
          <button
            className="bg-blue-600 px-4 m-8 hover:bg-blue-800 text-white"
            onClick={notify}>
            Submit
          </button>
          <ToastContainer />
        </form>
      </div>
    </>
  );
}

export default Dropdown;
