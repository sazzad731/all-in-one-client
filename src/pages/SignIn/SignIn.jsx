import { Link } from "react-router-dom";
import GoogleSignin from "../../components/GoogleSignin";
import { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider";





const SignIn = () =>{
  const { emailPasswordSignIn } = useContext(AuthContext);
  const handleSignInEmailPassword = (event) =>{
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    
    emailPasswordSignIn(email, password)
      .then(result =>
      {
        const user = result.user;
        console.log(user)
      })
      .catch(err =>{
        const errCode = err.code;
        const errMessage = err.message;
        console.log(errCode, errMessage)
      })
  }
  
  return (
    <div className="h-screen">
      <h2 className="text-4xl font-semibold text-center mb-10">Sign in</h2>
      <form onSubmit={handleSignInEmailPassword} className="md:w-3/4 xl:w-2/4 mx-auto px-3 md:px-9 lg:px-14 xl:px-20">
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
          {/* <div className="label">
            <span className="label-text-alt">Bottom Left label</span>
          </div> */}
        </label>

        <label className="form-control w-full mb-10">
          <div className="label">
            <span className="label-text text-lg font-semibold">Password</span>
          </div>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered rounded-none w-full"
          />
          {/* <div className="label">
            <span className="label-text-alt">Bottom Left label</span>
          </div> */}
        </label>

        <button className="w-full py-3 bg-black text-white font-medium mb-7">
          Sign in
        </button>

        <p className="text-center text-gray-400">
          Already have an account?{" "}
          <Link to="/signup" className="text-black font-medium">
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignIn;