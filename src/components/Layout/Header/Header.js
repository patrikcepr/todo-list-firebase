import React, { useContext } from 'react';

import Toolbar from '../../UI/Button/Toolbar';
import TitleH1 from './TitleH1';

import AppContext from '../../../store/app-context';

import styled from 'styled-components';

const HeaderDiv = styled.header`
  background-color: ${(props) => props.theme.primaryDark};
`;

const Header = (props) => {
  const ctx = useContext(AppContext);

  return (
    <HeaderDiv theme={ctx.theme}>
      <Toolbar />
      <TitleH1 theme={ctx.theme} animation title={props.title}>
        {props.title}
      </TitleH1>
      {props.children}
    </HeaderDiv>
  );
};

export default Header;
