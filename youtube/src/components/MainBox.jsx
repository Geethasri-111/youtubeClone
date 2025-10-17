import React from 'react'
import VideoContainer from './VideoContainer'
import ButtonList from './ButtonList'

const MainBox = () => {
  return (
    <div className='col-span-9 m-4'>
      <ButtonList/>
      <VideoContainer/>
    </div>
  )
}

export default MainBox
