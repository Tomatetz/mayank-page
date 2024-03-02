import React from 'react';
import {
  FeedbackCopy,
  FeedbackItemHeader,
  FeedbackItemImage,
  FeedbackItemStyled,
} from './feedback.styled';
import seal from '../../../assets/images/SealCheck.svg';
import bullish from '../../../assets/images/bullish.svg';

export const FeedbackItem = ({ name, feedback, image }) => {
  return (
    <FeedbackItemStyled>
      <FeedbackItemHeader>
        <FeedbackItemImage src={image} />
        {name}
        <img src={seal} />
        <img src={bullish} />
      </FeedbackItemHeader>
      <FeedbackCopy>{feedback}</FeedbackCopy>
    </FeedbackItemStyled>
  );
};
