import React from "react";

const AgroNews = () => {
  return (
    <div className="mb-20">
      {/* blogs  */}
      <div className="w-11/12 mx-auto mt-20">
        <h1 className="font-bold text-5xl  mb-15">Agro News or Blogs</h1>
        <div className="flex flex-col md:flex-row gap-8 justify-evenly ">
          {/* card */}

          <div className="bg-white shadow-xl rounded-xl flex-1">
            <div className="flex justify-between items-center p-10 gap-5">
              <div>
                <h2 className="text-2xl font-bold mb-3">
                  How to Select the Best Seeds
                </h2>
                <p>Here are some tips for selecting high-quality seeds.</p>
              </div>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-xl flex-1">
            <div className="flex justify-between items-center p-10 gap-5">
              <div>
                <h2 className="text-2xl font-bold mb-3">
                  The Importance of Crop Rotation
                </h2>
                <p>Crop Rotation is essential for maintaining soil health.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AgroNews;
