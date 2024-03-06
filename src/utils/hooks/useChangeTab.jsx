import { useState } from 'react';

export const useChangeTab = () => {
  const [refCollection, setRefCollection] = useState([]);
  const showContext = (titleToShow) => {
    const refToShow = refCollection.find(({ title }) => title === titleToShow)?.ref;
    refToShow?.scrollIntoView();
  };
  return { setRefCollection, showContext };
};
