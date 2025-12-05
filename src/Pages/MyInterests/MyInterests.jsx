import React, { use, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import PostCard from "../../Components/PostCard/PostCard";
import { AuthContext } from "../../Context/AuthContext";
import Crop from "../../Components/Crop/Crop";

const MyInterests = () => {
  const { user } = use(AuthContext);
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-interests?email=${user.email}`, {
      headers: {
        authorization: `Bearer ${user.accessToken}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCrops(data);
      });
  }, [user]);

  return (
    <div className="w-11/12 mx-auto mt-20 mb-20">
      <h1 className="font-bold text-5xl text-center my-15">My Interests</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {crops.map((singleCrop) => (
          <Crop key={singleCrop._id} singleCrop={singleCrop}></Crop>
        ))}
      </div>
    </div>
  );
};

export default MyInterests;
