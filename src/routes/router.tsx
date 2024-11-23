import { useRoutes } from "react-router-dom";
import Layout from "../components/layout";
import Home from "../components/home";

const MyRoutes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
      ],
    },
  ]);
};

export default MyRoutes;
