import { createBrowserRouter } from "react-router-dom";
import Index from "../layout/Index";
import Home from "../pages/Home/Home";
import Services from "../pages/Services/Services";

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
        element: <Services />
      },
    ],
  },
]);