import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu, toggle } from '../utils/toggleSlice';
import { useSearchParams } from 'react-router';

const WatchPage = () => {
    const [searchparams]= useSearchParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(closeMenu());
    },[])
  return (
    <div>
        <iframe width="1260" height="500"
         src={"https://www.youtube.com/embed/" + searchparams.get("v") + "?si=qaQMhKLExdyX-n1a"} title="YouTube video player"
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
         referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

      
    </div>
  )
}

export default WatchPage
