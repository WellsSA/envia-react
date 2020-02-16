import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  /* background: #fff; */
  background: linear-gradient(-90deg, #558fc6, #33b5e5);
  /* padding: 2px; */
`;

export const Content = styled.div`
  height: 80px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const ProfileAvatar = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  position: relative;

  img {
    position: absolute;
    width: 140%;
    height: 140%;
    border: 2px solid #33b5e5;
    border-radius: 50%;
    image-rendering: optimizeSpeed;
    background-repeat: no-repeat;
  }
`;

export const MainNavigation = styled.div`
  height: 100%;
  display: flex;
  opacity: 0.7;
`;

export const NavItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100px;
  height: 100%;
  display: flex;
  /* background: radial-gradient(#eee, #e3e3e3); */
  background: ${darken(0.2, '#558fc6')};
  cursor: pointer;
  font-size: 33px;
  color: ${darken(0.15, '#fefefe')};
`;
