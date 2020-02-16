import styled from 'styled-components';

export const Container = styled.div`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  background: #ccc;
  height: 100vh;
  width: 460px;
  top: 0;
  right: 0;

  aside {
    height: 80px;
    background: #558fc6;
  }
  nav {
    background: #ecf0f1;
    height: calc(100% - 80px);

    a {
      display: flex;
      height: 70px;
      color: #337ab7;
      padding: 0 20px;
      font-size: 18px;

      div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 15px;
        /* padding-right: 15px; */
        /* border-right: 1px solid #c3c3c3; */
      }

      strong {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 1;
      }
    }
  }
`;
