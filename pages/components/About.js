import React, { useEffect } from 'react';
import { RiLightbulbFlashLine } from "react-icons/ri";
import { useAnimate, useInView, motion } from "framer-motion"




const About = () => {   
    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
    
    useEffect(() => {
       if (isInView) {
         animate(scope.current, { opacity: 0.5 })
       }
    }, [isInView])
    
    const item =  {
        visible: i => ({
                opacity: 1,
                style: {
                    
                },
                
          
                transition: {
                  delay: i * 0.35,
                  duration: 0.5,
                  
                },
               
            }),
        hidden: { opacity: 0 },
        
        
      }
    return (
        <motion.div
        className='container mx-auto bg-gray-800  p-24 rounded-lg '
        initial="hidden"
        animate="visible"
        variants={item}
        custom={3}
        whileHover={{
            scale: 1.05,
            transition: { duration: 0.25 },
          }}
          whileTap={{ scale: 0.9 }}
        >
           <div className='flex   gap-24  items-center '>
                <div className=' w-3/4'>
                    <motion.h1
                        className=' text-4xl  leading-snug font-bold mb-6 text-white'
                        initial="hidden"
                        animate="visible"
                        variants={item}
                        custom={5}
                        >Do you have a business idea in mind and don't know how to implement?
                    </motion.h1>

                    <motion.h1
                    className='text-4xl  leading-snug font-bold mb-6 text-gray-400'
                    initial="hidden"
                        animate="visible"
                        variants={item}
                        custom={6}
                    >we would love to hear from you and discuss how we can help turn your idea into a reality</motion.h1>
                </div>
                <div className='w-1/4  p-6 border   rounded-3xl'>
                    <RiLightbulbFlashLine className='text-white  mx-auto'   style={{fontSize:'150px'}} />
                </div>
           </div>
            <motion.p 
                className=' text-gray-400 mt-6 text-md text-justify'
                initial="hidden"
                animate="visible"
                variants={item}
                custom={7}
            
                >
            As a web development company, we pride ourselves on our ability to build websites of all types and sizes. Whether you need a simple landing page to promote your business or a powerful stack application to manage complex operations, we have the expertise and experience to deliver exactly what you need.For simple websites such as landing pages or single-page applications, we use lightweight frameworks such as Bootstrap or Foundation, combined with HTML, CSS, and JavaScript to create fast-loading and responsive pages. These websites are optimized for speed and performance, ensuring that your visitors have a smooth and enjoyable browsing experience.
    For more complex projects, we make use of the latest tools and technologies to create powerful full stack applications. Our team of developers are experienced in working with 
    frameworks such as React, Angular, Django and Vue.js, as well as Node.js, Python for server-side development. We also use databases such as MongoDB, MySQL, and PostgreSQL to manage data and ensure that your application runs smoothly.
    <br></br>
    <br></br>
    At our web development company, we believe that the key to success is staying ahead of the curve. We constantly explore new technologies and approaches to ensure that we are always delivering the best possible solutions to our clients. If you have a business idea in mind, we would love to hear from you and discuss how we can help turn your ideas into reality.
            </motion.p>
        </motion.div>
    );
};

export default About;