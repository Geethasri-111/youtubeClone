import React from 'react'
import Sidebar from './Sidebar'
import MainBox from './MainBox'
import { Outlet } from 'react-router'
const Body = () => {
  return (
    <div className='grid grid-flow-col gap-2'>
     <Sidebar/>
     <Outlet/>
    </div>
  )
}

export default Body
