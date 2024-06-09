import React from "react";
import { GiMaterialsScience } from "react-icons/gi";
import { GiSatelliteCommunication } from "react-icons/gi";
import { SiUnitednations } from "react-icons/si";

const Achievement = () => {
  return (
    <div className="p-7">
      <div className="text-center">
        <h1 className="text-4xl font-semibold pb-8">Bragging Rights & Diplomas</h1>
      </div>
      <div className="md:flex justify-center p-7">
        <div className="md:w-2/6 ">
          <div>
            <GiMaterialsScience className="md:w-20 md:h-20 w-14 h-14 "  style={{ fill: '#4299e1' }}/>
          </div>
          <div>
            <h1 className="text-lg font-medium">
              Masters of Arts in Behavioral Science
            </h1>
            <p>(Psychology)-Academic Achiever</p>
          </div>
        </div>

        <div className="md:w-2/6 ">
          <div>
            <GiSatelliteCommunication className="md:w-20 md:h-20  w-14 h-14" style={{ fill: '#4299e1' }} />
          </div>
          <div>
            <h1 className="text-lg font-medium">
              Bachelor of Arts in Communication
            </h1>
            <p>Dean’s Lister</p>
          </div>
        </div>

        <div className="md:w-2/6">
          <div>
            <SiUnitednations className="md:w-20 md:h-20  w-14 h-14" style={{ fill: '#4299e1' }} />
          </div>
          <div>
            <h1 className="text-lg font-medium">
              UN & Dubai Awards Excellence
            </h1>
            <p>
              Outstanding Achievements at Model United Nations events and the
              Dubai Eminent Awards
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
