import Ratings from "../../../../components/Ratings/Ratings";

const SingleUserReview = ({ reviews }) => {
  const {
    name,
    email,
    imageUrl,
    occupation,
    ratings,
    reviewTitle,
    reviewDescription,
    creationDate,
  } = reviews;
  return (
    <tr>
      <td className="w-1/5">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-circle h-20 w-20">
              <img
                src={imageUrl}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            {/* customer name */}
            <h5 className="font-bold text-xl">{name}</h5>
            <p className="text-lg">{occupation}</p>
            <p className="text-lg">{email}</p>
          </div>
        </div>
      </td>
      <td>
        <Ratings ratings={ratings} />
        <h5 className="font-bold text-xl">{reviewTitle}</h5>
        <p className="text-lg text-gray-500 font-medium">{reviewDescription}</p>
      </td>
      <td>{creationDate}</td>
    </tr>
  );
};

export default SingleUserReview;
