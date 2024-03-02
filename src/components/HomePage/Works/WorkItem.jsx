import React from 'react';
import { WorkPreviewImage, WorkSubTitle, WorkTitle } from './works.styled';

export const WorkItem = ({ title, subtitle, image }) => {
  return (
    <div>
      <WorkTitle>{title}</WorkTitle>
      <WorkSubTitle>{subtitle}</WorkSubTitle>
      <WorkPreviewImage>
        <img src={image} alt="" />
      </WorkPreviewImage>
    </div>
  );
};
