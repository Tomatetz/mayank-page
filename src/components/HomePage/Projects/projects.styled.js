import styled from 'styled-components';

export const ProjectsStyled = styled.div`
  scroll-margin-top: 80px;
`;
export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;

  @media (min-width: 1024px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export const ProjectItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ImageWrapper = styled.div`
  padding: 33%;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;
export const tmplt = styled.div``;
