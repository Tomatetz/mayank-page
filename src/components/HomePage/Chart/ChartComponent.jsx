import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import img from '../../../assets/images/profile-picture.jpg';
import svgEl from '../../../assets/images/glassnode_logo.png';

import {
  Area,
  CartesianGrid,
  Dot,
  Legend,
  Line,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartTooltip, ChartTooltipPeriod, ChartTooltipRow } from './chart.styled';

export const LineChart = ({ data }) => (
  <ResponsiveContainer width="95%" height={370}>
    <ScatterChart>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#129a74" stopOpacity={0.1} />
          <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1} />
        </linearGradient>
      </defs>
      <CartesianGrid vertical={false} stroke="#2d3042" strokeDasharray={'10 3'} />
      <XAxis
        dataKey="timestamp"
        domain={['auto', 'auto']}
        name="Time"
        tickFormatter={(unixTime) => moment(unixTime).format('MM/DD/YYYY')}
        tick={{ fontSize: '10px' }}
        minTickGap={20}
      />
      <YAxis
        tickCount={10}
        domain={[0, 40]}
        dataKey="amount"
        name="Value"
        tickFormatter={() => ''}
        hide
      />
      <Scatter
        data={data}
        fill="#19c785"
        line={{ stroke: '#19c785', strokeWidth: '2px' }}
        lineJointType="monotoneX"
        lineType="joint"
        name="amount"
        shape={<RenderDot />}
      />
      <Tooltip content={<CustomTooltip />} cursor={false} />
    </ScatterChart>
  </ResponsiveContainer>
);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const [timeValue, amountValue] = payload;
    if (!timeValue.payload.logo) return null;
    const { company, title, period } = timeValue.payload;
    return (
      <ChartTooltip>
        <ChartTooltipRow>
          <img src={timeValue.payload.logo} width="24px" />
          <b>{company}</b>
        </ChartTooltipRow>
        <ChartTooltipRow className="mt-2">{title}</ChartTooltipRow>
        <ChartTooltipPeriod>{period}</ChartTooltipPeriod>
      </ChartTooltip>
    );
  }

  return null;
};

const RenderDot = (data) => {
  const { cx, cy, logo } = data;
  if (!data.logo) return null;
  return (
    <g>
      <circle cx={cx} cy={cy - 15} r={17} fill="#fff" />
      <image
        stroke="2px"
        x={cx - 15}
        y={cy - 30}
        height={30}
        width={30}
        href={logo}
        clip-path="inset(0% round 15px)"
      />
    </g>
  );
};
