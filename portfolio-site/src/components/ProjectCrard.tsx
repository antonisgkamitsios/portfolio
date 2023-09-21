import { Project } from '../types';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

type ProjectCardProps = Project;

export default function ProjectCard({ imgSrc, href, title }: ProjectCardProps) {
  const ref = useScrollTrigger({
    from: { opacity: 0, y: 100 },
    to: { opacity: 1, y: 0, stagger: 0.1, duration: 1 },
    onComplete: (el) => {
      el.classList.add('hover');
    },
  });

  return (
    <div className="project-card" ref={(node: HTMLDivElement) => ref(node)}>
      <a href={href} target="_blank" rel="noopener">
        <img src={imgSrc} alt={`Screenshot of the project ${title}`} />
        <div className="project-desc">
          <p className="normal-text-large">{title}</p>
        </div>
      </a>
    </div>
  );
}
