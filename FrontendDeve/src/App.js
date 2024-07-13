import React from "react";
import Signup from "./components/Pages/Auth/Signup.jsx";
import LoginComponent from "./components/Pages/Auth/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./Home.jsx";
const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginComponent />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className="App">
       
      </div>
    </>
  );
};

export default App;


// https://fullstackopen.com/en/