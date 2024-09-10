import { useEffect, useState } from "react";
import Customer from "./Customer/Customer";

const CustomerTestimonials = () => {
  const [ customers, setCustomers ] = useState([]);
  const [ customerLength, setCustomerLength ] = useState(6);
  const [ isLoading, setIsLoading ] = useState(false);
  const [ err, setErr ] = useState();
  const [ loadErr, setLoadErr ] = useState();
  useEffect(()=>{
    const fetchCustomer = async()=>{
      setIsLoading(true)

      try{
        const response = await fetch("https://all-in-one-server.vercel.app/testimonials");
        const loadedCustomer = await response.json();
        setCustomers(loadedCustomer);
      }catch(err){
        setErr(err)
      }finally{
        setIsLoading(false)
      }
    }

    fetchCustomer();
  }, [])

  const handleLoadMore = async()=>{
      try {
        const loadMoreCusomer = await fetch(
          "https://all-in-one-server.vercel.app/testimonials",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ load: true }),
          }
        );
        const data = await loadMoreCusomer.json();
        setCustomers(data.result);
        setCustomerLength(data.count);
      } catch (err) {
        setLoadErr(err)
      }
  }
  return (
    <div className="mb-14">
      <div className="w-full text-center mb-10">
        <p className="text-gray-400">-Testimonials</p>
        <h2 className="text-3xl sm:text-5xl font-semibold mb-3">
          Trusted by Millions
        </h2>
        <p>
          Millions of users have shared their love for All-In-One <br /> Surf
          through the pool of testimonials!
        </p>
      </div>
      <div>
        {err ? (
          <p className="text-red-500 text-xl font-medium text-center py-10">
            Something went wrong! Please try again.
          </p>
        ) : isLoading ? (
          <div className="w-full flex items-center justify-center">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-10 place-items-between mb-10">
            {customers?.map((customer) => (
              <Customer key={customer._id} data={customer} />
            ))}
          </div>
        )}
      </div>
      <div className="w-full flex items-center justify-center">
        {loadErr && (
          <p className="text-red-500 text-xl font-medium text-center py-10">
            Something went wrong! Please try again.
          </p>
        )}
        {customerLength > 6 ? (
          ""
        ) : (
          <button onClick={handleLoadMore} className="btn mt-5">
            Load more...
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomerTestimonials;