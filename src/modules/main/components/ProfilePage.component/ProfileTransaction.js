import React, { useState } from 'react';
import styled from 'styled-components';
import format from 'date-format';
import schedule from '../../../../assets/img/movie.png';
import { FlexHCenter } from '../../../utils/mixin.js';
import { getCinemaLogo } from '../../../utils/constants.js';
import CircleLoading from '../CircleLoading';

function ProfileTransaction({ className, thongTinDatVe }) {
  const [isImgLoading, setIsImgLoading] = useState(false);
  return (
    <Wrapper className={`${className}`}>
      <div className="transaction">
        {thongTinDatVe?.map((item) => (
          <>
            {' '}
            <img src={schedule} alt="" className="transaction__icon" />
            <div className="transaction__item">
              <div>
                <div>
                  <p>
                    Ticket Code: <span className="highlight"> {item.maVe}</span>
                  </p>
                  <p>
                    Movie: <span className="highlight"> {item.tenPhim}</span>
                  </p>
                  <p>
                    Booking Date:{' '}
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
                          <p className="highlight__seat">|| Seat {i.tenGhe}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>{' '}
              <div className="transasction__qrCode">
                <img
                  src={`https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=${item.maVe}&choe=UTF-8`}
                  alt="qrCode"
                  onLoad={() => setIsImgLoading(true)}
                  className="desktop"
                />{' '}
                <img
                  src={`https://chart.googleapis.com/chart?chs=500x200&cht=qr&chl=${item.maVe}&choe=UTF-8`}
                  alt="qrCode"
                  onLoad={() => setIsImgLoading(true)}
                  className="mobile"
                />
                {!isImgLoading && <CircleLoading />}
                <p>
                  {isImgLoading ? 'QR CODE FOR TICKET' : 'GENERATING QR CODE'}
                </p>
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
  .transaction__icon {
    display: none;
  }

  .transaction__item {
    p {
      font-size: 1.25rem;
      padding: 0.5rem 0;
    }
    .highlight {
      font-size: 1.25rem;
      color: var(--color-choosingSeat);
    }
    .highlight__seat {
      font-size: 1.25rem;
      color: var(--color-redNetflix);
    }
    .transaction__seat {
      font-size: 1.25rem;
      img {
        margin: 1rem 0;
        width: 2.5rem;
      }
      div {
        ${FlexHCenter()}
        gap: 1rem;
      }
    }
    .transasction__qrCode {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        /* width: 5rem; */
        /* height: 5rem; */
        margin-bottom: 0.25rem;
      }
    }
  }
  .desktop {
    display: none;
  }

  @media screen and (min-width: 576px) {
    .desktop {
      display: block;
    }
    .mobile {
      display: none;
    }
    .transaction__icon {
      display: block;
      height: 100%;
      width: 6rem;
      /* padding-bottom: 1rem; */
      margin: 0 auto;
    }

    .transaction__item {
      display: grid;
      grid-template-columns: 2fr 1fr;
      align-items: center;
      gap: 1rem;
      .transasction__qrCode {
        img {
          width: 50%;
        }
      }
    }
  }
`;
