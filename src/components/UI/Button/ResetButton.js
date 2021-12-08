import React from 'react';

import UpdateButton from './UpdateButton';
import IconImage from '../Icon/IconImage';
import Icon from '../Icon/Icon';
import resetImage from '../../../assets/reset.png';

import themeImage from '../../../assets/1977475.png';

import styled from 'styled-components';

const LeftCorner = styled.div`
  position: absolute;
  width: 35px;
  height: 35px;
  padding: 10px 5px 0;
  top: 10px;
  left: 5px;
  z-index: 40;
  display: flex;
  gap: 0.5rem;
`;

const ResetButton = (props) => {
  return (
    <LeftCorner>
      <UpdateButton complete onClick={props.onDefault}>
        <Icon>
          <IconImage src={resetImage} alt='Reset to default' />
        </Icon>
      </UpdateButton>
      <UpdateButton complete animation={props.animation}>
        <Icon>
          <IconImage src={themeImage} onClick={props.onTheme} opacity='0.7' />
        </Icon>
      </UpdateButton>
    </LeftCorner>
  );
};

export default ResetButton;
