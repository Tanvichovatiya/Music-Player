import  React, { useEffect, useRef } from "react";
import { Route,Routes, useLocation } from "react-router-dom";
import Displayhome from "./Displayhome";
import Displayalbum from "./Displayalbum";
import { albumsData } from "../assets/assets/assets";
import Login from "./login";
import Music from "./Music";

const Display=()=>{
    const displayRef=useRef();
    const location=useLocation();
    const isalbum=location.pathname.includes('album');
    const albumid=isalbum ? location.pathname.slice(-1) : '';
    const bgcolor=albumsData[Number(albumid)].bgColor;
   useEffect(()=>{
      if(isalbum){
        displayRef.current.style.background=`linear-gradient(${bgcolor},#121212)`
      }
      else{
        displayRef.current.style.background='#121212'

      }
})
  return (
   <div ref={displayRef} className="w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto  lg:ml-0">
      <Routes>
        <Route path='/' element={<Displayhome/>}></Route>
        <Route path='/Login' element={<Login/>}></Route>
         <Route path='/music' element={<Music/>}></Route> 
        <Route path='/album/:id' element={<Displayalbum/>}></Route>
    </Routes>

   </div>
  )
}
export default Display;