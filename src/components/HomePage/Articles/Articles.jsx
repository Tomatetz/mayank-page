import React, { useContext, useRef } from 'react';
import { HomePageContext } from '../HomePageContext';
import { ArticlesStyled } from './articles.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';

export const Articles = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({ ref, currentTab, setCurrentTab, tabTitle: 'articles', currentTabRef });

  return (
    <ArticlesStyled ref={ref} className="mt-4">
      Articles
    </ArticlesStyled>
  );
};
