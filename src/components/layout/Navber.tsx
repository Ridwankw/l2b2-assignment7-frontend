import { NavLink } from "react-router-dom";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      className=" h-16  w-full bg-white  "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1, duration: 1 }}
    >
      <nav className="w-full h-full max-w-[1230px] mx-auto  flex justify-between items-center px-[20px]">
        <span className="text-3xl">Meddox</span>
        <ul className="space-x-5">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">All Supplies</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="dashboard">Login</NavLink>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Navbar;
