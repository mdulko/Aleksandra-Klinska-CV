import React, {useState} from 'react';
import Image from "next/image";
import { BsArrow90DegRight } from "react-icons/bs";
import {useRouter} from "next/router";
import {useProjectContext} from "@/contexts/ProjectContext";

interface Project {
  title: string
  description: string
  image: string
  half?: boolean
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
    },
    {
      image: '/remedycine.png',
      title: 'REMEDYCINE',
      description: 'Remedycine is a preventive system. It is an app that allows not only the storage of test results, but also their sharing with relatives and the doctor during a medical visit. The user can analyse changes in his or her health with graphs showing his or her condition. ',
      link: 'remedycine.org',
      images: ['/remedycine_1.png', '/remedycine_2.png', '/remedycine_3.png', '/remedycine_4.png', '/remedycine_5.png'],
    },
    {
      image: '/websys.png',
      title: 'WEBSYS',
      description: 'Websys is Web Operating System, which gives you access to your own Web desktop. You can add apps to it, place folders and files from Hard Drive and many more. Add selected applications from the library or your own files from the Hard Drive cloud. Run integrated applications without having to log in or create an account for them.',
      link: 'websysystem.com',
      half: true,
      images: ['/websys_1.png', '/websys_2.png', '/websys_3.png', '/websys_4.png'],
    },
    {
      image: '/calendar.png',
      title: 'calendar card',
      description: 'The app allows you to create different calendars, share them with your team and family and let them book time. You can create public or private days.',
      link: 'calendar-cards.org',
      images: ['/calendar_1.png', "/calendar_2.png"]
    },
    {
      image: '/notes.png',
      title: 'BYTESPACE, NOTEBOARD',
      description: 'A suite of three applications: a note-taking board, a drawing board and a file storage area.',
      link: '',
      images: ['/notes_1.png', "/notes_2.png", "/notes_3.png"]
    },
    {
      image: '/supercivilian.png',
      title: 'supercivilian',
      description: 'An application with a database of all shelters in Poland and the additional possibility of creating your own evacuation plans. The user can create an evacuation plan, assign tasks to participants, add notes.',
      half: true,
      images: ['/supercivilian_1.png', "/supercivilian_2.png"]
    },
    {
      image: '/hypertrike.png',
      title: 'hypertrike',
      description: 'Remedycine is a preventive system. It is an app that allows not only the storage of test results, but also their sharing with relatives and the doctor during a medical visit. The user can analyse changes in his or her health with graphs showing his or her condition. ',
      images: ['/hypertrike_1.png']
    },
    {
      image: '/storme.png',
      title: 'stor.me',
      description: 'StorMe. blurs the lines between social network and news source. I made an attempt to create a social network enriched with the ability to add not only short posts, but also long articles.',
    },
    {
      image: '/nike.png',
      title: 'nike',
      description: 'Analysing the desktop version of the Nike store inspired me to propose a new, refreshed mobile application.',
      half: true
    },
    {
      image: '/dice.png',
      title: 'dice game “1000”',
      description: 'At the request of family and friends, I created a mobile app that can be used while playing dices. It includes score recording, summing and ranking in one place. ',
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
    <div className='flex flex-col items-center'>
      <h1 className='xl:text-6xl text-3xl text-gray font-extrabold uppercase tracking-[-1px] leading-[86px]'>Experience</h1>
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
          <div key={index} className='grid grid-cols-12 xl:mr-14 mx-6'>
            <div className={`col-span-12 ${item.half ? 'xl:col-span-4' : 'xl:col-span-8'}`}>
              <Image
                src={`/Aleksandra-Klinska-CV${item.image}`}
                alt={item.title}
                width={10000}
                height={10000}
                style={{position: 'relative', width: '100%', height: '100%'}}
                className="object-cover relative block"
              />
            </div>
            <div className='col-span-12 xl:col-span-4 break-words mb-16 xl:mb-32'>
              <h1
                className={`text-3xl xl:text-6xl text-gray font-extrabold uppercase tracking-[-1px]
                 xl:leading-[86px] leading-[64px] ${hoveredIndex === index ? 'text-red' : ''}`}
              >
                {item.title}
              </h1>
              <p className='text-xs text-gray'>{item.description}
              </p>
              <div className=''>
                <BsArrow90DegRight
                  className='text-red float-right cursor-pointer'
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => handleProjectClick(item)}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
