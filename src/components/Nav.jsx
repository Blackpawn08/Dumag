import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import archielogo from "../images/archielogo.png";
import { RiMenu4Fill } from "react-icons/ri";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const isActive = (path) => {
    return location.pathname === path;
  };
  return (
    <nav className="lg:bg-transparent  text-main-white lg:flex justify-around items-center p-6">
      <div className="flex justify-between items-center pl-3 pr-5 bg-main-black rounded-full  color lg:bg-transparent w-full lg:w-auto ">
      <Link to="/" onClick={() => scrollTo("home")}>
        <img  className="h-16 p-2" src={archielogo} alt="" />
        </Link>
        <button onClick={toggleNavbar} className="lg:hidden cursor-pointer">
          <RiMenu4Fill className="h-16 w-10" />
        </button>
        
      </div>
      <div>
        <ul  className={`text-center font-medium lg:flex lg:bg-transparent ${
          menuOpen ? "block" : "hidden"
        } items-center gap-20 transition ease-in-out duration-300`}>
          <li
            className={`bg-main-gray rounded-xl lg:bg-transparent p-1 m-3 text-lg hover:text-blue-700 ${
              isActive("/") ? "text-blue-700" : ""
            }`}
          >
            <Link to="/" onClick={() => scrollTo("about")}>
              About
            </Link>
          </li>

          <li
            className={`bg-main-gray rounded-xl lg:bg-transparent p-1 m-3 text-lg hover:text-blue-700 ${
              isActive("/") ? "text-blue-700" : ""
            }`}
          >
            <Link to="/" onClick={() => scrollTo("experience")}>
              Experience
            </Link>
          </li>

          <li
            className={`bg-main-gray rounded-xl lg:bg-transparent p-1 m-3 text-lg hover:text-blue-700 ${
              isActive("/") ? "text-blue-700" : ""
            }`}
          >
            <Link to="/" onClick={() => scrollTo("skills")}>
              Skills
            </Link>
          </li>

          <li
            className={`bg-main-gray rounded-xl lg:bg-transparent p-1 m-3 text-lg hover:text-blue-700 ${
              isActive("/") ? "text-blue-700" : ""
            }`}
          >
            <Link to="/" onClick={() => scrollTo("achievements")}>
              Achievements
            </Link>
          </li>

          <li
            className={`bg-main-gray rounded-xl lg:bg-transparent p-1 m-3 text-lg hover:text-blue-700 ${
              isActive("/") ? "text-blue-700" : ""
            }`}
          >
            <Link to="/" onClick={() => scrollTo("gallery")}>
              Gallery
            </Link>
          </li>

          <li
            className={`bg-main-gray rounded-xl lg:bg-transparent p-1 m-3 text-lg hover:text-blue-700 ${
              isActive("/") ? "text-blue-700" : ""
            }`}
          >
          </li>

         
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
