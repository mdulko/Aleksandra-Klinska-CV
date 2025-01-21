import React from 'react';
import Footer from '@/components/Footer';
import { ProjectProvider } from '@/contexts/ProjectContext'
import BackToTopButton from "@/components/BackToTopButton";

type MainLayoutProps = {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => (
  <div className="bg-background text-pureWhite">
    <ProjectProvider>
      {children}
    </ProjectProvider>
    <BackToTopButton />
    <Footer/>
  </div>
);

export default MainLayout;
