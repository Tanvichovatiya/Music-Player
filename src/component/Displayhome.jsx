import  React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets/assets";
import Albumitem from "./Albumitem";
import Songitem from "./songitem";

const Displayhome=()=>{
  return (
  <>
  
  <Navbar/>
  <div className="mb-4">
    <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
    <div className="flex overflow-auto">
    {albumsData.map((item,index)=>(
    <Albumitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
   ))}
    </div>
  </div>

  <div className="mb-4">
    <h1 className="my-5 font-bold text-2xl">Todays biggest hit</h1>
    <div className="flex overflow-auto">
   {songsData.map((item,index)=>(
    <Songitem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>
   ))}
    </div>
  </div>
  </>
  )
}
export default Displayhome;