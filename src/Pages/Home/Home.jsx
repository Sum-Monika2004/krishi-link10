import React from "react";
import Hero from "../../Components/Hero/Hero";
import Latest from "../../Components/LatestCropPost/Latest";
import Works from "../../Components/Works/Works";
import AgroNews from "../../Components/AgroNews/AgroNews";
import { Link, useLoaderData } from "react-router";
import pic from "../../assets/pic.png";

const Home = () => {
  const data = useLoaderData();

  return (
    <div className=" mx-auto">
      <Hero></Hero>
      <div className="w-11/12 mx-auto mt-20">
        <h1 className="font-bold text-5xl  mb-15">Latest Crop Posts</h1>

        <Latest data={data}></Latest>

        <div className="mt-8 ">
          <Link to="/AllCrops">
            <button className="btn text-[#be721b] font-semibold flex gap-1 mx-auto">
              <span>All Crops</span>
            </button>
          </Link>
        </div>
      </div>
      <Works></Works>
      <AgroNews></AgroNews>

      {/* Reviews  */}

      <div className="w-11/12 mx-auto mt-20">
        <h1 className="font-bold text-5xl text-right mb-15">Reviews</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {/* card */}
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex justify-between  items-start p-10 gap-3">
              <div>
                <img
                  className="w-[75px] h-[30px] object-cover "
                  src={pic}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">Ave melisa</h2>

                <p className="text-gray-400">
                  “KrishiLink is an amazing platform for farmers and buyers. It
                  feels more like a community than a marketplace.”
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex justify-between  items-start p-10 gap-3">
              <div>
                <img
                  className="w-[75px] h-[30px] object-cover "
                  src={pic}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">John dalton</h2>

                <p className="text-gray-400">
                  “The user interface is clean and easy to navigate. I can
                  quickly browse different crops .”
                </p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl">
            <div className="flex justify-between  items-start p-10 gap-3">
              <div>
                <img
                  className="w-[75px] h-[30px] object-cover  "
                  src={pic}
                  alt=""
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-3">Cal frank</h2>

                <p className="text-gray-400">
                  “I've been using KrishiLink for a few weeks, and it's already
                  helping me reach more buyers. Posting is effortless.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
