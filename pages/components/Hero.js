import { BsArrowDownCircle } from 'react-icons/bs';
import { useContext } from 'react';
import { ThemeContext } from '../context';

import { Link, animateScroll as scroll } from "react-scroll";

// import heroImage from '../../assets/back.webp'

import { motion } from "framer-motion";




const Hero = () => {
  const theme =  useContext(ThemeContext)

  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 2, bounce: 0 },
          opacity: { delay, duration: 1.01 }
        }
      };
    }
  };

    return(
    <div className={`flex flex-col items-center justify-center rounded-b-3xl  h-screen overflow-hidden text-gray-200 ${theme == 'light' ? 'hero-container-light' : 'hero-container-dark'}`} >
        <div className='flex flex-col md:flex-row items-center  container mx-auto justify-center md:gap-24 gap-14'>
            <motion.div className=' md:w-2/5  w-full '
              initial={{opacity: 0, scale: 2, x: "-100%" }}
              animate={{ opacity: 1, scale: 1, x: "10%" }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01]
              }}
            >
              <h1 className={` md:text-4xl text-3xl md:leading-snug text-left `}>
              We are empowering your digital vision with quality web solutions
              </h1>
              <Link
              to='about'
              spy={true}
              smooth={true}
              offset={-70}
              duration={1000}
              delay={100}
              
              ><button className='mt-12 border p-6 rounded-full hover:bg-white hover:text-gray-700 transition-all'>Learn more</button></Link>
            
            </motion.div>
            
            <motion.div className='md:w-3/5  w-full mx-auto'
               
            >
              
              <motion.svg
      width="600"
      height="450"
      viewBox="0 0 600 450"
      initial="hidden"
      animate="visible"
    >
  
        
        <motion.path variants={draw}
        custom={1} d="M331.39,129.29l-27-12.1C299.44,94,289.32,83.54,270.53,81.4A36.2,36.2,0,0,0,234.3,105c-6,15-3.28,31.53,8.38,40.78,11.47,9.1,27.23,15.94,48.59.5l27,12.1c-15.38,25.3-50.06,31.28-82.28,15.28A61.78,61.78,0,0,1,206.88,94C222,58.16,255.27,47.57,282.19,56,319.61,67.75,339.41,97.75,331.39,129.29Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={2} d="M580.63,349.86c18.07,22.93,20.08,59-9,86.8a63.91,63.91,0,0,1-87.83,1.17c-27.34-25.28-34.31-61-15.49-85.21L490,374.28c-7.07,26.35,5.34,39.07,18.36,46.82,13.24,7.88,30.18,4.43,42.52-6.89a37.46,37.46,0,0,0,9.54-43.74c-9-17.39-22.77-23.34-47.07-19.57l-21.64-21.67C519.22,309.86,555.52,318,580.63,349.86Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={3} d="M189.22,333.9l-28.68,11.59c-21.08-13.11-36.25-13-51.47-.42a37.85,37.85,0,0,0-8.43,44.41c7,15.39,21.37,25.3,36.79,23.21,15.16-2.05,31.72-9,35.57-36.24l28.66-11.58c7.92,29.91-12.68,60.37-48.08,73.05a64.54,64.54,0,0,1-81.15-35.81c-16-37.29.11-70.05,26-84.2C134.33,298.21,171.27,305,189.22,333.9Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={4} d="M495.57,77.59c16.82-9.11,40.36-6.37,55,15.5a41.88,41.88,0,0,1-9.07,56.83c-19.37,14.82-43.22,15.32-56.73.47l16.4-11.54c16.21,7.51,25.82.92,32.27-6.62s6.23-19,.31-28.22a24.55,24.55,0,0,0-27.17-11c-12.22,3.85-17.61,12.08-17.89,28.19l-16.41,11.55C462.89,112.75,472.19,90.23,495.57,77.59Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={5} d="M381.5,360,362.21,370c-15.58-7.79-26.17-6.75-36,3.05a26.54,26.54,0,0,0-3,31.57c5.88,10.3,16.57,16.29,27.2,13.83,10.46-2.41,21.59-8.32,22.5-27.63l19.28-9.95c7.48,20.39-4.94,43-28.85,54.17a45.3,45.3,0,0,1-59-19.76c-13.63-25-4.47-48.95,12.68-60.52C340.83,338.66,367.08,341,381.5,360Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={6} d="M138.78,122.75l-19.28,10c-15.59-7.79-26.18-6.75-36,3a26.55,26.55,0,0,0-3,31.58c5.88,10.3,16.57,16.29,27.21,13.83,10.46-2.42,21.58-8.33,22.5-27.63l19.27-9.95c7.48,20.39-4.94,43-28.85,54.16a45.29,45.29,0,0,1-59-19.75C48,153,57.14,129,74.29,117.47,98.12,101.38,124.36,103.73,138.78,122.75Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={7} d="M406,165.72a12,12,0,0,1-12.52-11.35c0-.31,0-.63,0-.94a12.6,12.6,0,0,1,12.77-12.35,11.93,11.93,0,0,1,11.88,12v.18a11.42,11.42,0,0,1-10.32,12.43A10.82,10.82,0,0,1,406,165.72Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={8} d="M255.31,363a12,12,0,0,1-12.52-11.35c0-.31,0-.63,0-.94a12.6,12.6,0,0,1,12.77-12.35,11.93,11.93,0,0,1,11.88,12v.18A11.44,11.44,0,0,1,257.11,363,12,12,0,0,1,255.31,363Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={9} d="M405.85,327.72a5.15,5.15,0,0,1-5.4-4.89v-.41a5.43,5.43,0,0,1,5.5-5.32,5.15,5.15,0,0,1,5.12,5.17v.08a4.92,4.92,0,0,1-4.45,5.36A6.57,6.57,0,0,1,405.85,327.72Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={10} d="M492.82,193.17a5.15,5.15,0,0,1-5.4-4.88v-.41a5.43,5.43,0,0,1,5.5-5.32,5.15,5.15,0,0,1,5.12,5.17v.08a4.92,4.92,0,0,1-4.45,5.35A4,4,0,0,1,492.82,193.17Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={11} d="M425.34,108.88a7.84,7.84,0,0,1-8.21-7.44c0-.21,0-.41,0-.62a8.27,8.27,0,0,1,8.38-8.1,7.83,7.83,0,0,1,7.79,7.87v.12a7.51,7.51,0,0,1-6.77,8.16A7.75,7.75,0,0,1,425.34,108.88Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={12} d="M214.12,312.35a5.15,5.15,0,0,1-5.4-4.88v-.41a5.43,5.43,0,0,1,5.5-5.32,5.15,5.15,0,0,1,5.12,5.17V307a4.92,4.92,0,0,1-4.45,5.35A4,4,0,0,1,214.12,312.35Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={13} d="M472.37,309.7a3.46,3.46,0,0,1-3.64-3.3,2.62,2.62,0,0,1,0-.28,3.68,3.68,0,0,1,3.72-3.59A3.47,3.47,0,0,1,475.9,306v.05a3.33,3.33,0,0,1-3,3.62A3.13,3.13,0,0,1,472.37,309.7Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={14} d="M183.51,180.83a3.47,3.47,0,0,1-3.64-3.3,2.62,2.62,0,0,1,0-.28,3.67,3.67,0,0,1,3.72-3.59,3.47,3.47,0,0,1,3.46,3.49v0a3.33,3.33,0,0,1-3,3.62A3,3,0,0,1,183.51,180.83Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={15} d="M377.83,92.71a3.48,3.48,0,0,1-3.65-3.3v-.28a3.67,3.67,0,0,1,3.72-3.59A3.47,3.47,0,0,1,381.35,89v0a3.32,3.32,0,0,1-3,3.62A3,3,0,0,1,377.83,92.71Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={16} d="M351.46,187.86a5.15,5.15,0,0,1-5.4-4.89v-.4a5.43,5.43,0,0,1,5.5-5.32,5.14,5.14,0,0,1,5.12,5.17v.08a4.92,4.92,0,0,1-4.45,5.35A4,4,0,0,1,351.46,187.86Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={17} d="M127.71,261.73a5.14,5.14,0,0,1-5.39-4.89c0-.14,0-.27,0-.41a5.43,5.43,0,0,1,5.5-5.32,5.14,5.14,0,0,1,5.12,5.17v.08a4.92,4.92,0,0,1-4.44,5.36A6.77,6.77,0,0,1,127.71,261.73Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={18} d="M72.39,268.73a11.94,11.94,0,0,1-12.52-11.34c0-.32,0-.63,0-.95a12.61,12.61,0,0,1,12.77-12.35,12,12,0,0,1,11.88,12v.19a11.43,11.43,0,0,1-10.32,12.43A12,12,0,0,1,72.39,268.73Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={19} d="M577.22,197.9a10.19,10.19,0,0,1-10.68-9.68,7.3,7.3,0,0,1,0-.81,10.76,10.76,0,0,1,10.89-10.54,10.19,10.19,0,0,1,10.14,10.24v.16a9.75,9.75,0,0,1-8.81,10.61A8.69,8.69,0,0,1,577.22,197.9Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>
        <motion.path variants={draw}
        custom={20} d="M611.18,282.7A13.53,13.53,0,0,1,597,269.85c0-.36,0-.72,0-1.07a14.27,14.27,0,0,1,14.46-14,13.52,13.52,0,0,1,13.46,13.58c0,.07,0,.14,0,.21a12.93,12.93,0,0,1-11.68,14.08A13.9,13.9,0,0,1,611.18,282.7Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10"/>


        <motion.path variants={draw}
        custom={8} d="M216.25,235.55H198.63c-8.34-11.42-16.37-14.61-27.1-11.2A21.57,21.57,0,0,0,157.6,246c.41,9.63,5.89,17.93,14.48,20.11s18.68,2,26.52-11.55h17.62c-2.2,17.49-19.58,29.18-41,28.33A36.77,36.77,0,0,1,140,246.67c-.52-23.12,15-37,31.68-38.94C194.87,205,212.93,216.46,216.25,235.55Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        <motion.path variants={draw}
        custom={9} d="M280.68,258.25h-41.4a8.38,8.38,0,0,0,4.61,8.55,13.8,13.8,0,0,0,13.79.82c4.89-2.72,9.82-2.59,14.95-2.6h5.57c-3.05,13.24-18.4,21.07-34.6,17.28-17.07-4-23.24-18.15-21.74-31.55,1.91-17.18,15.92-27.43,34.13-25.25C269.18,227.08,281.87,237.08,280.68,258.25Zm-41.12-10h23.88a11.93,11.93,0,0,0-11.93-8.93,11.79,11.79,0,0,0-12,8.94Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        <motion.path variants={draw}
        custom={10} d="M288.73,226.79h14.4c.13,1.67.4,3.42.41,5.17,0,7.4-.1,14.8.07,22.2s2.5,10.86,7.81,12.6a10.37,10.37,0,0,0,13.28-6.22l.09-.28a29.23,29.23,0,0,0,1.13-8.16c.14-8.29.05-16.59.05-25.23h15.67a39.38,39.38,0,0,1,.4,4c0,15.92.26,31.83-.11,47.74a39.81,39.81,0,0,1-3,13.9c-3.63,8.86-11.59,12.41-20.39,13-10.27.69-20.62.16-31.4.16,1-3.08,1.62-5.75,2.7-8.23A8.28,8.28,0,0,1,298,292c5.17,0,10.36,0,15.54,0,9.66-.1,13.7-5.39,11.66-15.4a43.45,43.45,0,0,1-8.5,4.76,21,21,0,0,1-22.92-7,20.43,20.43,0,0,1-5.53-13c-.28-10.91-.18-21.82-.2-32.73A6.23,6.23,0,0,1,288.73,226.79Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        
        <motion.path variants={draw}
        custom={11} d="M351.26,209h15.51v17.31H393v15.1H367.35a82.58,82.58,0,0,0,.4,22,5.78,5.78,0,0,0,6.05,4.72,6.07,6.07,0,0,0,6.54-4.1c.56-1.55.86-3.19,1.34-5h14.26a18.75,18.75,0,0,1-11.49,22.44,32.77,32.77,0,0,1-19.09.41,17.94,17.94,0,0,1-13.74-17.41c-.37-13.12-.28-26.26-.36-39.39C351.23,219.88,351.26,214.72,351.26,209Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        
        <motion.path variants={draw}
        custom={12} d="M404.13,226.72h14.51v54.46h-14C403.26,277.52,402.78,235.23,404.13,226.72Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        <motion.path variants={draw}
        custom={13} d="M410.36,219.28a8.32,8.32,0,0,1-8.73-7.91c0-.22,0-.44,0-.66a8.81,8.81,0,0,1,8.91-8.62,8.33,8.33,0,0,1,8.29,8.37v.13a8,8,0,0,1-7.2,8.67A7.58,7.58,0,0,1,410.36,219.28Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        <motion.path variants={draw}
        custom={14} d="M466.45,226.67h16.71l-19.49,54.49H443.24l-19.49-54.35H441l11.95,37.81,1.31.08C458.83,252.3,461.94,239.38,466.45,226.67Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        <motion.path variants={draw}
        custom={15} d="M539.44,258.18h-40c0,5.26,2,8.7,6.84,9.68a20,20,0,0,0,11.77-.52A27.21,27.21,0,0,1,530.28,265h7.81c-4.13,15-19.39,20.84-35.34,17-17.71-4.24-23.27-19.64-20.68-33.62,3.36-18.31,19.25-25.44,35.46-22.64C533.31,228.52,542.39,242.12,539.44,258.18Zm-40.14-9.92h24a12.17,12.17,0,0,0-12-8.94,11.82,11.82,0,0,0-12,8.94Z" transform="translate(-54.53 -52.77)" fill="none" stroke="#128e13" stroke-miterlimit="10" stroke-width="3"/>

        
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