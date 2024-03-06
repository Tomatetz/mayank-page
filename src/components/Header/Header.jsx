import React, { useContext } from 'react';
import { HeaderStyled, LinksContainer, Logo, LogoWrapper } from './header.styled';
import logo from '../../assets/images/logo.png';
import { Button } from '../../utils';
import { ChartPieSlice, Star } from 'phosphor-react';
import { HomePageContext } from '../HomePage/HomePageContext';

export const Header = () => {
  const { setShowContactForm } = useContext(HomePageContext);
  return (
    <HeaderStyled className="d-flex justify-content-between align-items-center">
      <LogoWrapper>
        <Logo src={logo} alt="logo" />
      </LogoWrapper>
      <LinksContainer>
        {/* <ThemeSwitcher onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
          {theme === 'dark' ? <Sun size={20} weight="fill" /> : <Moon size={20} weight="fill" />}
        </ThemeSwitcher> */}
        <Button
          type="ghost"
          onClick={() => {
            setShowContactForm(true);
          }}
        >
          <Star size={15} weight="fill" style={{ color: '#646b80', marginRight: '4px' }} />{' '}
          Watchlist
        </Button>
        <Button
          type="ghost"
          onClick={() => {
            setShowContactForm(true);
          }}
        >
          <ChartPieSlice size={15} weight="fill" style={{ color: '#646b80', marginRight: '4px' }} />{' '}
          Portfolio
        </Button>
      </LinksContainer>
    </HeaderStyled>
  );
};
