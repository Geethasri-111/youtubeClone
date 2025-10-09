import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainBox = () => {
  return (
    <div className='flex col-span-10 '>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainBox
