import React, { useContext } from 'react';

import UpdateButton from './UpdateButton';
import IconImage from '../Icon/IconImage';
import Icon from '../Icon/Icon';

import AppContext from '../../../store/app-context';

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

const ToolBar = (props) => {
  const ctx = useContext(AppContext);

  return (
    <LeftCorner>
      <UpdateButton visible onClick={ctx.onDefault}>
        <Icon>
          <IconImage
            theme={ctx.theme}
            src={resetImage}
            alt='Reset to default'
          />
        </Icon>
      </UpdateButton>
      <UpdateButton visible animation={ctx.isAnimated}>
        <Icon>
          <IconImage
            theme={ctx.theme}
            src={themeImage}
            alt='Change theme'
            onClick={ctx.onTheme}
            opacity='0.9'
          />
        </Icon>
      </UpdateButton>
    </LeftCorner>
  );
};

export default ToolBar;
