import styled from 'styled-components';

export const About = styled.div``;
export const ProjectsContainer = styled.div``;
export const WorksContainer = styled.div`
  @media (max-width: 1023.98px) {
    overflow-x: scroll;
    padding-left: 0px !important;
    padding-right: 0px !important;
    padding: 0px 16px !important;
    max-width: 100vw;
  }
`;
export const ArticlesContainer = styled.div`
  @media (max-width: 1023.98px) {
    padding: 0px 16px;
    max-width: 100vw;
  }
`;
export const FeedbackContainer = styled.div`
  height: 100vh;
  padding: 0px 16px !important;
  position: sticky;
  top: 0px;
  scrollbar-width: none;
  overflow: hidden;

  @media (min-width: 1280px) {
    grid-area: 1 / 3 / 999 / 4;
  }
  @media (min-width: 768px) {
    border-left-color: ${(props) => props.theme.border};
    border-left-width: 1px;
    border-left-style: solid;
  }

  @media (max-width: 1279.98px) and (min-width: 1024px) {
    position: relative;
    padding: 0px 5%;
    height: auto;
  }
  @media (max-width: 1023.98px) {
    position: relative;
    height: auto;
    overflow: auto;
    grid-row: 4 / 5;
    padding: 0px 16px;
    max-width: 100vw;
  }
`;
export const ChartContainer = styled.div`
  display: flex;
  flex-direction: column;
  // min-height: 400px;
  @media (max-width: 1023.98px) {
    padding: 0px 16px;
    max-width: 100vw;
    grid-row: 2 / 3;
    min-height: 0px;
    display: flex;
    flex-direction: column;
    isolation: isolate;
  }
`;
export const TabSelector = styled.div`
  overflow: hidden;
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${(props) => props.theme.border};
  isolation: isolate;
  transition: top 0.3s ease-in-out 0s;
  z-index: 100;
  top: 0px !important;
  position: sticky !important;
  background-clip: initial !important;
  min-height: initial !important;
  // padding-top: 0px !important;
  padding-bottom: 0px !important;

  @media (max-width: 1023.98px) {
    padding: 0px 16px;
    max-width: 100vw;
    grid-row: 1 / 2;
  }
`;
export const StatsSection = styled.div`
  padding: 24px;
  box-sizing: border-box;
  margin: 0px;
  z-index: 1;
  scrollbar-width: none;
  max-height: 100vh;
  height: 100%;
  overflow: scroll;
  position: sticky;
  top: 0px;
  @media (min-width: 768px) {
    border-right-color: ${(props) => props.theme.border};
    border-right-width: 1px;
    border-right-style: solid;
  }

  @media (max-width: 1023.98px) {
    grid-row: 3 / 4;
    max-height: unset;
    position: relative;
    padding: 0px 16px;
    max-width: 100vw;
  }
`;
export const Layout = styled.div`
  box-sizing: border-box;
  margin: 0px;
  display: grid;
  justify-content: space-between;
  align-items: flex-start;
  scrollbar-width: none;
  position: relative;

  > div {
    padding: 24px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: clamp(330px, 23%, 480px) 1fr clamp(330px, 23vw, 390px);
    ${StatsSection} {
      grid-row: 1 / 999;
    }
  }
  @media (max-width: 1279.98px) and (min-width: 1024px) {
    grid-template-columns: clamp(330px, 23%, 480px) 1fr;
    ${StatsSection} {
      grid-row: 1 / 999;
    }
  }
  @media (max-width: 1023.98px) {
    grid-template-columns: 1fr;
    max-height: unset;
    overflow: unset;
    ${StatsSection} {
      grid-row: 3 / 4;
      max-height: unset;
      position: relative;
    }
  }
`;

export const HomePageSectionTitle = styled.div`
  font-weight: 700;
  font-size: 25px;
`;
export const tmplt = styled.div``;
