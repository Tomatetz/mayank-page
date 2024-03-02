import styled from 'styled-components';

export const ArticlesStyled = styled.div`
  scroll-margin-top: 80px;
`;

export const ArticleItemDescription = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.textSecondary};
  gap: 12px;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
`;
export const ArticleItemTitle = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.text};
`;

export const ArticleItemFooter = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
`;

export const ArticleItemImage = styled.img`
  width: 184px;
  height: 96px;
  border-radius: 8px;
`;

export const ArticleItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
  margin-top: 24px;
  &:hover {
    ${ArticleItemTitle} {
      text-decoration: underline;
    }
  }
`;

export const SeeMoreButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 48px;
`;
