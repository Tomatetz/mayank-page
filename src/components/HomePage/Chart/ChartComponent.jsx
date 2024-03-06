import React from 'react';
import moment from 'moment';
import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { ChartTooltip, ChartTooltipPeriod, ChartTooltipRow } from './chart.styled';

export const LineChart = ({ data }) => (
  <ResponsiveContainer width="95%" height={370}>
    <ComposedChart data={data}>
      <defs>
        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
          <stop offset="5%" stopColor="#19c785" stopOpacity={0.4} />
          <stop offset="95%" stopColor="#2d3042" stopOpacity={0.1} />
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
      <Line
        type="monotone"
        strokeLinecap="round"
        strokeWidth={2}
        dataKey="amount"
        stroke="#19c785"
        dot={(data) => <RenderDot data={data} key={data.cx} />}
        legendType="none"
        activeDot={false}
      />
      <Area
        type="monotone"
        dataKey="amount"
        stroke=""
        strokeWidth={2}
        fillOpacity={1}
        fill="url(#colorUv)"
        legendType="none"
        activeDot={false}
      />
      <Tooltip content={<CustomTooltip />} cursor={false} />
    </ComposedChart>
  </ResponsiveContainer>
);

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    // eslint-disable-next-line
    const [timeValue, amountValue] = payload;
    if (!timeValue.payload.logo) return null;
    const { company, title, period } = timeValue.payload;
    return (
      <>
        <ChartTooltip>
          <ChartTooltipRow>
            <img src={timeValue.payload.logo} width="24px" alt="" />
            <b>{company}</b>
          </ChartTooltipRow>
          <ChartTooltipRow className="mt-2">{title}</ChartTooltipRow>
          <ChartTooltipPeriod>{period}</ChartTooltipPeriod>
        </ChartTooltip>
      </>
    );
  }

  return null;
};

const RenderDot = (data) => {
  const {
    cx,
    cy,
    payload: { logo },
  } = data.data;
  if (!logo) return null;
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
        clipPath="inset(0% round 15px)"
      />
    </g>
  );
};
