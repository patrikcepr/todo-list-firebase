import React, { Fragment, useRef } from 'react';
import ReactDom from 'react-dom';

import Card from '../Card/Card';
import Input from '../Input/Input';
import Button from '../Button/Button';

import styled, { keyframes } from 'styled-components';

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
`;

const ModalLayer = styled.div`
  position: fixed;
  top: 20vh;
  left: 5%;
  width: 90%;
  z-index: 100;
  animation: ${slideDown} 300ms ease-out forwards;

  @media (min-width: 768px) {
    width: 38rem;
    left: calc(50% - 19rem);
  }
`;
const Backdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
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
  const taskRef = useRef('');

  const updateHandler = () => {
    const task = {
      id: props.taskToEdit.id,
      task: taskRef.current.value,
      complete: props.taskToEdit.complete,
    };

    console.log(task);
    props.onUpdateTask(task);
  };

  return (
    <Fragment>
      {ReactDom.createPortal(
        <Backdrop onClick={props.onHideModal} />,
        document.getElementById('backdrop-root')
      )}
      {ReactDom.createPortal(
        <ModalLayer>
          <Card>
            <Div>
              <Input defaultValue={props.taskToEdit.task} ref={taskRef} />
              <Button onClick={updateHandler}>Update</Button>
            </Div>
          </Card>
        </ModalLayer>,
        document.getElementById('overlay-root')
      )}
    </Fragment>
  );
};

export default Modal;
