import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageContext } from '../HomePageContext';
import { ArticlesStyled, SeeMoreButton } from './articles.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';
import { HomePageSectionTitle } from '../homePage.styled';
import { ArticleItem } from './ArticleItem';
import axios from 'axios';
import { Button } from '../../../utils';

export const Articles = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({ ref, currentTab, setCurrentTab, tabTitle: 'articles', currentTabRef });

  const [showAll, setShowAll] = useState(false);

  const [articles, setArticles] = useState([]);
  const getArticles = () => {
    axios.get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/articles?populate=*`).then(({ data }) => {
      if (data.data) {
        setArticles(data.data);
      }
    });
  };
  useEffect(() => {
    getArticles();
  }, []);

  return (
    <ArticlesStyled ref={ref} className="mt-4">
      <HomePageSectionTitle>Recent Articles</HomePageSectionTitle>
      {articles.slice(0, showAll ? articles.length : 4).map(({ attributes: article }, i) => (
        <ArticleItem
          key={i}
          title={article.title}
          description={article.description}
          date={article.date}
          link={article.link}
          minRead={article.minRead}
          image={article.image.data.attributes.url}
        />
      ))}
      {articles.length > 4 && !showAll && (
        <SeeMoreButton>
          <Button
            style={{ fontSize: '14px', fontWeight: 600, padding: '8px 32px' }}
            onClick={() => setShowAll(true)}
          >
            See more
          </Button>
        </SeeMoreButton>
      )}
    </ArticlesStyled>
  );
};
