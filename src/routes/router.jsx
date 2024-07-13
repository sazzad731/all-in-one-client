import { createBrowserRouter, useParams } from "react-router-dom";
import Index from "../layout/Index";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import AddReview from "../pages/AddReview/AddReview";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "service-details/:id",
        element: <ServiceDetails />,
      },
    ],
  },
]);