import React, { Fragment, useRef, useContext } from 'react';
import ReactDom from 'react-dom';

import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';

import AppContext from '../../../store/app-context';

import styled from 'styled-components';

import { slideDown } from '../Animations/Animations';

const ModalLayer = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  z-index: 100;
  animation: ${slideDown} 0.5s ease-out forwards;

  @media (min-width: 768px) {
    width: 38rem;
    left: calc(50% - 19rem);
  }
`;
const Backdrop = styled.div`
  background-color: ${(props) => props.theme.transparentBackground};
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;
  width: 100%;
  height: 100vh;
`;

const Div = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  align-items: center;
`;

const Modal = (props) => {
  const ctx = useContext(AppContext);

  const taskRef = useRef('');

  const updateHandler = () => {
    const task = {
      id: ctx.taskToEdit.id,
      task: taskRef.current.value,
      complete: ctx.taskToEdit.complete,
    };

    ctx.onUpdateTask(task);
  };

  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={ctx.onHideModal} theme={ctx.theme} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalLayer theme={ctx.theme} autoFocus={false}>
          <Card theme={ctx.theme}>
            <Div>
              <Input
                theme={ctx.theme}
                defaultValue={ctx.taskToEdit.task}
                ref={taskRef}
                autoFocus={true}
              />
              <Button theme={ctx.theme} width='100%' onClick={updateHandler}>
                Update
              </Button>
            </Div>
          </Card>
        </ModalLayer>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default Modal;
