import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/assets/assets";

export const Playercontext = createContext();
const Playercontextprovider = (props) => {
  const audioRef = useRef();
  const seekbg = useRef();
  const seekbar = useRef();

  const [track, settrack] = useState(songsData[0]);
  const [playerStatus, setplayerStatus] = useState(false);
  const [time, settime] = useState({
    currentTime: {
      second: 0,
      minute: 0,
    },
    totalTime: {
      second: 0,
      minute: 0,
    },
  });

  const play=()=>{
    audioRef.current.play();
    setplayerStatus(true);
  }

  const pause=()=>{
    audioRef.current.pause();
    setplayerStatus(false);
  }

  const PlaywithId=async(id)=>{
     await settrack(songsData[id]);
     await audioRef.current.play();
    
     setplayerStatus(true);
 }
 const Previous=async()=>{
    if(track.id >0)
    {
        await settrack(songsData[track.id-1]);
        await audioRef.current.play()
        setplayerStatus(true)
    }   
 }

 const next=async()=>{
    if(track.id <songsData.length-1)
    {
        await settrack(songsData[track.id+1]);
        await audioRef.current.play()
        setplayerStatus(true)
    }
    }

    const seeksong=async(e)=>{
        // audioRef.current.currentTime=((e.nativeEvent.offsetX/seekbg.current.offsetWidth)*audioRef.current.duration)
        audioRef.current.currentTime=((e.nativeEvent.offsetX/seekbg.current.offsetWidth)*audioRef.current.duration)
    }    



  const contextvalue = {
    audioRef,
    seekbar,
    seekbg,
    track,
    settrack,
    time,
    settime,
    playerStatus,
    setplayerStatus,
    play,pause,
    PlaywithId,
    Previous,
    next,
    seeksong
    


  };

  useEffect(()=>{
    setTimeout(()=>{
        audioRef.current.ontimeupdate=()=>{
            seekbar.current.style.width=(Math.floor(audioRef.current.currentTime/audioRef.current.duration * 100))+"%"

            settime({
                currentTime: {
                    second:Math.floor(audioRef.current.currentTime % 60),
                    minute:Math.floor(audioRef.current.currentTime / 60),
                  },
                  totalTime: {
                    second:Math.floor(audioRef.current.duration % 60),
                    minute:Math.floor(audioRef.current.duration / 60)
                  },
        })
        }
    },1000)
  },[audioRef])

  return (
    <Playercontext.Provider value={contextvalue}>
      {props.children}
    </Playercontext.Provider>
  );
};
export default Playercontextprovider;
