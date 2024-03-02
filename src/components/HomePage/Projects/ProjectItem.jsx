import React from 'react';
import { NavLink } from '../../../utils';
import { ImageWrapper, ProjectItemStyled } from './projects.styled';

export const ProjectItem = ({ title, description, image, link }) => {
  return (
    <NavLink to={link} target="_blank">
      <ProjectItemStyled>
        <ImageWrapper style={{ backgroundImage: `url(${image})`, padding: '33%' }}></ImageWrapper>
      </ProjectItemStyled>
    </NavLink>
  );
};
