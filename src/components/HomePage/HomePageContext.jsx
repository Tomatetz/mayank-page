import React, { useRef } from 'react';

export const HomePageContext = React.createContext({
  currentTab: 'chart',
  setCurrentTab: (newTab) => {},
  currentTabRef: null,
});
