import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Loading from "../components/Loading";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({children}) => {
  const { user, isLoading } = useContext(AuthContext)
  const location = useLocation();
  if (isLoading)
  {
    return <Loading/>
  }
  if(user && user.uid){
    return children;
  }
  return <Navigate to="/signin" state={{from: location}} replace/>
};

export default PrivateRouter;