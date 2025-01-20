import React, { createContext, useState, useContext, ReactNode } from 'react'

interface Project {
  title: string
  description: string
  image: string
  half?: boolean,
  images?: string[],
}

interface ProjectContextType {
  selectedProject: Project | null
  setSelectedProject: (project: Project | null) => void
}

const ProjectContext = createContext<ProjectContextType | undefined>(undefined)

export function ProjectProvider({ children }: { children: ReactNode }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  return (
    <ProjectContext.Provider value={{ selectedProject, setSelectedProject }}>
      {children}
    </ProjectContext.Provider>
  )
}

export function useProjectContext() {
  const context = useContext(ProjectContext)
  if (context === undefined) {
    throw new Error('useProjectContext must be used within a ProjectProvider')
  }
  return context
}

