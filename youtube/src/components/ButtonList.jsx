import React from 'react'
import Button from './Button'

const ButtonList = () => {

  const buttonList = ['All','Live','Sports','entertainment','cooking','music'];
  return (
    <div className='flex mb-4'>
      {buttonList.map((button)=>(
          <Button name={button} key={button}/>
      )
      )}
    </div>
  )
}

export default ButtonList
