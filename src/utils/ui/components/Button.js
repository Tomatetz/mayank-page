import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const Button = styled.button`
  padding: 8px;
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bgSecondary};
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    &:not(:disabled) {
      background: ${(props) => props.theme.bgSecondaryActive};
    }
  }
`;
