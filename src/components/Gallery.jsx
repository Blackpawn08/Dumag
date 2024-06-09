import React from "react";
import gall1 from "../images/gallery/1.jpg";
import gall2 from "../images/gallery/2.jpg";
import gall3 from "../images/gallery/3.jpg";
import gall4 from "../images/gallery/4.jpg";
import gall5 from "../images/gallery/5.jpg";
import gall6 from "../images/gallery/6.jpg";
import gall7 from "../images/gallery/7.jpg";
import gall8 from "../images/gallery/8.jpg";
import gall9 from "../images/gallery/9.jpg";
import gall10 from "../images/gallery/10.jpg";

const Gallery = () => {
  return (
    <>
      <div className="flex justify-center">
        <h1 className="md:text-4xl text-2xl font-semibold p-5 rounded-3xl mb-4 text-white bg-blue-700 shadow-2xl">Captured Memories</h1>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-3 justify-evenly gap-4 p-9">
        <div>
          <img src={gall1} alt="" className="h-96 w-96 object-cover rounded-3xl" />
        </div>
        <div>
          <img src={gall2} alt="" className="h-96 w-96 object-cover rounded-3xl" />
        </div>
        <div>
          <img src={gall3} alt="" className="h-96 w-96 object-cover rounded-3xl" />
        </div>
        <div>
          <img src={gall4} alt="" className="h-96 w-96 object-cover rounded-3xl" />
        </div>
        <div>
          <img src={gall5} alt="" className="h-96 w-96 object-cover rounded-3xl" />
        </div>
        <div>
          <img src={gall6} alt="" className="h-96 w-96 object-cover rounded-3xl" />
        </div>
        <div>
          <img src={gall7} alt="" className="h-96 w-96 object-cover rounded-3xl" />
        </div>
        <div>
          <img src={gall8} alt="" className="h-96 w-96 object-cover rounded-3xl" />
        </div>
        <div>
          <img src={gall9} alt="" className="h-96 w-96 object-cover rounded-3xl" />
        </div>
        <div>
          <img src={gall10} alt="" className="h-96 w-96 object-cover rounded-3xl" />
        </div>
      </div>
    </>
  );
};

export default Gallery;
