import React from "react";
import Signup from "./components/Pages/Auth/Signup.jsx";
import LoginComponent from "./components/Pages/Auth/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home.jsx";
import { QuizComponent } from "./components/home/QuizPage.jsx";
import QuizApp from "./components/Test/fetchtest.js";
import NavbarA from "./components/Cards/testNav.jsx";

const App = () => {
  return (
    <>
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/QuizPage" element={<QuizComponent />} />
            <Route path="/test" element={<QuizApp />} />
            <Route path="/value" element={<NavbarA />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className="App"></div>
    </>
  );
};

export default App;

// https://fullstackopen.com/en/
