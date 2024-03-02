import React, { useContext, useRef } from 'react';
import { HomePageContext } from '../HomePageContext';
import { ProjectsGrid, ProjectsStyled } from './projects.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';
import { HomePageSectionTitle } from '../homePage.styled';
import img from '../../../assets/images/profile-picture.jpeg';
import { ProjectItem } from './ProjectItem';

export const Projects = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({ ref, currentTab, setCurrentTab, tabTitle: 'projects', currentTabRef });

  return (
    <ProjectsStyled ref={ref} className="mt-4">
      <HomePageSectionTitle>Side projects</HomePageSectionTitle>
      <ProjectsGrid>
        {PROJECTS.map((project) => (
          <ProjectItem
            title={project.title}
            description={project.description}
            image={project.image}
            link="google.com"
          />
        ))}
      </ProjectsGrid>
    </ProjectsStyled>
  );
};

const PROJECTS = [
  {
    title: 'Web3 Design Patterns',
    description: 'A curated library of well-executed design patterns from real Web3 products.',
    image: img,
  },
  {
    title: 'Web3 Landing pages',
    description:
      'Developers want Web3, a decentralized model of the internet, to become  mainstream. To achieve  that, designers need to make Web3 apps more  consistent and intuitive.',
    image: img,
  },
  {
    title: 'How to Design for Maximum Product Trust',
    description:
      'We make split-second decisions about whether to trust people; the same  is true about trusting digital products.',
    image: img,
  },
];
