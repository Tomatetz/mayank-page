import React, { useRef, useState } from 'react';
import {
  ArticlesContainer,
  ChartContainer,
  Feedback,
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

export const HomePage = () => {
  const [currentTab, setCurrentTab] = useState('chart');
  const currentTabRef = useRef();

  return (
    <Layout>
      <HomePageContext.Provider
        value={{
          currentTab,
          setCurrentTab,
          currentTabRef: currentTabRef,
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
        <Feedback>Feedback</Feedback>
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
