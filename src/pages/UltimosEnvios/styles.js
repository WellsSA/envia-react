import styled from 'styled-components';
import { getColor } from '../../utils/theme';
import { fonts } from '../../styles/scale';

export const Container = styled.div`
  padding: 10px 0;
  max-height: calc(100vh - 200px);
  overflow: auto;

  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const Message = styled.div`
  display: flex;
  margin: 25px auto;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    margin: 30px;
    font-size: ${fonts.sectionTitleSize};
    color: ${props => getColor(props, 'strongText')};
  }
`;

export const Marker = styled.div`
  display: flex;
  width: 85%;
  border-left: 5px solid ${props => getColor(props, 'strongText')};
  background: ${props => getColor(props, 'backgroundHighlight')};
  padding: 10px 0;
  border-radius: 12px;

  > div:first-child {
    border-right: thin solid #ccc;
  }
`;

export const InformationSection = styled.div`
  width: 50%;
  div {
    font-size: ${fonts.titleFontSize};
    text-transform: uppercase;
    padding: 8px 16px;

    strong {
      color: ${props => getColor(props, 'strongText')};
      margin-right: 10px;
    }

    span {
    }
  }
`;

export const EmptyMarker = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
