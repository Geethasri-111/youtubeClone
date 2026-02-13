import React, { useEffect, useState } from 'react'
import hamburgerIcon from '../assets/hamburgerIcon.png'
import youtubeLogo from '../assets/youtube.png'
import profileIcon from '../assets/user.png'
import searchImage from '../assets/search.png'
import { useDispatch ,useSelector } from 'react-redux'
import { toggle } from '../utils/toggleSlice'
import { youtube_Search_API } from '../utils/consts'
import { cacheResults } from '../utils/searchSlice'

const Head = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchItems,setSearchItems] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const searchCache = useSelector((store=>store.search));
  const dispatch = useDispatch();

  useEffect(()=>{
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSearchItems(searchCache[searchQuery]);
      }else{
      getSuggestions();
    }
    },200);
  
    return() => {
      clearTimeout(timer);
    }
  },[searchQuery]);

  const getSuggestions = async()=>{
    const searchapi = await fetch(youtube_Search_API+searchQuery);
    const data = await searchapi.json();
    setSearchItems(data.items);
    dispatch(cacheResults({
      [searchQuery]:data.items,
    }));
    console.log(data.items);
  }
  
  const toggleHamburger =() =>{
    dispatch(toggle())
  }
  return (
    <div  className="grid grid-flow-col p-5 my-2 shadow-lg text-center">
    <div className='flex col-span-1 cursor-pointer'>
      <img className='h-8' src={hamburgerIcon} alt='Menu' onClick={()=>toggleHamburger()}/>      
        <img className='h-20 -mt-6 mx-2' src={youtubeLogo} alt="logo"/>
    </div>
    <div className='flex col-span-10 relative'>
      <div className='flex w-10/12'>
          <input type="text" id="youtubeSearchbar"
            className='border border-black-500  border-radius rounded-r-none rounded-3xl w-1/2 h-10 p-3' 
            placeholder="Search" value={searchQuery}
            onChange={(e)=>setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className='border border-black-500  border-radius rounded-l-none rounded-3xl h-10 p-2'>
            <img className="h-8 -mt-1.5" src={searchImage} alt="search"/>
            </button>
        </div>
        {showSuggestions && (
          <div className='searchList absolute bg-white p-5 mt-10 w-1/2 text-left shadow-lg rounded-lg'>
          <ul>
            {searchItems.map(item =>  <li key={item.id.videoId} className='p-1 m-1'>{item.snippet.title}</li>)}
           
           
          </ul>
        </div>
  )}
    </div>
    <div className='col-span-1'>
      <img className='h-8' src={profileIcon} alt="profile"/>
    </div>
    </div>
  )
}

export default Head
