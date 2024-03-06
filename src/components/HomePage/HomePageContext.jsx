import React from 'react';

export const HomePageContext = React.createContext({
  currentTab: 'chart',
  setCurrentTab: (newTab) => {},
  currentTabRef: null,
  setRefCollection: (ref) => {},
});
