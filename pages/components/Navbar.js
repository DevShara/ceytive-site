'use client'
import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

import { Link, animateScroll as scroll } from "react-scroll";

import { MdOutlineLightMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";

import { useContext } from 'react';
import { ThemeContext } from '../context';

import { motion, useScroll, useSpring, useWillChange } from "framer-motion";


const navigation = [
  { name: 'About', href: 'about', current: false },
  { name: 'Works', href: 'works', current: false },
  { name: 'Contact', href: 'contact', current: false },
]

function classNames(...classes) {

  return classes.filter(Boolean).join(' ')
}

export default function Navbar({changeTheme}) {
  const theme = useContext(ThemeContext);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  //Determines whether the navbar bottom border need or not
  const [scrollProgress, setScrollProgress] = useState(false)

  const { scrollY } = useScroll() 

  useEffect(() => {
    scrollY.onChange(() => {
      setScrollProgress(scrollY.current)
    })
  }, []);

  
  return (
    <div className={ classNames("sticky top-0 z-50", `${theme == "light" ?  "bg-gray-50" : " bg-black "}  `) }> 
    <Disclosure as="nav" >
      {({ open }) => (
        <>
          <div
            className={`mx-auto  px-2 sm:px-6 lg:px-12 shadow-xl transition-all  border-black border-b  ${theme== "light" ?  " bg-gray-50" : " bg-black "} ${scrollProgress > 100 ? 'border-b-gray-500  ' : null} `}
           
            >
            <div className="relative container mx-auto  flex h-16 px-12 items-center justify-between ">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch  sm:justify-between">
                <div className="flex flex-shrink-0 items-center">
                <Link
                to='about'
                spy={true}
                smooth={true}
                offset={-70}
                duration={1000}
                delay={100}
                className={`font-bold text-xl cursor-pointer  ${theme == "light" ? ' text-gray-800' : 'text-gray-100'}`}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="125" viewBox="0 0 154.688 40.147" fill="#128e13">
                  <g transform="translate(-206.981 -81.926)">
                  <path class="a" d="M127.568,351.444h-6.814c-3.226-4.417-6.331-5.652-10.479-4.332a8.337,8.337,0,0,0-5.387,8.377c.159,3.721,2.279,6.931,5.6,7.776,3.266.832,7.221.785,10.256-4.469h6.811c-.85,6.764-7.571,11.285-15.848,10.957a14.22,14.22,0,0,1-13.623-14.011c-.2-8.94,5.8-14.3,12.251-15.059C119.3,339.625,126.284,344.061,127.568,351.444Z" transform="translate(108.904 -256.576)"/>
                  <path class="a" d="M231.146,358.044h5.566c.054.645.155,1.322.159,2,.02,2.862-.038,5.725.027,8.586.064,2.825.97,4.2,3.022,4.873a4.009,4.009,0,0,0,5.172-2.515,11.338,11.338,0,0,0,.436-3.157c.054-3.206.02-6.415.02-9.755h6.059a15.285,15.285,0,0,1,.154,1.567c.012,6.154.1,12.309-.042,18.46a15.407,15.407,0,0,1-1.156,5.375c-1.406,3.429-4.481,4.8-7.887,5.026-3.971.266-7.973.062-12.142.062.382-1.191.627-2.226,1.043-3.186a3.21,3.21,0,0,1,3.164-2.123c2,.018,4.007.009,6.01-.013,3.736-.041,5.3-2.086,4.511-5.956a16.83,16.83,0,0,1-3.288,1.839,8.116,8.116,0,0,1-8.863-2.715,7.9,7.9,0,0,1-2.139-5.041c-.109-4.218-.071-8.439-.079-12.659A2.336,2.336,0,0,1,231.146,358.044Z" transform="translate(33.356 -266.567)"/><path class="a" d="M194.4,369.4H178.39a3.244,3.244,0,0,0,1.782,3.306,5.335,5.335,0,0,0,5.334.318c1.893-1.052,3.8-1,5.782-1.007.705,0,1.41,0,2.156,0-1.18,5.12-7.118,8.148-13.382,6.683-6.6-1.543-8.986-7.016-8.409-12.2.74-6.643,6.157-10.606,13.2-9.764C189.954,357.345,194.862,361.213,194.4,369.4Zm-15.9-3.865h9.234a4.608,4.608,0,0,0-4.615-3.454A4.561,4.561,0,0,0,178.494,365.536Z" transform="translate(66.988 -265.756)"/><path class="a" d="M427.851,369.368H412.365c-.018,2.034.76,3.364,2.648,3.744a7.724,7.724,0,0,0,4.549-.2,10.474,10.474,0,0,1,4.745-.894c.992-.006,1.984,0,3.023,0-1.6,5.781-7.5,8.059-13.667,6.585-6.85-1.639-9-7.594-8-13,1.3-7.08,7.445-9.84,13.716-8.755C425.479,357.9,428.992,363.157,427.851,369.368Zm-15.524-3.835h9.284a4.7,4.7,0,0,0-4.652-3.457A4.57,4.57,0,0,0,412.327,365.532Z" transform="translate(-66.396 -265.751)"/><path class="a" d="M288.228,341.99h6v6.693h10.143v5.839h-9.919a32.048,32.048,0,0,0,.153,8.524,2.241,2.241,0,0,0,2.34,1.827,2.355,2.355,0,0,0,2.531-1.585c.214-.6.333-1.234.519-1.947h5.514a7.249,7.249,0,0,1-4.445,8.676,12.663,12.663,0,0,1-7.382.162,6.947,6.947,0,0,1-5.315-6.733c-.141-5.075-.107-10.156-.138-15.234C288.217,346.217,288.228,344.221,288.228,341.99Z" transform="translate(0.453 -257.41)"/><path class="a" d="M370,357.942h6.462l-7.538,21.069h-7.9l-7.538-21.016h6.662l4.622,14.62.507.033C367.054,367.85,368.254,362.855,370,357.942Z" transform="translate(-36.771 -266.509)"/><path class="a" d="M335.414,357.983h5.61v21.063H335.61C335.077,377.63,334.892,361.276,335.414,357.983Z" transform="translate(-26.285 -266.532)"/><path class="a" d="M336.948,342.463a3.223,3.223,0,0,1-3.38-3.316,3.4,3.4,0,0,1,3.444-3.331,3.221,3.221,0,0,1,3.205,3.287A3.082,3.082,0,0,1,336.948,342.463Z" transform="translate(-25.41 -253.888)"/>
                  </g>
                  </svg>
                </Link>
                
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1000}
                        delay={100}
                        className={classNames(
                          theme == "light" ? ' text-gray-800' : 'text-gray-100',
                          item.current ? 'underline ' : 'over:underline   underline-offset-4 ',
                          'rounded-md px-3 py-2 text-md font-medium cursor-pointer'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>

              </div>
             

              <div className="flex items-center justify-center ml-6">
  
              <label htmlFor="toggleB" className="flex items-center cursor-pointer">
              
                <div className="relative">
              
                  <input type="checkbox" id="toggleB" className="sr-only" onChange={() => {
                    changeTheme()
                  }} />

                  <div className="block bg-gray-500 w-14 h-8 rounded-full"></div>
                  <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full flex justify-center  items-center transition text-gray-900">{theme == 'light' ? <MdOutlineLightMode /> : <CiDark /> }</div>
                </div>

             
              </label>

            </div>
        
             

            </div>
            
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className={classNames(
              theme == "light" ? 'text-red-800 bg-gray-100' : 'text-gray-100 bg-gray-800',
              'space-y-1 px-2 pt-2 pb-3 border-b-gray-500 border-b'
              
              )}
              
              >


              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-900 hover:bg-gray-900 hover:text-white',
                    theme == "light" ? ' text-gray-800' : 'text-gray-100',
                    'block rounded-md px-3 py-2 text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
              
            </div>


          </Disclosure.Panel>

        </>
      )}
    </Disclosure>
    <motion.div
    className="progress-bar"
    whileHover={{ opacity: 0.1 }}
    // will-change: auto until hover starts/ends
    style={{ scaleX }}
    /> 

    </div>
  )
}