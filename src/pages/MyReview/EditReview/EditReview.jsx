import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const EditReview = () => {
  const review = useLoaderData();
  const [ err, setErr ] = useState();

  const handleSaveReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const occupation = form.occupation.value;
    const ratings = form.rating.value;
    const reviewTitle = form.reviewTitle.value;
    const reviewDescription = form.reviewDescription.value;

    const updatedReview = {
      occupation,
      ratings,
      reviewTitle,
      reviewDescription,
    };

    if (ratings > 5 || ratings < 0) {
      setErr("Please input from 0 to 5");
      return;
    }
    setErr();

    const updateReview = async () => {
      try {
        const response = await fetch(
          `https://all-in-one-server.vercel.app/edit-review/${review._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedReview),
          }
        );
        const data = await response.json();
        if(data.modifiedCount === 1){
          Swal.fire({
            title: "Successfully updated",
            icon: "success",
          });
        }
      } catch (err) {
        Swal.fire({
          title: `${err}`,
          icon: "error",
        });
      }
    };
    updateReview();
  };
  return (
    <div className="w-full max-w-3xl mx-auto h-screen">
      <div>
        <h3 className="font-bold text-xl text-center mb-10">Edit Review</h3>
        <form onSubmit={handleSaveReview}>
          <div className="">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-medium">
                  Your Occupation
                </span>
              </div>
              <input
                type="text"
                name="occupation"
                placeholder="Type here"
                defaultValue={review.occupation}
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-medium">Ratings</span>
              </div>
              <input
                id="inputRating"
                type="number"
                name="rating"
                defaultValue={review.ratings}
                className="input input-bordered w-full"
              />
              {err ? (
                <div className="label">
                  <span className="label-text text-lg font-medium text-red-500">
                    {err}
                  </span>
                </div>
              ) : (
                ""
              )}
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-medium">
                  Review Title
                </span>
              </div>
              <input
                type="text"
                name="reviewTitle"
                defaultValue={review.reviewTitle}
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control col-span-2">
              <div className="label">
                <span className="label-text text-lg font-medium">
                  Review Description
                </span>
              </div>
              <textarea
                className="textarea textarea-bordered h-24"
                name="reviewDescription"
                defaultValue={review.reviewDescription}
                placeholder="Add your message"
              ></textarea>
            </label>
          </div>
          <div className="flex items-center justify-end mt-5">
            <button type="submit" className="btn btn-primary text-white">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditReview;
