import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaRegCircleCheck } from "react-icons/fa6";
import Reviews from "./Reviews/Reviews";
import Ratings from "./Ratings/Ratings";

const ServiceDetails = () => {
  const { id } = useParams();
  const [ serviceDetail, setServiceDetail ] = useState({});
  const [ error, setError ] = useState();
  const [ isLoading, setLoading ] = useState(false);
  useEffect(()=>{
    const fetchedService = async()=>{
      setLoading(true);
      try{
        const response = await fetch(
          `http://localhost:3000/service-details/${id}`
        );
        const data = await response.json();
        setServiceDetail(data);
      }catch(err){
        setError(err)
      }finally{
        setLoading(false);
      }
    }
    fetchedService()
  }, [ id ])
  console.log(serviceDetail)
  const { Title, about, img, price, review, rating, facilities, _id } =
    serviceDetail;
  return (
    <div className="mb-14 px-3 xl:px-0">
      <div className="flex flex-col-reverse xl:flex-row justify-between gap-10 border-y-2 py-10 mb-16">
        <div className="xl:w-1/2">
          <h2 className="text-4xl font-semibold mb-5">{Title}</h2>
          <p className="mb-14">{about}</p>
          <div className="grid xl:grid-cols-2 gap-5 mb-5">
            {facilities?.map((text, index) => (
              <div className="flex items-center gap-3 mb-5 xl:mb-0" key={index}>
                <FaRegCircleCheck size={30} className="text-gray-500" />
                <p className="text-lg font-medium text-gray-500">{text}</p>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-between mb-5">
            <Ratings ratings={rating} />
            <p className="ms-5">({review?.length}) customer reviews</p>
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
      <Reviews reviews={review} id={_id} />
    </div>
  );
};

export default ServiceDetails;