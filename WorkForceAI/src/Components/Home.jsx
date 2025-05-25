import React from 'react'
import Radicallybetter2 from '../assets/Radicallybetter2.svg'
import Carousel from './Carousel';
import Technologies from './Technologies';
import { Link } from 'react-router-dom';
import Tools from './Tools';
import Footer from './Footer';

const Home = () => {
  return (
    <div className='whole page'>
      <div className='flex flex-col md:flex-row hero-section text-amber-50 font-extrabold my-20 md:mt-24 lg:mt-40 mx-10'>

        <div className='text-section md:pr-20 md:pb-20'>
          <p className="text-lg font-extrabold md:text-justify text-center md:pb-5 pb-9 ">Transform Your Business with WORK<span className='text-red-600'>FORCE</span>.AI</p>
          <p className="text-justify">
            WorkforceAI delivers cutting-edge Generative AI solutions that revolutionize business operations. 
            Our intelligent automation tools help companies streamline processes, reduce costs, and boost productivity. 
            From customer service automation to data analysis and decision-making, we provide tailored AI solutions 
            that drive real business value. Partner with us to harness the power of AI and stay ahead in the digital age.
          </p>
        </div>
        <img src={Radicallybetter2} alt="Radicallybetter2" className='md:h-40 h-50' />
      </div>
      <div className='flex justify-center mb-10'>
        <Link to="./Tools">
          <button className="bg-red-600 hover:bg-red-800 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition duration-300 cursor-pointer">
            Explore Our Solutions
          </button>
        </Link>
      </div>

      <Carousel />
      <Technologies />
    </div>
  )
}

export default Home
