import React, { useContext, useRef } from 'react';
import chartImage from '../../../assets/images/chart.png';
import { ChartStub, ChartStyled } from './chart.styled';
import { useSetTab } from '../../../utils/hooks/useSetTab';
import { HomePageContext } from '../HomePageContext';

export const Chart = () => {
  const { currentTab, setCurrentTab, currentTabRef } = useContext(HomePageContext);
  const ref = useRef();
  useSetTab({ ref, currentTab, setCurrentTab, tabTitle: 'chart', currentTabRef });
  return (
    <ChartStyled ref={ref} className="mt-4">
      <ChartStub style={{ backgroundImage: `url(${chartImage})`, padding: '33%' }} />
    </ChartStyled>
  );
};
