import React, { Suspense } from "react";
import Crop from "../Crop/Crop";

const Latest = ({ data }) => {
  return (
    <div className="w-11/12 mx-auto mt-20">
      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Suspense
          fallback={<span className="loading loading-dots loading-xl"></span>}
        >
          <Crop></Crop>
          {/* {data.map((singleCrop) => (
            <Crop key={singleCrop.id} singleCrop={singleCrop}></Crop>
          ))} */}
        </Suspense>
      </div>
    </div>
  );
};

export default Latest;
