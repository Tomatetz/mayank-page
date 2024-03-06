import React from 'react';
import {
  ArticleImageWrapper,
  ArticleItemDescription,
  ArticleItemDescriptionCopy,
  ArticleItemFooter,
  ArticleItemImage,
  ArticleItemStyled,
  ArticleItemTitle,
} from './articles.styled';
import { NavLink } from '../../../utils';

export const ArticleItem = ({ title, description, image, minRead, date, link }) => {
  return (
    <NavLink to={link} target="_blank">
      <ArticleItemStyled>
        <ArticleItemDescription>
          <ArticleItemTitle>{title}</ArticleItemTitle>
          <ArticleItemDescriptionCopy>{description}</ArticleItemDescriptionCopy>
          <ArticleItemFooter>
            <div>{minRead} min read</div> · <div>{date}</div>
          </ArticleItemFooter>
        </ArticleItemDescription>
        <ArticleImageWrapper>
          <ArticleItemImage src={image} alt="" />
        </ArticleImageWrapper>
      </ArticleItemStyled>
    </NavLink>
  );
};
