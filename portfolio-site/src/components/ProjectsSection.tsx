import React from 'react';
import ProjectsContainer from './ProjectsContainer';
import { Project } from '../types';

type ProjectSectionProps = { title: string; projects: Project[] };

export const ProjectsSection = React.forwardRef<HTMLElement | null, ProjectSectionProps>(function ProjectsSection(
  { title, projects },
  ref
) {
  return (
    <section ref={ref} className="projects-section">
      <article className="my-projects">
        <header>
          <h2>{title}</h2>
        </header>
        <ProjectsContainer projects={projects} />
      </article>
    </section>
  );
});
