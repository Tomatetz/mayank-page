import React, { useContext, useRef } from 'react';
import { HomePageContext } from '../HomePageContext';
import { ProjectsStyled } from './projects.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';

export const Projects = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({ ref, currentTab, setCurrentTab, tabTitle: 'projects', currentTabRef });

  return (
    <ProjectsStyled ref={ref} className="mt-4">
      Projects
    </ProjectsStyled>
  );
};
