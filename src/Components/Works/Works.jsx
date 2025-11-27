import React from "react";
import postImg from "../../assets/post.png";
import browseImg from "../../assets/browse.png";
import connectImg from "../../assets/connect.png";

const Works = () => {
  return (
    <div>
      {/* How it works  */}
      <div className="w-11/12 mx-auto mt-20">
        <h1 className="font-bold text-5xl text-right mb-15">How It Works</h1>
        <div className="flex flex-col md:flex-row gap-8 justify-evenly ">
          {/* card */}
          <div className="bg-white shadow-xl rounded-xl flex-1">
            <div className="flex justify-between items-center p-10 gap-5">
              <div>
                <img className="w-20" src={postImg} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Post</h2>
                <p>Share what you are growing for selling.</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl flex-1">
            <div className="flex justify-between items-center p-10 gap-5">
              <div>
                <img className="w-20" src={browseImg} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Browse</h2>
                <p>Browse other crop's posts.</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl flex-1">
            <div className="flex justify-between items-center p-10 gap-5">
              <div>
                <img className="w-20" src={connectImg} alt="" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-3">Connect</h2>
                <p>Show interest to connect and collaborate.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
