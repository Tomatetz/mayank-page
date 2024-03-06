import React from 'react';

export const HomePageContext = React.createContext({
  currentTab: 'chart',
  setCurrentTab: (newTab) => {},
  setRefCollection: (ref) => {},
  showContext: (title) => {},
  setShowContactForm: (show) => {},
});
