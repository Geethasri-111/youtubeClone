import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router';

const Sidebar = () => {
  const menuOpenselector = useSelector((store)=> store.toggle.isMenuOpen);

  if(!menuOpenselector) return null;

  return (
  
    <div className='p-5 shadow-lg col-span-2' >
      <h1>Home</h1>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Shorts</li>
            <li>Videos</li>
            <li>Live</li>
        </ul>
      <h1>Subscriptions</h1>
          <ul>
            <li>Music</li>
            <li>Sports</li>
            <li>Gaming</li>
            <li>Movies</li>
        </ul>
    </div>
   
  )
}

export default Sidebar
