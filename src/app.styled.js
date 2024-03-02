import styled from 'styled-components';

export const AppStyled = styled.div`
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
  font-family: 'Inter', sans-serif;
`;
