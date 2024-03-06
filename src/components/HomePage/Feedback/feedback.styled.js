import styled from 'styled-components';

export const FeedbackStyled = styled.div`
  position: relative;
  height: 100%;
  overflow-y: scroll;
  scrollbar-width: none;
  @media (min-width: 1280px) {
    padding-bottom: 128px;
  }
  @media (max-width: 1023.98px) {
    scroll-margin-top: 180px;
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
