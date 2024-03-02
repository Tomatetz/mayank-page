import React, { useContext, useRef } from 'react';
import { HomePageContext } from '../HomePageContext';
import { WorksStyled } from './works.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';
import glassNodeImage from '../../../assets/images/glassnode.jpg';
import accountingImage from '../../../assets/images/accounting.jpg';
import nansengImage from '../../../assets/images/nansen.jpg';
import { HomePageSectionTitle } from '../homePage.styled';
import { WorkItem } from './WorkItem';

export const Works = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({ ref, currentTab, setCurrentTab, tabTitle: 'works', currentTabRef });

  return (
    <WorksStyled ref={ref} className="mt-4">
      <HomePageSectionTitle>Work</HomePageSectionTitle>
      {WORKS.map((work) => (
        <WorkItem {...work} />
      ))}
    </WorksStyled>
  );
};

const WORKS = [
  { title: 'Making on-chain data simple', subtitle: 'Glassnode 2023', image: glassNodeImage },
  {
    title: 'Rethinking transactions review process',
    subtitle: 'Accounting 2023',
    image: accountingImage,
  },
  { title: 'Designing for lessnoise, more signal', subtitle: 'Nansen 2020', image: nansengImage },
];
