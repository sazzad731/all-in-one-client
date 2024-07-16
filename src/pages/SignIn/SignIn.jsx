import { Link } from "react-router-dom";
import GoogleSignin from "../../components/GoogleSignin";





const SignIn = () =>{
  return (
    <div className="h-screen">
      <h2 className="text-4xl font-semibold text-center mb-10">Sign in</h2>
      <form className="md:w-3/4 xl:w-2/4 mx-auto px-3 md:px-9 lg:px-14 xl:px-20">
        <GoogleSignin/>
        
        <p className="text-center text-lg font-medium">Or</p>
        <label className="form-control w-full mb-3">
          <div className="label">
            <span className="label-text text-lg font-semibold">Email</span>
          </div>
          <input
            type="email"
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
            placeholder="Enter your password"
            className="input input-bordered rounded-none w-full"
          />
          {/* <div className="label">
            <span className="label-text-alt">Bottom Left label</span>
          </div> */}
        </label>

        <button className="w-full py-3 bg-black text-white font-medium mb-7">Sign in</button>

        <p className="text-center text-gray-400">Already have an account? <Link to="/signup" className="text-black font-medium">Sign up</Link></p>
      </form>
    </div>
  );
};

export default SignIn;