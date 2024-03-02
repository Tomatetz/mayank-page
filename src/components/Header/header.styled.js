import styled from 'styled-components';
import { colors } from '../../utils';

export const LogoWrapper = styled.div`
  width: 200px;
`;
export const Logo = styled.img`
  position: absolute;
  left: 16px;
  top: 10px;
  height: 50px;
`;

export const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const ThemeSwitcher = styled.div`
  cursor: pointer;
  height: 20px;
  margin-right: 16px;
`;
export const HeaderStyled = styled.div`
  padding: 24px;
  border-bottom: 1px solid ${(props) => props.theme.border};
  height: 70px;
  overflow: hidden;
  position: relative;
  font-size: 12px;
  user-select: none;
`;
