import { createContext, useState } from "react";

export const ReviewContext = createContext();

const ReviewProvider = ({children}) =>{
  const [ reviews, setReview ] = useState([]);
  const [ serviceId, setServiceId ] = useState("");
  const [ addedReview, setAddedReview ] = useState(false);
  const reviewInfo = {addedReview,setAddedReview,reviews, setReview, serviceId, setServiceId}
  return (
    <ReviewContext.Provider value={reviewInfo}>{children}</ReviewContext.Provider>
  );
};

export default ReviewProvider;