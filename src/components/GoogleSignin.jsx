import { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Context/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ReviewContext } from "../Context/ReviewProvider";


const GoogleSignin = () =>{
  const { googleSignIn } = useContext(AuthContext);
  const { setOpenModal } = useContext(ReviewContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  // const from = 
  const handleGoogleSignin = () =>{
    googleSignIn()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
        setOpenModal(true);
      })
      .catch(err =>{
        console.log(err)
      })
  }
  
  return (
    <div className="mb-5">
      <Link onClick={handleGoogleSignin} className="w-full border-2 flex items-center justify-center py-3"><FcGoogle size={25} className="me-2"/> Sign in with Google</Link>
    </div>
  );
};

export default GoogleSignin;
