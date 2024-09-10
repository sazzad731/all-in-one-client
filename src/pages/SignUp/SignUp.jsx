import { Link, useNavigate } from "react-router-dom";
import GoogleSignin from "../../components/GoogleSignin";
import { useContext, useEffect, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { AuthContext } from "../../Context/AuthProvider";
import Swal from "sweetalert2";
import { ReviewContext } from "../../Context/ReviewProvider";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [ err, setErr ] = useState();
  const { createUserWithPassword, updateUserInfo } = useContext(AuthContext);
  const { setOpenModal } = useContext(ReviewContext);
  const navigate = useNavigate();
  const handleCreateUserWithPass = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoUrl = form.photoUrl.value;
    const email = form.email.value;
    const password = form.password.value;
    createUserWithPassword(email, password)
      .then(result =>{
        const user = result.user;
        updateUserInfo({ displayName: name, photoURL: photoUrl })
          .then(() => {
            const userInfo = {
              email: user.email
            }
            fetch("https://all-in-one-server.vercel.app/jwt", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userInfo),
            })
              .then((res) => res.json())
              .then((data) => {
                localStorage.setItem("token", data.token);
                Swal.fire({
                  title: "Account created successful",
                  icon: "success",
                });
                navigate('/');
                setOpenModal(true);
              });
          })
          .catch(err => console.log(err))
        setErr();
        navigate("/")
        form.reset()

      })
      .catch(err =>
      {
        const errCode = err.code;
        const errMessage = err.message;
        setErr(errCode);
        console.log(errCode, errMessage)
      })
  }

  useEffect(()=>{
    document.title = "Sign up";
  }, [])
  
  return (
    <div className="h-screen">
      <h2 className="text-4xl font-semibold text-center mb-10">Sign up</h2>
      <form onSubmit={handleCreateUserWithPass} className="md:w-3/4 xl:w-2/4 mx-auto px-3 md:px-9 lg:px-14 xl:px-20">
        <GoogleSignin />

        <div className="flex items-center justify-between">
          <span className="w-full h-[2px] bg-gray-200"></span>
          <p className="text-center text-lg font-medium px-3">Or</p>
          <span className="w-full h-[2px] bg-gray-200"></span>
        </div>

        <label className="form-control w-full mb-3">
          <div className="label">
            <span className="label-text text-lg font-semibold">Name</span>
          </div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered rounded-none w-full"
            required
          />
        </label>

        <label className="form-control w-full mb-3">
          <div className="label">
            <span className="label-text text-lg font-semibold">Email</span>
          </div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className="input input-bordered rounded-none w-full"
            required
          />
          <div className="label">
            <span className="label-text-alt text-lg text-red-500">{err?.substr(5).split("-").join(" ")}</span>
          </div>
        </label>

        <label className="form-control w-full mb-3">
          <div className="label">
            <span className="label-text text-lg font-semibold">Image Url</span>
          </div>
          <input
            type="url"
            name="photoUrl"
            placeholder="Enter your image url"
            className="input input-bordered rounded-none w-full"
            required
          />
        </label>

        <label className="form-control w-full mb-10 relative">
          <div className="label">
            <span className="label-text text-lg font-semibold">Password</span>
          </div>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            className="input input-bordered rounded-none w-full"
            required
          />
          {showPassword ? (
            <FaEye
              onClick={() => setShowPassword(false)}
              className="absolute right-3 bottom-4 cursor-pointer"
            />
          ) : (
            <FaEyeSlash
              onClick={() => setShowPassword(true)}
              className="absolute right-3 bottom-4 cursor-pointer"
            />
          )}
          {/* <div className="label">
            <span className="label-text-alt">Bottom Left label</span>
          </div> */}
        </label>

        <button className="w-full py-3 bg-black text-white font-medium mb-7">
          Sign up
        </button>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/signin" className="text-black font-medium">
            Sign in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUp;