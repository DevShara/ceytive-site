import { BsArrowDownCircle } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../context';

import { Link, animateScroll as scroll } from "react-scroll";

// import heroImage from '../../assets/back.webp'

import { motion } from "framer-motion";




const Hero = () => {
  const theme =  useContext(ThemeContext);



  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", repeat: Infinity, repeatDelay: 10, duration: 2, bounce: 0 },
          opacity: { delay, duration: 1.01 }
        }
      };
    }
  };

  const item1=  {
    visible: i => ({
            opacity: 1,
            scale:1,
            transition: {
              pathLength: { i, type: "spring", duration: 7, bounce: 0 },
              opacity: { i, duration: 3.01 }
            }
           
        }),
    hidden: { opacity: 0,  scale:1.5, },
    
    
  }

  const item2 =  {
    visible: i => ({
            opacity: 1,
      
            transition: {
              delay: i * 0.3,
            },
           
        }),
    hidden: { opacity: 0 },
    
    
  }

  

    return(
    <div id='hero' className={`flex flex-col items-center justify-center rounded-b-3xl  h-screen overflow-hidden p-8 md:p-0 text-gray-200 ${theme == 'light' ? ' bg-white' : 'bg-black'}`} >
        <div className='flex flex-col md:flex-row items-center  container mx-auto justify-center md:gap-12 gap-14'>
            <div className=' md:w-2/5  w-full '
             
            >
              <motion.h1
                className={` md:text-5xl font-bold text-3xl md:leading-snug text-left `}
                initial="hidden"
                animate="visible"
                variants={item1}
                custom={2}
                >
              We are empowering your digital vision with quality web solutions
              </motion.h1>
              <Link
              to='about'
              spy={false}
              smooth={true}
              offset={-70}
              duration={1000}
              delay={100}>

                <motion.button
                className='mt-12 border p-6 rounded-full hover:bg-white hover:text-gray-700 transition-all'
                initial="hidden"
                animate="visible"
                variants={item2}
                custom={4}
                
                >Learn more</motion.button>
              </Link>
            
            </div>
            
            <motion.div className='md:w-3/5  w-full mx-auto'
               
            >
              
              <motion.svg

      height="450"
      viewBox="0 0 550 450"
      initial="hidden"
      animate="visible"
      className='mx-auto w-full'
    >
  
         
        <motion.path 
          variants={draw}
          custom={1} d="M291.36,168.36l-27-12.1c-4.9-23.2-15.1-33.7-33.8-35.8a36.11,36.11,0,0,0-36.2,23.6c-6,15-3.3,31.5,8.4,40.8,11.5,9.1,27.2,15.9,48.6.5l27,12.1c-15.4,25.3-50.1,31.3-82.3,15.3a61.71,61.71,0,0,1-29.1-79.7c15.1-35.8,48.4-46.4,75.3-37.9C279.56,106.86,299.36,136.86,291.36,168.36Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={2} d="M540.56,389c18.1,22.9,20.1,59-9,86.8a64,64,0,0,1-87.8,1.2c-27.3-25.3-34.3-61-15.5-85.2l21.6,21.7c-7.1,26.3,5.3,39.1,18.4,46.8,13.2,7.9,30.2,4.4,42.5-6.9a37.34,37.34,0,0,0,9.5-43.7c-9-17.4-22.8-23.3-47.1-19.6l-21.6-21.7C479.16,349,515.46,357.06,540.56,389Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={3} d="M149.16,373l-28.7,11.6c-21.1-13.1-36.3-13-51.5-.4a37.86,37.86,0,0,0-8.4,44.4c7,15.4,21.4,25.3,36.8,23.2,15.2-2,31.7-9,35.6-36.2l28.7-11.6c7.9,29.9-12.7,60.4-48.1,73.1a64.56,64.56,0,0,1-81.2-35.8c-16-37.3.1-70,26-84.2C94.26,337.26,131.26,344.06,149.16,373Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={4} d="M455.56,116.66c16.8-9.1,40.4-6.4,55,15.5a41.8,41.8,0,0,1-9.1,56.8c-19.4,14.8-43.2,15.3-56.7.5l16.4-11.5c16.2,7.5,25.8.9,32.3-6.6,6.6-7.7,6.2-19,.3-28.2a24.43,24.43,0,0,0-27.2-11c-12.2,3.9-17.6,12.1-17.9,28.2l-16.4,11.5C422.86,151.86,432.16,129.26,455.56,116.66Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={5} d="M341.46,399.16l-19.3,10c-15.6-7.8-26.2-6.7-36,3a26.51,26.51,0,0,0-3,31.6c5.9,10.3,16.6,16.3,27.2,13.8s21.6-8.3,22.5-27.6l19.3-9.9c7.5,20.4-4.9,43-28.9,54.2a45.29,45.29,0,0,1-59-19.8c-13.6-25-4.5-48.9,12.7-60.5C300.76,377.76,327.06,380.06,341.46,399.16Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={6} d="M98.76,161.86l-19.3,10c-15.6-7.8-26.2-6.7-36,3a26.51,26.51,0,0,0-3,31.6c5.9,10.3,16.6,16.3,27.2,13.8s21.6-8.3,22.5-27.6l19.3-9.9c7.5,20.4-4.9,43-28.9,54.2a45.29,45.29,0,0,1-59-19.8c-13.6-25-4.5-48.9,12.7-60.5C58.06,140.46,84.36,142.86,98.76,161.86Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={7} d="M365.86,204.76a12,12,0,0,1-12.5-11.3v-.9a12.53,12.53,0,0,1,12.8-12.3,12,12,0,0,1,11.9,12v.2a11.36,11.36,0,0,1-10.3,12.4A11.48,11.48,0,0,1,365.86,204.76Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={8} d="M215.26,402.06a12,12,0,0,1-12.5-11.3v-.9a12.53,12.53,0,0,1,12.8-12.3,12,12,0,0,1,11.9,12v.2a11.36,11.36,0,0,1-10.3,12.4A11.48,11.48,0,0,1,215.26,402.06Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={9} d="M365.76,366.76a5.15,5.15,0,0,1-5.4-4.9v-.4a5.38,5.38,0,0,1,5.5-5.3,5.14,5.14,0,0,1,5.1,5.2v.1a4.92,4.92,0,0,1-4.4,5.4C366.36,366.76,366.06,366.86,365.76,366.76Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={10} d="M452.76,232.26a5.15,5.15,0,0,1-5.4-4.9V227a5.38,5.38,0,0,1,5.5-5.3,5.14,5.14,0,0,1,5.1,5.2v.1a4.93,4.93,0,0,1-4.4,5.4A2.2,2.2,0,0,0,452.76,232.26Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={11} d="M385.26,148a7.82,7.82,0,0,1-8.2-7.4V140a8.26,8.26,0,0,1,8.4-8.1,7.83,7.83,0,0,1,7.8,7.9v.1a7.51,7.51,0,0,1-6.8,8.2A4.87,4.87,0,0,0,385.26,148Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={12} d="M174.06,351.46a5.15,5.15,0,0,1-5.4-4.9v-.4a5.38,5.38,0,0,1,5.5-5.3,5.14,5.14,0,0,1,5.1,5.2v.1a4.93,4.93,0,0,1-4.4,5.4A2.2,2.2,0,0,0,174.06,351.46Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={13} d="M432.36,348.76a3.4,3.4,0,0,1-3.6-3.3v-.3a3.67,3.67,0,0,1,3.7-3.6,3.54,3.54,0,0,1,3.5,3.5v.1a3.34,3.34,0,0,1-3,3.6Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={14} d="M143.46,219.86a3.4,3.4,0,0,1-3.6-3.3v-.3a3.67,3.67,0,0,1,3.7-3.6,3.54,3.54,0,0,1,3.5,3.5v.1a3.34,3.34,0,0,1-3,3.6A.64.64,0,0,1,143.46,219.86Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={15} d="M337.76,131.76a3.4,3.4,0,0,1-3.6-3.3v-.3a3.67,3.67,0,0,1,3.7-3.6,3.54,3.54,0,0,1,3.5,3.5v.1a3.34,3.34,0,0,1-3,3.6Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={16} d="M311.46,227a5.15,5.15,0,0,1-5.4-4.9v-.4a5.38,5.38,0,0,1,5.5-5.3,5.14,5.14,0,0,1,5.1,5.2v.1a4.93,4.93,0,0,1-4.4,5.4A2.49,2.49,0,0,0,311.46,227Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={17} d="M87.66,300.76a5.15,5.15,0,0,1-5.4-4.9v-.4a5.38,5.38,0,0,1,5.5-5.3,5.14,5.14,0,0,1,5.1,5.2v.1a4.93,4.93,0,0,1-4.4,5.4A2.2,2.2,0,0,1,87.66,300.76Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={18} d="M32.36,307.86a12,12,0,0,1-12.5-11.3v-.9a12.53,12.53,0,0,1,12.8-12.3,12,12,0,0,1,11.9,12v.2A11.36,11.36,0,0,1,34.26,308,12.75,12.75,0,0,0,32.36,307.86Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={19} d="M537.16,237a10.25,10.25,0,0,1-10.7-9.7v-.8a10.71,10.71,0,0,1,10.9-10.5,10.09,10.09,0,0,1,10.1,10.2v.2a9.69,9.69,0,0,1-8.8,10.6A7.52,7.52,0,0,1,537.16,237Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>

        <motion.path 
          variants={draw}
          custom={20} d="M571.16,321.76A13.53,13.53,0,0,1,557,309v-1.1a14.34,14.34,0,0,1,14.5-14,13.53,13.53,0,0,1,13.5,13.6v.2a13,13,0,0,1-11.7,14.1A14.7,14.7,0,0,1,571.16,321.76Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="2"/>


        {/* c */}
        <motion.path 
          variants={draw}
          custom={7} d="M202.76,275.46h-17.6c-8.3-11.4-16.4-14.6-27.1-11.2a21.51,21.51,0,0,0-13.9,21.7c.4,9.6,5.9,17.9,14.5,20.1,8.4,2.2,18.7,2,26.5-11.6h17.6c-2.2,17.5-19.6,29.2-41,28.3a36.66,36.66,0,0,1-35.2-36.2c-.5-23.1,15-37,31.7-38.9C181.36,244.86,199.46,256.36,202.76,275.46Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

       
        {/* 2nd e */}
        <motion.path 
          variants={draw}
          custom={8} d="M267.16,298.16h-41.4a8.33,8.33,0,0,0,4.6,8.5,13.89,13.89,0,0,0,13.8.8c4.9-2.7,9.8-2.6,15-2.6h5.6c-3.1,13.2-18.4,21.1-34.6,17.3-17.1-4-23.2-18.1-21.7-31.5,1.9-17.2,15.9-27.4,34.1-25.2C255.66,267,268.36,277,267.16,298.16Zm-41.1-10H250a11.91,11.91,0,0,0-11.9-8.9,11.59,11.59,0,0,0-12,8.9Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

         {/* y */}
         <motion.path 
          variants={draw}
          custom={9} d="M275.26,266.66h14.3c.1,1.7.4,3.4.4,5.2.1,7.4-.1,14.8.1,22.2s2.5,10.9,7.8,12.6a10.42,10.42,0,0,0,13.3-6.2c0-.1.1-.2.1-.3a28.45,28.45,0,0,0,1.1-8.2c.1-8.3.1-16.6.1-25.2h15.7c.2,1.3.3,2.7.4,4.1,0,15.9.3,31.8-.1,47.7a41.2,41.2,0,0,1-3,13.9c-3.6,8.9-11.6,12.4-20.4,13-10.3.7-20.6.2-31.4.2a79,79,0,0,1,2.7-8.2,8.24,8.24,0,0,1,8.2-5.5h15.5c9.7-.1,13.7-5.4,11.7-15.4a44.3,44.3,0,0,1-8.5,4.8,20.89,20.89,0,0,1-22.9-7,20.39,20.39,0,0,1-5.5-13c-.3-10.9-.2-21.8-.2-32.7A3,3,0,0,1,275.26,266.66Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        {/* t */}
        <motion.path 
          variants={draw}
          custom={10} d="M337.76,248.86h15.5v17.3h26.2v15.1h-25.6a81.08,81.08,0,0,0,.4,22,5.71,5.71,0,0,0,6.1,4.7,5.92,5.92,0,0,0,6.5-4.1,36.51,36.51,0,0,0,1.3-5h14.3a18.77,18.77,0,0,1-11.5,22.4,32.72,32.72,0,0,1-19.1.4,17.88,17.88,0,0,1-13.7-17.4c-.4-13.1-.3-26.3-.4-39.4Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        {/* i */}
        <motion.path 
          variants={draw}
          custom={11} d="M390.66,266.56h14.5v54.5h-14C389.76,317.36,389.26,275.06,390.66,266.56Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        {/* i dot */}
        <motion.path 
          variants={draw}
          custom={12} d="M396.86,259.16a8.29,8.29,0,0,1-8.7-7.9v-.7a8.79,8.79,0,0,1,8.9-8.6,8.37,8.37,0,0,1,8.3,8.4v.1a8,8,0,0,1-7.2,8.7Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        
      {/* v */}
      <motion.path 
          variants={draw}
          custom={13} d="M453,266.56h16.7l-19.5,54.5h-20.4l-19.5-54.3h17.2l12,37.8,1.3.1C445.36,292.16,448.46,279.26,453,266.56Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>
        

        {/* last e */}
        <motion.path 
          variants={draw}
          custom={14} d="M526,298.06H486c0,5.3,2,8.7,6.8,9.7a20.63,20.63,0,0,0,11.8-.5,27.51,27.51,0,0,1,12.3-2.3h7.8c-4.1,14.9-19.4,20.8-35.3,17-17.7-4.2-23.3-19.6-20.7-33.6,3.4-18.3,19.3-25.4,35.5-22.6C519.76,268.36,528.86,282,526,298.06Zm-40.2-9.9h24a12,12,0,0,0-12-8.9,11.73,11.73,0,0,0-12,8.9Z" transform="translate(-13.98 -91.39)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        
        </motion.svg>
            </motion.div>
         
                
           
        </div>
        
        <Link 
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                delay={100}
                className={`font-bold cursor-pointer text-5xl animate-bounce   `}><BsArrowDownCircle /></Link>
    </div>
    )
}

export default Hero;