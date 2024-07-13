import Ratings from "../../Ratings/Ratings";

const SingleUserReview = () => {
  return (
    <tr>
      <td className="w-1/5">
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-circle h-20 w-20">
              <img
                src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <h5 className="font-bold text-xl">Hart Hagerty</h5>
            <p className="text-lg">Proffetion</p>
            <p className="text-lg">Email</p>
          </div>
        </div>
      </td>
      <td>
        <Ratings ratings={3.2}/>
        <h5 className="font-bold text-xl">Title</h5>
        <p className="text-lg text-gray-500 font-medium">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
          unde eum dolores! Inventore magni voluptates dolores dolore fugiat
          aperiam doloribus magnam eaque provident aut debitis perspiciatis
          neque eum, praesentium error iure modi deserunt corrupti delectus
          nulla labore facilis. Blanditiis ipsum architecto harum, saepe minus
          tempora iusto ab voluptatibus facere nesciunt?
        </p>
      </td>
      <td>01/07/2024</td>
    </tr>
  );
};

export default SingleUserReview;
