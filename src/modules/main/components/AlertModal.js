import React from 'react';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TiTick, TiCancel } from 'react-icons/ti';
import {
  CLOSE_MODAL,
  USER_BOOKING_SUCCESS,
  USER_LOGOUT,
} from '../../redux/actions/constantsAction.js';
import { FlexHCenter } from '../../utils/mixin';

function AlertModal({ message, goTo, type, message2 }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const closeModalHandler = () => {
    dispatch({ type: CLOSE_MODAL });
    if (goTo) {
      history.push(goTo);
    }
  };
  const acceptModalHandler = () => {
    dispatch({
      type: USER_BOOKING_SUCCESS,
      payload: {
        type: 'Success',
        message: 'Đặt vé thành công, thông tin đặt vé đã gửi về email!',
        goTo: '/home',
      },
    });
  };
  const logoutHandler = () => {
    dispatch({ type: USER_LOGOUT });
    localStorage.clear();
    history.push('/home');
  };
  console.log(message);
  return (
    <Wrapper>
      <div className="modal">
        <div className="alert">
          {!(
            type === 'Warning' ||
            type === 'Confirm' ||
            type === 'Logout'
          ) ? null : (
            <div className="warning">
              <div className="warning__icon">
                <span>!</span>
              </div>
            </div>
          )}
          {!(type === 'Success') ? null : (
            <div className="success">
              <div className="success__icon">
                <TiTick />
              </div>
            </div>
          )}
          {!(type === 'Error') ? null : (
            <div className="error">
              <div className="error__icon">
                <TiCancel />
              </div>
            </div>
          )}
          <p className="alert__title">{message}</p>
          {message2 && <p className="alert__subTitle">{message2}</p>}
          <div className="alert__button">
            {type === 'Confirm' && (
              <button
                type="button"
                className="btn btn-paying"
                onClick={acceptModalHandler}
              >
                Đặt vé
              </button>
            )}
            {!(type === 'Logout') ? (
              <button
                type="button"
                className={`btn ${type === 'Confirm' ? 'btn__cancel' : null}`}
                onClick={closeModalHandler}
              >
                {type === 'Confirm' ? 'Hủy' : 'Ok'}
              </button>
            ) : (
              <button
                type="button"
                className={`btn ${type === 'Confirm' ? 'btn__cancel' : null}`}
                onClick={logoutHandler}
              >
                Logout
              </button>
            )}
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
      width: 80%;
      .alert__title,
      .alert__subTitle {
        font-size: 1.25rem;
        text-align: center;
        color: var(--color-seat);
      }
      .alert__title {
        font-weight: 700;
        font-size: 2rem;
        padding: 1rem 0;
        color: var(--color-black);
      }
      .alert__button {
        display: flex;
        justify-content: center;
        button {
          margin-right: 1rem;
        }
      }
    }
    .modal__close {
      position: absolute;
      top: -2rem;
      right: -2rem;
    }
  }
  .btn {
    font-size: 1.25rem;
    margin-top: 1.5rem;
    padding: 1rem 1.5rem;
    background-color: #44c020;
  }
  .btn__cancel {
    background: #4a4a4a;
  }
  /* type icon: warning */

  .warning__icon {
    position: relative;
    box-sizing: content-box;
    justify-content: center;
    width: 6rem;
    height: 6rem;
    margin: 0 auto;
    border: 0.25em solid transparent;
    border-radius: 50%;
    font-family: inherit;
    line-height: 5em;
    cursor: default;
    display: flex;
    justify-content: center;
    align-items: center;
    border-color: #facea8;
    color: #f8bb86;
    span {
      font-size: 4rem;
    }
  }
  /* type icon: success */
  .success {
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: content-box;
    margin: 0 auto;
    width: 5rem;
    height: 5rem;
    border: 0.25em solid rgba(165, 220, 134, 1);
    border-radius: 50%;
    .success__icon {
      svg {
        fill: rgba(165, 220, 134, 1);
        width: 3em;
        height: 3em;
      }
    }
  }
  /* type icon: error */
  .error {
    display: flex;
    justify-content: center;
    align-items: center;
    .error__icon {
      svg {
        fill: var(--color-redNetflix);
        width: 5em;
        height: 5em;
      }
    }
  }
  @media screen and (min-width: 800px) {
    .modal {
      width: 35rem;
      height: 23rem;
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
  }
`;
