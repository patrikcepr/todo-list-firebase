import React from 'react';

import UpdateButton from './UpdateButton';
import IconImage from '../Icon/IconImage';
import Icon from '../Icon/Icon';
import resetImage from '../../../assets/reset.png';

import styled from 'styled-components';

import theme from '../Theme/Theme';

const LeftCorner = styled.div`
  position: sticky;
  width: 40px;
  height: 40px;
  padding: 10px 5px 0;
  top: 10px;
  left: 5px;
  z-index: 50;
  float: left;
  background-color: ${theme.primaryLight};
  border-radius: 4px;
`;

const ResetButton = (props) => {
  return (
    <LeftCorner>
      <UpdateButton complete onClick={props.onDefault}>
        <Icon>
          <IconImage src={resetImage} alt='Reset to default' />
        </Icon>
      </UpdateButton>
    </LeftCorner>
  );
};

export default ResetButton;
