import React from 'react';
import styled from 'styled-components';
import { MdPayment } from 'react-icons/md';
import { FaCcVisa } from 'react-icons/fa';
import { HiOutlineCash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import {
  FlexCenter,
  Flex,
  FlexHCenter,
  FlexVCenter,
} from '../../../utils/mixin.js';
import {
  REQUIRE__CHOOSINGSEAT,
  USER_BOOKING_WARNING,
} from '../../../redux/actions/constantsAction.js';

function BookingPageRight({
  cineRoomMovie,
  totalAmount,
  choosingSeat,
  setIsSideBarShow,
  className,
}) {
  const dispatch = useDispatch();
  // Handle reset total amount

  // Handle booking
  const bookingHandler = () => {
    if (choosingSeat.length === 0) {
      dispatch({
        type: REQUIRE__CHOOSINGSEAT,
        payload: {
          type: 'Warning',
          message: 'Please selecting your seat',
          message2: 'you may forgot something!',
          goTo: null,
        },
      });
    } else {
      //
      dispatch({
        type: USER_BOOKING_WARNING,
        payload: {
          type: 'Confirm',
          message: 'Ticket will be send to you via Email!',
          message2: 'please make sure the information is correct',
          goTo: null,
        },
      });
    }
  };
  return (
    <Wrapper className={className}>
      <div className="booking__right">
        <div className="booking__back">
          <button
            type="button"
            className="btn"
            onClick={() => {
              setIsSideBarShow(false);
            }}
          >
            <IoIosArrowDropleftCircle />
            Go Back
          </button>
        </div>
        <div className="booking__info--movie">
          <h2>{cineRoomMovie?.tenPhim}</h2>
        </div>
        <hr />
        <div className="booking__info--pay">
          <h2>{totalAmount}đ</h2>
          <hr />
          <div>
            <p>Date: </p>
            <p>{cineRoomMovie?.ngayChieu}</p>
          </div>
          <div>
            <p>Show time: </p>
            <p>{cineRoomMovie?.gioChieu}</p>
          </div>
          <div>
            <p>Room: </p>
            <p>{cineRoomMovie?.tenRap}</p>
          </div>
          <div className="booking__seat">
            <p>Seat: </p>
            <div>
              {choosingSeat?.length !== 0 ? (
                choosingSeat?.map((item) => (
                  <p key={item.maGhe}>Seat {item.stt}.</p>
                ))
              ) : (
                <p>Please choosing your seat!</p>
              )}
            </div>
          </div>
          <div>
            <p>Discount: </p>
            <p>0%</p>
          </div>
        </div>
        <hr />
        <div className="booking__payMethod">
          <div className="payMethod">
            <h5>Payment method</h5>
            <div className="radio-selection">
              <form>
                <div className="radio__item">
                  <input
                    className="radio__item--input"
                    type="radio"
                    name="payMethod"
                    id="ATM"
                    defaultValue="ATM"
                    defaultChecked
                  />
                  <label className="radio__item--label" htmlFor="ATM">
                    <div className="pay__figure">
                      <MdPayment />
                    </div>
                    <p className="pay__text">Credit Cards</p>
                  </label>
                </div>
                <div className="radio__item">
                  <input
                    className="radio__item--input"
                    type="radio"
                    name="payMethod"
                    id="VISA"
                    defaultValue="VISA"
                  />
                  <label className="radio__item--label" htmlFor="VISA">
                    <div className="pay__figure">
                      <FaCcVisa />
                    </div>
                    <p className="pay__text">Visa, Master, JCB</p>
                  </label>
                </div>
                <div className="radio__item">
                  <input
                    className="radio__item--input"
                    type="radio"
                    name="payMethod"
                    id="CASH"
                    defaultValue="CASH"
                  />
                  <label className="radio__item--label" htmlFor="CASH">
                    <div className="pay__figure">
                      <HiOutlineCash />
                    </div>
                    <p className="pay__text">By Cash</p>
                  </label>
                </div>
              </form>
              {/*  */}
            </div>
          </div>
        </div>
      </div>
      <div className="bookingLeft__button">
        <button
          type="button"
          className="booking__button"
          onClick={bookingHandler}
        >
          BOOKING
        </button>
      </div>
    </Wrapper>
  );
}

export default BookingPageRight;
const Wrapper = styled.main`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 0rem;
  right: 0;
  background-color: #f5f5f5;
  /* background-color: var(--color-seat); */
  box-shadow: 0 0 5px rgb(160 160 160 / 50%);
  z-index: 2000;
  overflow: hidden;
  border-radius: var(--radius);
  color: black;
  /* global */
  h2,
  h5 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 0;
  }
  h5 {
    text-align: left;
    font-size: 1rem;
  }
  .booking__back {
    ${FlexCenter()}
    button {
      ${FlexCenter()}
      gap: 1rem;
      margin: 1rem;
      font-size: 1rem;
      padding: 0.5rem 0.5rem;
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
  .booking__right {
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
    height: 100%;
    position: relative;
    width: 90%;
    margin: 0 auto;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  hr {
    margin: 1rem auto;
    border-top: 1px dashed black;
  }
  div {
    padding: 0.25rem 0;
  }
  /*  */
  .booking__info--movie {
    img {
      margin: 0 auto;
      width: 10rem;
      height: 5rem;
      border-radius: 10px;
    }
    h2 {
      padding-top: 1rem;
    }
  }
  .booking__info--pay {
    div {
      ${Flex({ justify: 'space-between', align: 'center' })}
      p:nth-child(2) {
        font-weight: 700;
      }
      padding: 0.5rem 0;
    }
    .booking__seat {
      display: grid;
      grid-template-columns: 1fr 2fr;
      p {
        color: var(--color-redNetflix);
        margin: 0;
      }
      div {
        display: flex;
        flex-wrap: wrap;
        padding: 0;
        gap: 0.5rem;
        justify-self: end;
        p {
          font-weight: 700;
        }
      }
    }
  }
  /* payMethod */
  .booking__payMethod {
    margin-bottom: 1rem;
    .payMethod {
      .radio__item {
        ${FlexHCenter()}
        gap: 0.5rem;
        .radio__item--label {
          cursor: pointer;
          ${FlexHCenter()}
          svg {
            width: 2rem;
            height: 2rem;
            margin-right: 1rem;
          }
        }
      }
    }
  }
  /* Check box */
  .radio__item--input[type='radio'] {
    display: none;
  }

  .radio__item--label {
    position: relative;
    display: flex;
    align-items: center;
  }
  .radio__item--label:before {
    content: '';
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid rgb(74, 144, 226);
    margin-right: 1rem;
  }
  .radio__item--input[type='radio']:checked + .radio__item--label:before {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: rgb(74, 144, 226);
  }
  /* Button paying */
  .bookingLeft__button {
    position: absolute;
    ${FlexVCenter()}
    width: 100%;
    bottom: 1rem;
    .booking__button {
      ${FlexCenter()}
      width: 90%;
      padding: 1.5rem 0;
      opacity: 1;
    }
  }

  /*  */
  @media screen and (min-width: 1000px) {
    width: 22rem;
    top: 4rem;
    .booking__right {
      height: 85vh;
    }
    .booking__back {
      display: none;
    } /* Button paying */
    .bookingLeft__button {
      bottom: 4.5rem;
    }
  }
`;
