import React, { Component } from 'react';
// import Link from 'next/link';

import {
  _SearchHeaderContainer
} from './styles';

class SearchHeader extends Component{
  constructor(props) {
    super(props);
    this.state = {
      searchValue: ''
    };

    this._handleSearchKeyup = this._handleSearchKeyup.bind(this);
    this._handleSearchFocus = this._handleSearchFocus.bind(this);
    this._handleSearchBlur = this._handleSearchBlur.bind(this);
  }

  _handleSearchKeyup() {
    let _searchInput = document.querySelector('.search input').value;
    return this.setState({searchValue: _searchInput});
  }//_handleSearchKeyup

  _handleSearchFocus() {
    let _search = document.querySelector('.search');
    return _search.classList.add('opened');
  }//_handleSearchFocus

  _handleSearchBlur() {
    let _search = document.querySelector('.search');
    let _searchInput = document.querySelector('.search input').value;
    if (!_searchInput.length)
      return _search.classList.remove('opened');
  }//_handleSearchBlur

  render() {
    const { searchValue } = this.state;
    return (
      <_SearchHeaderContainer className="searchInput">
        {/* <Link href={{pathname: '/search', query: {q: searchValue}}}>
          <a title="Buscar"><i className="icon"></i></a>
        </Link> */}
        <input
          name="search"
          type="text"
          onKeyUp={this._handleSearchKeyup}
          onFocus={this._handleSearchFocus}
          onBlur={this._handleSearchBlur} placeholder="Encontre o que procura   ; )" />
      </_SearchHeaderContainer>
    );
  }
}

export default SearchHeader;
