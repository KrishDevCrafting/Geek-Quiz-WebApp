import React from "react";
const Signup = () => {
  return (
    <>
      <div className="container-box">
        <div className="box">
          <h1>Sign-up</h1>
          <div>
            <span>
              Name: <input type="text" placeholder="UserName" />
            </span>
          </div>

          <div>
            <span>
              Email: <input type="email" name="" id="" placeholder="Email" required/>
            </span>
          </div>

          <div>
            <span>
              Password:{" "}
              <input type="password" name="" id="" placeholder="Password" />
            </span>
          </div>
          <div>
            <button>Submit-here</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
