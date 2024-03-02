import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { CaretUp } from 'phosphor-react';
import { colors } from '..';

export const StatItem = ({ title, value }) => {
  return (
    <div className="d-flex flex-column">
      <div className="d-flex align-items-center justify-content-between">
        <StatItemTitle>{title}</StatItemTitle>
        <StatItemValue className="d-flex align-items-center">
          <CaretUp size={12} weight="fill" />
          {value}%
        </StatItemValue>
      </div>
      <StatItemSlider value={value} />
    </div>
  );
};

const StatItemValue = styled.div`
  color: ${colors.success};
  font-size: 12px;
  gap: 4px;
`;
const StatItemTitle = styled.div`
  color: ${(props) => props.theme.textSecondary};
  font-size: 12px;
`;
const StatItemSlider = styled.div`
  margin-top: 4px;
  height: 4px;
  border-radius: 7px;
  width: 100%;
  background: ${(props) => props.theme.bgSecondary};
  position: relative;
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: ${({ value }) => `${value}%`};
    height: 4px;
    background: ${(props) => props.theme.bgSecondaryActive};
    border-radius: 7px;
  }
  &::after {
    content: '';
    position: absolute;
    left: ${({ value }) => `${value}%`};
    top: -3px;
    height: 10px;
    width: 3px;
    border-radius: 3px;
    background: #646b80;
  }
`;
