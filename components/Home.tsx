import React from 'react';

import Image from 'next/image'
import DownloadCVButton from "@/components/Download";
import Navigation from "@/components/Navigation";

const Home = () => {

  const navItems = [
    'USER INTERFACE',
    'USER EXPERIENCE',
    'PROTOTYPE',
    'WIREFRAME',
    'DESIGN SYSTEM'
  ]

  return (
    <div>
      <header className="min-h-screen flex flex-col items-center">
        <Navigation/>
        <div className="container mx-auto px-4 mt-auto">
          <h1 className="text-center">
            <span className="text-red text-[12px] mr-1 uppercase">mgr</span>
            <span className="text-gray text-[64px] font-extrabold tracking-wider">ALEKSANDRA KLIŃSKA</span>
          </h1>

          <nav className="mb-12">
            <ul className="flex flex-wrap justify-center text-xs text-gray">
              {navItems.map((item, index) => (
                <li key={item}>
                  <span className='px-4'>{item}</span>
                  {index < navItems.length - 1 && (
                    <span className="text-gray-600">|</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full mb-40">
            <Image
              src="/images/ola_1.png"
              alt="Profile"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
        </div>
      </header>
      <div className='font-extrabold text-gray w-4/5 mr-auto ml-14 mb-48'>
        <h1 className='text-6xl font-extrabold text-gray uppercase tracking-[-1px] leading-[64px]'>
          WELCOME TO MY creative space, where i showcase my passion for design and user experience.
        </h1>
        <p className='font-semibold text-gray text-sm tracking-[-0.5px] w-1/2 pb-3'>
          I’m Aleksandra, a user interface and experience designer. The projects featured here are intended to
          demonstrate the depth of my design capabilities and the skills I honed while working with Figma. My path to
          UX/UI began with dedicated training, perseverance and a natural artistic flair. I completed a five-year degree
          in Architecture and Design at the Academy of Fine Arts in Gdansk, which gave me a solid foundation for my
          creative endeavours.
        </p>
        <p className='font-semibold text-gray text-sm tracking-[-0.5px] w-1/2 pb-3'>
          I worked as a UX/UI Designer for 8 months. I worked on several applications, landing pages and a system
          (Websys). I also worked for two years at SIKORA INTERIORS design office in Gdansk as an interior designer. I
          gained a lot of experience in project management, client meetings and teamwork.
        </p>
        <DownloadCVButton/>
      </div>
    </div>
  )
};

export default Home;
