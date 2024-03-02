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

export const ProjectItemDescription = styled.div`
  color: ${(props) => props.theme.textSecondary};
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const ProjectItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const ProjectItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ImageWrapper = styled.div`
  padding: 33%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
