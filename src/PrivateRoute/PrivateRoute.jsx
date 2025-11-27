import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { ClimbingBoxLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  console.log(location);

  if (loading) {
    return (
      <div className="h-[97vh] flex items-center justify-center">
        <ClimbingBoxLoader color="#4f754b" />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={location.pathname} />;
  }

  return children;
};

export default PrivateRoute;
