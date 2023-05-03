import React from 'react';
import Flickity from "react-flickity-component"

import { FaReact } from "react-icons/fa"
import { SiGatsby, SiNextdotjs, SiNetlify, SiNodedotjs, SiAngular, SiFirebase, SiRedux, SiVercel, SiRemix } from "react-icons/si"

const flickityOptions = {
    initialIndex: 4,
    prevNextButtons: false

}

const TechSlider = () => {
    return (

       <div className='container mx-auto overflow-hidden mt-12 bg-black  px-24'>
        <h1 className='text-white text-2xl font-bold'>Technologies we are using</h1>
         <Flickity
        className={'carousel  '} // default ''
        elementType={'div'} // default 'div'
        options={flickityOptions} // takes flickity options {}
        disableImagesLoaded={true} // default false
        reloadOnUpdate // default false
        static // default false

        >
        {/* <img src="https://placeimg.com/640/480/animals" /> */}
  
     
       <div ><FaReact className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]' /></div>
       <div><SiGatsby className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></div>
       <div><SiNextdotjs className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></div>
       <div><SiNetlify className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></div>
       <div><SiNodedotjs className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></div>
       <div><SiAngular className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></div>
       <div><SiFirebase className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></div>
       <div><SiRedux className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></div>
       <div><SiVercel className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></div>
       <div><SiRemix className=' text-white  hover:text-gray-400 transition-all  p-6 text-[150px]'  /></div>
  
      
      </Flickity>
       </div>
    );
};

export default TechSlider;