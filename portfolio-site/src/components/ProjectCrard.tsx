import { useCallback, useLayoutEffect, useState } from 'react';

import { gsap } from 'gsap';
import { Project } from '../types';

type ProjectCardProps = Project;

export default function ProjectCard({ imgSrc, href, title }: ProjectCardProps) {
  const [element, setElement] = useState<HTMLDivElement | null>(null);

  const ref = useCallback((node: HTMLDivElement) => {
    if (node !== null) {
      setElement(node);
    }
  }, []);

  useLayoutEffect(() => {
    if (element) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: element,
          },
          onComplete: function () {
            element.classList.add('hover');
          },
        })
        .fromTo(
          element.querySelector('a'),

          {
            opacity: 0,
            y: 100,
          },
          {
            opacity: 1,
            y: 0,
            stagger: 0.1,
          }
        );
    }
  }, [element]);
  return (
    <div className="project-card" ref={(node: HTMLDivElement) => ref(node)}>
      <a href={href} target="_blank" rel="noopener">
        <img src={imgSrc} />
        <div className="project-desc">
          <p className="normal-text-large">{title}</p>
        </div>
      </a>
    </div>
  );
}
