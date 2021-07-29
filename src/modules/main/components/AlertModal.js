import React from 'react';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { CLOSE_MODAL } from '../../redux/actions/constantsAction.js';
import { FlexHCenter } from '../../utils/mixin';

function AlertModal({ message, goTo }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch({ type: CLOSE_MODAL });
    history.push(goTo);
  };
  return (
    <Wrapper>
      <div className="modal">
        <div className="alert">
          <p>{message}</p>
          <div className="alert__button">
            <button
              type="button"
              className="btn btn__success"
              onClick={closeModalHandler}
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default AlertModal;

const Wrapper = styled.div`
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3000;
    width: 15rem;
    height: 15rem;
    background-color: #fff;
    border-radius: 0.5rem;
    .alert {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      p {
        font-size: 1rem;
        color: var(--color-black);
        text-align: center;
      }
      .alert__button {
        display: flex;
        justify-content: center;
        margin-top: 2rem;
      }
    }
    .modal__close {
      position: absolute;
      top: -2rem;
      right: -2rem;
    }
  }
  .btn__success {
    background-color: var(--clr-green-light);
    padding: 1rem 2rem;
    color: var(--color-black);
    font-size: 1rem;
    &:hover {
      opacity: 0.8;
    }
  }

  @media screen and (min-width: 800px) {
    .modal {
      width: 30rem;
      height: 15rem;
      .alert {
        p {
          font-size: 1.5rem;
        }
      }
    }
    .modal__close {
      top: -2.5rem;
      right: -2.5rem;
    }
    .btn__success {
      font-size: 1.5rem;
    }
  }
`;
