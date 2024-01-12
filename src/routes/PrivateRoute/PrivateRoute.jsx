import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../../components/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useContext(AuthContext);
  let location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return children;
  }
  return (
    <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
  );
};

export default PrivateRoute;
