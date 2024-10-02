import React, { useContext } from "react";
import Sidebar from "./component/sidebar";
import Player from "./component/Player";
import Display from "./component/display";
import { Playercontext } from "./context/playercontext";

const App=()=>{
  const {audioRef,track}=useContext(Playercontext);
  return (
   <div className="h-screen bg-black">
    <div className="h-[90%] flex ">
      {/* <Sidebar/> */}
      <Display/>
    </div>
<Player/>
<audio src={track.file} preload="auto" ref={audioRef}></audio>
   </div>
  )
}
export default App;