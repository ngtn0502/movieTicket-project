import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import {
  mapCGV,
  mapLotte,
  mapBHD,
  mapCineStar,
  mapGalaxy,
  mapMegaGS,
} from '../../../utils/constants.js';
import { FlexCenter, FlexHCenter, FlexVCenter } from '../../../utils/mixin.js';
import { choosingSeatAction } from '../../../redux/actions/BookingAction/bookingAction';

function BookingPageLeft({ cineSeatList, cineRoomMovie }) {
  const dispatch = useDispatch();
  //
  const selectSeatHandler = (seat) => {
    dispatch(choosingSeatAction(seat));
  };
  //
  const checkSeat = (seat) => {
    if (seat.daDat) {
      return seat.loaiGhe === 'Vip'
        ? 'seat seat__selected seat__vipSeat'
        : 'seat seat__selected';
    }
    if (seat.dangChon) {
      return 'seat seat__choosingSeat';
    }
    return seat.loaiGhe === 'Vip' ? 'seat  seat__vipSeat' : 'seat';
  };
  //   Get cinema picture base on what movie user booked
  const getCinema = () => {
    if (cineRoomMovie?.tenCumRap?.split(' ')[0].toLowerCase() === 'cgv') {
      return mapCGV;
    }
    if (cineRoomMovie?.tenCumRap?.split(' ')[0].toLowerCase() === 'lotte') {
      return mapLotte;
    }
    if (cineRoomMovie?.tenCumRap?.split(' ')[0].toLowerCase() === 'bhd') {
      return mapBHD;
    }
    if (cineRoomMovie?.tenCumRap?.split(' ')[0].toLowerCase() === 'cns') {
      return mapCineStar;
    }
    if (cineRoomMovie?.tenCumRap?.split(' ')[0].toLowerCase() === 'glx') {
      return mapGalaxy;
    }
    if (cineRoomMovie?.tenCumRap?.split(' ')[0].toLowerCase() === 'megags') {
      return mapMegaGS;
    }
  };

  return (
    <Wrapper>
      <div className="booking__left">
        <div className="booking__info">
          {getCinema()}
          <div>
            <p>{cineRoomMovie?.tenCumRap}</p>
            <p>{cineRoomMovie?.diaChi}</p>
            <p>{cineRoomMovie?.tenRap}</p>
          </div>
        </div>
        <div className="screen__container">
          <div className="screen" />
          <p>MÀN HÌNH</p>
          <div className="note">
            <div>
              <button type="button" className="seat seat__vipSeat">
                {/* ewrưe */}
              </button>
              <span>Ghế VIP</span>
            </div>
            <div>
              <button type="button" className="seat">
                {/* ewrưe */}
              </button>
              <span>Ghế thường</span>
            </div>
            <div>
              <button type="button" className="seat seat__selected">
                {/* ewrưe */}
              </button>
              <span>Ghế đã có người chọn</span>
            </div>
          </div>
        </div>
        <div className="booking__seat">
          <div>
            {cineSeatList?.slice(0, 16).map((seat) => (
              <button
                disabled={seat.daDat}
                type="button"
                className={checkSeat(seat)}
                onClick={() => {
                  selectSeatHandler(seat);
                }}
              >
                {`${seat.stt}`}
              </button>
            ))}
          </div>
          <div>
            {cineSeatList?.slice(16, 32).map((seat) => (
              <button
                disabled={seat.daDat}
                type="button"
                className={checkSeat(seat)}
                onClick={() => {
                  selectSeatHandler(seat);
                }}
              >
                {`${seat.stt}`}
              </button>
            ))}
          </div>
          <div>
            {cineSeatList?.slice(32, 48).map((seat) => (
              <button
                disabled={seat.daDat}
                type="button"
                className={checkSeat(seat)}
                onClick={() => {
                  selectSeatHandler(seat);
                }}
              >
                {`${seat.stt}`}
              </button>
            ))}
          </div>
          <div>
            {cineSeatList?.slice(48, 64).map((seat) => (
              <button
                disabled={seat.daDat}
                type="button"
                className={checkSeat(seat)}
                onClick={() => {
                  selectSeatHandler(seat);
                }}
              >
                {`${seat.stt}`}
              </button>
            ))}
          </div>
          <div>
            {cineSeatList?.slice(64, 80).map((seat) => (
              <button
                disabled={seat.daDat}
                type="button"
                className={checkSeat(seat)}
                onClick={() => {
                  selectSeatHandler(seat);
                }}
              >
                {`${seat.stt}`}
              </button>
            ))}
          </div>
          <div>
            {cineSeatList?.slice(80, 96).map((seat) => (
              <button
                disabled={seat.daDat}
                type="button"
                className={checkSeat(seat)}
                onClick={() => {
                  selectSeatHandler(seat);
                }}
              >
                {`${seat.stt}`}
              </button>
            ))}
          </div>
          {/* <div>
            {cineSeatList?.slice(50, 100).map((seat) => (
              <button
                disabled={seat.daDat}
                type="button"
                className={checkSeat(seat)}
                onClick={() => {
                  selectSeatHandler(seat);
                }}
              >
                {`${seat.stt}`}
              </button>
            ))}
          </div>
          <div>
            {cineSeatList?.slice(100, 150).map((seat) => (
              <button
                disabled={seat.daDat}
                type="button"
                className={checkSeat(seat)}
                onClick={() => {
                  selectSeatHandler(seat);
                }}
              >
                {`${seat.stt}`}
              </button>
            ))}
          </div> */}
        </div>
      </div>
    </Wrapper>
  );
}

export default BookingPageLeft;
const Wrapper = styled.section`
  .booking__info {
    margin: 7rem 0 2rem;
    img {
      max-height: 7rem;
      width: 10rem;
      margin-right: 1rem;
      border-radius: 10px;
    }
    ${FlexHCenter()}
    div {
      p {
        font-size: 1rem;
      }
      p:nth-child(2),
      p:nth-child(3) {
        color: var(--color-title);
      }
    }
  }
  .screen__container {
    perspective: 2000;
    transform: translateX(-1%);
    p {
      text-align: center;
      font-size: 1.5rem;
    }
    .screen {
      background-color: var(--color-white);
      height: 12rem;
      width: 100%;
      transform: rotateX(-45deg);
      box-shadow: 0 10px 30px rgba(255, 255, 255, 0.7);
    }
    .note {
      ${FlexVCenter()}

      div {
        margin-right: 1rem;
        span {
          font-size: 0.75rem;
          text-decoration: initial;
        }
        button {
          height: 17px;
          width: 25px;
          border-top-left-radius: 15px;
          border-top-right-radius: 15px;
        }
      }
    }
  }
  .booking__seat {
    margin-top: 1rem;
  }
  .seat {
    background-color: var(--color-seat);
    height: 25px;
    width: 37px;
    margin: 1rem 0.5rem;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    transition: var(--transition);
  }
  .seat__selected {
    background-color: var(--color-white);
  }
  .seat__choosingSeat {
    background-color: var(--color-choosingSeat);
  }
  .seat__vipSeat {
    background-color: var(--color-vipSeat);
    &:hover {
      background-color: var(--color-vipSeat);
    }
  }

  @media screen and (min-width: 1000px) {
    .booking__info {
      margin: 2rem 0;
      div {
        p {
          font-size: 1.25rem;
        }
      }
    }
  }
`;
