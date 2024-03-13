import React, { useContext, useEffect, useRef, useState } from 'react';
import { HomePageContext } from '../HomePageContext';
import { ArticlesStyled, SeeMoreButton } from './articles.styled';
import { HomePageSectionTitle } from '../homePage.styled';
import { ArticleItem } from './ArticleItem';
import axios from 'axios';
import { Button } from '../../../utils';
import { useOnScreen } from '../../../utils/hooks/useInViewport';

export const Articles = () => {
  const { setCurrentTab, setRefCollection } = useContext(HomePageContext);
  const ref = useRef();

  const [showAll, setShowAll] = useState(false);

  const [articles, setArticles] = useState([]);
  const getArticles = () => {
    axios
      .get(`${process.env.REACT_APP_MY_HEROKU_URL}/api/articles?populate=*&sort=createdAt:DESC`)
      .then(({ data }) => {
        if (data.data) {
          setArticles(data.data);
        }
      });
  };
  useEffect(() => {
    getArticles();
  }, []);

  useEffect(() => {
    if (ref.current) {
      setRefCollection((prev) => [...prev, { title: 'articles', ref: ref.current }]);
    }
  }, [ref, setRefCollection]);
  const { isInView } = useOnScreen(ref);
  useEffect(() => {
    if (isInView) setCurrentTab('articles');
  }, [isInView, setCurrentTab]);

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
