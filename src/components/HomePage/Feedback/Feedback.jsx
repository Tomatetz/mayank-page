import React, { useContext, useEffect, useRef, useState } from 'react';
import { FeedbackItem } from './FeedbackItem';
import axios from 'axios';
import { FeedbackStyled } from './feedback.styled';

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

  return (
    <FeedbackStyled className="mt-4">
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
