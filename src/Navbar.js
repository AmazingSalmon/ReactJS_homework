import React, { useState, useRef, useEffect } from 'react'
import { FaBars, FaTwitter } from 'react-icons/fa'
import { links, social } from './data'
import logo from './logo.svg'
import Sidebar from './Sidebar'
import Socialbar from './Socialbar'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const showMenu = () => {
    if(window.innerWidth>800){
      setShowLinks(true);
    } else {
      setShowLinks(false);
    }
  };
  useEffect(()=>{
    window.addEventListener("resize", showMenu);
    return () =>{
      window.removeEventListener('resize', showMenu);
    };
  },[]);
  
  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <img src={logo} alt='logo'/>
          <button className='nav-toggle' onClick={()=>setShowLinks(!showLinks)}>
            <FaBars/>
          </button>
        </div>
        <div className='link-container show-containder'>
          {showLinks&&<Sidebar/>}
        </div>
        <div className='link-container show-containder'>
          <Socialbar/>
        </div>
      </div>
    </nav>
  );
}
export default Navbar
