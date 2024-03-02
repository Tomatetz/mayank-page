import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageContext } from '../HomePageContext';
import { ProjectsGrid, ProjectsStyled } from './projects.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';
import { HomePageSectionTitle } from '../homePage.styled';
import img from '../../../assets/images/profile-picture.jpeg';
import { ProjectItem } from './ProjectItem';
import axios from 'axios';

export const Projects = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({ ref, currentTab, setCurrentTab, tabTitle: 'projects', currentTabRef });

  const [projects, setProjects] = useState([]);
  const getProjects = () => {
    axios.get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/projects?populate=*`).then(({ data }) => {
      if (data.data) {
        console.log(data.data);
        setProjects(data.data);
      }
    });
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <ProjectsStyled ref={ref} className="mt-4">
      <HomePageSectionTitle>Side projects</HomePageSectionTitle>
      <ProjectsGrid>
        {projects.map(({ attributes: project }, i) => (
          <ProjectItem
            key={i}
            title={project.title}
            description={project.description}
            image={project.image.data.attributes.url}
            link={project.link}
          />
        ))}
      </ProjectsGrid>
    </ProjectsStyled>
  );
};
