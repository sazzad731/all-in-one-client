import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Ratings from "../../components/Ratings/Ratings";
import { FaPen, FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Loading from "../../components/Loading";

const MyReview = () => {
  const [myReview, setMyReview] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [err, setError] = useState();
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchMyReviews = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/my-reviews?email=${user?.email}`
        );
        const data = await response.json();
        setMyReview(data);
        setLoading(false);
      } catch (err) {
        setError(err);
      }
    };
    fetchMyReviews();
  }, [user?.email]);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/my-reviews/${id}`, {
      method: "DELETE",
    })
      .then(() => {
        Swal.fire({
          title: "Successfully deleted",
          icon: "success",
        });
        const remaining = myReview.filter((item) => item._id !== id);
        setMyReview(remaining);
      })
      .catch((err) => {
        Swal.fire({
          title: `${err}`,
          icon: "error",
        });
      });
  };

  return (
    <div className="min-h-screen mb-14">
      {/* If there is loading then show the Loading component else if there is an error then show the error else if it shows data*/}
      {isLoading ? (
        <Loading />
      ) : err ? (
        <h3 className="text-center text-2xl font-medium text-red-500">{err}</h3>
      ) : myReview.length === 0 ? (
        <h3 className="text-center text-2xl font-medium">
          No reviews were added
        </h3>
      ) : (
        <table className="table">
          {/* head */}
          <thead>
            <tr className="text-lg text-black">
              <th>Services</th>
              <th>Reviews</th>
            </tr>
          </thead>
          <tbody>
            {myReview.map((item) => (
              <tr key={item._id}>
                <td className="w-1/5">
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-square rounded-md w-full">
                        <img
                          src={item.serviceImage}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      {/* service title */}
                      <h5 className="font-bold text-xl">{item.serviceTitle}</h5>
                    </div>
                  </div>
                </td>
                <td>
                  <Ratings ratings={item.ratings} />
                  <h5 className="font-bold text-xl">{item.reviewTitle}</h5>
                  <p className="text-lg text-gray-500 font-medium">
                    {item.reviewDescription}
                  </p>
                </td>
                <td className="w-[9.5rem]">
                  <div className="flex items-center justify-between">
                    <Link
                      to={`/edit-review/${item._id}`}
                      className="btn text-lg"
                      onClick={() =>
                        document.getElementById("my_modal_4")?.showModal()
                      }
                    >
                      <FaPen />
                    </Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="btn text-lg text-red-500"
                    >
                      <FaRegTrashCan />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyReview;
