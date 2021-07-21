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

//
function MovieDetailBooking({ movie }) {
  const history = useHistory();
  const [cinema, setCinema] = useState('CGV');
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
          {/* Table */}
          <table className='booking__table'>
            <thead>
              <tr>
                <th>TÊN PHIM</th>
                <th>GIÁ VÉ</th>
                <th>TÊN RẠP</th>
                <th>NGÀY GIỜ CHIẾU</th>
              </tr>
            </thead>
            <tbody>
              {maHeThongRap?.slice(0, 15).map((item, index) => (
                <tr className={index % 2 ? 'active-row' : null} key={index}>
                  <td>{item.tenPhim}</td>
                  <td>{item.giaVe}</td>
                  <td>{item.thongTinRap.tenCumRap}</td>
                  <td>{format("dd/MM/yy ___ hh:mm",new Date(item.ngayChieuGioChieu))}</td>
                  <td>
                    <button className='btn2' type='button' onClick={()=>{history.push(`/booking/${item.maLichChieu}`)}}>
                      Đặt vé
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
    justify-content: center;
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
  .booking__table {
    margin: 5rem auto;
    width: 100%;
    gap: 2rem;
    border-collapse: collapse;
    tr {
      padding-bottom: 50px;
      border-top: none;
      border-bottom: none !important;
      color: #fff;
      font-size: 11px;
      text-transform: uppercase;
      letter-spacing: 0.2rem;
      text-align: center;
    }
    thead {
      th {
        font-size: 1.25rem;
      }
    }

    tbody {
      td {
        font-size: 1.25em;
        padding: 2rem 0;
        color: var(--color-gray-700);
        transition: var(--transition);
      }
      tr:hover td {
        color: var(--color-white);
      }
    }
    .active-row {
      background-color: rgba(0, 0, 0, 0.2);
    }
    .btn2 {
      color: var(--color-white);
      border-color: var(--color-white);
    }
  }
`;
