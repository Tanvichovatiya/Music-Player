import React from "react";
import Songitem from "./songitem";
import { songsData } from "../assets/assets/assets";
import Navbar from "./Navbar";

const Music=()=>{
    return(
        <>
        <Navbar/>
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
export default Music;