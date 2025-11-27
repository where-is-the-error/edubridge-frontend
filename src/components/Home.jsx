import React from "react";
import "./styles/Home.css";
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Carousel />
    </div>
  );
};

export default Home;
