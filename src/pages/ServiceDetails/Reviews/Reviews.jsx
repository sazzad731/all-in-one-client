import SingleUserReview from "./SingleUserReview/SingleUserReview";
import AddReview from "../../AddReview/AddReview";
import { useContext, useEffect } from "react";
import { ReviewContext } from "../../../Context/ReviewProvider";
import { AuthContext } from "../../../Context/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const Reviews = () => {
  const { reviews, OpenModal, setOpenModal } = useContext(ReviewContext);
  const { user } = useContext(AuthContext);
  const location = useLocation();

  // render modal conditionally
  // If the user logs in then the user can add a review
  useEffect(()=>{
    if (user) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  },[setOpenModal, user])

  const handleClickedModal = () => {
    setOpenModal(true);
    return document.getElementById("my_modal_4").showModal();
  };
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-semibold">Reviews</h2>
        <button
          onClick={handleClickedModal}
          className="btn btn-primary text-white text-lg"
        >
          + Add Review
        </button>
      </div>
      {OpenModal ? (
        user ? (
          <AddReview />
        ) : (
          <Navigate to="/signin" state={{ from: location }} replace />
        )
      ) : (
        ""
      )}
      {reviews?.length === 0 ? (
        <h5 className="text-center text-xl font-medium">Please add a review</h5>
      ) : (
        <div>
          <table className="table">
            {/* head */}
            <thead>
              <tr className="text-lg text-black">
                <th>Customer Name</th>
                <th>Evaluate</th>
                <th>Interactive Day</th>
              </tr>
            </thead>
            <tbody>
              {reviews?.map((review) => (
                <SingleUserReview key={review._id} reviews={review} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Reviews;