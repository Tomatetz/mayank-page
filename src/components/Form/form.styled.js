import styled from 'styled-components';
import { Button, Form } from 'react-bootstrap';

export const FormStyled = styled(Form)`
  background-color: #222531;
  padding: 24px;
  color: #fff;
  overflow: hidden;
  input,
  textarea {
    background: #171924 !important;
    border-radius: 2px;
    border-color: ${(props) => props.theme.border};
    color: #fff;
    &:focus {
      background: #171924;
      color: #fff;
    }
  }
`;
export const Label = styled(Form.Label)`
  font-weight: 500;
`;

export const FormHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
`;
