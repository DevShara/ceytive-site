import React from 'react';
import Flickity from "react-flickity-component"
import { motion } from 'framer-motion';

import { FaReact } from "react-icons/fa"
import { SiGatsby, SiNextdotjs, SiNetlify, SiNodedotjs, SiAngular, SiFirebase, SiRedux, SiVercel, SiRemix } from "react-icons/si"

const flickityOptions = {
    initialIndex: 4,
    prevNextButtons: false

}

const TechSlider = () => {
    const container =  {
        visible: i => ({
                opacity: 1,

                transition: {
                  delay:  0.35,
                  duration: 0.5,
                }, 
            }),

        hidden: { opacity: 0 },
      }
    const item=  {
        visible: i => ({
                opacity: 1,
            
                transition: {
                    delay: i * 0.3,
                  },
               
            }),
        hidden: { opacity: 0},
        
      }
    return (
      <div className='container mx-auto mt-24 px-8 '>
                <h1 className='text-white text-2xl font-bold mb-9'>Technologies we are using</h1>

   
       <motion.div
       
       className='overflow-hidden  bg-black  border py-12  rounded-lg'
       initial="hidden"
       whileInView="visible"
       variants={container}
       custom={1}
       >
         <Flickity
        className={'carousel  '} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={true} // default false
        reloadOnUpdate // default false
        static // default false
        

        >
        {/* <img src="https://placeimg.com/640/480/animals" /> */}
  
     
       <motion.div 
       initial="hidden"
       whileInView="visible"
       variants={item}
       custom={1}
       
       ><FaReact className=' text-white  hover:text-gray-400  p-6 text-[150px]' />
       </motion.div>

       <motion.div
        initial="hidden"
        whileInView="visible"
        variants={item}
        custom={1.25}
       >
        <SiGatsby className=' text-white  hover:text-gray-400   p-6 text-[150px]'  /></motion.div>

       <motion.div
        initial="hidden"
        whileInView="visible"
        variants={item}
        custom={1.5}
       >
        <SiNextdotjs className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  />
        </motion.div>

       <motion.div
        initial="hidden"
        whileInView="visible"
        variants={item}
        custom={1.75}
       >
        <SiNetlify className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  />
        </motion.div>

       <motion.div
        initial="hidden"
        whileInView="visible"
        variants={item}
        custom={2}>
        <SiNodedotjs className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  />
        </motion.div>

       <motion.div
        initial="hidden"
        whileInView="visible"
        variants={item}
        custom={2.25}
       >
        <SiAngular className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  />
        </motion.div>

       <motion.div
        initial="hidden"
        whileInView="visible"
        variants={item}
        custom={2.5}
       ><SiFirebase className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></motion.div>

       <motion.div
        initial="hidden"
        whileInView="visible"
        variants={item}
        custom={2.75}
       >
        <SiRedux className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></motion.div>

       <motion.div
         initial="hidden"
         whileInView="visible"
         variants={item}
         custom={3}
       ><SiVercel className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></motion.div>

       <motion.div
        initial="hidden"
        whileInView="visible"
        variants={item}
        custom={3.25}>
        <SiRemix className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></motion.div>

      </Flickity>
       </motion.div>
       </div>
    );
};

export default TechSlider;