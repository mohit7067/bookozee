import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const CheckAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }

  return children;
};

export default CheckAuth;
