import React, { useContext, useEffect, useRef } from 'react';
import { ChartStyled } from './chart.styled';
import { HomePageContext } from '../HomePageContext';
import { LineChart } from './ChartComponent';
import biocadLogo from '../../../assets/images/biocad_logo.jpeg';
import iqOptionLogo from '../../../assets/images/iqOption_logo.jpeg';
import propertyfinderLogo from '../../../assets/images/propertyfinder_ae_logo.jpeg';
import upvestLogo from '../../../assets/images/upvest_logo.png';
import compaLogo from '../../../assets/images/compa_ava_logo.jpeg';
import nansenLogo from '../../../assets/images/nansen_logo.png';
import blocktorchLogo from '../../../assets/images/compa_logo.jpeg';
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
    company: 'Biocad',
    timestamp: 1396303200000,
    amount: 0.804,
    logo: biocadLogo,
    title: 'Front-end developer',
    period: 'Apr 2015 - Aug 2016',
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
    company: 'IQ option europe ltd',
    timestamp: 1472680800000,
    amount: 1.35,
    logo: iqOptionLogo,
    title: 'Senior Frontend Developer',
    period: 'Aug 2016 - Jun 2017',
  },
  { timestamp: 1472680800000, amount: 2.41 },
  { timestamp: 1481680800000, amount: 1.89 },
  { timestamp: 1498680800000, amount: 3.12 },
  {
    company: 'propertyfinder.ae',
    timestamp: 1501538400000,
    amount: 7.35,
    logo: propertyfinderLogo,
    title: 'Frontend Developer',
    period: 'Jun 2017 - Sep 2018',
  },
  { timestamp: 1504644400000, amount: 7.56 },
  {
    company: 'Upvest',
    timestamp: 1521490800000,
    amount: 7.928,
    logo: upvestLogo,
    title: 'Frontend Developer',
    period: 'Sep 2018 - Jun 2020',
  },
  { timestamp: 1539644400000, amount: 8.928 },
  { timestamp: 1559544400000, amount: 12.928 },
  { timestamp: 1563944400000, amount: 11.928 },
  { timestamp: 1574974400000, amount: 19 },
  {
    company: 'Compa',
    timestamp: 1585944400000,
    amount: 21.926,
    logo: compaLogo,
    title: 'Founding Frontend Developer',
    period: 'Jun 2020 - Jul 2022',
  },
  { timestamp: 1595944400000, amount: 21.6 },
  { timestamp: 1604185200000, amount: 22.6 },
  {
    company: 'Nansen',
    timestamp: 1612134000000,
    amount: 24.357,
    logo: nansenLogo,
    title: 'Founding Frontend Developer',
    period: 'Jan 2021 - Mar 2023',
  },
  { timestamp: 1624944400000, amount: 24.622 },
  { timestamp: 1642144400000, amount: 23.622 },
  {
    company: 'Blocktorch',
    timestamp: 1664575200000,
    amount: 29.84,
    logo: blocktorchLogo,
    title: 'Lead Frontend Developer',
    period: 'Mar 2023 - Present',
  },
  { timestamp: 1689455600000, amount: 32.84 },
  { timestamp: new Date().getTime(), amount: 40.996 },
];
