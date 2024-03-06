import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageContext } from '../HomePageContext';
import { WorksStyled } from './works.styled';
import { HomePageSectionTitle } from '../homePage.styled';
import { WorkItem } from './WorkItem';
import axios from 'axios';
import { useOnScreen } from '../../../utils/hooks/useInViewport';

export const Works = () => {
  const { setCurrentTab, setRefCollection } = useContext(HomePageContext);
  const ref = useRef();

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

  useEffect(() => {
    if (ref.current) {
      setRefCollection((prev) => [...prev, { title: 'works', ref: ref.current }]);
    }
  }, [ref, setRefCollection]);
  const { isInView } = useOnScreen(ref);
  useEffect(() => {
    if (isInView) setCurrentTab('works');
  }, [isInView, setCurrentTab]);

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
