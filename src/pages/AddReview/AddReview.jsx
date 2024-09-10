import { useContext, useState } from "react";
import { ReviewContext } from "../../Context/ReviewProvider";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthProvider";

const AddReview = () => {
  const [ defaultRatings, setDefaultRating ] = useState(0)
  const [ err, setErr ] = useState();
  const { serviceInfo, addedReview, setAddedReview } = useContext(ReviewContext);
  const { user } = useContext(AuthContext);
  
  const handleCloseModal = () => document.getElementById("my_modal_4").close();
  
  const handleReviewSubmit = (event) =>{
    event.preventDefault();
    const form = event.target;
    const name = user?.displayName;
    const email = user?.email;
    const occupation = form.occupation.value;
    const ratings = form.rating.value;
    const reviewTitle = form.reviewTitle.value;
    const imageUrl = user?.photoURL;
    const reviewDescription = form.reviewDescription.value;

    if(ratings > 5 || ratings < 0){
      setErr("Please input from 0 to 5")
      return
    }
    setErr();


    const { Title, _id, img } = serviceInfo;

    const reviewData = { serviceId: _id, serviceTitle: Title, serviceImage: img, name, email, occupation, ratings, reviewTitle, imageUrl, reviewDescription };

    const addReviewinDatabase = async()=>{
      try{
        const response = await fetch(`https://all-in-one-server.vercel.app/addReview`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(reviewData),
        });
        const data = await response.json();
        
        //Render review after added review
        setAddedReview(!addedReview);

        if (data.acknowledged) {
          Swal.fire("Successfully added review");
        } else {
          Swal.fire("Something went wrong in the server");
        }
      }catch(err){
        console.log(err)
      }finally{
        handleCloseModal();
      }
    }
    addReviewinDatabase()
    form.reset()
  }
  
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-full max-w-3xl mx-2 xl:mx-0">
        <h3 className="font-bold text-xl text-center mb-10">Add Review</h3>
        <form onSubmit={handleReviewSubmit}>
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
                value={defaultRatings}
                className="input input-bordered w-full"
                onChange={(e) => setDefaultRating(e.target.value)}
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
                placeholder="Add your message"
              ></textarea>
            </label>
          </div>
          <div className="flex items-center justify-end mt-5">
            <button
              type="submit"
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </form>

        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn btn-sm btn-circle text-xl btn-ghost absolute right-5 top-5">
            ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default AddReview;