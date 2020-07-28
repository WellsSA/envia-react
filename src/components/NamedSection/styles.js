import styled from 'styled-components';
import { fonts } from '../../styles/scale';
import { getColor } from '../../utils/themeHelper';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  .title {
    display: block;
    font-size: ${fonts.sectionTitleSize};
    color: ${props => getColor(props, 'strongText')};
    position: relative;
    display: flex;
    align-items: center;
    padding-bottom: 5px;
    margin-bottom: 5px;
    text-transform: uppercase;

    span {
      margin-right: 5px;
    }

    ::after {
      content: '';
      width: 70%;
      height: 1px;
      background: ${props => getColor(props, 'backgroundHighlight')};
      position: absolute;
      bottom: 0;
    }
  }
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
`;
