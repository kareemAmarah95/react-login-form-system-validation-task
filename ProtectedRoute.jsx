import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = Cookies.get("token");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};
ProtectedRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedRoute;
