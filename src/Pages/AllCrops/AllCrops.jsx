import React from "react";
import { useLoaderData } from "react-router";
import Latest from "../../Components/LatestCropPost/Latest";

const AllCrops = () => {
  const data = useLoaderData();

  return (
    <div>
      <h1 className="font-bold text-5xl text-center my-15">All Crops</h1>

      <div className="mb-20 w-11/12 mx-auto">
        <Latest data={data}></Latest>
      </div>
    </div>
  );
};
export default AllCrops;
