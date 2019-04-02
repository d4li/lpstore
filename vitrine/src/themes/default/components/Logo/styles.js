import styled from 'styled-components';

export const _LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  &:hover{
    img{
      transform: rotate(10deg);
    }
    h1{
      text-shadow: -2px -1px 3px rgba(255,255,255,0.6);
      margin-left: 50px;
    }
  }
`;

export const _Logo = styled.img`
  width: auto;
  height: 80px;
  transition: 0.3s;
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 2;
`;

export const _TitleHeader = styled.h1`
  transition: 0.3s;
  color: #000;
  text-transform: uppercase;
  margin-left: 40px;
  letter-spacing: 1px;
`;