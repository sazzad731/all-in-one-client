import { useState } from "react";
import { useLoaderData } from "react-router-dom";

const EditReview = () =>{
  const review = useLoaderData();
  const [occupation, setOccupation] = useState(review?.occupation);
  const [rating, setRating] = useState(review.ratings);
  const [reviewTitle, setTitle] = useState(review.reviewTitle);
  const [description, setDescription] = useState(review.reviewDescription);
  const [err, setErr] = useState();

  
  console.log(review);
  return (
    <div className="w-full max-w-3xl mx-auto h-screen">
      <div>
        <h3 className="font-bold text-xl text-center mb-10">Edit Review</h3>
        <form>
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
                value={occupation}
                className="input input-bordered w-full"
                onChange={(e) => setOccupation(e.target.value)}
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
                value={rating}
                className="input input-bordered w-full"
                onChange={(e) => setRating(e.target.value)}
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
                value={reviewTitle}
                placeholder="Type here"
                className="input input-bordered w-full"
                onChange={(e) => setTitle(e.target.value)}
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
                value={description}
                placeholder="Add your message"
                onChange={(e) => setDescription(e.target.value)}
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