import React from "react";
import NavBar from "./components/navbar/Nav.jsx";
import Main from "./components/Cards/PlayerName.jsx";
import Cards from "./components/Cards/Cards1.jsx";

// import Logo from "./components/Logo.js";
import ComponenetA from "./Background-Star-Effect/ComponentA.jsx";
import Card2 from "./components/Cards/Cards2";

const App = () => {
  return (
    <>
      {/* <Logo/> */}
      <ComponenetA />
      <NavBar />
      <Main />
     <Card2/>
     <Cards />
    </>
  );
};

export default App;
