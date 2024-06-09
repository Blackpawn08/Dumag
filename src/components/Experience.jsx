import React from "react";
import isa from "../images/experience/exp1.jpg";
import dalawa from "../images/experience/exp2.jpg";
import tatlo from "../images/experience/exp3.jpg";
import apat from "../images/experience/exp4.png";
import lima from "../images/experience/exp5.jpg";
import anim from "../images/experience/exp6.jpg";

const Experience = () => {
  return (
    <div className="p-9">
      <div className="pb-14">
        <div>
          <h1 className="md:text-6xl text-4xl font-bold pb-8 md:text-center">
            Storytelling Superhero
          </h1>
        </div>

        <div>
          <div className="md:flex md:justify-around gap-4 pb-4">
            <div className="md:w-1/2 flex flex-col justify-center gap-3">
              <h1 className="md:text-3xl text-lg font-medium text-blue-700">
                Managing Editor
              </h1>
              <p className="md:text-lg text-sm">
                Luxe Gulf Magazine - Whipping up high-end content that Dubai's
                A-listers crave. (Sneak peek? Check it out here:
                <a
                  href="https://luxegulf.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  https://luxegulf.com/
                </a>
              </p>
            </div>
            <div className="md:w-2/5">
              <img src={isa} className="h-96 w-full object-cover rounded-xl shadow-xl" />
            </div>
          </div>

          <div className="md:flex flex flex-col-reverse md:flex-row md:justify-around gap-4 pb-4">
            <div className="md:w-2/5">
              <img
                src={dalawa}
                className="h-96 w-full object-cover rounded-xl shadow-xl" 
              />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center gap-3">
              <h1 className="md:text-3xl text-lg font-medium text-blue-700">
                Editor in Chief (Former)
              </h1>
              <p className="md:text-lg text-sm">
                Dubai Vibes Magazine - Building a thriving community with
                stories that resonate with the UAE's expat crew. (
                <a
                  href="https://www.dubaivibesmagazine.ae/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "blue" }}
                >
                  https://www.dubaivibesmagazine.ae/
                </a>
                )
              </p>
            </div>
          </div>

          <div className="md:flex md:justify-around gap-4 pb-4">
            <div className="md:w-1/2 flex flex-col justify-center gap-3">
              <h1  className="md:text-3xl text-lg font-medium text-blue-700">Journalist Guru</h1>
              <p className="md:text-lg text-sm">
                I write clear, catchy content for websites, marketing materials,
                and anything that needs a voice with a little extra personality.
              </p>
            </div>
            <div className="md:w-2/5">
              <img
                src={tatlo}
                className="h-96 w-full object-cover rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <div>
        <h1 className="md:text-6xl text-4xl font-bold pb-8 md:text-center">
            Education Champion
          </h1>
        </div>

        <div>
          <div className="md:flex md:justify-around gap-4 pb-4">
            <div className="md:w-1/2 flex flex-col justify-center gap-3">
            <h1  className="md:text-3xl text-lg font-medium text-blue-700">
                College Instructor (Former)
              </h1>
              <p className="md:text-lg text-sm">
                I spent years inspiring and equipping students at AMA
                University, Marian College, and La Consolacion University
                Philippines, igniting their passion for various subjects.
              </p>
            </div>
            <div className="md:w-2/5">
              <img src={apat} className="h-96 w-full object-contain rounded-xl shadow-xl" />
            </div>
          </div>

          <div className="md:flex flex flex-col-reverse md:flex-row md:justify-around gap-4 pb-4">
            <div className="md:w-2/5">
              <img src={lima} className="h-96 w-full object-cover rounded-xl  shadow-xl" />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center gap-3">
            <h1  className="md:text-3xl text-lg font-medium text-blue-700">Psychology Instructor</h1>
              <p className="md:text-lg text-sm">
                I share my knowledge of human behavior with students at the
                Global Business University Cyprus, helping them understand
                themselves and others better.
              </p>
            </div>
          </div>

          <div className="md:flex md:justify-around gap-4">
            <div className="md:w-1/2 flex flex-col justify-center gap-3">
            <h1  className="md:text-3xl text-lg font-medium text-blue-700">
                Business Management & Logistics & Supply Chain Trainer
              </h1>
              <p className="md:text-lg text-sm">
                I empower individuals with the skills they need to succeed in
                this dynamic industry in Dubai.
              </p>
            </div>
            <div className="md:w-2/5">
              <img src={anim} className="h-96 w-full object-cover rounded-xl  shadow-xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
