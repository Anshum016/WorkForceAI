import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import WORKFORCEAI from '../assets/WORKFORCEAI.svg';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FaTimes } from 'react-icons/fa';

const Nav = () => {
  const [click, setClick] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => setClick(!click);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (click && !event.target.closest('.mobile-menu')) {
        setClick(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [click]);

  // Mobile menu content
  const content = (
    <div className='lg:hidden absolute top-16 left-0 w-full text-amber-50 bg-gray-950/95 backdrop-blur-sm z-40 mobile-menu'>
      <ul className='text-center text-xl p-6'>
        <li className='my-4 py-4 border-b border-slate-800 text-amber-50 hover:bg-slate-800/50 hover:rounded transition-colors duration-300'>
          <Link to="/" onClick={handleClick}>Home</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 text-amber-50 hover:bg-slate-800/50 hover:rounded transition-colors duration-300'>
          <Link to="/Solutions" onClick={handleClick}>Solutions</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 text-amber-50 hover:bg-slate-800/50 hover:rounded transition-colors duration-300'>
          <Link to="/CaseStudies" onClick={handleClick}>Case Studies</Link>
        </li>
        <li className='my-4 py-4 border-b border-slate-800 text-amber-50 hover:bg-slate-800/50 hover:rounded transition-colors duration-300'>
          <Link to="/Contact" onClick={handleClick}>Contact</Link>
        </li>
      </ul>
    </div>
  );

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/95 backdrop-blur-sm shadow-lg' : ''}`}>
      <div className='flex items-center justify-between w-full px-4 sm:px-6 md:px-8 py-4 text-amber-50'>
        {/* Logo */}
        <Link to="/" className="cursor-pointer">
          <img src={WORKFORCEAI} alt="Workforce AI Logo" className="h-8 sm:h-10" />
        </Link>

        {/* Desktop Menu */}
        <div className='hidden lg:flex gap-10 font-bold text-amber-50'>
          <ul className='flex gap-8 xl:gap-20'>
            <li className='hover:text-red-600 cursor-pointer transition-colors duration-300'>
              <Link to="/">Home</Link>
            </li>
            <li className='hover:text-red-600 cursor-pointer transition-colors duration-300'>
              <Link to="/Solutions">Solutions</Link>
            </li>
            <li className='hover:text-red-600 cursor-pointer transition-colors duration-300'>
              <Link to="/CaseStudies">Case Studies</Link>
            </li>
            <li className='hover:text-red-600 cursor-pointer transition-colors duration-300'>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Mobile Hamburger Icon */}
        <button 
          className='block lg:hidden text-2xl z-50 p-2 hover:bg-gray-800/50 rounded-lg transition-colors duration-300' 
          onClick={handleClick}
          aria-label="Toggle menu"
        >
          {click ? <FaTimes /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Show mobile menu if clicked */}
      {click && content}
    </nav>
  );
};

export default Nav;
