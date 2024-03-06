import React, { useState } from 'react';
import { StatsSection } from '../homePage.styled';
import {
  Converter,
  ConverterInner,
  ConverterInnerSection,
  Faded,
  Links,
  Name,
  PictureWrapper,
  ShowAllButton,
  StatsHeader,
  StatsHeaderProfilePicture,
  StatsHeaderTitle,
  SubTitle,
  SupplyRaw,
  Tag,
  TagsContainer,
} from './stats.styled';
import profilePicture from '../../../assets/images/profile-picture.jpg';
import { Button, NavLink, StatItem } from '../../../utils';
import { ChartPieSlice, Globe, LinkedinLogo, ShareNetwork, Star } from 'phosphor-react';

export const Stats = () => {
  const [mayanksCount, setMayankCount] = useState('1');
  const [designersCount, setDesignersCount] = useState('2');
  const [showAllTags, setShowAllTags] = useState(false);
  const tags = ['Figma', 'Photoshop', 'Leadership', 'Sketch', 'Adobe Illustrator', 'Webflow'];

  return (
    <StatsSection>
      <StatsHeader>
        <StatsHeaderProfilePicture>
          <PictureWrapper>
            <img src={profilePicture} alt="" width="100%" />
          </PictureWrapper>
          <Name>Mayank Sharma</Name>
          <Button>
            <Star size={16} weight="fill" color="#858ca2" />
          </Button>
          <Button>
            <ShareNetwork size={16} color="#858ca2" />
          </Button>
        </StatsHeaderProfilePicture>
      </StatsHeader>
      <StatsHeaderTitle>
        A hands-on product designer and leader specialising in Web3 applications.
      </StatsHeaderTitle>
      <br />
      <Button style={{ fontSize: '12px', width: '100%', color: '#a1a7bb' }}>
        <ChartPieSlice size={15} /> Track in portfolio
      </Button>
      <br />
      <StatItem title="Figma" value={91} />
      <br />
      <StatItem title="Photoshop" value={82} />
      <br />
      <StatItem title="Sketch" value={87} />
      <br />
      <SupplyRaw>
        Total supply <span>1</span>
      </SupplyRaw>
      <br />
      <SupplyRaw>
        Max supply <span>1</span>
      </SupplyRaw>
      <Links className="d-flex flex-column">
        <span>Official links</span>
        <div className="d-flex align-items-center" style={{ gap: '8px' }}>
          <Button style={{ fontSize: '12px', padding: '3px 8px' }}>
            <Globe size={15} color="#a1a7bb" /> White paper
          </Button>
          <NavLink to="https://www.linkedin.com/in/mayankdesign/" target="_blank">
            <Button style={{ fontSize: '12px', padding: '3px 8px' }}>
              <LinkedinLogo size={15} color="#a1a7bb" /> Linkedin
            </Button>
          </NavLink>
        </div>
      </Links>
      <SubTitle>
        <span>Rating</span> · <Faded>Based on friends feedback</Faded>
      </SubTitle>
      <div className="d-flex align-items-center mt-3" style={{ gap: '8px', fontSize: '12px' }}>
        4.9
        <div className="d-flex align-items-center" style={{ gap: '2px', color: '#f5b97f' }}>
          <Star size={12} weight="fill" />
          <Star size={12} weight="fill" />
          <Star size={12} weight="fill" />
          <Star size={12} weight="fill" />
          <Star size={12} weight="fill" />
        </div>
      </div>
      <SubTitle>Mayank to other designers converter</SubTitle>
      <Converter>
        <ConverterInner>
          <ConverterInnerSection>
            <span>MAYANK</span>
            <input
              pattern="[0-9]+"
              placeholder="0"
              value={mayanksCount}
              onChange={(e) => {
                const proccessedValue = Number(e.target.value.replace(/[^0-9]/g, ''));
                const limitedValue = proccessedValue < 1 ? 1 : proccessedValue;
                setMayankCount(limitedValue.toString());
                setDesignersCount((limitedValue * 2).toString());
              }}
            />
          </ConverterInnerSection>
          <ConverterInnerSection>
            <span>DESIGNER</span>
            <input
              pattern="[0-9]+"
              placeholder="0"
              value={designersCount}
              onChange={(e) => {
                const proccessedValue = Number(e.target.value.replace(/[^0-9]/g, ''));
                const limitedValue = proccessedValue < 1 ? 1 : proccessedValue;
                const mayanksCount = Math.round(limitedValue / 2);
                setMayankCount(mayanksCount < 1 ? '1' : mayanksCount.toString());
                setDesignersCount(limitedValue.toString());
              }}
            />
          </ConverterInnerSection>
        </ConverterInner>
      </Converter>
      <SubTitle>Tags</SubTitle>
      <TagsContainer>
        {tags.slice(0, showAllTags ? tags.length : 3).map((tag, i) => (
          <Tag key={i}>{tag}</Tag>
        ))}
        {!showAllTags && (
          <ShowAllButton onClick={() => setShowAllTags(true)}>Show all</ShowAllButton>
        )}
      </TagsContainer>
    </StatsSection>
  );
};
