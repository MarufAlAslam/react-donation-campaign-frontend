import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import Search from "../search";

const Hero = () => {
  return (
    <div className="hero">
      <div className="container">
        <div className="flex justify-between items-center gap-3">
          <NavLink to="/" className="text-2xl font-bold text-black">
            <img src={logo} className="logo w-[160px]" alt="" />
          </NavLink>
          <div className="flex justify-end items-center gap-[50px] menu">
            <NavLink to="/" className="text-lg text-[#0B0B0B]">
              Home
            </NavLink>
            <NavLink to="/donation" className="text-lg text-[#0B0B0B]">
              Donation
            </NavLink>
            <NavLink to="/statistics" className="text-lg text-[#0B0B0B]">
              Statistics
            </NavLink>
          </div>
        </div>

        <Search/>
      </div>
    </div>
  );
};

export default Hero;