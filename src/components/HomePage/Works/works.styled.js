import styled from 'styled-components';

export const WorksStyled = styled.div`
  scroll-margin-top: 80px;
`;
export const WorkTitle = styled.div`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0em;
  margin-top: 32px;
`;
export const WorkSubTitle = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  color: ${(props) => props.theme.textSecondary};
`;
export const WorkPreviewImage = styled.div`
  margin-top: 12px;
  img {
    width: 100%;
  }
`;
export const tmplt = styled.div``;
