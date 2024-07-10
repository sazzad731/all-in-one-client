import { Link } from "react-router-dom";
import logo from "../assets/image/logo.png";
import { FaRegEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-10 xl:w-4/5 mx-auto mb-12 px-3 xl:px-0">
      <div className="xl:w-2/5">
        <img className="w-36 mb-5" src={logo} alt="Logo" />
        <p className="mb-5">
          Our goal is to provide you with the highest standard of service in
          each of these areas. Trust us to meet your needs with professionalism,
          integrity, and a commitment to excellence.
        </p>
        <div className="flex items-end">
          <label className="form-control w-full max-w-xs me-2">
            <div className="label">
              <span className="label-text font-medium">
                Subscribe to Newsletter
              </span>
            </div>
            <input
              type="text"
              placeholder="Enter your email"
              className="input input-bordered w-full max-w-xs"
            />
          </label>
          <button className="btn btn-primary text-lg text-white px-5">
            Subscribe
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-4 xl:w-3/5">
        <div className="mb-12">
          <h5 className="text-xl font-semibold mb-4">Product</h5>
          <ul>
            <Link>
              <li className="font-medium mb-3">Pricing</li>
            </Link>
            <Link>
              <li className="font-medium mb-3">Case Studies</li>
            </Link>
            <Link>
              <li className="font-medium mb-3">Features</li>
            </Link>
            <Link>
              <li className="font-medium mb-3">Reviews</li>
            </Link>
            <Link>
              <li className="font-medium">Update</li>
            </Link>
          </ul>
        </div>
        <div className="mb-12">
          <h5 className="text-xl font-semibold mb-4">Company</h5>
          <ul>
            <Link>
              <li className="font-medium mb-3">About</li>
            </Link>
            <Link>
              <li className="font-medium mb-3">Careers</li>
            </Link>
            <Link>
              <li className="font-medium mb-3">News</li>
            </Link>
            <Link>
              <li className="font-medium mb-3">Blog</li>
            </Link>
            <Link>
              <li className="font-medium">Contact</li>
            </Link>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-4">Support</h5>
          <ul>
            <Link>
              <li className="font-medium mb-3">Help Center</li>
            </Link>
            <Link>
              <li className="font-medium mb-3">Status</li>
            </Link>
            <Link>
              <li className="font-medium mb-3">Report a Bug</li>
            </Link>
            <Link>
              <li className="font-medium mb-3">Chat Support</li>
            </Link>
          </ul>
        </div>
        <div>
          <h5 className="text-xl font-semibold mb-4">Contact us</h5>
          <p className="font-semibold text-gray-600 mb-3 flex items-center">
            <FaRegEnvelope className="me-2" /> hello@AllInOne.service
          </p>
          <p className="font-semibold text-gray-600 mb-3 flex items-center">
            <FaPhone className="me-2" /> +1 (500) 300 250
          </p>
          <p className="font-semibold text-gray-600 flex items-center">
            <FaLocationDot className="me-2" /> 3891 Ranchview <br />{" "}
            Dr.Richardson, CA 92348
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
