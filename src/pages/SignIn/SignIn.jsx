import { Link, useLocation, useNavigate } from "react-router-dom";
import GoogleSignin from "../../components/GoogleSignin";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { ReviewContext } from "../../Context/ReviewProvider";
import Swal from "sweetalert2";





const SignIn = () =>{
  const [ showPassword, setShowPassword ] = useState(false);
  const [ emailErr, setEmailErr ] = useState();
  const [ passErr, setPassErr ] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/"

  const { emailPasswordSignIn } = useContext(AuthContext);
  const { setOpenModal } = useContext(ReviewContext);
  
  
  const handleSignInEmailPassword = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    emailPasswordSignIn(email, password)
      .then(result =>{
        const user = result.user;
        setEmailErr()
        setPassErr()

        const currentUser = {
          email: user.email
        }

        // get jwt token
        fetch("https://all-in-one-server.vercel.app/jwt", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then(res => res.json())
          .then(data => {
            localStorage.setItem('token', data.token);
            Swal.fire({
              title: "Login successful",
              icon: "success"
            })
            navigate(from, { replace: true })
            setOpenModal(true)
          })
      })
      .catch(err =>{
        const errCode = err.code;
        const errMessage = err.message;
        if (errCode.includes("password")) {
          setPassErr(errCode);
          setEmailErr();
          return;
        }
        setEmailErr(errCode)
        setPassErr();
        console.log(errCode, errMessage)
      })
  }
  useEffect(()=>{
    document.title = "Sign in";
  }, [])

  return (
    <div className="h-screen">
      <h2 className="text-4xl font-semibold text-center mb-10">Sign in</h2>
      <form
        onSubmit={handleSignInEmailPassword}
        className="md:w-3/4 xl:w-2/4 mx-auto px-3 md:px-9 lg:px-14 xl:px-20"
      >
        <GoogleSignin />

        <div className="flex items-center justify-between">
          <span className="w-full h-[2px] bg-gray-200"></span>
          <p className="text-center text-lg font-medium px-3">Or</p>
          <span className="w-full h-[2px] bg-gray-200"></span>
        </div>
        <label className="form-control w-full mb-3">
          <div className="label">
            <span className="label-text text-lg font-semibold">Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered rounded-none w-full"
          />
          <div className="label">
            <span className="label-text-alt text-lg text-red-500">{emailErr?.substr(5).split('-').join(" ")}</span>
          </div>
        </label>

        <label className="form-control w-full mb-10 relative">
          <div className="label">
            <span className="label-text text-lg font-semibold">Password</span>
          </div>
          <input
            type={showPassword ? "text": "password"}
            name="password"
            placeholder="Enter your password"
            className="input input-bordered rounded-none w-full"
          />
          {showPassword ? (
            <FaEye onClick={()=> setShowPassword(false)} className="absolute right-3 bottom-8 cursor-pointer" />
          ) : (
            <FaEyeSlash onClick={()=> setShowPassword(true)} className="absolute right-3 bottom-8 cursor-pointer" />
          )}
          <div className="label">
            <span className="label-text-alt text-lg text-red-500">{passErr?.substr(5).split('-').join(" ")}</span>
          </div>
        </label>

        <button className="w-full py-3 bg-black text-white font-medium mb-7">
          Sign in
        </button>

        <p className="text-center text-gray-400">
          Dont have an account?{" "}
          <Link to="/signup" className="text-black font-medium">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;