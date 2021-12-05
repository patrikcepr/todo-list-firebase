import React from 'react';

import styled from 'styled-components';

import TitleH1 from './TitleH1';

const HeaderDiv = styled.header`
  background-color: burlywood;
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
