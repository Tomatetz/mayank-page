import React, { useRef, useState } from 'react';
import {
  ArticlesContainer,
  ChartContainer,
  FeedbackContainer,
  Layout,
  ProjectsContainer,
  TabSelector,
  WorksContainer,
} from './homePage.styled';
import { Stats } from './Stats/Stats';
import { Chart } from './Chart';
import { Tabs } from './Tabs';
import { HomePageContext } from './HomePageContext';
import { Articles } from './Articles';
import { Works } from './Works';
import { Projects } from './Projects';
import { About } from './About';
import { Feedback } from './Feedback';
import { useChangeTab } from '../../utils/hooks/useChangeTab';

export const HomePage = () => {
  const [currentTab, setCurrentTab] = useState('chart');
  const currentTabRef = useRef();
  const { setRefCollection } = useChangeTab();
  return (
    <Layout>
      <HomePageContext.Provider
        value={{
          currentTab,
          setCurrentTab,
          currentTabRef: currentTabRef,
          setRefCollection,
        }}
      >
        <Stats />
        <TabSelector>
          <div style={{ width: '100%' }}>
            <Tabs />
          </div>
        </TabSelector>
        <ChartContainer>
          <Chart />
        </ChartContainer>
        <FeedbackContainer>
          <Feedback />
        </FeedbackContainer>
        <WorksContainer>
          <Works />
        </WorksContainer>
        <ArticlesContainer>
          <Articles />
        </ArticlesContainer>
        <ProjectsContainer>
          <Projects />
        </ProjectsContainer>
        <About />
      </HomePageContext.Provider>
    </Layout>
  );
};
