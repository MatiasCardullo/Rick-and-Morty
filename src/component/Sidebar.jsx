import { Link } from 'react-router-dom'
import { useState } from 'react';
import logo from '../assets/Rick_and_Morty.svg'

import { BsArrowLeftShort } from "react-icons/bs";


const SideBar = () => {
  const [open,setOpen]=useState(true)
  return (
    <div className={`bg-slate-900 p-5 pt-8 ${open?'w-72':'w-20'} duration-300 relative`}>
      <BsArrowLeftShort className={`bg-white text-3xl rounded-full absolute -right-3 top-9 border border-slate-900 cursor-pointer duration-800 ${!open&&'rotate-180'}`} onClick={()=>setOpen(!open)}/>
      <img src={logo} alt="" />
      Hello
    </div>
  )
}

export default SideBar
/**
 *         <ul className='nav-ul'>
        <li className='nav-logo'>
          <img className='logo-img' src="" alt="logo rick and morty" />
        </li>
          <Link to="/" className='ul-link'>
             <li className='link-li'><FaUsers /> Personajes</li> 
          </Link>
          <Link to="/places" className='ul-link'>
            <li className='link-li'><FaGlobeAmericas /> Lugares</li> 
          </Link>
          <Link to="/episodes" className='ul-link'>
            <li className='link-li'><BsFillCollectionPlayFill /> Episodios</li>
          </Link>
        </ul>
 */