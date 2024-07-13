import { Link } from "react-router-dom";
import SingleUserReview from "./SingleUserReview/SingleUserReview";
import AddReview from "../../AddReview/AddReview";

const Reviews = () => {
  return (
    <div>
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-semibold">Reviews</h2>
        <Link onClick={() => document.getElementById("my_modal_4").showModal()} className="btn btn-primary text-lg">+ Add Review</Link>
      </div>
      <AddReview/>
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
            <SingleUserReview/>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reviews;