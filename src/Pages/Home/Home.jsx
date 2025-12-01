import React from "react";
import Hero from "../../Components/Hero/Hero";
import Latest from "../../Components/LatestCropPost/Latest";
import Works from "../../Components/Works/Works";
import AgroNews from "../../Components/AgroNews/AgroNews";
import { Link, useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className="w-11/12 mx-auto">
      <Hero></Hero>
      <div className="w-11/12 mx-auto mt-20">
        <h1 className="font-bold text-5xl  mb-15">Latest Crop Posts</h1>

        <Latest data={data}></Latest>

        <div className="mt-8 ">
          <Link to="/AllCrops">
            <button className="btn text-[#be721b] font-semibold flex gap-1 mx-auto">
              <span>All Crops</span> <img src="" alt="" />
            </button>
          </Link>
        </div>
      </div>
      <Works></Works>
      <AgroNews></AgroNews>
    </div>
  );
};

export default Home;
