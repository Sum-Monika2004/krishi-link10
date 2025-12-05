import React from "react";
import { Link } from "react-router";

const Crop = ({ singleCrop }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl">
      <div className="p-8 flex-row">
        <img
          className="flex-1 w-[164px] h-[150px] mx-auto bg-white"
          src={singleCrop.image}
        />
        <p className="flex-1 my-4 font-bold text-[25px] text-center">
          {singleCrop.name}
        </p>
        <div className="flex-1 ">
          <div className="flex-row justify-between  items-center text-[18px] font-bold  ">
            <p>
              Type : <span className="font-semibold"> {singleCrop.type}</span>
            </p>
            <p>
              Price :{" "}
              <span className="font-semibold">
                {singleCrop.pricePerUnit} Taka / {singleCrop.unit}{" "}
              </span>
            </p>
            <p>
              Location :
              <span className="font-semibold"> {singleCrop.location}</span>
            </p>

            <div>
              <Link to={`/cropDetails/${singleCrop._id}`}>
                <button className="btn text-nowrap bg-yellow-800 hover:bg-yellow-700 text-white font-semibold w-full mt-2">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Crop;
