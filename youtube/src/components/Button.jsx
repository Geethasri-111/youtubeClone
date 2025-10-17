import React from 'react'

const Button = ({ name}) => {
  return (
    <div>
        <button className='bg-gray-200 px-3 py-2 m-2 border-radius rounded-2xl'>{name}</button>
      
    </div>
  )
}

export default Button
