import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = (props) => {
  let auth = { token: props.isLoggedIn };
  console.log(auth);
  return auth.token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
