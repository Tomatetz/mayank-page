import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageContext } from '../HomePageContext';
import { WorksStyled } from './works.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';
import { HomePageSectionTitle } from '../homePage.styled';
import { WorkItem } from './WorkItem';
import axios from 'axios';

export const Works = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({ ref, currentTab, setCurrentTab, tabTitle: 'works', currentTabRef });

  const [works, setWorks] = useState([]);
  const getWorks = () => {
    axios.get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/works?populate=*`).then(({ data }) => {
      if (data.data) {
        setWorks(data.data);
      }
    });
  };
  useEffect(() => {
    getWorks();
  }, []);

  return (
    <WorksStyled ref={ref} className="mt-4">
      <HomePageSectionTitle>Work</HomePageSectionTitle>
      {works.map(({ attributes: work }, i) => (
        <WorkItem
          key={i}
          title={work.title}
          subtitle={work.subtitle}
          image={work.image.data.attributes.url}
        />
      ))}
    </WorksStyled>
  );
};
