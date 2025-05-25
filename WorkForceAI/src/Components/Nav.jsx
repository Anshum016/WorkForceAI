import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import WORKFORCEAI from '../assets/WORKFORCEAI.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';


const Nav = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  // Mobile menu content
  const content = (
    <div className='lg:hidden absolute top-16 left-0 w-full text-amber-50 bg-gray-950 z-40'>
      <ul className='text-center text-xl p-6'>
        <li className='my-4 py-4 border-b border-slate-800 text-amber-50 hover:bg-slate-800 hover:rounded'>
          <Link to="/" onClick={handleClick}>Home</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 text-amber-50 hover:bg-slate-800 hover:rounded'>
          <Link to="/Solutions" onClick={handleClick}>Solutions</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 text-amber-50 hover:bg-slate-800 hover:rounded'>
          <Link to="/CaseStudies" onClick={handleClick}>Case Studies</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 text-amber-50 hover:bg-slate-800 hover:rounded'>
          <Link to="/Contact" onClick={handleClick}>Contact</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <>
      <div className='flex items-center justify-between w-full px-6 py-4 text-amber-50 z-50 relative'>
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img src={WORKFORCEAI} alt="Workforce AI Logo" className="h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-10 font-bold text-amber-50'>
          <ul className='flex gap-20'>
            <li className='hover:text-red-600 cursor-pointer'>
              <Link to="/">Home</Link>
            </li>
            <li className='hover:text-red-600 cursor-pointer'>
              <Link to="/Solutions">Solutions</Link>
            </li>
            <li className='hover:text-red-600 cursor-pointer'>
              <Link to="/CaseStudies">Case Studies</Link>
            </li>
            <li className='hover:text-red-600 cursor-pointer'>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Icon */}
        <button className='block lg:hidden text-2xl z-50' onClick={handleClick}>
          {click ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Show mobile menu if clicked */}
      {click && content}
    </>
  );
};

export default Nav;
