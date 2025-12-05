import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";

const PostCard = ({ singleCrop }) => {
  const { _id } = singleCrop;
  const navigate = useNavigate();

  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/my-posts/${_id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())

          .then((data) => {
            navigate("/AllCrops");
            console.log(data);

            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
  };

  return (
    <div>
      {" "}
      <div>
        <div className=" bg-white rounded-xl shadow-sm ">
          <div className="flex flex-col md:flex-row justify-between gap-6  p-5">
            <div className="flex items-center  gap-6">
              <img
                className="w-30 h-30 object-cover rounded-xl"
                src={singleCrop.image}
              />
              <div>
                <p className="flex-1  font-bold text-[25px] ">
                  {singleCrop.name}
                </p>
                <div className="flex-1 ">
                  <div className="flex-row justify-between  items-center text-[18px] font-bold  ">
                    <p>
                      Type :{" "}
                      <span className="font-semibold"> {singleCrop.type}</span>
                    </p>
                    <p>
                      Price :{" "}
                      <span className="font-semibold">
                        {singleCrop.pricePerUnit} Taka / {singleCrop.unit}{" "}
                      </span>
                    </p>
                    <p>
                      Location :
                      <span className="font-semibold">
                        {" "}
                        {singleCrop.location}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex items-end justify-end gap-10">
              <div className="flex ">
                <div
                  onClick={() => handleDelete(_id)}
                  className="btn  bg-red-500 mr-2  text-white font-semibold  mt-2"
                >
                  DELETE
                </div>
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
      </div>
    </div>
  );
};

export default PostCard;
