import React, { useContext, useEffect, useRef, useState } from 'react';
import { FeedbackItem } from './FeedbackItem';
import axios from 'axios';
import { FeedbackContainer, FeedbackStyled } from './feedback.styled';
import { HomePageContext } from '../HomePageContext';
import { useOnScreen } from '../../../utils/hooks/useInViewport';
import { HomePageSectionTitle } from '../homePage.styled';

export const Feedback = () => {
  const [feedback, setFeedback] = useState([]);
  const getFeedback = () => {
    axios
      .get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/feedbacks?populate=*&sort=createdAt:DESC`)
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
  const { setCurrentTab, setRefCollection } = useContext(HomePageContext);
  const ref = useRef();

  useEffect(() => {
    if (ref.current) {
      setRefCollection((prev) => [
        ...prev,
        { title: width < 1024 ? 'reviews' : 'fake', ref: ref.current },
      ]);
    }
  }, [ref, width, setRefCollection]);
  const { isInView } = useOnScreen(ref);
  useEffect(() => {
    if (isInView && width < 1024) setCurrentTab('reviews');
  }, [isInView, width, setCurrentTab]);
  return (
    <FeedbackContainer ref={ref}>
      <FeedbackStyled className="mt-4">
        {width < 1024 && <HomePageSectionTitle>Reviews</HomePageSectionTitle>}
        {feedback.map(({ attributes: feedback }, i) => (
          <FeedbackItem
            key={i}
            name={feedback.name}
            feedback={feedback.feedback}
            image={feedback.image.data.attributes.url}
          />
        ))}
      </FeedbackStyled>
    </FeedbackContainer>
  );
};
