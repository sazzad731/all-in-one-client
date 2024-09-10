import { createContext, useState } from "react";

export const ReviewContext = createContext();

const ReviewProvider = ({children}) =>{
  const [ reviews, setReview ] = useState([]);
  const [ serviceInfo, setServiceInfo ] = useState({});
  const [ addedReview, setAddedReview ] = useState(false);
  const [ OpenModal, setOpenModal ] = useState(false)
  const [editedReview, setEditedReview] = useState(false);
  const reviewInfo = {
    addedReview,
    setAddedReview,
    reviews,
    setReview,
    serviceInfo,
    setServiceInfo,
    OpenModal,
    setOpenModal,
    editedReview,
    setEditedReview,
  };
  return (
    <ReviewContext.Provider value={reviewInfo}>{children}</ReviewContext.Provider>
  );
};

export default ReviewProvider;