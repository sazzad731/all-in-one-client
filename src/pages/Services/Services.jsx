import ServicesCard from "./ServicesCard"
import { useEffect, useState } from "react";
import Skeleton from "../../components/Skeleton";

const Services = () => {
  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(false);
  const [ err, setErr ] = useState();
  useEffect(()=>{
    document.title = "Services";
    const fetchServices = async () =>
    {
      setLoading(true)

      try{
        const response = await fetch("https://all-in-one-server.vercel.app/services");
        const loadedData = await response.json();
        setData(loadedData);
      }catch(err){
        setErr(err)
      }finally{
        setLoading(false)
      }

    }
    fetchServices()
  }, [])
  return (
    <div className="px-3 md:px-0">
      <h2 className="text-center font-semibold text-5xl mb-12">Services.</h2>
      {err ? (
        <p className="text-red-500 text-xl font-medium text-center py-10">
          Something went wrong! Please try again.
        </p>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 place-items-center mb-10">
          {loading ? (
            <Skeleton size={[1, 2, 3, 4, 5, 6, 7]} />
          ) : (
            data.map((item) => <ServicesCard key={item._id} item={item} />)
          )}
        </div>
      )}
    </div>
  );
};

export default Services;