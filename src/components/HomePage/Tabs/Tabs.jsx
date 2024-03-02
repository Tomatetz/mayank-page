import { useContext } from 'react';
import { HomePageContext } from '../HomePageContext';
import { Tabs as MuiTabs, Tab } from '@mui/material';
import { TabsContainer } from './tabs.styled';

const sx = {
  color: '#fff',
  padding: '0 8px 0 8px',
  textTransform: 'capitalize',
  minWidth: 'unset',
};
function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}
export const Tabs = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  return (
    <TabsContainer>
      <MuiTabs
        value={currentTab}
        onChange={(e, value) => {
          currentTabRef.current = value;
          setCurrentTab(value);
        }}
        sx={{ minHeight: 'unset', height: '40px' }}
      >
        <Tab label="Chart" sx={sx} {...a11yProps(0)} value="chart" disableRipple />
        <Tab label="Works" sx={sx} {...a11yProps(1)} value="works" disableRipple />
        <Tab label="Articles" sx={sx} {...a11yProps(2)} value="articles" disableRipple />
        <Tab label="Projects" sx={sx} {...a11yProps(3)} value="projects" disableRipple />
        <Tab label="About" sx={sx} {...a11yProps(4)} value="about" disableRipple />
      </MuiTabs>
    </TabsContainer>
  );
};
