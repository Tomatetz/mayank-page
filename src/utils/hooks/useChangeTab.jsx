import { useEffect, useState } from 'react';
import { useOnScreen } from './useInViewport';

export const useChangeTab = () => {
  // useEffect(() => {
  //   if (currentTab === tabTitle) {
  //     ref?.current.scrollIntoView();
  //   }
  // }, [currentTab]);

  // const { isInView } = useOnScreen(ref);
  // useEffect(() => {
  //   if (isInView) {
  //     if (currentTabRef.current === tabTitle) {
  //       currentTabRef.current = '';
  //     }
  //     if (!currentTabRef.current || currentTabRef === tabTitle) {
  //       setCurrentTab(tabTitle);
  //       currentTabRef.current = '';
  //     }
  //   }
  // }, [isInView]);
  const [refCollection, setRefCollection] = useState([]);
  console.log(refCollection);
  return { setRefCollection };
};
