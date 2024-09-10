
const Customer = ({data}) => {
  const { img, name, position, description } = data;
  return (
    <div className="w-full p-4 bg-sky-50 rounded-2xl">
      <div className="flex items-center border-b-2 py-3">
        <img
          className="w-16 h-16 rounded-full object-cover object-top me-3"
          src={img}
          alt="Avatur"
        />
        <div>
          <h4 className="text-xl font-bold">{name}</h4>
          <p className="text-sm text-gray-400">{position}</p>
        </div>
      </div>
      <p className="text-sm font-semibold">{description}</p>
    </div>
  );
};

export default Customer;