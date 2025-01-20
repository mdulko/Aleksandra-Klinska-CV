import React, {useEffect} from 'react';
import Navigation from "@/components/Navigation";
import {useRouter} from "next/router";
import {useProjectContext} from "@/contexts/ProjectContext";
import Image from "next/image";
import { BsArrow90DegUp } from "react-icons/bs";

const ProjectPage = ({ params }: { params: { project: string } }) => {

  console.log(params);

  const router = useRouter()
  const { selectedProject } = useProjectContext()

  useEffect(() => {
    if (!selectedProject) {
      router.push('/')
    }
  }, [selectedProject, router])

  if (!selectedProject) {
    return null
  }


  return (
    <div>
      <header className="flex flex-col items-center">
        <Navigation/>
        <div className="container mx-auto px-4 mt-24">
          <h1 className="text-center">
            <span className="text-gray text-3xl xl:text-[64px] font-extrabold tracking-wider uppercase">{selectedProject.title}</span>
          </h1>
          <p className='text-xs text-gray w-auto xl:w-[520px] mb-24 text-justify mt-4 mx-6 xl:mx-auto'>{selectedProject.description}</p>
        </div>
        <div className='xl:mx-60'>
          <Image
            src={`/Aleksandra-Klinska-CV${selectedProject?.image}` || "/placeholder.svg"}
            alt={selectedProject.title}
            width={1000}
            height={1000}
            style={{ height: 'auto' }}
            className="object-cover"
          />
        </div>
      </header>

      <div className='bg-pureWhite px-4 xl:px-60 py-12 xl:py-48'>
        {selectedProject.images?.map((image, index) => {

          return (
            <Image
              src={`/Aleksandra-Klinska-CV${image}` || "/placeholder.svg"}
              alt={image}
              width={1400}
              height={1000}
              style={{height: 'auto'}}
              className="object-cover pb-12 xl:pb-48 mx-auto"
              key={index + image}
            />
          )
        })}
        <div className='mx-auto uppercase text-red text-center cursor-pointer'
             onClick={() => router.push('/')}
        >
          <BsArrow90DegUp className='inline mr-2'/><span className='text-sm'>Back to projects</span>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
