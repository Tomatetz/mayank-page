import React from 'react';
import { HeaderStyled, LinksContainer, Logo, LogoWrapper, ThemeSwitcher } from './header.styled';
import logo from '../../assets/images/logo.png';
import { NavLink } from '../../utils';
import { ChartPieSlice, Moon, Star, Sun } from 'phosphor-react';

// import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';

export const Header = ({ theme, setTheme }) => {
  return (
    <HeaderStyled className="d-flex justify-content-between align-items-center">
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
      </LogoWrapper>
      <LinksContainer>
        {/* <ThemeSwitcher onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun size={20} weight="fill" /> : <Moon size={20} weight="fill" />}
        </ThemeSwitcher> */}
        {/* @ts-ignore */}
        <NavLink isButton to="/">
          <Star size={15} weight="fill" style={{ color: '#646b80', marginRight: '4px' }} />{' '}
          Watchlist
        </NavLink>
        {/* @ts-ignore */}
        <NavLink isButton to="/">
          <ChartPieSlice size={15} weight="fill" style={{ color: '#646b80', marginRight: '4px' }} />{' '}
          Portfolio
        </NavLink>
      </LinksContainer>
    </HeaderStyled>
  );
};
