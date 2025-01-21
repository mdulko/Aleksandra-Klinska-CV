import React, {useState} from 'react';

import Image from 'next/image'
import DownloadCVButton from "@/components/Download";
import Navigation from "@/components/Navigation";

const Home = () => {

  // const navItems = [
  //   'USER INTERFACE',
  //   'USER EXPERIENCE',
  //   'PROTOTYPE',
  //   'WIREFRAME',
  //   'DESIGN SYSTEM'
  // ]

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [activeSection, setActiveSection] = useState("home")


  const navItems = [
    {
      label: 'ABOUT',
      number: '01',
      href: '/',
    },
    {
      label: 'PORTFOLIO',
      number: '02',
      href: '#portfolio',
    },
    {
      label: 'CONTACT',
      number: '03',
      href: '#contact',
    },
  ]

  return (
    <div id="about">
      <header className="xl:min-h-screen flex flex-col items-center">
        <Navigation navItems={navItems} onSectionChange={setActiveSection}/>
        <div className="mx-auto mt-24 xl:mt-auto">
          <h1 className="text-center">
            <span className="text-red text-[12px] mr-1 uppercase">mgr</span>
            <span className="text-gray text-[26px] xl:text-[64px] font-extrabold tracking-wider">ALEKSANDRA KLIŃSKA</span>
          </h1>

          <nav className="mb-12">
            {/*<ul className="flex flex-wrap justify-center text-xs text-gray">*/}
            {/*  {navItems.map((item, index) => (*/}
            {/*    <li key={item}>*/}
            {/*      <span className='px-4 xl:px-4'>{item}</span>*/}
            {/*      {index < navItems.length - 1 && (*/}
            {/*        <span className="text-gray-600">|</span>*/}
            {/*      )}*/}
            {/*    </li>*/}
            {/*  ))}*/}
            {/*</ul>*/}
            <div className="max-w-4xl mx-auto">
              {/* Mobile Layout */}
              <div className="md:hidden space-y-2 text-xs text-gray">
                <div className="flex justify-center items-center space-x-2">
                  <span>USER INTERFACE</span>
                  <span>|</span>
                  <span>USER EXPERIENCE</span>
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <span>PROTOTYPE</span>
                  <span>|</span>
                  <span>WIREFRAME</span>
                  <span>|</span>
                  <span>DESIGN SYSTEM</span>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden md:flex justify-center items-center space-x-2 text-xs text-gray">
                <span>USER INTERFACE</span>
                <span>|</span>
                <span>USER EXPERIENCE</span>
                <span>|</span>
                <span>PROTOTYPE</span>
                <span>|</span>
                <span>WIREFRAME</span>
                <span>|</span>
                <span>DESIGN SYSTEM</span>
              </div>
            </div>
          </nav>

          <div className="relative w-64 h-64 mx-auto overflow-hidden rounded-full mb-16 xl:mb-40">
            <Image
              src="/Aleksandra-Klinska-CV/ola_1.png"
              alt="Profile"
              fill
              className="object-cover grayscale"
              priority
            />
          </div>
        </div>
      </header>
      <div className='text-gray mx-6 xl:mr-14 xl:ml-14 mb-48'>
        <h1
          className='xl:text-[76px] text-3xl font-extrabold text-gray uppercase tracking-[-1px] xl:leading-[76px] pb-3 xl:pb-0'>
          WELCOME TO MY creative space, where i showcase my passion for design and user experience.
        </h1>
        <p className='xl:font-semibold text-gray text-sm tracking-[-0.5px] xl:w-1/2 pb-3'>
          I’m Aleksandra, a user interface and experience designer. The projects featured here showcase the depth of
          my design capabilities and the skills I’ve honed through my work with Figma. My journey into UX/UI design
          began with dedicated training, perseverance, and a natural artistic flair. I hold a five-year degree in
          Architecture and Design from the Academy of Fine Arts in Gdansk, which provided a strong foundation for
          my creative endeavors.
        </p>
        <p className='xl:font-semibold text-gray text-sm tracking-[-0.5px] xl:w-1/2 pb-3'>
          I have 8 months of experience as a UX/UI Designer, during which I worked on several applications,
          landing pages, and a system called Websys. Additionally, I spent two years at SIKORA INTERIORS
          design office in Gdansk as an interior designer. There, I gained valuable experience in project
          management, client collaboration, and teamwork.
        </p>
        <DownloadCVButton/>
      </div>
    </div>
  )
};

export default Home;
