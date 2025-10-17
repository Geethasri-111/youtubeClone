import React, { useEffect ,useState} from 'react'
import { youtubeAPI } from '../utils/consts';
import VideoCard from './videoCard';
import { Link } from 'react-router';

const VideoContainer = () => {
  const [videos,setvideos] =useState([]);
  useEffect(() => {
    getVideos();
  },[]);

  const getVideos =async( )=>{
    const data = await fetch(youtubeAPI);
    const jsonres = await data.json();
    setvideos(jsonres.items);
    console.log(jsonres);
  }
  return (
    <div className='grid gap-4 grid-cols-4' >     
     {videos.map((video) => (
        <Link to={"/watch?v="+video.id} key={video.id}>
          <VideoCard info={video}/></Link>
  ))} 
      
    </div>
  )
}

export default VideoContainer
