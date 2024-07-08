import logo from "../assets/image/logo.png"

const Footer = () => {
  return (
    <div className="xl:w-4/5 mx-auto">
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
      <div>
        <div>
          <h5>Product</h5>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;