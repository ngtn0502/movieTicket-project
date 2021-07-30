import React from 'react';
import styled from 'styled-components';
import { MdPayment } from 'react-icons/md';
import { FaCcVisa } from 'react-icons/fa';
import { HiOutlineCash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
<<<<<<< HEAD
import { IoIosArrowDropleftCircle } from 'react-icons/io';
import { FlexCenter, Flex, FlexHCenter } from '../../../utils/mixin.js';
import { bookingSeatAction } from '../../../redux/actions/BookingAction/bookingAction';
import { REQUIRE__CHOOSINGSEAT } from '../../../redux/actions/constantsAction.js';

function BookingPageRight({
  cineRoomMovie,
  totalAmount,
  choosingSeat,
  setIsSideBarShow,
  className,
}) {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookingHandler = () => {
    if (choosingSeat.length === 0) {
      dispatch({ type: REQUIRE__CHOOSINGSEAT, payload: 'Vui lòng chọn ghế' });
    } else {
      // format to API data requirement
      const danhSachVe = [];
      choosingSeat.forEach((item) => {
        danhSachVe.push({ maGhe: item.maGhe, giaVe: item.giaVe });
      });
      dispatch(
        bookingSeatAction(cineRoomMovie.maLichChieu, danhSachVe, history)
      );
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
=======
import { FlexCenter, Flex, FlexHCenter } from '../../../utils/mixin.js';
import { bookingSeatAction } from '../../../redux/actions/BookingAction/bookingAction';

function BookingPageRight({ cineRoomMovie, totalAmount, choosingSeat }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const bookingHandler = () => {
    const danhSachVe = [];
    choosingSeat.forEach((item) => {
      danhSachVe.push({ maGhe: item.maGhe, giaVe: item.giaVe });
    });
    dispatch(bookingSeatAction(cineRoomMovie.maLichChieu, danhSachVe, history));
  };
  return (
    <Wrapper>
      <div className="booking__right">
        <div className="booking__price" />
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
        <div className="booking__info--movie">
          <img src={cineRoomMovie?.hinhAnh} alt="movie" />
          <h2>{cineRoomMovie?.tenPhim}</h2>
        </div>
        <hr />
        <div className="booking__info--pay">
          <h2>{totalAmount}đ</h2>
          <hr />
          <div>
            <p>Ngày chiếu:</p>
            <p>{cineRoomMovie?.ngayChieu}</p>
          </div>
          <div>
            <p>Giờ Chiếu:</p>
            <p>{cineRoomMovie?.gioChieu}</p>
          </div>
          <div>
            <p>Rạp:</p>
            <p>{cineRoomMovie?.tenRap}</p>
          </div>
          <div className="seat">
            <p>Ghế:</p>
            <div>
<<<<<<< HEAD
              {choosingSeat.length !== 0
                ? choosingSeat.map((item) => <p>Ghế {item.stt}</p>)
                : 'Vui lòng chọn ghế'}
=======
              {choosingSeat.map((item) => (
                <p>Ghế {item.stt}</p>
              ))}
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
            </div>
          </div>
          <div>
            <p>Ưu đãi:</p>
            <p>0%</p>
          </div>
        </div>
        <hr />
        <div className="booking__pay">
          <div className="payMethod">
            <h5>Hình thức thanh toán</h5>
            <div className="radio-selection">
              <form>
                <div className="radio__item">
                  <input
                    className="radio__item--input"
                    type="radio"
                    name="payMethod"
                    id="ATM"
                    defaultValue="ATM"
                  />
                  <label className="radio__item--label" htmlFor="ATM">
                    <div className="pay__figure">
                      <MdPayment />
                    </div>
                    <p className="pay__text">Thẻ ATM nội địa</p>
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
                    <p className="pay__text">Thanh toán tiền mặt</p>
                  </label>
                </div>
              </form>
              {/*  */}
            </div>
          </div>
        </div>
        <button
          type="button"
          className="btn__watching btn-paying"
          onClick={bookingHandler}
        >
          Đặt vé
        </button>
      </div>
    </Wrapper>
  );
}

export default BookingPageRight;
const Wrapper = styled.div`
  position: fixed;
<<<<<<< HEAD
  width: 100%;
  height: 100vh;
  top: 0rem;
=======
  width: 15rem;
  height: 100vh;
  top: 4rem;
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
  right: 0;
  /* background-color: rgba(70, 70, 70, 1); */
  background-color: var(--color-seat);
  box-shadow: 0 0 5px rgb(160 160 160 / 50%);
  z-index: 2000;
  overflow: hidden;
  border-radius: var(--radius);
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
<<<<<<< HEAD
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
=======

>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
  .booking__right {
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
<<<<<<< HEAD
    height: 100%;
=======
    height: 91vh;
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
    position: relative;
    width: 90%;
    margin: 0 auto;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  hr {
    margin: 1rem auto;
    border-top: 1px dashed white;
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
    }
    .seat {
      display: grid;
      grid-template-columns: 1fr 1fr;
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
  .payMethod {
    .radio__item {
      ${FlexHCenter()}
      gap: 0.5rem;
      .radio__item--label {
        ${FlexHCenter()}
        svg {
          width: 2rem;
          height: 2rem;
          margin-right: 1rem;
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
  /*  */
<<<<<<< HEAD
  @media screen and (min-width: 1000px) {
    width: 15rem;
    top: 4rem;
    .booking__right {
      height: 91vh;
    }
    .booking__back {
      display: none;
=======
  .btn-paying {
    background-color: #44c020;
    width: 100%;
    &:hover {
      background-color: rgb(18, 112, 12);
>>>>>>> 8c208ad9af24959ad9cf4c08965647c970240f9b
    }
  }
  @media screen and (min-width: 1200px) {
    width: 20rem;
  }
`;
