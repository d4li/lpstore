import React, { PureComponent } from 'react';
import { Link } from "react-router-dom";

import {
  _NavHeaderContainer,
  _NavHeader,
  _NavHeaderList,
  _NavHeaderItem,
  _NavHeaderLink,
} from './styles';

class NavHeader extends PureComponent {
  _handleNav = () => {
    document.querySelector('.logo').classList.toggle('v2');
    document.querySelector('.nav').classList.toggle('open');
  }

  render() {
    return (
      <_NavHeaderContainer>
        <_NavHeader>
          <i className="fa fa-bars" onClick={this._handleNav}></i>
          <_NavHeaderList>
            <_NavHeaderItem>
              <_NavHeaderLink to="/">Home</_NavHeaderLink>
            </_NavHeaderItem>
            <_NavHeaderItem>
              <_NavHeaderLink to="/quem-somos">Quem Somos</_NavHeaderLink>
            </_NavHeaderItem>
            <_NavHeaderItem>
              <a>Produtos</a>
            </_NavHeaderItem>
            <_NavHeaderItem>
              <a>Contato</a>
            </_NavHeaderItem>
          </_NavHeaderList>
        </_NavHeader>
      </_NavHeaderContainer>
    );
  }
}

export default NavHeader;
