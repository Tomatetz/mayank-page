import React, { useState } from 'react';
import {
  ArticlesContainer,
  ChartContainer,
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
import { Modal } from 'react-bootstrap';
import { Form } from '../Form';
import { Header } from '../Header';

export const HomePage = () => {
  const [currentTab, setCurrentTab] = useState('chart');
  const { setRefCollection, showContext } = useChangeTab();

  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <HomePageContext.Provider
      value={{
        currentTab,
        setCurrentTab,
        setRefCollection,
        showContext,
        setShowContactForm,
      }}
    >
      <Header />
      <Layout>
        <Stats />
        <TabSelector>
          <div style={{ width: '100%' }}>
            <Tabs />
          </div>
        </TabSelector>
        <ChartContainer>
          <Chart />
        </ChartContainer>
        <Feedback />
        <WorksContainer>
          <Works />
        </WorksContainer>
        {/* <ArticlesContainer>
          <Articles />
        </ArticlesContainer> */}
        <ProjectsContainer>
          <Projects />
        </ProjectsContainer>
        <About />

        <Modal
          show={showContactForm}
          onHide={() => {
            setShowContactForm(false);
          }}
        >
          <Form closeModal={() => setShowContactForm(false)} />
        </Modal>
      </Layout>
    </HomePageContext.Provider>
  );
};
