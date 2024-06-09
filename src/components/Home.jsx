import React from "react";
import { Link } from "react-router-dom";
import homepic from "../images/hero/heropic.png";



const Home = () => {
  const scrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="relative ">
      <div className="flex flex-col-reverse md:flex-row justify-around items-center pl-4 pr-4 ">
        <div className="flex flex-col justify-center items-center md:items-start p-9 gap-4 md:w-3/5">
          <div>
            <h1 className="lg:text-8xl text-4xl font-bold">
            <span className="text-blue-500">BRYAN</span> ANGELO
              <br />
              REYES <span className="text-blue-500">DUMAG</span>
            </h1>
          </div>
          <div>
            <p className="md:text-xl font-normal">
              Yo! Let’s craft stories that pop and make your brand the hottest
              <br className="hidden md:inline"/>
              topic in Dubai and in the Gulf.
            </p>
          </div>
          <div>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-xl shadow-xl">
              <Link to="/" onClick={() => scrollTo("contact")}>
                Collaborate now
              </Link>
            </button>
          </div>
        </div>
        <div className=" md:w-2/5">
       
          <img src={homepic} alt="" className=" w-full h-full object-cover " />
         
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Home;
