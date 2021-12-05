import React from 'react';

import styled from 'styled-components';
import theme from '../../UI/Theme/Theme';

import TitleH1 from './TitleH1';

const HeaderDiv = styled.header`
  background-color: ${theme.primaryLight};
`;

const Header = (props) => {
  return (
    <HeaderDiv>
      <TitleH1 animation title={props.title}>
        {props.title}
      </TitleH1>
      {props.children}
    </HeaderDiv>
  );
};

export default Header;
