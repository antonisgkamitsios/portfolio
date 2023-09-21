import { Project } from '../types';
import ProjectCard from './ProjectCrard';

export default function ProjectsContainer({ projects }: { projects: Project[] }) {
  return (
    <div className="projects-container">
      {projects.map((project) => (
        <ProjectCard key={project.title} {...project} />
      ))}
    </div>
  );
}
