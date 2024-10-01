import React, { useContext } from "react";
import { assets, songsData } from "../assets/assets/assets";
import { Playercontext } from "../context/playercontext";
const Player = () => {
  const {seekbar,seekbg,playerStatus,play,pause,track,time,next,Previous,seeksong}=useContext(Playercontext);
  return (
    <div className="h-[10%] bg-black flex hustify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img src={track.image} className="w-12" alt="" />
        <div>
          <p>{track.name}</p>
          <p>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          <img
            src={assets.shuffle_icon}
            className="w-4 cursor-pointer"
            alt=""
          />
          <img src={assets.prev_icon} onClick={()=>Previous()} className="w-4 cursor-pointer" alt="" />
          {playerStatus ? 
                    <img  onClick={pause} src={assets.pause_icon} className="w-4 cursor-pointer" alt="" />
                    :
                    <img onClick={play} src={assets.play_icon} className="w-4 cursor-pointer" alt="" />

          }

          <img src={assets.next_icon}  onClick={()=>next()} className="w-4 cursor-pointer" alt="" />
          <img src={assets.loop_icon} className="w-4 cursor-pointer" alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minute}:{time.currentTime.second}</p>
          <div  ref={seekbg} onClick={(e)=>seeksong(e)} className="w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer">
            <hr className="h-1  border-none w-0 bg-green-800 rounded-full"  ref={seekbar}/>
          </div>
          <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
    </div>
  );
};
export default Player;
