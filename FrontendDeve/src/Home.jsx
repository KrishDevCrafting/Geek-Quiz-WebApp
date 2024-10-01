import React from "react";
import NavBar from "./components/navbar/Nav";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Card2 from "./components/Cards/Cards2";
import Cards from "./components/Cards/Cards1";
import DynamicName from "./components/Cards/PlayerName";
import "./HomeStyle.css";
import Footer from "./components/Cards/Footer/footer";
import ComponenetA from "./Background-Star-Effect/ComponentA";
export const Home = () => {
  return (
    <>
      <div className="main-home">
        <NavBar />
        <ComponenetA />
        <DynamicName />
        <Card2 />
        <Cards />
        <SpeedInsights />
        <Footer />
      </div>
    </>
  );
};
