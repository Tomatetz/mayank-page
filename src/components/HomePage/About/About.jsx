import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageContext } from '../HomePageContext';
import { AboutsStyled } from './about.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';
import { HomePageSectionTitle } from '../homePage.styled';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import axios from 'axios';
import { Accordion } from 'react-bootstrap';

export const About = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({ ref, currentTab, setCurrentTab, tabTitle: 'about', currentTabRef });

  const [abouts, setAbouts] = useState([]);
  const getData = () => {
    axios.get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/abouts`).then(({ data }) => {
      if (data.data) {
        console.log(data.data);
        setAbouts(data.data);
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <AboutsStyled ref={ref} className="mt-4">
      <HomePageSectionTitle>About Mayank</HomePageSectionTitle>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {abouts.map(({ attributes }, i) => (
          <Accordion.Item eventKey={i.toString()}>
            <Accordion.Header>{attributes.title}</Accordion.Header>
            <Accordion.Body>
              {attributes.description && <BlocksRenderer content={attributes.description} />}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </AboutsStyled>
  );
};
