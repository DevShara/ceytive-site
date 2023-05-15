import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import { useEffect, useState } from 'react';

import { ThemeContext } from '../context';
import { useContext } from "react";
import Hero from '../components/Hero';
import SmoothScroll from '../components/SmoothScroll';
import About from '../components/About';
import TechSlider from '../components/TechSlider';
import Projects from '../components/Projects';
import Contact from '../components/Contact';

const inter = Inter({ subsets: ['latin'] })

import Head from 'next/head'



// export const metadata = {
//   title: 'Empowering your digital vision with quality web solutions',
//   description: 'We are empowering your digital vision with quality web solutions, as a web development company in Sri Lanka, we pride ourselves on our ability to build websites of all types and sizes. '
// }

export default function Home() {
  const [theme, setTheme] = useState('gray');

    useEffect(() => {
      function setColorScheme(scheme) {
        switch(scheme){
          case 'dark':
            setTheme('dark');
            
            break;
          case 'light':
            setTheme('light');
            // Light
            break;
          default:
            // Default
            setTheme('gray');
            break;
        }
      }
      
      function getPreferredColorScheme() {
        if (window.matchMedia) {
          if(window.matchMedia('(prefers-color-scheme: dark)').matches){
            return 'dark';
          } else {
            return 'light';
          }
        }
        return 'gray';
      }
      
      function updateColorScheme(){
          setColorScheme(getPreferredColorScheme());
      }
      
      if(window.matchMedia){
        var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)');
        colorSchemeQuery.addEventListener('change', updateColorScheme);
      }
      
      updateColorScheme()

    }, [])


  function changeTheme(){
    if(theme === 'light'){ 
    setTheme('dark')
    }else{
      setTheme('light')
    }
  }
  return (
    <ThemeContext.Provider value={theme}>
      <Head>
        <title>Ceytive</title>
        <meta name='description' content='We are empowering your digital vision with quality web solutions, as a web development company in Sri Lanka, we pride ourselves on our ability to build websites of all types and sizes.' />
     </Head>

      <Navbar changeTheme={changeTheme} />
      {/* <SmoothScroll > */}
      <Hero />
          
          <About/>
          <TechSlider />

      
          <Projects />

     
          <Contact />
        
    {/* </SmoothScroll> */}

    </ThemeContext.Provider>
  )
}
