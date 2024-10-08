import React from "react";
import { assets } from "../assets/assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate=useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold">
        <div className="flex items-center gap-2">
            <img src={assets.arrow_left}  onClick={()=>navigate(-1)} alt=""  className="w-8 bg-black p-2 rounded-2xl cursor-pointer"/>
            <img src={assets.arrow_right} onClick={()=>navigate(1)} alt=""  className="w-8 bg-black p-2 rounded-2xl cursor-pointer"/>
        </div>

        <div className="flex items-center gap-4">
            <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl block" onClick={()=>navigate('/Login')}>Login</p>
           
        </div>
      </div>

      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
        <p className="bg-black text-white px-4 py-1 rounded-2xl cursor-pointer" onClick={()=>navigate('/music')}>Music</p>
      </div>
    </>
  );
};
export default Navbar;
