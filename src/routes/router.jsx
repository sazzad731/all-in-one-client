import { createBrowserRouter } from "react-router-dom";
import Index from "../layout/Index";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/ServiceDetails/ServiceDetails";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import PrivateRouter from "./PrivateRouter";
import MyReview from "../pages/MyReview/MyReview";
import EditReview from "../pages/MyReview/EditReview/EditReview";
import AddServices from "../pages/AddServices/AddServices";
import Blog from "../pages/Blog/Blog";

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
        path: "/blog",
        element: <Blog/>
      },
      {
        path: "/service-details/:id",
        element: <ServiceDetails />,
      },
      {
        path: "/add-service",
        element: <PrivateRouter><AddServices/></PrivateRouter>
      },
      {
        path: "/myReview",
        element: (
          <PrivateRouter>
            <MyReview />
          </PrivateRouter>
        ),
      },
      {
        path: "/edit-review/:id",
        element: (
          <PrivateRouter>
            <EditReview />
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://all-in-one-server.vercel.app/oneReview/${params.id}`),
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);