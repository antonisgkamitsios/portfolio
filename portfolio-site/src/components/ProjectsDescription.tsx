// import { useCallback, useLayoutEffect, useState } from 'react';

// import { gsap } from 'gsap';
import { useScrollTrigger } from '../hooks/useScrollTrigger';

type ProjectsDescriptionProps = {
  challenges: string;
  role: string;
  tools: string;
};

export default function ProjectsDescription({ challenges, role, tools }: ProjectsDescriptionProps) {
  const ref = useScrollTrigger({
    from: {
      opacity: 0,
      x: -100,
    },
    to: {
      opacity: 1,
      x: 0,
      stagger: 0.1,
      duration: 1,
    },
  });

  return (
    <section ref={(node) => ref(node)} className="projects-description">
      <h3>Challenges</h3>
      <p>{challenges}</p>
      <h3>My Role</h3>
      <p>{role}</p>
      <h3>Tools Used</h3>
      <p>{tools}</p>
    </section>
  );
}
