import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
    return (
        <div className='text-white container mx-auto mt-24'>
           <h1 className='text-white text-2xl font-bold mb-9'>Projects We’ve Built</h1>
           <div className='grid grid-cols-4 mt-6 gap-12'>
                <motion.div
                    className='rounded-xl relative project-item'
                    whileHover={{ scale: 1.05,  opacity:0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    whileTap={{
                        scale: 0.85,                     
                    }}
                >
                    <div className='absolute left-6 top-6'>
                        <h3 className=''>Web App</h3>
                        <h2 className='font-bold text-xl'>Employee Rewarder</h2>
                    </div>
                    <div className='  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl  px-6 bg-black/40 flex flex-col  gap-3   '>
                       
                        <ul className='tech-stack-list  '>
                            <li className='tech-stack-item'>Next js</li>
                            <li className='tech-stack-item'>Tailwind Css</li>
                            <li className='tech-stack-item'>Sanity</li>
                        </ul>
                        <div className=' '>
                            <button className=' bg-white text-gray-800 px-4 py-2  font-semibold rounded-full'>Learn more</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='rounded-xl relative project-item'
                    whileHover={{ scale: 1.05,  opacity:0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    whileTap={{
                        scale: 0.85,
                       
                    }}
                >
                    <div className='absolute left-6 top-6'>
                        <h3 className=''>Web App</h3>
                        <h2 className='font-bold text-xl'>Employee Rewarder</h2>
                    </div>
                    <div className='  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl  px-6 bg-black/40 flex flex-col  gap-3   '>
                       
                        <ul className='tech-stack-list  '>
                            <li className='tech-stack-item'>Next js</li>
                            <li className='tech-stack-item'>Tailwind Css</li>
                            <li className='tech-stack-item'>Sanity</li>
                        </ul>
                        <div className=' '>
                            <button className=' bg-white text-gray-800 px-4 py-2  font-semibold rounded-full'>Learn more</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='rounded-xl relative project-item'
                    whileHover={{ scale: 1.05,  opacity:0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    whileTap={{
                        scale: 0.85,
                       
                    }}
                >
                    <div className='absolute left-6 top-6'>
                        <h3 className=''>Web App</h3>
                        <h2 className='font-bold text-xl'>Employee Rewarder</h2>
                    </div>
                    <div className='  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl px-6 bg-black/40 flex flex-col  gap-3   '>
                       
                        <ul className='tech-stack-list  '>
                            <li className='tech-stack-item'>Next js</li>
                            <li className='tech-stack-item'>Tailwind Css</li>
                            <li className='tech-stack-item'>Sanity</li>
                        </ul>
                        <div className=' '>
                            <button className=' bg-white text-gray-800 px-4 py-2  font-semibold rounded-full'>Learn more</button>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    className='rounded-xl relative project-item'
                    whileHover={{ scale: 1.05,  opacity:0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    whileTap={{
                        scale: 0.85,
                       
                    }}
                >
                    <div className='absolute left-6 top-6'>
                        <h3 className=''>Web App</h3>
                        <h2 className='font-bold text-xl'>Employee Rewarder</h2>
                    </div>
                    <div className='  w-full absolute bottom-0 py-4 backdrop-blur-sm rounded-b-xl  px-6 bg-black/40 flex flex-col  gap-3   '>
                       
                        <ul className='tech-stack-list  '>
                            <li className='tech-stack-item'>Next js</li>
                            <li className='tech-stack-item'>Tailwind Css</li>
                            <li className='tech-stack-item'>Sanity</li>
                        </ul>
                        <div className=' '>
                            <button className=' bg-white text-gray-800 px-4 py-2  font-semibold rounded-full'>Learn more</button>
                        </div>
                    </div>
                </motion.div>
           </div>
        </div>
    );
};

export default Projects;