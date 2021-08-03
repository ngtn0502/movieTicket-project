import format from 'date-format';
import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { randomDuration, randomNumber } from '../../../utils/helper.js';
import { FlexCenter, FlexHCenter } from '../../../utils/mixin.js';
import MovieClass from './MovieClass.js';
import imdbLogo from '../../../../assets/img/imdb-logo.png';

const Day = '2019';

function HomeBookingSchedule({ danhSachPhim, className }) {
  const history = useHistory();
  return (
    <Wrapper className={className}>
      {danhSachPhim?.map((item) => {
        const lstLichChieuTheoPhim = item.lstLichChieuTheoPhim.filter((movie) =>
          movie.ngayChieuGioChieu?.includes(Day)
        );
        // console.log('lstLichChieuTheoPhim', lstLichChieuTheoPhim);
        if (lstLichChieuTheoPhim.length !== 0) {
          return (
            <div className="homeBooking__schedule--item">
              <div className="item__info">
                <img src={item.hinhAnh} alt="" className="item__info--img" />
                <div>
                  <MovieClass />
                  <p className="nameMovie">{item.tenPhim}</p>
                  <div className="subNameMovie">
                    <p>{randomDuration()} phút </p>
                    <div className="subtitle__imdb">
                      <img src={imdbLogo} alt="" />
                      {randomNumber()} ++
                    </div>
                  </div>
                </div>
              </div>
              <div className="item__schedule">
                {lstLichChieuTheoPhim.slice(0, 6).map((lichChieu) => (
                  <Link
                    className="btn"
                    to={`/booking/${lichChieu.maLichChieu}`}
                  >
                    {format(`hh:mm`, new Date(lichChieu.ngayChieuGioChieu))}
                  </Link>
                ))}
              </div>
            </div>
          );
        }
        return null;
      })}
    </Wrapper>
  );
}

export default HomeBookingSchedule;
const Wrapper = styled.div`
  padding: 20px 20px;
  height: 42rem;
  overflow: hidden;

  &:hover {
    overflow-y: auto;
  }
  &::-webkit-scrollbar {
    width: 5px;
    background-color: var(--color-gray-400);
    border-radius: var(--radius);
  }
  &::-webkit-scrollbar-thumb {
    width: 5px;
    background-color: var(--color-gray-800);
    border: 2px solid var(--color-gray-800);
    border-radius: var(--radius);
  }
  .homeBooking__schedule--item {
    margin-bottom: 5rem;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      height: 2px;
      width: 100%;
      transform: translate(-50%, 3rem);
      background-color: var(--color-gray-800);
      box-shadow: 0 -4px 10px 1px var(--color-gray-800);
      transition: var(--transition);
    }
    .item__info {
      ${FlexHCenter()}
      gap: 1rem;
      .item__info--img {
        width: 5rem;
        height: 5rem;
        border-radius: var(--radius);
      }
      .subNameMovie {
        ${FlexHCenter()}
        gap: 1rem;
      }
    }

    .item__schedule {
      margin-top: 1.5rem;
      display: flex;
      flex-wrap: wrap;
      gap: 2rem;
      a {
        background-color: transparent;
        border-radius: 0;
        padding: 0.75rem 1rem;
        font-size: 1rem;
        letter-spacing: 0.25rem;
        border: 1px solid black;

        &:hover {
          background-color: var(--color-seat);
        }
      }
    }
  }
`;