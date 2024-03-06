import styled from 'styled-components';

export const ChartStyled = styled.div`
  scroll-margin-top: 180px;
  min-height: 400px;
`;
export const ChartStub = styled.div`
  padding: 33%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const ChartTooltipPeriod = styled.div`
  color: ${(props) => props.theme.textSecondary};
  font-size: 12px;
`;

export const ChartTooltipRow = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ChartTooltip = styled.div`
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.border};
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
