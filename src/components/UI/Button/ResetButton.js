import React from 'react';

import UpdateButton from './UpdateButton';
import IconImage from '../Icon/IconImage';
import Icon from '../Icon/Icon';
import resetImage from '../../../assets/circular-arrow.png';

import styled from 'styled-components';

const LeftCorner = styled.div`
  position: sticky;
  width: 1.5rem;
  height: 1.5rem;
  padding: 8px 6px 4px 8px;
  top: 1.3rem;
  left: 1rem;
  z-index: 50;
  float: left;
  background-color: rgba(222, 184, 135, 0.5);
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
