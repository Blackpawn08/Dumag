import React from "react";
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Achievement from "./components/Achievement";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Nav from "./components/Nav";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import Gallery from "./components/Gallery";
import shape1 from "../src/images/shapes/shape1.png";
import shape2 from "../src/images/shapes/shape2.png";
import shape3 from "../src/images/shapes/shape3.png";
import shape4 from "../src/images/shapes/shape4.png";
import shape5 from "../src/images/shapes/shape5.png";

import shape6 from "../src/images/shapes/shape6.png";

const App = () => {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Optional: Smooth scrolling animation
    });
  }
  return (
    <div className="relative">
      <img
        src={shape3}
        className="absolute right-0 top-20 p-4 z-0 md:w-1/2 h-auto"
        alt=""
      />
      <img
        src={shape4}
        className="absolute z-0 w-48 h-auto md:left-14 md:top-44 hidden md:flex opacity-30"
        alt=""
      />
      <div className="relative z-10">
        <Nav scrollTo={scrollTo} />
        <Link to="/" onClick={scrollToTop}>
          <MdKeyboardDoubleArrowUp className="fixed bottom-10 right-10 w-12 h-12" />
        </Link>

        <div id="home">
          <Home />
        </div>

        <div id="about">
          <About />
        </div>
        <img
          src={shape5}
          className="absolute z-0 w-48 h-auto md:left-14 pt-4 hidden md:flex opacity-50"
          alt=""
        />
        
        <div id="experience">
          <Experience />
          <img
          src={shape6}
          className="absolute z-0 w-72 h-auto md:left-14  pt-4 hidden md:flex opacity-50"
          alt=""
        />
        </div>
        <div id="skills">
          <Skills />
        </div>
        <div id="achievements">
          <Achievement />
        </div>
        <div id="gallery">
          <Gallery />
        </div>
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default App;
