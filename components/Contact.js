import React from 'react';
import { motion } from 'framer-motion';


const Contact = () => {
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
        <div className='container mx-auto mt-24 px-8 ' >
            <h1 className='text-white text-2xl font-bold mb-6' id='contact'>Let&apos;s Build Something Great Together</h1>
            <motion.div
                className='bg-gray-800 p-16 rounded-xl flex flex-col md:flex-row gap-8 '
                 whileHover={{ opacity:0.9 }}
                    transition={{ type: "spring", stiffness: 100, damping: 25 }}
                    whileTap={{
                        scale: 0.95,                     
                    }}
                    initial="hidden"
                    whileInView="visible"
                    variants={item}
                    custom={0.25}
                >
                <form className='text-white flex flex-col gap-5 md:w-1/3'>
                    <label>
                        First Name *
                        <input type='text' className='block bg-gray-300 text-black rounded-lg mt-2 w-full' required />
                    </label>
                    <label>
                        Email *
                        <input type='email' className='block bg-gray-300 text-black rounded-lg mt-2 w-full' required />
                    </label>
                    <label>
                        Phone
                        <input type='text' className='block bg-gray-300 text-black rounded-lg mt-2 w-full' />
                    </label>
                    <button className='bg-black p-3 rounded-lg  w-fit'>Contact</button>
                </form>
                <div className=' w-2/3 text-gray-400 p-6 hidden md:block'>
                    <h1 className=' text-3xl font-bold mb-4 '>We are empowering your digital vision with quality web solutions</h1>
                    <p>As a web development company, we pride ourselves on our ability to build websites of all types and sizes. Whether you need a simple landing page to promote your business or a powerful stack application to manage complex operations, we have the expertise and experience to deliver exactly what you need.For simple websites such as landing pages or single-page applications, we use lightweight frameworks such as Bootstrap or Foundation, combined with HTML, CSS, and JavaScript to create fast-loading and responsive pages. These websites are optimized for speed and performance, ensuring that your visitors have a smooth and enjoyable browsing experience. For more complex projects, we make use of the latest tools and technologies to create powerful full stack applications. Our team of developers are experienced in working with frameworks such as React, Angular, Django and Vue.js, as well as Node.js, Python for server-side development. We also use databases such as MongoDB, MySQL, and PostgreSQL to manage data and ensure that your application runs smoothly.</p>
                </div>
            </motion.div>
        </div>
    );
};

export default Contact;