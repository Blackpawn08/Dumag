import React from "react";
import skills1 from "../images/skills/skills1.png";
import skills2 from "../images/skills/skills2.jpg";
import skills3 from "../images/skills/skills3.jpg";
import skills4 from "../images/skills/skills4.jpg";
import skills5 from "../images/skills/skills5.jpg";
const Skills = () => {
  return (
    <div>
      <div className="md:flex justify-around p-9">
        <div className="md:w-1/3 flex flex-col justify-center">
          <h1 className="md:text-3xl font-medium">Eagle-Eyed Editor</h1>
          <p>
            Typos and dull sentences tremble at the sight of me! I'll polish
            your content until it shines brighter than Burj Khalifa.
          </p>
        </div>
        <div className="md:w-1/3">
          <img src={skills1} alt="" />
        </div>
        <div className="md:w-1/3 flex flex-col justify-center">
          <h1 className="md:text-3xl font-medium">
            Teamwork Makes the Dream Work
          </h1>
          <p>
            Brainstorming with writers, designers, and other creative folks is
            my jam. Let's collaborate and make your projects legendary!
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <h1 className="text-4xl font-semibold pb-8">Beyond the Keyboard</h1>
      </div>
      <div className="lg:flex md:flex-wrap">
  <div className="lg:w-1/2 w-full relative md:flex">
    <div className="DIV1 lg:w-1/2 w-full relative">
      <img src={skills2} alt="" className="h-full w-auto object-cover" />
      <h1 className="absolute inset-0 flex items-start justify-center text-white md:text-xl text-lg bg-black bg-opacity-50 p-8 font-bold">
        Chief Executive Officer and Owner of Modern Integrative Training
        Institute-Dubai
      </h1>
      <p className="absolute inset-0 flex items-center justify-center text-white md:text-base p-8">
        Empowering individuals through the power of knowledge.
      </p>
    </div>

    <div className="DIV2 lg:w-1/2 w-full relative">
      <img src={skills3} alt="" className="h-full w-auto object-cover" />
      <h1 className="absolute inset-0 flex items-start justify-center text-white md:text-xl bg-black bg-opacity-50 p-8 font-bold">
        Social Media Maverick
      </h1>
      <p className="absolute inset-0 flex items-center justify-center text-white md:text-base p-4">
        Building online communities and growing brand engagement is my
        superpower.
      </p>
    </div>
  </div>

  <div className="lg:w-1/2 w-full relative md:flex">
    <div className="DIV3 lg:w-1/2 w-full relative">
      <img src={skills4} alt="" className="h-full w-auto object-cover" />
      <h1 className="absolute inset-0 flex items-start justify-center text-white md:text-xl bg-black bg-opacity-50 p-8 font-bold">
        Research Rabbit Hole Dweller
      </h1>
      <p className="absolute inset-0 flex items-center justify-center text-white md:text-base p-4">
        Uncovering the insights that make your stories truly captivating is my
        happy place.
      </p>
    </div>

    <div className="DIV4 lg:w-1/2 w-full relative">
      <img src={skills5} alt="" className="h-full w-auto object-cover" />
      <h1 className="absolute inset-0 flex items-start justify-center text-white md:text-xl bg-black bg-opacity-50 p-8 font-bold">
        Multilingual Master
      </h1>
      <p className="absolute inset-0 flex items-center justify-center text-white md:text-base p-4">
        Fluent in both English and Filipino.
      </p>
    </div>
  </div>
</div>

    </div>
  );
};

export default Skills;
