import React, { useState } from 'react';
import styled from 'styled-components';
import format from 'date-format';
import { mapCGV } from '../../../utils/constants.js';
import { getDay } from '../../../utils/helper.js';
import BookingInfo from './BookingInfo.js';

function BookingTable({ movie }) {
  // movie prop trả về là lịch chiếu phim tương ứng với rạp phim đưỢc click
  // Lấy giá trị của mỗi click event vào ngày chiếu phim
  const [ngayChieu, setNgayChieu] = useState(['Tuesday']);
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
  console.log(dateChieu);

  //   console.log(dateChieu);
  return (
    <Wrapper>
      {/* eslint-disable */}
      <div className='booking__table'>
        <div className='booking__table--map'>
          {/* <h4>{item.thongTinRap.tenCumRap}</h4> */}
          <div>{mapCGV}</div>
        </div>
        <div className='booking__info'>
          {/* <div className='booking__info--date'>
            {ngayChieuAllUnique?.map((item, index) => {
              return (
                <div
                  onClick={() => {
                    setNgayChieu([getDay(new Date(item))]);
                  }}
                  className='date'
                >
                  <p className='date__weekday'>{getDay(new Date(item))}</p>
                  <p className='date__date'>
                    {format(`dd / MM`, new Date(item))}
                  </p>
                </div>
              );
            })}
          </div> */}
          {/*  */}
          {/* <div className='booking__info--hour'>
            {dateChieu?.map((item) => {
              return (
                <div>
                  <span>
                    {format(`hh:mm`, new Date(item.ngayChieuGioChieu))}
                  </span>
                </div>
              );
            })}
          </div> */}
          <BookingInfo
            ngayChieuAllUnique={ngayChieuAllUnique}
            dateChieu={dateChieu}
            setNgayChieu={setNgayChieu}
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
    iframe {
      width: 100%;
      height: 500px;
    }
  }
  .booking__table--map {
    display: none;
  }
  @media screen and (min-width: 1000px) {
    .booking__table {
    display: grid;
    grid-template-columns: 300px 1fr;
    gap: 5rem;
    iframe {
      width: 100%;
      height: 500px;
    }
  }
    .booking__table--map {
      display: block;
    }
    .booking__info{
      width: 100%;
      overflow: hidden;
    }
  }
`;
