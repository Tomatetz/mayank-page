import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageContext } from '../HomePageContext';
import { ProjectsGrid, ProjectsStyled } from './projects.styled';
import { HomePageSectionTitle } from '../homePage.styled';
import { ProjectItem } from './ProjectItem';
import axios from 'axios';
import { useOnScreen } from '../../../utils/hooks/useInViewport';

export const Projects = () => {
  const { setCurrentTab, setRefCollection } = useContext(HomePageContext);
  const ref = useRef();

  const [projects, setProjects] = useState([]);
  const getProjects = () => {
    axios
      .get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/projects?populate=*&sort=createdAt:DESC`)
      .then(({ data }) => {
        if (data.data) {
          setProjects(data.data);
        }
      });
  };
  useEffect(() => {
    getProjects();
  }, []);

  useEffect(() => {
    if (ref.current) {
      setRefCollection((prev) => [...prev, { title: 'projects', ref: ref.current }]);
    }
  }, [ref, setRefCollection]);
  const { isInView } = useOnScreen(ref);
  useEffect(() => {
    if (isInView) setCurrentTab('projects');
  }, [isInView, setCurrentTab]);
  return (
    <ProjectsStyled ref={ref} className="mt-4">
      <HomePageSectionTitle>Side projects</HomePageSectionTitle>
      <ProjectsGrid>
        {projects.map(({ attributes: project }, i) => (
          <ProjectItem
            key={i}
            title={project.title}
            description={project.description}
            image={project.image.data?.attributes.url}
            link={project.link}
          />
        ))}
      </ProjectsGrid>
    </ProjectsStyled>
  );
};
