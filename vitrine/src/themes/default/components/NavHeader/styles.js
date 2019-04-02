import styled from 'styled-components';
import { Link } from "react-router-dom";

export const _NavHeaderContainer = styled.div`
  display: flex;
  flex-grow: 2;
  align-items: center;
  justify-content: center;
`;

export const _NavHeader = styled.nav`
  display: flex;
`;

export const _NavHeaderList = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
`;

export const _NavHeaderItem = styled.li`
  margin: 0 20px;
  text-transform: lowercase;
`;

export const _NavHeaderLink = styled(Link)`
  padding: 10px;
  color: #FFF;
  text-decoration: none;
  transition: 0.3s;
  position: relative;
  &::before{
    transition: 0.2s;
    content: '';
    width: 100%;
    height: 1px;
    background: #FFF;
    position: absolute;
    left: 0;
    bottom: 0;
  }
  &:hover{
    opacity: 0.5;
    &::before{
      width: 60%;
      left: 20%;
      bottom: 5px;
    }
  }
`;