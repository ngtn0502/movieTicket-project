import React, { useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { TiTick, TiCancel } from 'react-icons/ti';
import { motion } from 'framer-motion';
import {
  CLOSE_MODAL,
  RESET__AMOUNT,
  USER_BOOKING_SUCCESS,
  USER_LOGOUT,
  USER_LOGOUT_SUCCESS,
} from '../../redux/actions/constantsAction.js';
import { FlexHCenter } from '../../utils/mixin';
import { bookingSeatAction } from '../../redux/actions/BookingAction/bookingAction.js';

const alertModalVariants = {
  hidden: {
    opacity: 0,
    y: -500,
  },
  visible: {
    opacity: 1,
    y: 0,
    animate: {
      duration: 1,
      type: 'spring',
      stiffness: 100,
    },
  },
};

function AlertModal({
  message,
  goTo,
  type,
  message2,
  choosingSeat,
  cineRoomMovie,
  className,
}) {
  const history = useHistory();
  const dispatch = useDispatch();
  // keydown esc to close modal
  const keydownHandler = (event) => {
    if (event.keyCode === 27) {
      dispatch({ type: CLOSE_MODAL });
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', keydownHandler);
  }, []);

  //
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
    // dispatch booking action in ALERTMODAL component is because i want send the booking request after user click confirm button

    // format to API data requirement
    const danhSachVe = [];
    choosingSeat.forEach((item) => {
      danhSachVe.push({ maGhe: item.maGhe, giaVe: item.giaVe });
    });
    // dispatch action creator booking
    dispatch(
      bookingSeatAction(
        cineRoomMovie.maLichChieu,
        danhSachVe,
        history,
        choosingSeat
      )
    );
    dispatch({
      type: RESET__AMOUNT,
    });
  };
  const logoutHandler = () => {
    dispatch({
      type: USER_LOGOUT_SUCCESS,
      payload: {
        type: 'Success',
        message: 'Đăng xuất thành công',
        goTo: '/home',
      },
    });
    // dispatch({ type: CLOSE_MODAL });
    dispatch({ type: USER_LOGOUT });
    localStorage.clear();
  };
  return (
    <Wrapper>
      <motion.div
        variants={alertModalVariants}
        initial="hidden"
        animate="visible"
        layout
        className="modal"
      >
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
              <div className="check-icon">
                <span className="icon-line line-tip" />
                <span className="icon-line line-long" />
                <div className="icon-circle" />
                <div className="icon-fix" />
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
      </motion.div>
    </Wrapper>
  );
}

export default AlertModal;

const Wrapper = styled.div`
  .modal {
    position: fixed;
    top: 20%;
    left: 7%;
    /* transform: translate(-50%, -50%); */
    z-index: 3000;
    width: 20rem;
    height: 25rem;
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
        font-size: 1.5rem;
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
    text-transform: none;
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
  /**
 * Extracted from: SweetAlert
 * Modified by: Istiak Tridip
 */
  .success {
    width: 80px;
    height: 115px;
    margin: 0 auto;

    .check-icon {
      width: 80px;
      height: 80px;
      position: relative;
      border-radius: 50%;
      box-sizing: content-box;
      border: 4px solid #4caf50;

      &::before {
        top: 3px;
        left: -2px;
        width: 30px;
        transform-origin: 100% 50%;
        border-radius: 100px 0 0 100px;
      }

      &::after {
        top: 0;
        left: 30px;
        width: 60px;
        transform-origin: 0 50%;
        border-radius: 0 100px 100px 0;
        animation: rotate-circle 4.25s ease-in;
      }

      &::before,
      &::after {
        content: '';
        height: 100px;
        position: absolute;
        background: #ffffff;
        transform: rotate(-45deg);
      }

      .icon-line {
        height: 5px;
        background-color: #4caf50;
        display: block;
        border-radius: 2px;
        position: absolute;
        z-index: 10;

        &.line-tip {
          top: 46px;
          left: 14px;
          width: 25px;
          transform: rotate(45deg);
          animation: icon-line-tip 0.75s;
        }

        &.line-long {
          top: 38px;
          right: 8px;
          width: 47px;
          transform: rotate(-45deg);
          animation: icon-line-long 0.75s;
        }
      }

      .icon-circle {
        top: -4px;
        left: -4px;
        z-index: 10;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        position: absolute;
        box-sizing: content-box;
        border: 4px solid rgba(76, 175, 80, 0.5);
      }

      .icon-fix {
        top: 8px;
        width: 5px;
        left: 26px;
        z-index: 1;
        height: 85px;
        position: absolute;
        transform: rotate(-45deg);
        background-color: #ffffff;
      }
    }
  }

  @keyframes rotate-circle {
    0% {
      transform: rotate(-45deg);
    }
    5% {
      transform: rotate(-45deg);
    }
    12% {
      transform: rotate(-405deg);
    }
    100% {
      transform: rotate(-405deg);
    }
  }

  @keyframes icon-line-tip {
    0% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    54% {
      width: 0;
      left: 1px;
      top: 19px;
    }
    70% {
      width: 50px;
      left: -8px;
      top: 37px;
    }
    84% {
      width: 17px;
      left: 21px;
      top: 48px;
    }
    100% {
      width: 25px;
      left: 14px;
      top: 45px;
    }
  }

  @keyframes icon-line-long {
    0% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    65% {
      width: 0;
      right: 46px;
      top: 54px;
    }
    84% {
      width: 55px;
      right: 0px;
      top: 35px;
    }
    100% {
      width: 47px;
      right: 8px;
      top: 38px;
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
  @media screen and (min-width: 1000px) {
    .modal {
      width: 35rem;
      height: 23rem;
      top: 25%;
      left: 35%;
      .alert {
        p {
          font-size: 1.5rem;
        }
        .alert__subTitle {
          font-size: 1.25rem;
        }
        .alert__title {
          font-size: 2rem;
        }
      }
    }
    .modal__close {
      top: -2.5rem;
      right: -2.5rem;
    }
  }
`;
