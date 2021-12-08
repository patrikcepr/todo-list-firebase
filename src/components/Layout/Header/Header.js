import React, { useContext } from 'react';

import ResetButton from '../../UI/Button/ResetButton';
import TitleH1 from './TitleH1';

import AppContext from '../../../store/app-context';

import styled from 'styled-components';

const HeaderDiv = styled.header`
  background-color: ${(props) => props.theme.primaryLight};
`;

const Header = (props) => {
  const ctx = useContext(AppContext);

  return (
    <HeaderDiv theme={ctx.theme}>
      <ResetButton />
      <TitleH1 theme={ctx.theme} animation title={props.title}>
        {props.title}
      </TitleH1>
      {props.children}
    </HeaderDiv>
  );
};

export default Header;
