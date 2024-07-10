import { Link } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";

const HomeServiceCard = ({item}) => {
  const { Title, img, description, _id, price } = item;
  return (
    <PhotoProvider>
      <div className="card bg-base-100 w-full shadow-xl">
        <figure>
          <PhotoView src={img}>
            <img className="cursor-pointer" src={img} alt="Shoes" />
          </PhotoView>
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Title}</h2>
          <p>{description}</p>
          <p className="font-medium text-xl">Price: ${price.toFixed(2)}</p>
          <div className="card-actions justify-end">
            <Link to={`/service-details/${_id}`}>
              <button className="btn btn-primary">View details</button>
            </Link>
          </div>
        </div>
      </div>
    </PhotoProvider>
  );
};

export default HomeServiceCard;