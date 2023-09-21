import React from 'react';
import { ProjectsSection } from './ProjectsSection';

import { projects, circularEconomyProjects, diadymaProjects, foodWasteProjects, cemenergyProjects } from '../data';
import ProjectsDescription from './ProjectsDescription';

export const Main = React.forwardRef<HTMLElement | null>(function Main(_props, ref) {
  return (
    <main>
      <ProjectsSection
        title="Circular Economy Apps"
        projects={circularEconomyProjects}
        ref={ref}
        description={
          <ProjectsDescription
            challenges="Developing apps that are user friendly and efficient. Giving a more personalized experience to the users with the ability to create accounts to save their preferences."
            role="Web developer, QA tester"
            tools="React, Leaflet, Git"
          />
        }
      />
      <ProjectsSection
        title="DIADYMA Apps"
        projects={diadymaProjects}
        description={
          <ProjectsDescription
            challenges="Developing apps that will help the procedure of recycling with a rewards system. Creating an inventory management system that will be easy to use by the employees of DIADYMA "
            role="Web developer, QA tester"
            tools="React, Django, git"
          />
        }
      />
      <ProjectsSection
        title="Save Food App"
        projects={foodWasteProjects}
        description={
          <ProjectsDescription
            challenges="Create a reservation system that will be used by sellers and organizations"
            role="Web developer, QA tester"
            tools="React, Typescript, Django, git"
          />
        }
      />
      <ProjectsSection
        title="Cemenergy App"
        projects={cemenergyProjects}
        description={
          <ProjectsDescription
            challenges="Create a dashboard that contains important information and at the same time displays it in a user-friendly way"
            role="Web developer, QA tester"
            tools="React, Typescript, Plotly, Django, git"
          />
        }
      />
      <ProjectsSection
        title="Corporate Sites"
        projects={projects}
        description={
          <ProjectsDescription
            challenges="Developing a site that corresponds to the design, is accessible to all users, all browsers and all devices"
            role="Front-end developer, Cross Browser tester"
            tools="HTML, CSS, SASS, Javascript, Git, Figma"
          />
        }
      />
    </main>
  );
});
