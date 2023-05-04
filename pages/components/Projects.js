import React from 'react';

const Projects = () => {
    return (
        <div className='text-white container mx-auto mt-12'>
           <h1>Projects</h1>
           <div className='grid grid-cols-4'>
                <div className='rounded-xl relative project-item'>
                    <div className='absolute left-6 top-6'>
                        <h3 className=''>Web App</h3>
                        <h2 className='font-bold text-xl'>Employee Rewarder</h2>
                    </div>
                    <div className='  w-full absolute bottom-0 py-4 backdrop-blur-sm  p-6 bg-black/30 flex  justify-between  items-center '>
                        {/* <div className=' ml-6  '>
                            <button className=' bg-white text-gray-800 px-4 py-2  font-semibold rounded-full'>Learn more</button>
                        </div> */}
                        <ul className=' flex gap-2 list-inside list-disc tech-stack-list  '>
                            <li className='tech-stack-item'>Next js</li>
                            <li className='tech-stack-item'>Tailwind Css</li>
                            <li className='tech-stack-item'>Sanity</li>
                        </ul>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default Projects;