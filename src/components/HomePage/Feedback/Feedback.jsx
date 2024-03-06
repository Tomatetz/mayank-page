import React, { useContext, useEffect, useRef, useState } from 'react';
import { FeedbackItem } from './FeedbackItem';
import axios from 'axios';
import { FeedbackStyled } from './feedback.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';
import { HomePageContext } from '../HomePageContext';

export const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const getFeedback = () => {
    axios
      .get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/feedbacks?populate=*`)
      .then(({ data }) => {
        if (data.data) {
          setFeedback(data.data);
        }
      });
  };
  useEffect(() => {
    getFeedback();
  }, []);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({
    ref,
    currentTab,
    setCurrentTab,
    tabTitle: width < 1024 ? 'reviews' : 'fake',
    currentTabRef,
  });

  return (
    <FeedbackStyled className="mt-4" ref={ref}>
      {feedback.map(({ attributes: feedback }, i) => (
        <FeedbackItem
          key={i}
          name={feedback.name}
          feedback={feedback.feedback}
          image={feedback.image.data.attributes.url}
        />
      ))}
    </FeedbackStyled>
  );
};
