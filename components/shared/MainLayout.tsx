import React from 'react';
import Footer from '@/components/Footer';
import { ProjectProvider } from '@/contexts/ProjectContext'

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="bg-background">
    <ProjectProvider>
      {children}
    </ProjectProvider>
    <Footer/>
  </div>
);

export default MainLayout;
