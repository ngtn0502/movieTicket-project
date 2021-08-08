import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { motion } from 'framer-motion';
import {
  mapCGV,
  mapLotte,
  mapBHD,
  mapCineStar,
  mapGalaxy,
  mapMegaGS,
  loadingVariants,
} from '../../../utils/constants.js';
import { FlexCenter, FlexHCenter, FlexVCenter } from '../../../utils/mixin.js';
import { choosingSeatAction } from '../../../redux/actions/BookingAction/bookingAction';
import screen from '../../../../assets/img/bookingPage/screen.png';

function BookingPageLeft({ cineSeatList, cineRoomMovie }) {
  const bookingRef = useRef();
  const history = useHistory();
  const dispatch = useDispatch();
  //
  const selectSeatHandler = (seat) => {
    dispatch(choosingSeatAction(seat, history));
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
  useEffect(() => {
    bookingRef.current.scrollIntoView({ inline: 'center' });
  }, []);
  return (
    <motion.section
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <Wrapper>
        <div className="booking__left">
          <div className="booking__info">
            <div className="booking__info--address">
              <img src={cineRoomMovie.hinhAnh} alt="" />
              <div>
                <p className="nameMovie">{cineRoomMovie?.tenCumRap}</p>
                <p className="subNameMovie">
                  {cineRoomMovie?.diaChi} -- {cineRoomMovie?.tenRap}
                </p>
              </div>
            </div>
            <div />
          </div>
          <main className="booking__container">
            <div className="booking__seat">
              <div className="screen__container">
                <div className="screen" ref={bookingRef}>
                  <img src={screen} alt="screen" />
                </div>
              </div>
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
              </div>{' '}
              <div>
                {cineSeatList?.slice(96, 112).map((seat) => (
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
              </div>{' '}
              <div>
                {cineSeatList?.slice(112, 128).map((seat) => (
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
              </div>{' '}
              <div>
                {cineSeatList?.slice(128, 144).map((seat) => (
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
              </div>{' '}
              <div>
                {cineSeatList?.slice(144, 160).map((seat) => (
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
            </div>
          </main>
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
      </Wrapper>{' '}
    </motion.section>
  );
}

export default BookingPageLeft;
const Wrapper = styled.section`
  padding-bottom: 5rem;
  .booking__info {
    margin: 5rem 0 0;
    .booking__info--name {
      display: flex;
      span {
        padding: 0.25rem 2rem;
        border-bottom: 1px solid var(--color-gray-700);
        padding-top: 0.5rem;
        text-align: center;
      }
    }
    .booking__info--address {
      display: flex;
      img {
        max-height: 5rem;
        width: 5rem;
        margin-right: 1rem;
        border-radius: 10px;
      }
    }
  }

  .booking__container {
    overflow: hidden;
    overflow-x: scroll; /* Scroll Bar */
  }

  .screen__container {
    padding-bottom: 1rem;
    img {
      margin: 0 auto;
      width: 80%;
    }
  }
  .note {
    ${FlexVCenter()}
    padding-top: 1rem;
    div {
      margin-right: 1rem;
      span {
        font-size: 0.75rem;
        text-decoration: initial;
      }
      button {
        width: 1.5rem;
        height: 1.5rem;
      }
    }
  }
  .booking__seat {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    width: 250%;
  }
  .seat {
    background-color: var(--color-seat);
    width: 2rem;
    height: 2rem;
    margin-right: 10px;
    margin-top: 10px;
    border-radius: var(--radius);
    background: #3e515d;
    transition: var(--transition);
    color: transparent;
  }
  .seat__selected {
    background-color: var(--color-white) !important;
  }
  .seat__choosingSeat {
    background-color: var(--color-choosingSeat);
    color: var(--color-white) !important;
  }
  .seat__vipSeat {
    background-color: var(--color-vipSeat);
    &:hover {
      background-color: var(--color-vipSeat);
    }
  }

  @media screen and (min-width: 768px) {
    .booking__container {
      overflow: visible;
      overflow-x: visible;
    }
    .booking__seat {
      width: 100%;
    }
    .booking__info--address {
      margin: 5rem 0 0 10rem;
    }
  }
  @media screen and (min-width: 992px) {
  }

  @media screen and (min-width: 1200px) {
    .booking__info {
      margin: 2rem 0;
      p {
        font-size: 1.25rem;
      }
      .title {
        font-size: 1.5rem;
      }
    }
  }
`;
