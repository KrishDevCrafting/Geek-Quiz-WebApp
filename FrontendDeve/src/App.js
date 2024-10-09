import React from "react";
import Signup from "./components/Pages/Auth/Signup.jsx";
import LoginComponent from "./components/Pages/Auth/Login.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Home.jsx";
import { QuizComponent } from "./components/home/QuizPage.jsx";

import FeedBack from "./components/Feedback/FeedBack.jsx";
import PageCs from "./components/QuizCategories/Computer-Sci.jsx";
import Testing from "./components/Test/testing.js";
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
            <Route path="/testing" element={<Testing />} />
            <Route path="/value" element={<FeedBack />} />
            <Route path="/computer-science" element={<PageCs />} />
          </Routes>
        </BrowserRouter>
      </div>

      <div className="App"></div>
    </>
  );
};

export default App;

// https://fullstackopen.com/en/
