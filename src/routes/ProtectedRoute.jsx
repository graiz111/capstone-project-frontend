import { Navigate, Outlet } from "react-router-dom";
const getCookie = (name) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

const ProtectedRoute = () => {
  const token = getCookie("token");

  return token ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;

// const ProtectedRoute = () => {
//   const token = localStorage.getItem("token"); // Check token
//   return token ? <Outlet /> : <Navigate to="/" />;
// };

