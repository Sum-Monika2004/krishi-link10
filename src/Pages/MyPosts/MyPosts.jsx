import React, { useEffect, useState } from "react";
import { use } from "react";
import { AuthContext } from "../../Context/AuthContext";
import PostCard from "../../Components/PostCard/PostCard";

const MyPosts = () => {
  const { user } = use(AuthContext);
  const [crops, setCrops] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/my-posts?email=${user.email}`, {
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
      <h1 className="font-bold text-5xl text-center my-15">My Posts</h1>
      <div className="grid gap-4">
        {crops.map((singleCrop) => (
          <PostCard key={singleCrop._id} singleCrop={singleCrop}></PostCard>
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
