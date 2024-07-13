const AddReview = ({id}) => {
  
  const handleReviewSubmit = (event)=>{
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const occupation = form.occupation.value;
    const ratings = form.rating.value;
    const reviewTitle = form.reviewTitle.value;
    const imageUrl = form.imageUrl.value;
    const reviewDescription = form.reviewDescription.value;
    
    const reviewData = { name, email, occupation, ratings, reviewTitle, imageUrl, reviewDescription };

    const addReviewinDatabase = async()=>{
      try{
        const response = await fetch(`http://localhost:3000/addReview/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(reviewData)
        })
      const data = await response.json();
      console.log(data);
      }catch(err){
        console.log(err)
      }
    }
    addReviewinDatabase()

    form.reset()
  }
  
  return (
    <dialog id="my_modal_4" className="modal">
      <div className="modal-box w-full max-w-7xl mx-2 xl:mx-0">
        <h3 className="font-bold text-xl text-center mb-10">Add Review</h3>
        <form onSubmit={handleReviewSubmit}>
          <div className="grid grid-cols-2 gap-5 mb-5">
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-medium">
                  Your Name?
                </span>
              </div>
              <input
                type="text"
                name="name"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-medium">
                  Your Email
                </span>
              </div>
              <input
                type="email"
                name="email"
                placeholder="Type here"
                className="input input-bordered w-full"
              />
            </label>

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
                type="number"
                name="rating"
                placeholder="Type here"
                max={5.0}
                min={0.0}
                className="input input-bordered w-full"
              />
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

            <label className="form-control w-full">
              <div className="label">
                <span className="label-text text-lg font-medium">
                  Image url
                </span>
              </div>
              <input
                type="text"
                name="imageUrl"
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
          <div className="flex items-center justify-end">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
        </form>

        <form method="dialog">
          {/* if there is a button, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default AddReview;