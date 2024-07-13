import SingleUserReview from "./SingleUserReview/SingleUserReview";
import AddReview from "../../AddReview/AddReview";

const Reviews = ({ reviews, id }) => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-semibold">Reviews</h2>
        <button
          onClick={() => document.getElementById("my_modal_4").showModal()}
          className="btn btn-primary text-white text-lg"
        >
          + Add Review
        </button>
      </div>
      <AddReview id={id} />
      {
        reviews?.length === 0 ? <h5 className="text-center text-xl font-medium">Please add a review</h5> :<div>
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
            {
              reviews?.map(review=><SingleUserReview key={review.email} reviews={review} />)
            }
          </tbody>
        </table>
      </div>
      }
    </div>
  );
};

export default Reviews;