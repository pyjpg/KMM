import React from 'react';
//import images

import Logo from '../assets/logo.svg';


const Header = () => {
  return <header className='py-8'> 
  <div classname="container mx-auto">
    <div className='flex justify-between items-center'>
      {/* Branding image */}
      <a href='#'>
        <img src={Logo} alt=''/>

      </a>

      <button className='btn btn-sm'>Work With me</button>
    </div>
  </div>
  </header>
};

export default Header;
