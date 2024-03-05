import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
// import About from "../pages/about/About";
import App from "../App";
import DashboardHome from "../pages/dashboard/DashboardHome";
// import Dashboard from "@/pages/dashboard/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      //   {
      //     path: "about",
      //     element: <About></About>,
      //   },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardHome />,
    children: [],
  },
]);

export default router;
