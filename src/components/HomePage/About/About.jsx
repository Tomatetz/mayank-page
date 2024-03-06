import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageContext } from '../HomePageContext';
import { AboutsStyled } from './about.styled';
import { HomePageSectionTitle } from '../homePage.styled';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import axios from 'axios';
import { Accordion } from 'react-bootstrap';
import { useOnScreen } from '../../../utils/hooks/useInViewport';

export const About = () => {
  const { setCurrentTab, setRefCollection } = useContext(HomePageContext);
  const ref = useRef();

  const [abouts, setAbouts] = useState([]);
  const getData = () => {
    axios.get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/abouts`).then(({ data }) => {
      if (data.data) {
        setAbouts(data.data);
      }
    });
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (ref.current) {
      setRefCollection((prev) => [...prev, { title: 'about', ref: ref.current }]);
    }
  }, [ref, setRefCollection]);
  const { isInView } = useOnScreen(ref);
  useEffect(() => {
    if (isInView) setCurrentTab('about');
  }, [isInView, setCurrentTab]);
  return (
    <AboutsStyled ref={ref} className="mt-4">
      <HomePageSectionTitle>About Mayank</HomePageSectionTitle>
      <Accordion defaultActiveKey={['0']} alwaysOpen>
        {abouts.map(({ attributes }, i) => (
          <Accordion.Item key={i} eventKey={i.toString()}>
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
