import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';

export const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.text};
  ${(props) =>
    //@ts-ignore
    props.isButton &&
    `
        height: 36px;
        white-space: nowrap;
        padding: 0px 8px;
        margin: 0px;
        border-radius: 8px;
        display: flex;
        align-items: center;
        &:hover {
            &:not(:disabled) {
                background: ${props.theme.bgActive};
            }
        }
  `}
`;
