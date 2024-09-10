import { FaStar, FaStarHalfStroke, FaRegStar } from "react-icons/fa6";

const Ratings = ({ ratings }) => {
  const ratingStar = Array.from({ length: 5 }, (value, index) =>{
    let number = index + 0.5;

    return (
      <span className="text-yellow-500" key={index}>
        {
          ratings >= index+1 ? <FaStar size={20}/> : ratings >= number ? <FaStarHalfStroke size={20}/> : <FaRegStar size={20}/>
        }
      </span>
    )
  });
  return (
    <div className="flex items-center">
      <p className="text-lg font-medium me-2">Rating:</p>
      <div className="flex items-center gap-1">{ratingStar}</div>
    </div>
  );
};

export default Ratings;
