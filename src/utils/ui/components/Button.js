import styled from 'styled-components';

export const Button = styled.button`
  padding: 8px;
  color: ${(props) => props.theme.text};
  background: ${(props) => (props.type === 'ghost' ? 'none' : props.theme.bgSecondary)};
  border-radius: 8px;
  border: none;
  display: flex;
  align-items: center;
  gap: 4px;
  &:hover {
    &:not(:disabled) {
      background: ${(props) =>
        props.type === 'ghost' ? props.theme.bgSecondary : props.theme.bgSecondaryActive};
    }
  }
`;
