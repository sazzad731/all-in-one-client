import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeServiceCard from "./HomeServiceCard/HomeServiceCard";
import Skeleton from "../../../components/Skeleton";

const Service = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [ err, setErr ] = useState();

  useEffect(() => {
    const fetchHomeServices = async()=>{
      setLoading(true)
      
      try
      {
        const response = await fetch("https://all-in-one-server.vercel.app/services3");
        const data = await response.json();
        setServices(data);
      } catch (err) {
        setErr(err);
      }finally{
        setLoading(false)
      }
    }

    fetchHomeServices()
  }, []);
  return (
    <div className="mb-12">
      <div>
        <div className="flex flex-col items-center lg:flex-row  justify-between mb-12 gap-10">
          <div className="xl:w-1/2 w-full text-center xl:text-start">
            <h2 className="text-3xl sm:text-5xl font-semibold mb-3">
              Our Best Services
            </h2>
            <p className="text-md text-gray-500">
              All services in one place. <br /> Trust us to deliver
              high-quality, reliable services that cater to your unique
              requirements.
            </p>
          </div>
          <div className="xl:w-1/2 w-full bg-base-300 p-7 rounded-xl xl:flex flex-col hidden">
            <p className="mb-5">
              At All-In-One, we are committed to providing top-notch services
              across various professional fields. Whether you need expert
              accounting, personalized medical care, comprehensive immigration
              assistance, insightful journalism, robust legal support,
              professional photography, or tailored travel solutions, our
              dedicated team is here to meet your needs with precision and
              excellence.
            </p>
            <Link to="/services" className="btn place-self-end">
              See all service
            </Link>
          </div>
        </div>

        {err ? (
          <p className="text-red-500 text-xl font-medium text-center py-10">
            Something went wrong! Please try again.
          </p>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-14 place-items-center mb-10">
            {loading ? (
              <Skeleton size={[1, 2, 3]} />
            ) : (
              services.map((service) => (
                <HomeServiceCard item={service} key={service._id} />
              ))
            )}
          </div>
        )}

        <div className="xl:w-1/2 w-full bg-base-300 p-7 rounded-xl flex flex-col xl:hidden">
          <p className="mb-5">
            At All-In-One, we are committed to providing top-notch services
            across various professional fields. Whether you need expert
            accounting, personalized medical care, comprehensive immigration
            assistance, insightful journalism, robust legal support,
            professional photography, or tailored travel solutions, our
            dedicated team is here to meet your needs with precision and
            excellence.
          </p>
          <Link to="/services" className="btn place-self-end">
            See all service
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Service;
