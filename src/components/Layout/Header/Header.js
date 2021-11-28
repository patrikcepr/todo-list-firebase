import React from 'react';
import TitleH1 from './TitleH1';

const Header = (props) => {
  return (
    <header>
      <TitleH1>{props.title}</TitleH1>
      {props.children}
    </header>
  );
};

export default Header;
