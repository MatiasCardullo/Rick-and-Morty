/* eslint-disable react/prop-types */
import { useState } from 'react';
import logo from '../assets/Rick_and_Morty.svg'
import SearchBar from './SearchBar';

import { BsArrowLeftShort } from "react-icons/bs";

const SideBar = ({setStatus,setGender }) => {
  const [open, setOpen] = useState(true)

  const [search, setSearch] = useState("")
  
  const handleStatus=(e)=>{
    setStatus(e.target.value)
  }
  const handleGender=(e)=>{
    setGender(e.target.value)
  }

  const resetAll=()=>{
  }

  return (
    <div className='h-full absolute inset-y-0 left-0 z-10'>
      <div className={`h-full bg-slate-900 p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-slate-900 cursor-pointer duration-1000 ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} />
        <img src={logo} alt="" />
        {open&&
          <SearchBar input={search} setInput={setSearch}/>
        }
        {open&&
        <ul className='p-10'>
          <li className='p-2 text-2xl text-white'>Show status: </li>
          <form className='grid grid-cols-2'>
            <input type="radio" name='status' id='all' value='' onChange={handleStatus}/>
            <label htmlFor="all">All</label>
            <input type="radio" name='status' id='alive' value='alive' onChange={handleStatus}/>
            <label htmlFor="alive">Alive</label>
            <input type="radio" name='status' id='dead' value='dead' onChange={handleStatus}/>
            <label htmlFor="dead">Dead</label>
            <input type="radio" name='status' id='unknownStatus' value='unknown' onChange={handleStatus}/>
            <label htmlFor="unknown">Unknown</label>
          </form>
          <li className='p-2 text-2xl text-white'>Show Gender:</li>
          <form className='grid grid-cols-2'>
            <input type="radio" name='gender' id='all' value='' onChange={handleGender}/>
            <label htmlFor="all">All</label>
            <input type="radio" name='gender' id='female' value='female' onChange={handleGender}/>
            <label htmlFor="female">Female</label>
            <input type="radio" name='gender' id='male' value='male' onChange={handleGender}/>
            <label htmlFor="male">Male</label>
            <input type="radio" name='gender' id='genderless' value='genderless' onChange={handleGender}/>
            <label htmlFor="genderless">Genderless</label>
            <input type="radio" name='gender' id='unknownGender' value='unknown' onChange={handleGender}/>
            <label htmlFor="unknown">Unknown</label>
          </form>
        </ul>
        }
      </div>
    </div>
  )
}

export default SideBar