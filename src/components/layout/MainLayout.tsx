import { Outlet } from "react-router-dom";
import Navbar from "./Navber";
import Footer from "@/pages/footer/Footer";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar></Navbar>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
