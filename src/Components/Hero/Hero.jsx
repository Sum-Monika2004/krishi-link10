import React, { useEffect, useState } from "react";

const Hero = () => {
  return (
    <div className="">
      <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row  justify-between items-center p-15 gap-40">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-6xl font-bold mb-6 text-yellow-900 leading-tight ">
            KrishiLink - <br /> Farmer's Growth & Connection Platform
          </h1>
          <p className="text-xl text-gray-400">
            KrishiLink is a modern web application that connects people in the
            agricultural sector such as farmers, traders, and consumers in one
            digital space.
          </p>
        </div>
        <div>
          <img className=" flex-1 mx-auto" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
