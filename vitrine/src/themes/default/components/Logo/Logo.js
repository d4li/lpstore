import React, { Component } from 'react';
// import Router from 'next/router';
// import Link from 'next/link';

import {
  _LogoContainer,
  _Logo,
  _TitleHeader
} from './styles';

class Logo extends Component {

  render() {
    return (
      <_LogoContainer>
        {/* <_Logo src={'/images/logo.png'} alt={'Cabide de Luxo - u,u'} /> */}
        <_Logo src={'/images/dress.png'} alt={'Cabide de Luxo - u,u'} />
        {/* <_Logo src={'http://www.cabidecompartilhado.com.br/template/default/images/fixo/logo.png'} alt={'Cabide de Luxo - u,u'} /> */}
        <_TitleHeader>Cabide de Luxo</_TitleHeader>
      </_LogoContainer>
    );
  }
}

export default Logo;
