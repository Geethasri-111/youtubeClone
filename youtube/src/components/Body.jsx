import React from 'react'
import Sidebar from './Sidebar'
import MainBox from './MainBox'
const Body = () => {
  return (
    <div className='grid grid-flow-col gap-2'>
     <Sidebar/>
      <MainBox/>
    </div>
  )
}

export default Body
