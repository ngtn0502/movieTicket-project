import React, { useState } from 'react';
import styled from 'styled-components';
// Cinema

import bhd from '../../../../assets/img/cinema/bhd-star-cineplex.png';
import cgv from '../../../../assets/img/cinema/cgv.png';
import cinestar from '../../../../assets/img/cinema/cinestar.png';
import galaxy from '../../../../assets/img/cinema/galaxy-cinema.png';
import lotte from '../../../../assets/img/cinema/lotte-cinema.png';
import megas from '../../../../assets/img/cinema/megags.png';
import BookingTable from './BookingTable.js';
//
function MovieDetailBooking({ movies }) {
  const [cinema, setCinema] = useState('CGV');
  // Tương ứng vớI mỗi click event trên logo rạp ta lọc ra các lịch chiếu phim `params` của rạp đó và truyền vào booking table
  const maHeThongRap = movies.lichChieu?.filter(
    (item) => item.thongTinRap.maHeThongRap === cinema
  );
  // Get cinema picture respective with what user choose
  const getCinemaPicture = (img, setString) => (
    /* eslint-disable */
    <div
      className='booking__cinema--main'
      onClick={() => {
        setCinema(setString);
      }}
    >
      <img src={img} alt='cinema' />
      <div
        className={`${cinema === setString ? 'active__cinema' : 'overlay'}`}
      />
    </div>
    /* eslint-enable */
  );
  return (
    <Wrapper>
      {/* eslint-disable */}
      <main className='section-middle'>
        <div className='booking'>
          <h5 className='booking__title'>CHOOSING CINEMAS</h5>
          <div className='booking__cinema'>
            {getCinemaPicture(lotte, 'LotteCinima')}
            {getCinemaPicture(cgv, 'CGV')}
            {getCinemaPicture(bhd, 'BHDStar')}
            {getCinemaPicture(cinestar, 'CineStar')}
            {getCinemaPicture(galaxy, 'Galaxy')}
            {getCinemaPicture(megas, 'MegaGS')}
          </div>
          {/* Booking  */}
          <div className='booking__table'>
            <BookingTable movies={maHeThongRap} cinema={cinema}></BookingTable>
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
    .active__cinema {
      &:after {
        content: '';
        position: absolute;
        bottom: -1rem;
        height: 2px;
        width: 100%;
        right: 1rem;
        background-color: #fb4226;
        box-shadow: 0 -4px 10px 1px #fb4226;
      }
    }
    img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      /* margin: 0 auto; */
      margin-right: 2rem;
    }
  }
  @media screen and (min-width: 700px) {
  }
`;
