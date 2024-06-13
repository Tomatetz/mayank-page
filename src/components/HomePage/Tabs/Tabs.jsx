import { useContext, useEffect, useState } from 'react';
import { HomePageContext } from '../HomePageContext';
import { Tabs as MuiTabs, Tab } from '@mui/material';
import { TabsContainer } from './tabs.styled';

const sx = {
  color: '#fff',
  padding: '0 16px',
  textTransform: 'capitalize',
  minWidth: 'unset',
  fontWeight: '500!important',
  fontFamily: 'Inter',
};

export const Tabs = () => {
  const { currentTab, setCurrentTab, showContext } = useContext(HomePageContext);

  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <TabsContainer>
      <MuiTabs
        variant="scrollable"
        value={currentTab}
        onChange={(e, value) => {
          setCurrentTab(value);
          showContext(value);
        }}
        sx={{ minHeight: 'unset', height: '40px' }}
      >
        <Tab label="Chart" sx={sx} value="chart" disableRipple />
        <Tab label="Works" sx={sx} value="works" disableRipple />
        {/* <Tab label="Articles" sx={sx} value="articles" disableRipple /> */}
        <Tab label="Projects" sx={sx} value="projects" disableRipple />
        {width < 1024 && <Tab label="Reviews" sx={sx} value="reviews" disableRipple />}
        <Tab label="About" sx={sx} value="about" disableRipple />
      </MuiTabs>
    </TabsContainer>
  );
};
