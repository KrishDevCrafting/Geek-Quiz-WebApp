import React from "react";
const Signup = () => {
  return (
    <>
      <div className="container-box">
        <div className="box">

          <form action="/">
          <h1>Sign-up</h1>
          <div>
           <label htmlFor="name">Name:</label>
              Name: <input type="text" placeholder="UserName" />
           
          </div>

          <div>
           <label htmlFor="Email"> Email:</label>
              <input type="email" name="email" id="email" placeholder="Email" required/>
           
          </div>

          <div>
            
            <label htmlFor="Pasword">Password:
            </label>                <input type="password" name="" id="" placeholder="Password" />
            
          </div>
          <div>
            
            <button style={{backgroundColor: "red", color: "black"}} type="submit">Submit-here</button>
          </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
