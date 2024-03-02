import { useEffect } from 'react';
import { useOnScreen } from './useInViewport';

export const useSetTab = ({ ref, currentTab, setCurrentTab, tabTitle, currentTabRef }) => {
  useEffect(() => {
    if (currentTab === tabTitle) {
      ref?.current.scrollIntoView();
    }
  }, [currentTab]);

  const { isInView } = useOnScreen(ref);
  useEffect(() => {
    if (isInView) {
      if (currentTabRef.current === tabTitle) {
        currentTabRef.current = '';
      }
      if (!currentTabRef.current || currentTabRef === tabTitle) {
        setCurrentTab(tabTitle);
        currentTabRef.current = '';
      }
    }
  }, [isInView]);
};
