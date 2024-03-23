import React, { useContext, useEffect, useRef } from 'react';
import { ChartStyled } from './chart.styled';
import { HomePageContext } from '../HomePageContext';
import { LineChart } from './ChartComponent';
import manyoneLogo from '../../../assets/images/manyone_logo.png';
import auto1Logo from '../../../assets/images/auto1_logo.png';
import finleapLogo from '../../../assets/images/finLeap_logo.png';
import upvestLogo from '../../../assets/images/upvest_logo.png';
import bitwalaLogo from '../../../assets/images/bw_logo.png';
import nansenLogo from '../../../assets/images/nansen_logo.png';
import glassnodeLogo from '../../../assets/images/glassnode_logo.png';
import { useOnScreen } from '../../../utils/hooks/useInViewport';

export const Chart = () => {
  const { setCurrentTab, setRefCollection } = useContext(HomePageContext);
  const ref = useRef();
  useEffect(() => {
    if (ref.current) {
      setRefCollection((prev) => [...prev, { title: 'chart', ref: ref.current }]);
    }
  }, [ref, setRefCollection]);
  const { isInView } = useOnScreen(ref);
  useEffect(() => {
    if (isInView) setCurrentTab('chart');
  }, [isInView, setCurrentTab]);
  return (
    <ChartStyled ref={ref} className="mt-4">
      <LineChart data={data} />
    </ChartStyled>
  );
};

const data = [
  {
    timestamp: 1376303200000,
    amount: 0,
  },
  {
    company: 'Manyone',
    timestamp: 1396303200000,
    amount: 0.804,
    logo: manyoneLogo,
    title: 'Interaction Designer',
    period: 'May 2014 - Sep 2016',
  },
  {
    timestamp: 1426303200000,
    amount: 1.22,
  },
  {
    timestamp: 1432303200000,
    amount: 1.1,
  },
  {
    timestamp: 1447303200000,
    amount: 1.31,
  },
  {
    timestamp: 1462303200000,
    amount: 1.29,
  },
  {
    company: 'AUTO1',
    timestamp: 1472680800000,
    amount: 1.35,
    logo: auto1Logo,
    title: 'Product Designer',
    period: 'Sep 2016 - Sep 2017',
  },
  { timestamp: 1472680800000, amount: 2.41 },
  { timestamp: 1481680800000, amount: 1.89 },
  { timestamp: 1498680800000, amount: 3.12 },
  {
    company: 'FinLeap',
    timestamp: 1501538400000,
    amount: 7.35,
    logo: finleapLogo,
    title: 'Senior Product Designer',
    period: 'Aug 2017 - Dec 2017',
  },
  { timestamp: 1504644400000, amount: 7.56 },
  {
    company: 'Upvest',
    timestamp: 1521490800000,
    amount: 7.928,
    logo: upvestLogo,
    title: 'Founding Designer | Design Team of One',
    period: 'Nov 2017 - Oct 2020',
  },
  { timestamp: 1539644400000, amount: 8.928 },
  { timestamp: 1559544400000, amount: 12.928 },
  { timestamp: 1563944400000, amount: 11.928 },
  { timestamp: 1574974400000, amount: 19 },
  {
    company: 'Nansen',
    timestamp: 1585944400000,
    amount: 21.926,
    logo: nansenLogo,
    title: 'Design Lead & Manager',
    period: 'Nov 2020 - Oct 2022',
  },
  { timestamp: 1595944400000, amount: 21.6 },
  { timestamp: 1604185200000, amount: 22.6 },
  {
    company: 'Bitwala',
    timestamp: 1612134000000,
    amount: 24.357,
    logo: bitwalaLogo,
    title: 'Lead Product Designer',
    period: 'Feb 2021 - Oct 2021',
  },
  { timestamp: 1624944400000, amount: 24.622 },
  { timestamp: 1642144400000, amount: 23.622 },
  {
    company: 'Glassnode',
    timestamp: 1664575200000,
    amount: 29.84,
    logo: glassnodeLogo,
    title: 'Founding Designer | Design Team of One',
    period: 'Oct 2022 - Jan 2024',
  },
  { timestamp: 1689455600000, amount: 32.84 },
  { timestamp: new Date().getTime(), amount: 40.996 },
];
