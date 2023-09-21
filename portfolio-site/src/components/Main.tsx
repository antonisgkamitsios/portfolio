import React from 'react';
import { ProjectsSection } from './ProjectsSection';

import { projects, reactProjects } from '../data';

export const Main = React.forwardRef<HTMLElement | null>(function Main(_props, ref) {
  return (
    <main>
      <ProjectsSection ref={ref} title="Recent Projects" projects={projects} />
      <ProjectsSection title="React Projects" projects={reactProjects} />
    </main>
  );
});
