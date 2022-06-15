import React from "react";
import Display from "./Display";
import Carousel from "./Carousel";
import Deals from "./Deals";
import Header from "./header/Header";
import Footer from "./footer/Footer";

function Main() {
  return (
    <div>
      <Header />
      <Carousel />
      <Deals />
      <Display />
      <Footer />
    </div>
  );
}

export default Main;
