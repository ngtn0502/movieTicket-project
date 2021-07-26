import React from 'react';
import styled from 'styled-components';
import { MdPayment } from 'react-icons/md';
import { FaCcVisa } from 'react-icons/fa';
import { HiOutlineCash } from 'react-icons/hi';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
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
              {choosingSeat.map((item) => (
                <p>Ghế {item.stt}</p>
              ))}
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
  width: 20rem;
  height: 100vh;
  top: 4rem;
  right: 0;
  background-color: rgba(70, 70, 70, 0.8);
  box-shadow: 0 0 25px rgb(160 160 160 / 50%);
  z-index: 2000;
  overflow: hidden;
  border-radius: var(--radius);
  /* global */

  h2,
  h5 {
    font-size: 2rem;
    font-weight: 700;
    text-align: center;
    color: #44c020;
    margin-bottom: 0;
  }
  h5 {
    text-align: left;
    font-size: 1rem;
  }

  .booking__right {
    ::-webkit-scrollbar {
      width: 0px;
      background: transparent; /* make scrollbar transparent */
    }
    height: 91vh;
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
  .btn-paying {
    background-color: #44c020;
    width: 100%;
    &:hover {
      background-color: rgb(18, 112, 12);
    }
  }
`;
