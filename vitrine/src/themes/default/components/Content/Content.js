import React from 'react';

import {
  _ContentContainer
} from './styles';

const Content = ({ children }) => (
  <_ContentContainer left>
    {children}
  </_ContentContainer>
)

export default Content;
