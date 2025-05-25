// src/components/Footer.jsx
import React from 'react';
import About from './About';
import Contact from './Contact';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-[#0c0c14] text-white py-6 mt-16">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} WorkforceAI. All rights reserved.</p>
        <div className="flex space-x-4 mt-3 md:mt-0">
          <Link to="./About" className="hover:text-red-600 transition">About</Link>
          <Link to="./About" className="hover:text-red-600 transition">Contact</Link>
          <Link to="./About" className="hover:text-red-600 transition">Privacy</Link>
        </div>
      </div>
      <div>
        <p className='text-center my-5 '>Designed & Developed By - 
          <a href="https://www.linkedin.com/in/anshumjani/" target="_blank" className='hover:text-red-600' > Anshum Jani</a> &
          <a href="https://www.linkedin.com/in/maitreya-mishra-contactme/" target='_blank' className='hover:text-red-600'> Maitreya Mishra</a>
          </p>
                                   
      </div>
    </footer>
  );
};

export default Footer;
