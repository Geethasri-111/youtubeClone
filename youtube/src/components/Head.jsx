import React from 'react'
import hamburgerIcon from '../assets/hamburgerIcon.png'
import youtubeLogo from '../assets/youtube.png'
import profileIcon from '../assets/user.png'
import searchImage from '../assets/search.png'
import { useDispatch } from 'react-redux'
import { toggle } from '../utils/toggleSlice'

const Head = () => {

  const dispatch = useDispatch();
  
  const toggleHamburger =() =>{
    dispatch(toggle())
  }
  return (
    <div  className="grid grid-flow-col p-5 my-2 shadow-lg text-center">
    <div className='flex col-span-1 cursor-pointer'>
      <img className='h-8' src={hamburgerIcon} alt='Menu' onClick={()=>toggleHamburger()}/>
      
        <img className='h-20 -mt-6 mx-2' src={youtubeLogo} alt="logo"/>
    

    </div>
    <div className='flex col-span-10'>
      <input type="text" id="youtubeSearchbar"
       className='border border-black-500  border-radius rounded-r-none rounded-3xl w-1/2 h-10 p-3' 
       placeholder="Search"/>
      <button className='border border-black-500  border-radius rounded-l-none rounded-3xl h-10 p-2'>
        <img className="h-8 -mt-1.5" src={searchImage} alt="search"/>
        </button>
    </div>
    <div className='col-span-1'>
      <img className='h-8' src={profileIcon} alt="profile"/>
    </div>
    </div>
  )
}

export default Head
