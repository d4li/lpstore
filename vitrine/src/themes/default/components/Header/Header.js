import React from 'react';
// import Router from 'next/router';
// import Head from 'next/head';

import Logo from '../Logo';
import NavHeader from '../NavHeader';
// import Notifications from '../Notifications';
import SearchHeader from '../SearchHeader';

import {
  _HeaderContainer
} from './styles';

const Header = ({ title, scrolling }) => (
  <_HeaderContainer left scrolling={scrolling}>
    <Logo />
    <NavHeader />
    <SearchHeader />
  </_HeaderContainer>
)

export default Header;
