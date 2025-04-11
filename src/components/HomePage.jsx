import React from 'react';
import Image from '../assets/gurjit.jpeg';
import BioSection from './BioSection';
import Skills from './Skills';
import { ReactSVG } from '../assets/React';
import { VercelSVG } from '../assets/Vercel';
import { PlusSVG } from '../assets/Plus';

const HomePage = () => {
  return (
    <section id='home' className='flex justify-center mt-10 flex-col items-center m-auto'>
        <img className='rounded-full mb-2' src={Image} width={250} alt="Gurjit" />
        <hr className='bg-gray-800 h-1 w-9 border-0'/>
        <BioSection />
        <Skills />
        <footer className='flex flex-col mt-12 border-t'>
        <p className='text-center'>Developed Using</p>
        <div className='flex items-center justify-center gap-2 mt-11'>
          <ReactSVG />
          <PlusSVG />
          <VercelSVG />
        </div>
        </footer>
    </section>
  )
}

export default HomePage