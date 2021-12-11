import React, { useContext } from 'react';

import Controls from '../Button/Controls';
import UpdateButton from '../Button/UpdateButton';
import Icon from '../Icon/Icon';
import IconImage from '../Icon/IconImage';

import deleteImage from '../../../assets/delete.png';
import checkedImageOff from '../../../assets/check_off.png';
import checkedImageOn from '../../../assets/check_on.png';
import editImage from '../../../assets/editing.png';

import AppContext from '../../../store/app-context';

const Toolbar = (props) => {
  const ctx = useContext(AppContext);

  return (
    <Controls>
      <UpdateButton
        visible={props.complete}
        onClick={ctx.onChangeComplete.bind(null, props.id, props.complete)}
      >
        <Icon>
          <IconImage
            theme={ctx.theme}
            src={props.complete ? checkedImageOn : checkedImageOff}
            alt='Completed'
          />
        </Icon>
      </UpdateButton>
      <UpdateButton onClick={ctx.onShowTask.bind(null, props.task, props.id)}>
        <Icon>
          <IconImage theme={ctx.theme} src={editImage} alt='Edit' />
        </Icon>
      </UpdateButton>
      <UpdateButton onClick={ctx.onDelete.bind(null, props.id)}>
        <Icon>
          <IconImage theme={ctx.theme} src={deleteImage} alt='Delete' />
        </Icon>
      </UpdateButton>
    </Controls>
  );
};

export default Toolbar;
