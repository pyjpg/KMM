import React from 'react';
import Image from '../assets/avatar.png'
import { FaGithub, FaYoutube, FaDribbble} from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion'
import {fadeIn } from '../variants';

const Banner = () => {
  return <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
    <div className='container mx-auto'>
      <div className='flex flex-col gap-y-15 justify-center lg:flex-row lg:items-center'>
        <div className='flex-1 text-center font-secondary lg:text-left lg:pr-16'>
          <motion.h1 
          variants={fadeIn('down', 0.6)}
           inital="hidden" 
           whileInView={'show'} 
           viewport={{ once: false, amount: 0.7 }}
           className="mb-4 text-[40px] font-primary font-bold leading-[0.8] lg:text-[110px]">
            K<span class=" bg-gradient-to-b from-purple-600 to-#FFD700-600">MM</span>
            
          </motion.h1>
          <motion.div
          variants={fadeIn('up', 0.6)}
          inital="hidden" 
          whileInView={'show'} 
          viewport={{ once: false, amount: 0.7 }}
           className='mb-6 text-[26px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
            <span className='text-white mr-4'>We are Keeping<br></br></span>
            <TypeAnimation sequence={[
              'Medicine',
              2000,
              'Modern',
              2000,
            ]}
            speed={50}
            className='text-[#FFD700]'
            wrapper='span'
            repeat={Infinity}/>
          </motion.div>
          <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
            KMM is a medical web design company that creates innovative, user-friendly websites for healthcare businesses. With a team of experts, KMM offers custom web design and development, social media management, and online marketing services to keep healthcare organizations modern and competitive.
          </p>
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
            <button className='btn btn-lg'>Contact Us</button>
            <a href="#" className='text-gradient btn-link'>Our Success</a>
          </div>
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
            <a href='#'>
              <FaYoutube />
            </a>
            <a href='#'>
              <FaGithub />
            </a>
            <a href='#'>
              <FaDribbble />
            </a>
          </div>
        </div>
          <div className=' hidden lg:flex flex-1 max-w-[320px] lg:max-w-[482px]'>
          <img src={Image} alt='' />
        </div>
      </div>
      </div>
    </section>;
};

export default Banner;
