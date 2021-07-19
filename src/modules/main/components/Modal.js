import React from 'react';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';

function Modal({ trailer }) {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className="modal">
        <AiOutlineCloseCircle
          className="modal__close"
          onClick={() => {
            dispatch({ type: CLOSE_MODAL });
          }}
        />
        <iframe
          id="ytplayer"
          title="youtube"
          type="text/html"
          width="740"
          height="490"
          src={trailer}
          frameBorder="0"
        />
      </div>
    </Wrapper>
  );
}

export default Modal;

const Wrapper = styled.div`
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    .modal__close {
      position: absolute;
      top: -2.5rem;
      right: -2.5rem;
    }
  }
  iframe {
    border: 4px solid var(--color-white);
  }
  svg {
    width: 4rem;
    height: 4rem;
    fill: var(--color-white);
    cursor: pointer;
  }
`;
