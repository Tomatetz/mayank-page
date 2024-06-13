import React, { useContext, useState } from 'react';
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
import { HomePageContext } from '../HomePageContext';

export const Stats = () => {
  const { setShowContactForm } = useContext(HomePageContext);
  const [alekseiCount, setAlekseiCount] = useState('1');
  const [designersCount, setDesignersCount] = useState('2');
  const [showAllTags, setShowAllTags] = useState(false);
  const tags = ['React', 'NextJS', 'TypeScript', 'D3', 'GraphQL', 'Web3'];

  return (
    <StatsSection>
      <StatsHeader>
        <StatsHeaderProfilePicture>
          <PictureWrapper>
            <img src={profilePicture} alt="" width="100%" />
          </PictureWrapper>
          <Name>Aleksei Ganikhin</Name>
          <Button
            onClick={() => {
              setShowContactForm(true);
            }}
          >
            <Star size={16} weight="fill" color="#858ca2" />
          </Button>
          <Button
            onClick={() => {
              setShowContactForm(true);
            }}
          >
            <ShareNetwork size={16} color="#858ca2" />
          </Button>
        </StatsHeaderProfilePicture>
      </StatsHeader>
      <StatsHeaderTitle>
        A hands-on Frontend developer and leader specialising in Web3 applications.
      </StatsHeaderTitle>
      <br />
      <Button
        style={{ fontSize: '12px', width: '100%', color: '#a1a7bb' }}
        onClick={() => {
          setShowContactForm(true);
        }}
      >
        <ChartPieSlice size={15} /> Track in portfolio
      </Button>
      <br />
      <StatItem title="JavaScript" value={91} />
      <br />
      <StatItem title="TypeScript" value={82} />
      <br />
      <StatItem title="React" value={87} />
      <br />
      <StatItem title="NextJS" value={89} />
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
          <NavLink to="https://www.linkedin.com/in/aleksei-ganikhin/" target="_blank">
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
      <SubTitle>Aleksei to other developers converter</SubTitle>
      <Converter>
        <ConverterInner>
          <ConverterInnerSection>
            <span>ALEKSEI</span>
            <input
              pattern="[0-9]+"
              placeholder="0"
              value={alekseiCount}
              onChange={(e) => {
                const proccessedValue = Number(e.target.value.replace(/[^0-9]/g, ''));
                const limitedValue = proccessedValue < 1 ? 1 : proccessedValue;
                setAlekseiCount(limitedValue.toString());
                setDesignersCount((limitedValue * 2).toString());
              }}
            />
          </ConverterInnerSection>
          <ConverterInnerSection>
            <span>DEVELOPER</span>
            <input
              pattern="[0-9]+"
              placeholder="0"
              value={designersCount}
              onChange={(e) => {
                const proccessedValue = Number(e.target.value.replace(/[^0-9]/g, ''));
                const limitedValue = proccessedValue < 1 ? 1 : proccessedValue;
                const alksCount = Math.round(limitedValue / 2);
                setAlekseiCount(alksCount < 1 ? '1' : alksCount.toString());
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
