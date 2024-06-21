import React from "react";
import NavBar from "./components/navbar/Nav.jsx";
import Main from "./components/Cards/Main";
import Cards from "./components/Cards/Cards1.jsx";
import Card from "./components/Cards/Cards2";
import Logo from "./components/Logo.js";
import ComponenetA from "./Testing/ComponentA";

const App = () => {
  return (
    <>
    {/* <Logo/> */}
<ComponenetA/>
    <NavBar />
      <Main />
      <Cards />
      <Card />  
    </>
  );
};

export default App;
