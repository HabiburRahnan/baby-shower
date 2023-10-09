import { Outlet } from "react-router-dom";
import Navbar from "../Header/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-6xl mx-auto font-poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
