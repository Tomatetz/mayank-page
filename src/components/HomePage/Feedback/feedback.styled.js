import styled from 'styled-components';

export const FeedbackStyled = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  @media (min-width: 1280px) {
    padding-bottom: 128px;
  }
`;
export const FeedbackItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  display: flex;
  flex-direction: column;
  padding: 24px 0px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  gap: 24px;
`;
export const FeedbackItemHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  letter-spacing: 0em;
`;
export const FeedbackCopy = styled.div`
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
`;
export const FeedbackItemImage = styled.img`
  width: 24px;
  height: 24px;
  border-radius: 50%;
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
    grid-row: 7/8;
    padding: 0px 16px;
    max-width: 100vw;
    scroll-margin-top: 180px;
  }
`;
