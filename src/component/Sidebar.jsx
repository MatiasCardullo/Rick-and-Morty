/* eslint-disable react/prop-types */
import { useState } from 'react';
import logo from '../assets/Rick_and_Morty.svg'
import SearchBar from './SearchBar';

import { BsArrowLeftShort } from "react-icons/bs";

const SideBar = ({setPage,setName, setStatus,setSpecie,setGender }) => {
  const [open, setOpen] = useState(true)
  
  const handleStatus=(e)=>{
    setStatus(e.target.value)
    setPage(1)
  }
  const handleSpecie=(e)=>{
    setSpecie(e.target.value)
    setPage(1)
  }
  const handleGender=(e)=>{
    setGender(e.target.value)
    setPage(1)
  }

  const resetAll=()=>{
    setName("")
    document.getElementById('searchBar').value=''
    setStatus("")
    document.getElementById('allStatus').checked = true;
    setGender("")
    document.getElementById('allSpecies').checked = true;
    setGender("")
    document.getElementById('allGenders').checked = true;
    setPage(1)
  }

  return (
    <div className='h-full absolute inset-y-0 left-0 z-10'>
      <div className={`h-full bg-slate-900 p-5 pt-8 ${open ? 'w-72' : 'w-20'} duration-300 relative`}>
        <BsArrowLeftShort className={`bg-white text-black text-3xl rounded-full absolute -right-3 top-9 border border-slate-900 cursor-pointer duration-1000 ${!open && 'rotate-180'}`} onClick={() => setOpen(!open)} />
        <img src={logo} alt="" />
        {open&&
          <SearchBar setPage={setPage} setName={setName}/>
        }
        {open&&
        <ul className='p-10'>
          <li className='p-2 text-2xl text-white'>Show status: </li>
          <form className='grid grid-cols-2 text-white'>
            <input type="radio" name='status' id='allStatus' value='' onChange={handleStatus}/>
            <label htmlFor="all">All</label>
            <input type="radio" name='status' id='alive' value='alive' onChange={handleStatus}/>
            <label htmlFor="alive">Alive</label>
            <input type="radio" name='status' id='dead' value='dead' onChange={handleStatus}/>
            <label htmlFor="dead">Dead</label>
            <input type="radio" name='status' id='unknownStatus' value='unknown' onChange={handleStatus}/>
            <label htmlFor="unknown">Unknown</label>
          </form>
          <li className='p-2 text-2xl text-white'>Show Specie:</li>
          <form className='grid grid-cols-2  text-white'>
            <input type="radio" name='specie' id='allSpecies' value='' onChange={handleSpecie}/>
            <label htmlFor="all">All</label>
            <input type="radio" name='specie' id='human' value='human' onChange={handleSpecie}/>
            <label htmlFor="human">Human</label>
            <input type="radio" name='specie' id='humanoid' value='humanoid' onChange={handleSpecie}/>
            <label htmlFor="humanoid">Humanoid</label>
            <input type="radio" name='specie' id='animal' value='animal' onChange={handleSpecie}/>
            <label htmlFor="animal">Animal</label>
            <input type="radio" name='specie' id='alien' value='alien' onChange={handleSpecie}/>
            <label htmlFor="alien">Alien</label>
            <input type="radio" name='specie' id='poopybutthole' value='poopybutthole' onChange={handleSpecie}/>
            <label htmlFor="poopybutthole">Poopybutthole</label>
            <input type="radio" name='specie' id='mythologicalCreature' value='mythological creature' onChange={handleSpecie}/>
            <label htmlFor="mythologicalCreature">Myth.Creature</label>
            <input type="radio" name='specie' id='robot' value='robot' onChange={handleSpecie}/>
            <label htmlFor="robot">Robot</label>
            <input type="radio" name='specie' id='cronenberg' value='cronenberg' onChange={handleSpecie}/>
            <label htmlFor="cronenberg">Cronenberg</label>
            <input type="radio" name='specie' id='disease' value='disease' onChange={handleSpecie}/>
            <label htmlFor="disease">Disease</label>
            <input type="radio" name='specie' id='unknownSpecie' value='unknown' onChange={handleSpecie}/>
            <label htmlFor="unknown">Unknown</label>
          </form>
          <li className='p-2 text-2xl text-white'>Show Gender:</li>
          <form className='grid grid-cols-2  text-white'>
            <input type="radio" name='gender' id='allGenders' value='' onChange={handleGender}/>
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
          <button className='bg-white text-black font-bold h-10 w-32 m-5 rounded-full' onClick={resetAll}>RESET ALL</button>
        </ul>
        }
      </div>
    </div>
  )
}

export default SideBar