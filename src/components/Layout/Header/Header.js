import React from 'react';

import ResetButton from '../../UI/Button/ResetButton';
import TitleH1 from './TitleH1';

import styled from 'styled-components';

const HeaderDiv = styled.header`
  background-color: ${(props) => props.theme.primaryLight};
`;

const Header = (props) => {
  return (
    <HeaderDiv theme={props.theme}>
      <ResetButton
        onDefault={props.onDefault}
        onTheme={props.onTheme}
        animation={props.animation}
        theme={props.theme}
      />
      <TitleH1 theme={props.theme} animation title={props.title}>
        {props.title}
      </TitleH1>
      {props.children}
    </HeaderDiv>
  );
};

export default Header;
