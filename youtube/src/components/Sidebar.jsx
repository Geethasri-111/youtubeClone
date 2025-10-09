import React from 'react'
import { useSelector } from 'react-redux'

const Sidebar = () => {
  const menuOpenselector = useSelector((store)=> store.toggle.isMenuOpen);

  if(!menuOpenselector) return null;

  return (
  
    <div className='p-5 shadow-lg col-span-1' >
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
