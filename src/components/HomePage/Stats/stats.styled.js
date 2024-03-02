import styled from 'styled-components';
import { colors } from '../../../utils';

export const StatsHeader = styled.div`
  backdrop-filter: blur(12px);
  position: sticky;
  display: block;
  top: -24px;
  margin-top: -24px;
  margin-left: -24px;
  margin-right: -24px;
  margin-bottom: 0px;
  z-index: 100;
  padding: 24px;
  // background: ${(props) => props.theme.bg};
`;

export const StatsHeaderProfilePicture = styled.div`
  display: grid;
  column-gap: 8px;
  -webkit-box-align: center;
  align-items: center;
  grid-template-columns: min-content 1fr repeat(2, min-content);
  margin-top: 0px;
  margin-bottom: 0px;
`;

export const PictureWrapper = styled.div`
  width: 24px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Name = styled.div`
  font-size: 18px;
  max-width: 100%;
  font-weight: 500;
`;
export const StatsHeaderTitle = styled.div`
  font-size: 21px;
  font-weight: 500;
  line-height: 29px;
  margin-top: 16px;
`;

export const SubTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 12px;
  margin-top: 32px;
`;

export const Faded = styled.div`
  font-size: 11px;
  color: ${colors.faded};
`;

export const Links = styled.div`
  margin-top: 32px;
  font-size: 12px;
  gap: 8px;
`;

export const ConverterInnerSection = styled.div`
  box-sizing: border-box;
  margin: 0px;
  padding: 5px 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.bg};
  input {
    width: 65%;
    background-color: ${(props) => props.theme.bg};
    border: none;
    height: 18px;
    outline: none;
    appearance: none;
    text-align: right;
    padding: 0px;
    color: ${(props) => props.theme.text};
  }
`;
export const ConverterInner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 1px;
  border-radius: 6px;
  overflow: hidden;
`;
export const Converter = styled.div`
  box-sizing: border-box;
  margin-top: 8px;
  padding: 4px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  border-radius: 8px;
  background-color: ${(props) => props.theme.border};
`;

export const TagsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
  font-size: 12px;
  flex-wrap: wrap;
`;

export const Tag = styled.div`
  background-color: ${(props) => props.theme.bgSecondary};
  border-radius: 20px;
  padding: 4px 8px;
  color: ${(props) => props.theme.textSecondary};
`;

export const ShowAllButton = styled.div`
  color: #6188ff;
`;

export const tmplt = styled.div``;
