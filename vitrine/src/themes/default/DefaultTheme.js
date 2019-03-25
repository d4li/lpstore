import React, { Component, Fragment } from 'react';

import LoadingLayer from './components/LoadingLayer';
import Header from './components/Header';
import Content from './components/Content';

import { ThemeService, ThemeProvider, ThemeProvider_Consumer } from './';

import {
  _ThemeContainer
} from './styles';

class DefaultTheme extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isShowingLoginForm: false
    };

    this._scroll = () => {
      let _app = document.querySelector('.app');
      let lastScollValue = window.scrollY;
      _app && lastScollValue > 50
        ? _app.classList.add('scrolled')
        : _app.classList.remove('scrolled');
    }//_scroll
  }

  // async componentDidMount() {
  //   const { restrict } = this.props;
  //   try {
  //     const PlayerAuth = restrict ? await ThemeService._getAuth() : null;
  //     window.scrollTo(0,0);
  //     this._scroll();
  //     window.onscroll = () => this._scroll();
  //     if (location.pathname == '/login') {
  //       if (!Router.router.query.backTo)
  //         return Router.push({pathname: '/minha-conta/perfil'});
  //       return Router.push({pathname: Router.router.query.backTo});
  //     }
  //   } catch (e) {
  //     return Router.push({pathname: '/notAuthorized', query: {backTo: location.pathname}});
  //   }
  // }

  _toggleLoginform = (isShowing = false) => {
    this.setState({
      isShowingLoginForm: isShowing
    })
  }
  render() {
    const { homepage, token } = this.props;
    const { logged, isShowingLoginForm } = this.state;

    return (
      <_ThemeContainer className="app">
        <ThemeProvider>
          <ThemeProvider_Consumer>
            {({ pageLoad }) => (
              <Fragment>
                {/* <LoginHeader
                  playerActions={playerActions}
                  handleClose={() => this._toggleLoginform(false)}
                  className={isShowingLoginForm ? 'opened' : 'closed'}
                /> */}
                <Header
                  title="Vitrine - LP"
                />
                <Content>
                  {!pageLoad ? this.props.children : <LoadingLayer />}
                </Content>
                {/* <footer className="footer">
                  {homepage ? <Newsletter /> : undefined}
                  <NavSideBar
                    playerActions={playerActions}
                    logged={auth}
                    profile={profile}
                    showLoginForm={() => this._toggleLoginform(true)}
                  />
                  <Footer />
                </footer> */}
              </Fragment>
            )}
          </ThemeProvider_Consumer>
        </ThemeProvider>
      </_ThemeContainer>
    );
  }
}

DefaultTheme.contextType = ThemeProvider;

export default DefaultTheme;
