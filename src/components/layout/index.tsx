import Navbar from "../navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="w-[1080px] mx-auto py-[40px] px-[45px] bg-white rounded-[20px]">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
