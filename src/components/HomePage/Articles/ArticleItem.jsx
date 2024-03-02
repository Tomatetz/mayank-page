import React from 'react';
import {
  ArticleItemDescription,
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
          <div>{description}</div>
          <ArticleItemFooter>
            <div>{minRead} min read</div> · <div>{date}</div>
          </ArticleItemFooter>
        </ArticleItemDescription>
        <ArticleItemImage src={image} alt="" />
      </ArticleItemStyled>
    </NavLink>
  );
};
