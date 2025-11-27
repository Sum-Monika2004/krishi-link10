import React from "react";
import { Link } from "react-router";

const Crop = ({ singleCrop }) => {
  return (
    <div className="bg-white rounded-xl shadow-xl">
      <div className="p-8">
        <img className="w-[164px] h-[150px] mx-auto bg-white" src />
        <p className="my-4 font-bold text-[25px] text-center">Name</p>
        <div className=" ">
          <div className="flex-row justify-between items-center text-[18px] font-bold  text-nowrap ">
            <p>
              Category : <span className="font-semibold"></span>
            </p>
            <p>
              Price : <span className="font-semibold"> USD</span>
            </p>
            <p>
              Rating : <span className="font-semibold"></span>
            </p>

            <div>
              <Link
              // to={`/plantDetails/${singlePlant.id}`}
              >
                <button className="btn text-nowrap bg-yellow-800 text-white font-semibold w-full mt-2">
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
