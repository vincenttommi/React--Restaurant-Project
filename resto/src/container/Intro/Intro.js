import React, { useState } from 'react'
import './Intro.css';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs';
import { meal } from '../../constants';
 
const Intro = () => {


const [playVideo,setPlayVideo] = useState(false);
const  vidref  = React.useRef();
// method of  passing a video in React

 
  const  handleVideo = () =>{

    //introducing a callback function

    setPlayVideo((prevPlayVideo)=> !prevPlayVideo );

    if(playVideo){

      vidref.current.pause();

    }else{
      vidref.current.play();

    }


   setPlayVideo(true)
   setPlayVideo(false)





  }

  return (
    <div  className='app__video'  >

      <video  
      ref={vidref}
      src={meal}
      type = "video/mp4"
      loop
      controls = {false}
      muted

      />

     <div className='app__video-overlay flex__center'>
      <div className='app__video-overlay_circle flex__center'
      onClick={handleVideo}

      >

        {playVideo ? (


         <BsFillPlayFill     color="#fff" fontsize={30} />
        ) : <BsFillPlayFill    color='#fff' fontSize={30} />}


      </div>
     </div>
    </div>
  )
}

export default Intro