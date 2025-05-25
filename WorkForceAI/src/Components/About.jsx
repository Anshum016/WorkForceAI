import React from 'react'
import AboutUs from '../assets/AboutUs.jpg'
import Lottie from 'lottie-react';
import Animation2 from '../assets/Animation2.json';

const About = () => {
  return (
    <div className='space-y-6'>
    <div className='text-amber-50 text-center font-extrabold text-4xl mt-20'>
      Our Company
    </div>
    <div className="flex justify-center items-center">
      <Lottie
        animationData={Animation2}
        loop={true}
        style={{ width: '400px', height: '400px' }}
      />
    </div>
    <div className="flex justify-center items-center ">
      <img src={AboutUs} alt="" className=' h-[300px] w-fit'/>
    </div>
    </div>
  )
}

export default About
