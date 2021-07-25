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
import { FlexCenter, FlexHCenter } from '../../../utils/mixin.js';
import { choosingSeatAction } from '../../../redux/actions/BookingAction/bookingAction';

function BookingPageLeft({ cineRoomList }) {
  const dispatch = useDispatch();
  const choosingSeat = useSelector((state) => state.choosingSeatReducer.seat);
  //
  const selectSeatHandler = (seat) => {
    dispatch(choosingSeatAction(seat));
  };
  //
  console.log('re render');
  const checkSeat = (seat) => {
    if (seat.daDat) {
      return 'seat seat__selected';
    }

    return 'seat';
  };
  console.log(choosingSeat);
  //   Get cinema picture base on what movie user booked
  const getCinema = () => {
    if (
      cineRoomList?.thongTinPhim?.tenCumRap.split(' ')[0].toLowerCase() ===
      'cgv'
    ) {
      return mapCGV;
    }
    if (
      cineRoomList?.thongTinPhim?.tenCumRap.split(' ')[0].toLowerCase() ===
      'lotte'
    ) {
      return mapLotte;
    }
    if (
      cineRoomList?.thongTinPhim?.tenCumRap.split(' ')[0].toLowerCase() ===
      'bhd'
    ) {
      return mapBHD;
    }
    if (
      cineRoomList?.thongTinPhim?.tenCumRap.split(' ')[0].toLowerCase() ===
      'cns'
    ) {
      return mapCineStar;
    }
    if (
      cineRoomList?.thongTinPhim?.tenCumRap.split(' ')[0].toLowerCase() ===
      'glx'
    ) {
      return mapGalaxy;
    }
    if (
      cineRoomList?.thongTinPhim?.tenCumRap.split(' ')[0].toLowerCase() ===
      'megags'
    ) {
      return mapMegaGS;
    }
  };
  console.log('cinelist', cineRoomList);

  return (
    <Wrapper>
      <div className="booking__left">
        <div className="booking__info">
          {getCinema()}
          <div>
            <p>{cineRoomList.thongTinPhim?.tenCumRap}</p>
            <p>{cineRoomList.thongTinPhim?.diaChi}</p>
            <p>{cineRoomList.thongTinPhim?.tenRap}</p>
          </div>
        </div>
        <div className="screen__container">
          <div className="screen" />
        </div>
        <div className="booking__seat">
          <div>
            {cineRoomList.danhSachGhe?.slice(0, 50).map((seat) => (
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
            {cineRoomList.danhSachGhe?.slice(50, 100).map((seat) => (
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
            {cineRoomList.danhSachGhe?.slice(100, 150).map((seat) => (
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
      </div>
    </Wrapper>
  );
}

export default BookingPageLeft;
const Wrapper = styled.section``;
