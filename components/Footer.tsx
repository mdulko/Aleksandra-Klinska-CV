import React from 'react';
import DownloadCVButton from "@/components/Download";
import LinkedInButton from "@/components/Linkedin";

const Footer = () => {

  const navItems = [
    'klinska.aleksandra.12@gmail.com',
    '798 742 945',
  ]

  return (
    <div id='contact' className='h-screen xl:min-h-screen flex flex-col items-center justify-center'>
      <h1 className='text-4xl xl:text-6xl text-gray font-extrabold uppercase tracking-[-1px] leading-[86px]'>Let&apos;s Talk</h1>
      <ul className="flex flex-wrap justify-center text-xs text-gray uppercase mb-12 mt-6">
        {navItems.map((item, index) => (
          <li key={item}>
            <span className='px-4'>{item}</span>
            {index < navItems.length - 1 && (
              <span className="text-gray-600">|</span>
            )}
          </li>
        ))}
      </ul>
      <div className='flex gap-6'>
        <DownloadCVButton />
        <LinkedInButton />
      </div>
    </div>
  );
};

export default Footer;
