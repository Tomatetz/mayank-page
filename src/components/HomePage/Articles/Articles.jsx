import React, { useContext, useRef } from 'react';
import { HomePageContext } from '../HomePageContext';
import { ArticlesStyled } from './articles.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';
import { HomePageSectionTitle } from '../homePage.styled';
import img from '../../../assets/images/profile-picture.jpeg';
import { ArticleItem } from './ArticleItem';

export const Articles = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({ ref, currentTab, setCurrentTab, tabTitle: 'articles', currentTabRef });

  return (
    <ArticlesStyled ref={ref} className="mt-4">
      <HomePageSectionTitle>Recent Articles</HomePageSectionTitle>
      {ARTICLES.map((article, i) => (
        <ArticleItem key={i} {...article} />
      ))}
    </ArticlesStyled>
  );
};

const ARTICLES = [
  {
    title: '6 Ways to Make Authentication Systems More User-friendly',
    description:
      'Boost customer satisfaction and loyalty by designing a safe, consistent, and user-friendly authentication system.',
    image: img,
    minRead: '10',
    date: '01/01/2023',
    link: 'https://google.com',
  },
  {
    title: 'Less Trust, More Truth: Web3 Design Best Practices and Patterns',
    description:
      'Developers want Web3, a decentralized model of the internet, to become  mainstream. To achieve  that, designers need to make Web3 apps more  consistent and intuitive.',
    image: img,
    minRead: '10',
    date: '23/03/2023',
    link: 'https://google.com',
  },
  {
    title: 'How to Design for Maximum Product Trust',
    description:
      'We make split-second decisions about whether to trust people; the same  is true about trusting digital products.',
    image: img,
    minRead: '10',
    date: '23/03/2023',
    link: 'https://google.com',
  },
  {
    title: 'How to Improve App Settings UX',
    description:
      'Well-designed settings panels allow users to tailor apps to their needs  and help companies lower customer-support costs.',
    image: img,
    minRead: '10',
    date: '23/03/2023',
    link: 'https://google.com',
  },
];
