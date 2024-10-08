import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Swal from "sweetalert2";

const Header = () => {
  const { user, logOut, deleteAccount } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        localStorage.clear("token");
        Swal.fire({
          title: "Log out successfull",
          icon: "success",
        });
      })
      .catch((err) => console.log(err));
  };

  const handleDeleteAccount = () => {
    deleteAccount()
      .then(() => {
        localStorage.clear("token");
        Swal.fire({
          title: "Deleted Account successfull",
          icon: "success",
        });
      })
      .catch((err) => {
        Swal.fire({
          title: err,
          icon: "error",
        });
      });
  };

  const navItem = (
    <>
      <li className="font-medium text-lg">
        <Link to="/">Home</Link>
      </li>
      <li className="font-medium text-lg">
        <Link to="/services">Services</Link>
      </li>
      <li className="font-medium text-lg">
        <Link to="/blog">Blog</Link>
      </li>
      {user ? (
        <>
          <li className="font-medium text-lg">
            <Link to="/myReview">My reviews</Link>
          </li>
          <li className="font-medium text-lg">
            <Link to="/add-service">Add services</Link>
          </li>
        </>
      ) : (
        <></>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 mb-12">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
        </div>
        <Link to="/">
          <img className="sm:w-40 w-32" src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end">
        <div className="flex items-center">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">8</span>
              </div>
            </div>
            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                  <button className="btn btn-primary btn-block">
                    View cart
                  </button>
                </div>
              </div>
            </div>
          </div>
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user?.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    {user?.displayName}
                    <span className="badge">Profile</span>
                  </a>
                </li>
                <li>
                  <details>
                    <summary>
                      <a className="justify-between">Settings</a>
                    </summary>
                    <ul>
                      <li>
                        <a
                          onClick={handleDeleteAccount}
                          className="text-red-500"
                        >
                          Delete accoount
                        </a>
                      </li>
                    </ul>
                  </details>
                </li>
                <li>
                  <a onClick={handleLogOut}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/signin" className="btn">
              Sign in
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
