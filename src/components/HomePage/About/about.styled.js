import styled from 'styled-components';
import caretDown from '../../../assets/images/caret-down.png';

export const AboutsStyled = styled.div`
  scroll-margin-top: 80px;
  .accordion-item {
    background: none;
    border: none;
    .accordion-header {
      button {
        color: ${(props) => props.theme.text};
        padding: 12px 0;
        background: none;
        box-shadow: none;
        font-family: Inter;
        font-size: 16px;
        font-weight: 600;
        line-height: 24px;
        letter-spacing: 0em;
        text-align: left;

        &::after {
          color: ${(props) => props.theme.text};
          background-image: url(${caretDown});
        }
      }
    }
    .accordion-collapse {
      color: ${(props) => props.theme.textSecondary};
      .accordion-body {
        padding: 0;
        font-size: 14px;
      }
    }
  }
`;
