import React, { use } from "react";

import { useLoaderData } from "react-router";
import { AuthContext } from "../../Context/AuthContext";

const Profile = () => {
  const { user } = use(AuthContext);

  return (
    <div>
      <div className="flex-row items-center  mx-auto w-11/12 my-20 ">
        <h2 className="font-bold text-5xl mb-10 text-center">My Profile</h2>

        {user ? (
          <div className="mx auto w-11/12 ml-20 flex items-center gap-12 ">
            <img
              src={user?.photoURL || "https://via.placeholder.com/88"}
              className="h-[150px] w-[150px] object-cover rounded-full mt-3"
              alt=""
            />
            <div className="space-y-6">
              <p>
                <h1 className="text-5xl font-semibold mb-3">
                  {user?.displayName}
                </h1>
              </p>
              <p>
                <h2 className="text-[18px] text-gray-500">{user?.email}</h2>
              </p>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Profile;
