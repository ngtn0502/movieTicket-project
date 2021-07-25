import React, { useState } from 'react';
import styled from 'styled-components';
import format from 'date-format';
import { useHistory } from 'react-router';
import { FlexCenter } from '../../../utils/mixin.js';
// Cinema
import bhd from '../../../../assets/img/cinema/bhd-star-cineplex.png';
import cgv from '../../../../assets/img/cinema/cgv.png';
import cinestar from '../../../../assets/img/cinema/cinestar.png';
import galaxy from '../../../../assets/img/cinema/galaxy-cinema.png';
import lotte from '../../../../assets/img/cinema/lotte-cinema.png';
import megas from '../../../../assets/img/cinema/megags.png';
import BookingTable from './BookingTable.js';

//
function MovieDetailBooking({ movie }) {
  const history = useHistory();
  const [cinema, setCinema] = useState('CGV');
  // Tương ứng vớI mỗi click event trên logo rạp ta lọc ra các lịch chiếu phim `params` của rạp đó và truyền vào booking table
  const maHeThongRap = movie.lichChieu?.filter(
    (item) => item.thongTinRap.maHeThongRap === cinema
  );
  return (
    <Wrapper>
      {/* eslint-disable */}
      <main className='section-middle'>
        <div className='booking'>
          <h5 className='booking__title'>CHỌN RẠP CHIẾU</h5>
          <div className='booking__cinema'>
            {/*  */}
            <div
              className='booking__cinema--main'
              onClick={() => {
                setCinema('LotteCinima');
              }}
            >
              <img src={lotte} alt='cinema' />
              <div
                className={`${cinema === 'LotteCinima' ? null : 'overlay'}`}
              />
            </div>
            {/*  */}
            <div
              className='booking__cinema--main'
              onClick={() => {
                setCinema('CGV');
              }}
            >
              <img src={cgv} alt='cinema' />
              <div className={`${cinema === 'CGV' ? null : 'overlay'}`} />
            </div>
            {/*  */}

            <div
              className='booking__cinema--main'
              onClick={() => {
                setCinema('BHDStar');
              }}
            >
              <img src={bhd} alt='cinema' />
              <div className={`${cinema === 'BHDStar' ? null : 'overlay'}`} />
            </div>
            {/*  */}
            <div
              className='booking__cinema--main'
              onClick={() => {
                setCinema('CineStar');
              }}
            >
              <img src={cinestar} alt='cinema' />
              <div className={`${cinema === 'CineStar' ? null : 'overlay'}`} />
            </div>
            {/*  */}
            <div
              className='booking__cinema--main'
              onClick={() => {
                setCinema('Galaxy');
              }}
            >
              <img src={galaxy} alt='cinema' />
              <div className={`${cinema === 'Galaxy' ? null : 'overlay'}`} />
            </div>
            {/*  */}
            <div
              className='booking__cinema--main'
              onClick={() => {
                setCinema('MegaGS');
              }}
            >
              <img src={megas} alt='cinema' />
              <div className={`${cinema === 'MegaGS' ? null : 'overlay'}`} />
            </div>
          </div>
          {/* Booking  */}
          <div className='booking__table'>
            <BookingTable movie={maHeThongRap} cinema={cinema}></BookingTable>
          </div>
        </div>
      </main>
    </Wrapper>
  );
}

export default MovieDetailBooking;

const Wrapper = styled.section`
  margin-top: 5rem;
  .booking__title {
    font-size: 2rem;
    text-align: center;
    margin: 5rem 0;
    color: var(--color-white);
  }
  .booking__cinema {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    .booking__cinema--main {
      position: relative;
      .overlay {
        width: 72%;
        border-radius: 50%;
        opacity: 1;
        background: rgba(0, 0, 0, 0.8);
      }
    }
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin-right: 2rem;
    }
  }
  @media screen and (min-width: 700px){

  }
`;
