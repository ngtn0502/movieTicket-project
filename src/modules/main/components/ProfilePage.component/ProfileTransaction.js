import React, { useEffect } from 'react';
import styled from 'styled-components';
import format from 'date-format';
import { MdLocalMovies, MdMovie } from 'react-icons/md';
import schedule from '../../../../assets/img/movie.png';
import { FlexHCenter } from '../../../utils/mixin.js';
import { getCinemaLogo } from '../../../utils/constants.js';

function ProfileTransaction({ className, userProfile }) {
  const { thongTinDatVe } = userProfile;
  console.log(userProfile);
  return (
    <Wrapper className={`${className}`}>
      <div className="transaction">
        {thongTinDatVe?.map((item) => (
          <>
            <div className="transaction__item">
              <img src={schedule} alt="" />
              <div>
                <p>
                  Ticket Code: <span className="highlight"> {item.maVe}</span>
                </p>
                <p>
                  Movie: <span className="highlight"> {item.tenPhim}</span>
                </p>
                <p>
                  Date:{' '}
                  <span className="highlight">
                    {' '}
                    {format('dd:MM:yyyy', new Date(item.ngayDat))}{' '}
                  </span>
                </p>
                {/* <p>Price:{item.giaVe}đ</p> */}
                <div className="transaction__seat">
                  Seat:{' '}
                  {item.danhSachGhe.map((i) => (
                    <div>
                      {getCinemaLogo(i.maHeThongRap)}
                      <div>
                        <p className="highlight">{i.tenHeThongRap}</p>
                        <p className="highlight">|| Seat {i.tenGhe}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <hr />
          </>
        ))}
      </div>
    </Wrapper>
  );
}

export default ProfileTransaction;
const Wrapper = styled.div`
  .transaction__item {
    gap: 1rem;
    img {
      height: 100%;
      width: 5rem;
      /* padding-bottom: 1rem; */
      margin: 0 auto;
    }
    p {
      font-size: 1.25rem;
      padding: 0.5rem 0;
    }
    .highlight {
      font-size: 1.25rem;
      color: var(--color-choosingSeat);
    }

    .transaction__seat {
      font-size: 1.25rem;
      img {
        margin: 1rem 0;
        width: 3rem;
      }
      div {
        ${FlexHCenter()}
        gap: 1rem;
      }
    }
  }
`;
