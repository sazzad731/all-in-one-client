import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";
import Reviews from "./Reviews/Reviews";
import Ratings from "../../components/Ratings/Ratings";
import { ReviewContext } from "../../Context/ReviewProvider";
import Loading from "../../components/Loading";

const ServiceDetails = () => {
  const { id } = useParams();
  const [serviceDetail, setServiceDetail] = useState({});
  const [error, setError] = useState();
  const [errReview, setErrReview] = useState();
  const [isLoading, setLoading] = useState(true);
  const { reviews, setReview, setServiceInfo, addedReview } =
  useContext(ReviewContext);
  
  useEffect(() => {
    // Get selected Service Detail
    const fetchedService = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://all-in-one-server.vercel.app/service-details/${id}`
        );
        const data = await response.json();
        setServiceDetail(data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchedService();
  }, [id]);
  
  useEffect(() => {
    // get reviews for specific service from server side
    const fetchedReviews = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://all-in-one-server.vercel.app/getReview/${id}`
        );
        const data = await response.json();
        setReview(data);
        setServiceInfo(serviceDetail);
      } catch (err) {
        setErrReview(err);
      } finally {
        setLoading(false);
      }
    };
    fetchedReviews();
  }, [id, setServiceInfo, setReview, addedReview, serviceDetail]);
  
  // calculate number of rating
  let rating = 0;
  for (let i = 0; i < reviews.length; i++) {
    rating = rating + parseFloat(reviews[i].ratings);
  }
  const { Title, about, img, price, facilities } = serviceDetail;
  
  return (
    <div className="mb-20 px-3 xl:px-0">
      {isLoading ? (
        <Loading />
      ) : error ? (
        <h3 className="text-center text-2xl font-medium text-red-500">
          {error}
        </h3>
      ) : (
        <>
          <div className="flex flex-col-reverse xl:flex-row justify-between gap-10 border-y-2 py-10 mb-16">
            <div className="xl:w-1/2">
              <h2 className="text-4xl font-semibold mb-5">{Title}</h2>
              <p className="mb-14">{about}</p>
              <div className="grid xl:grid-cols-2 gap-5 mb-5">
                {facilities?.map((text, index) => (
                  <div
                    className="flex items-center gap-3 mb-5 xl:mb-0"
                    key={index}
                  >
                    <FaRegCircleCheck size={30} className="text-gray-500" />
                    <p className="text-lg font-medium text-gray-500">{text}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center mb-5">
                <Ratings ratings={rating / reviews?.length} />

                <p className="ms-5">({reviews?.length}) customer reviews</p>
              </div>
              <p className="text-lg font-semibold mb-16">
                Price: ${price?.toFixed(2)}
              </p>
              <button className="btn pb-1 px-10 btn-primary rounded-full text-white text-lg">
                Book now
              </button>
            </div>
            <div className="xl:w-1/2">
              <img src={img} alt={Title} />
            </div>
          </div>
          {errReview ? (
            <h3 className="text-center text-2xl font-medium text-red-500">
              {errReview}
            </h3>
          ) : (
            <Reviews />
          )}
        </>
      )}
    </div>
  );
};

export default ServiceDetails;
