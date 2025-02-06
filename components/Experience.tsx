import React, {useState} from 'react';
import Image from "next/image";
import { BsArrow90DegRight } from "react-icons/bs";
import {useRouter} from "next/router";
import {useProjectContext} from "@/contexts/ProjectContext";
import Link from "next/link";

interface Project {
  title: string
  description: string
  image: string
  half?: boolean,
  images?: string[],
  size?: string,
  links?: { display: string; link: string; }[]
}

const Experience = () => {

  const navItems = [
    'COMMERCIAL PROJECTS'
  ]

  const projects = [
    {
      image: '/internistudio.png',
      title: 'Interni Studio',
      description: 'Interni Studio focuses on selling ready-made interior designs along with a curated package of furniture lists. I made an attempt to create an interior design store by analysing user needs.',
      link: 'internistudio.pl',
      images: ['/internistudio_1.png', '/internistudio_2.png', "/internistudio_3.png", "/internistudio_4.png"],
      moreInformation: 'Private commission'
    },
    {
      image: '/remedycine.png',
      title: 'REMEDYCINE',
      description: 'Remedycine is a preventive system. It is an app that allows not only the storage of test results, but also their sharing with relatives and the doctor during a medical visit. The user can analyse changes in his or her health with graphs showing his or her condition. ',
      link: 'remedycine.org',
      images: ['/remedycine_1.png', '/remedycine_2.png', '/remedycine_3.png', '/remedycine_4.png', '/remedycine_5.png'],
      size: '56px',
      links: [
        {
          display: 'remedycine.org',
          link: 'https://www.figma.com/proto/iyxz5BQZ9ls9rkpWmMEJV2/REMEDYCINE?node-id=276-7293&t=i8LBtmdqo8xD0ME9-1',
        }
      ],
      commissionBy: 'Kacper Raubo'
    },
    {
      image: '/websys.png',
      title: 'WEBSYS',
      description: 'Websys is Web Operating System, which gives you access to your own Web desktop. You can add apps to it, place folders and files from Hard Drive and many more. Add selected applications from the library or your own files from the Hard Drive cloud. Run integrated applications without having to log in or create an account for them.',
      link: 'websysystem.com',
      half: true,
      images: ['/websys_1.png', '/websys_2.png', '/websys_3.png', '/websys_4.png'],
      links: [
        {
          display: 'websys.app',
          link: 'https://websys.app/',
        }
      ],
      commissionBy: 'Kacper Raubo'
    },
    {
      image: '/calendar.png',
      title: 'calendar card',
      description: 'The app allows you to create different calendars, share them with your team and family and let them book time. You can create public or private days.',
      link: 'calendar-cards.org',
      images: ['/calendar_1.png', "/calendar_2.png"],
      links: [
        {
          display: 'calendar-cards.org',
          link: 'https://www.figma.com/proto/KmL9DJwRRgcRNiD5DsLUfw/CALENDAR-CARDS?node-id=4-4&t=bh6h5YJeIdIP1iC0-1',
        }
      ],
      commissionBy: 'Kacper Raubo'
    },
    {
      image: '/notes.png',
      title: 'BYTESPACE, NOTEBOARD',
      description: 'A suite of two applications: a note-taking board and a file storage area.',
      link: '',
      images: ['/notes_1.png', "/notes_2.png", "/notes_3.png"],
      size: '60px',
      links: [
        {
          display: 'byte-space.org',
          link: 'https://www.figma.com/proto/LYPGQNfn5pzfWVYlzE1QZ3/ARTBOARD%2C-NOTEBOARD%2C-BYTESPACE?node-id=4-4&t=FXAMoIt91BtUpVSV-1',
        },
        {
          display: 'note-board.org',
          link: 'https://www.figma.com/proto/LYPGQNfn5pzfWVYlzE1QZ3/ARTBOARD%2C-NOTEBOARD%2C-BYTESPACE?node-id=4-4&t=FXAMoIt91BtUpVSV-1',
        },
      ],
      commissionBy: 'Kacper Raubo'
    },
    {
      image: '/supercivilian.png',
      title: 'supercivilian',
      description: 'An application with a database of all shelters in Poland and the additional possibility of creating your own evacuation plans. The user can create an evacuation plan, assign tasks to participants, add notes.',
      half: true,
      images: ['/supercivilian_1.png', "/supercivilian_2.png"],
      links: [
        {
          display: 'In progress',
          link: 'https://www.figma.com/design/D1qxRP1pySrZNaS69hF09p/SUPERCIVILIAN?node-id=11-2&t=zdRH1ND6FxvrxycZ-1',
        }
      ],
      commissionBy: 'Kacper Raubo'
    },
    {
      image: '/hypertrike.png',
      title: 'hypertrike',
      description: 'Site dedicated to the “Hypertrike” tricycle product.',
      images: ['/hypertrike_1.png'],
      size: '60px',
      commissionBy: 'Kacper Raubo'
    },
    {
      image: '/storme.png',
      title: 'stor.me',
      description: 'StorMe. blurs the lines between social network and news source. I made an attempt to create a social network enriched with the ability to add not only short posts, but also long articles.',
      images: ['/storme_1.png', '/storme.gif', '/storme_2.png'],
    },
    {
      image: '/nike.png',
      title: 'nike',
      description: 'Analysing the desktop version of the Nike store inspired me to propose a new, refreshed mobile application.',
      images: ['/nike_1.png'],
      half: true
    },
    {
      image: '/dice.png',
      title: 'dice game “1000”',
      description: 'At the request of family and friends, I created a mobile app that can be used while playing dices. It includes score recording, summing and ranking in one place. ',
      images: ['/dice_1.png'],
    },
  ]

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const router = useRouter()
  const { setSelectedProject } = useProjectContext()

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project)
    router.push(`/${encodeURIComponent(project.title.toLowerCase())}`)
  }


  return (
    <div id='portfolio' className='flex flex-col items-center'>
      <h1 className='xl:text-6xl text-3xl text-gray font-extrabold uppercase tracking-[-1px] leading-[32px] xl:leading-[86px]'>Experience</h1>
      <ul className="flex flex-wrap justify-center text-xs text-gray uppercase mb-12">
        {navItems.map((item, index) => (
          <li key={item}>
            <span className='px-4'>{item}</span>
            {index < navItems.length - 1 && (
              <span className="text-gray-600">|</span>
            )}
          </li>
        ))}
      </ul>
      <div>
        {projects.map((item, index) => (
          <div key={index} className='grid grid-cols-12 mx-6 xl:mx-0 xl:mr-14'>
            <div className={`col-span-12 ${item.half ? 'xl:col-span-5' : 'xl:col-span-9'}`}>
              <Image
                src={`/Aleksandra-Klinska-CV${item.image}`}
                alt={item.title}
                width={10000}
                height={10000}
                style={{position: 'relative', width: '100%', height: '100%'}}
                className="object-cover relative block"
              />
            </div>
            <div className={`col-span-12 ${item.half ? 'xl:col-span-4' : 'xl:col-span-3'} break-words mb-16 xl:mb-32`}>
              <h1
                className={`text-3xl ${item.size ? `xl:text-[56px]` : 'xl:text-[64px]'} 
                 text-gray font-extrabold uppercase tracking-[-1px] leading-[36px] 
                 xl:leading-[64px] ${hoveredIndex === index ? 'text-red' : ''}`}
              >
                {item.title}
              </h1>
              <p className='text-xs text-gray xl:ml-1'>{item.description}</p>
              {item.links ? item.links.map((link, index) => (
                <p key={index} className='leading-[14px]'>
                  <Link
                    href={link.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='text-gray text-xs underline xl:ml-1 leading-[4px]'>
                    {link.display}
                  </Link>
                </p>
                  )) :
              <p className='text-brown text-xs underline xl:ml-1'>In progress</p>
              }
              <div className=''>
                <BsArrow90DegRight
                  className='text-red float-right cursor-pointer'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleProjectClick(item)}
                />
              </div>
              {item.commissionBy &&
                <div className='text-brown text-[12px] font-semibold pt-6 xl:ml-1'>
                    Commissioned by <span className='text-gray'>{item.commissionBy}</span>
                </div>
              }
              {item.moreInformation &&
                <div className='text-[12px] font-semibold text-gray pt-6 xl:ml-1'>
                  {item.moreInformation}
                </div>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
