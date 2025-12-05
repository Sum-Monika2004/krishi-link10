import React, { use } from "react";
import { Link, NavLink } from "react-router";
import logoImg from "../../assets/logo.png";
import dropdownImg from "../../assets/dropdown.png";
import "./Header.css";
import { AuthContext } from "../../Context/AuthContext";
import { toast } from "react-toastify";
import { RiseLoader } from "react-spinners";

const Header = () => {
  const { user, signoutUserFunc, setUser, loading, setLoading } =
    use(AuthContext);
  // console.log(loading);

  const handleSignOut = () => {
    signoutUserFunc()
      .then(() => {
        setLoading(false);
        toast.success("Sign out successful");
        setUser(null);
      })
      .catch((e) => {
        toast.error(e.message);
      });
  };

  const links = (
    <>
      <nav className="flex">
        <NavLink to="/">
          <li className="m-2 text-[18px] font-semibold ">Home</li>
        </NavLink>

        <NavLink to="/AllCrops">
          <li className="m-2 text-[18px] font-semibold">All Crops</li>
        </NavLink>

        {user ? (
          <div className="dropdown dropdown-start ">
            <div
              tabIndex={0}
              role="button"
              className="flex items-center justify-center"
            >
              <span className="cursor-pointer m-2 text-[18px] font-semibold">
                More
              </span>
              <img
                className=" w-4 h-4 cursor-pointer"
                src={dropdownImg}
                alt=""
              />
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
            >
              <NavLink to="/profile">
                <li className="m-2 text-[18px] font-semibold">Profile</li>
              </NavLink>

              <NavLink to="/addCrops">
                <li className="m-2 text-[18px] font-semibold">Add Crops</li>
              </NavLink>
              <NavLink to="/myPosts">
                <li className="m-2 text-[18px] font-semibold">My Posts</li>
              </NavLink>
              <NavLink to="/myInterests">
                <li className="m-2 text-[18px] font-semibold">My Interests</li>
              </NavLink>
            </ul>
          </div>
        ) : (
          ""
        )}
      </nav>
    </>
  );
  return (
    <div className="shadow-md bg-white ">
      <div className="navbar mx-auto max-w-[1200px]">
        <div className="navbar-start ">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <NavLink to="/">
            <div className="btn btn-ghost text-xl">
              <img className="h-7 w-7 mr-2" src={logoImg} alt="" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#915804] to-[#5a3f04] text-2xl font-bold ">
                KrishiLink
              </span>
            </div>
          </NavLink>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-5 font-semibold text-[18px]">
          {loading ? (
            <RiseLoader color="#4f754b" />
          ) : user ? (
            <div className="text-center space-y-3">
              <button
                popoverTarget="popover-1"
                style={{ anchorName: "--anchor-1" }}
                className="bg-yellow-800 hover:bg-yellow-700 text-white btn w-full"
              >
                Sign Out
              </button>

              <div
                className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm py-3 space-y-2"
                popover="auto"
                id="popover-1"
                style={{ positionAnchor: "--anchor-1" }}
              >
                <img
                  src={user?.photoURL || "https://via.placeholder.com/88"}
                  className="h-[45px] w-[45px] object-cover rounded-full mx-auto mt-3"
                  alt=""
                />

                <h2 className="text-xl font-semibold">{user?.displayName}</h2>
                <p className="text-gray-400">{user?.email}</p>
                <button
                  onClick={handleSignOut}
                  className="bg-yellow-700 text-white btn w-full"
                >
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="flex gap-5">
              {/* <button className="bg-green-700 text-white px-4 py-2 rounded-md font-semibold cursor-pointer"> */}
              <Link to={"/login"}>Login</Link>
              {/* </button> */}
              <div className=" font-semibold cursor-pointer">
                <Link to={"/signUp"}>Register</Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
