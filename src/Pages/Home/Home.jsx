import React from "react";
import Hero from "../../Components/Hero/Hero";
import Latest from "../../Components/LatestCropPost/Latest";
import Works from "../../Components/Works/Works";
import AgroNews from "../../Components/AgroNews/AgroNews";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Hero></Hero>
      <div className="w-11/12 mx-auto mt-20">
        <h1 className="font-bold text-5xl  mb-15">Latest Crop Posts</h1>
        <Latest></Latest>
        <div className="mt-8 ">
          <button className="btn text-[#be721b] font-semibold flex gap-1 mx-auto">
            <span>All Crops</span> <img src="" alt="" />
          </button>
        </div>
      </div>
      <Works></Works>
      <AgroNews></AgroNews>
    </div>
  );
};

export default Home;
