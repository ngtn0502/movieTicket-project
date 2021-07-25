import React, { useState } from 'react';
import styled from 'styled-components';
import format from 'date-format';
import {
  mapCGV,
  mapLotte,
  mapBHD,
  mapCineStar,
  mapGalaxy,
  mapMegaGS,
} from '../../../utils/constants.js';
import { getDay } from '../../../utils/helper.js';
import BookingInfo from './BookingInfo.js';

function BookingTable({ movie, cinema }) {
  // movie prop trả về là lịch chiếu phim tương ứng với rạp phim đưỢc click
  // Lấy giá trị của mỗi click event vào ngày chiếu phim
  const [ngayChieu, setNgayChieu] = useState(['Thứ Ba']);
  // Day of week
  //   Mục đích: lấy giá trị của tất cả ngày chiếu bộ phim này trong tuần - tương ứng với ngày chiếu của nó (do API trả về  phức tạp)
  //   Lấy ngày chiếu giờ chiếu và format nó thành tháng/ngày/năm do ta cần lọc những giá trị ngày trong tuần duy nhất
  const ngayChieuAll = movie
    ?.map((item) => item.ngayChieuGioChieu)
    .map((item) => format(`MM / dd / yyyy`, new Date(item)));
  const ngayChieuAllUnique = [...new Set(ngayChieuAll)];
  // Date
  //   Sau khi user click vào ngày chiếu ta sẽ truyền lên state và dựa vào đó để lọc ra tất cả lịch chiếu của bộ phim này trong ngày đó (không hiểu thì xem lại api - do api phức tạp)
  const dateChieu = movie?.filter(
    (item) => ngayChieu[0] === getDay(new Date(item.ngayChieuGioChieu))
  );

  const getCinema = () => {
    if (cinema === 'CGV') {
      return mapCGV;
    }
    if (cinema === 'LotteCinima') {
      return mapLotte;
    }
    if (cinema === 'BHDStar') {
      return mapBHD;
    }
    if (cinema === 'CineStar') {
      return mapCineStar;
    }
    if (cinema === 'Galaxy') {
      return mapGalaxy;
    }
    if (cinema === 'MegaGS') {
      return mapMegaGS;
    }
  };

  return (
    <Wrapper>
      {/* eslint-disable */}
      <div className='booking__table'>
        <div className='booking__table--map'>
          <div>{getCinema()}</div>
        </div>
        <div className='booking__info'>
          <BookingInfo
            ngayChieuAllUnique={ngayChieuAllUnique}
            dateChieu={dateChieu}
            setNgayChieu={setNgayChieu}
            getCinema={getCinema}
          ></BookingInfo>
        </div>
      </div>
    </Wrapper>
  );
}

export default BookingTable;

const Wrapper = styled.section`
  margin-top: 3rem;

  .booking__table {
    img {
      width: 100%;
      height: 400px;
    }
  }
  .booking__table--map {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    .booking__table {
      display: grid;
      grid-template-columns: 350px 1fr;
      gap: 2rem;
      img {
        width: 100%;
        height: 400px;
      }
    }
    .booking__table--map {
      display: block;
    }
    .booking__info {
      width: 100%;
      overflow: hidden;
    }
  }
`;
