import { useEffect } from "react";
import Swal from "sweetalert2";

const AddServices = () => {
  const handleAddService = (event)=>{
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const about = form.about.value;
    const imageUrl = form.imageUrl.value;
    const price = form.price.value;
    const facilities1 = form.facilities1.value;
    const facilities2 = form.facilities2.value;
    const facilities3 = form.facilities3.value;
    const facilities4 = form.facilities4.value;
    const service = {
      Title: title,
      description,
      about,
      img: imageUrl,
      price: parseFloat(price),
      facilities: [facilities1, facilities2, facilities3, facilities4],
    };

    const addServiceInDatabase = async()=>{
      try{
        const response = await fetch("https://all-in-one-server.vercel.app/add-service", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(service)
        })
        const data = await response.json();
        form.reset();
        if(data.acknowledged){
          Swal.fire({
            title: "Successfully added service",
            icon: "success",
          });
        }
      }catch(err){
        Swal.fire({
          title: err,
          icon: "error"
        })
      }
    }
    addServiceInDatabase()
  }
  useEffect(()=>{
    document.title = "Add Service";
  }, [])
  
  
  return (
    <div className="mb-14">
      <h2 className="text-center text-3xl font-medium mb-14">
        Create a service
      </h2>
      <div className="w-[35rem] mx-auto">
        <form onSubmit={handleAddService}>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-medium">
                Service title
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="title"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text text-lg font-medium">
                Short description
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              name="description"
              placeholder="Short description"
              required
            ></textarea>
          </label>

          <label className="form-control">
            <div className="label">
              <span className="label-text text-lg font-medium">
                About service
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              name="about"
              placeholder="Short description"
              required
            ></textarea>
          </label>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text text-lg font-medium">
                Service image
              </span>
            </div>
            <input
              type="url"
              placeholder="Image url"
              name="imageUrl"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full mb-8">
            <div className="label">
              <span className="label-text text-lg font-medium">Price</span>
            </div>
            <input
              type="number"
              placeholder="Type here"
              name="price"
              className="input input-bordered w-full"
              required
            />
          </label>

          <label className="form-control w-full mb-14">
            <div className="label">
              <span className="label-text text-lg font-medium">
                Add facilities
              </span>
            </div>
            <input
              type="text"
              placeholder="Type here"
              name="facilities1"
              className="input input-bordered w-full mb-5"
              required
            />
            <input
              type="text"
              placeholder="Type here"
              name="facilities2"
              className="input input-bordered w-full mb-5"
              required
            />
            <input
              type="text"
              placeholder="Type here"
              name="facilities3"
              className="input input-bordered w-full mb-5"
              required
            />
            <input
              type="text"
              placeholder="Type here"
              name="facilities4"
              className="input input-bordered w-full mb-5"
              required
            />
          </label>
          <div className="flex items-center justify-end">
            <button type="submit" className="btn btn-primary text-white">
              Add service
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServices;