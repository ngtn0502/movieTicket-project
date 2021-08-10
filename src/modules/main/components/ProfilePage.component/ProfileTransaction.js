import React, { useEffect } from 'react';
import styled from 'styled-components';
import format from 'date-format';
import { MdLocalMovies, MdMovie } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import schedule from '../../../../assets/img/movie.png';
import { FlexHCenter } from '../../../utils/mixin.js';
import { getCinemaLogo } from '../../../utils/constants.js';
import { getQRCodeAction } from '../../../redux/actions/authAction.js';
import CircleLoading from '../CircleLoading';

function ProfileTransaction({ className, thongTinDatVe }) {
  const dispatch = useDispatch();
  // const getQRCode = (qrText) => {
  //   dispatch(getQRCodeAction(qrText));
  // };
  return (
    <Wrapper className={`${className}`}>
      <div className="transaction">
        {thongTinDatVe?.map((item) => (
          // getQRCode(item.maVe);
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
                {(
                  <img
                    src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${item.maVe}`}
                    alt="qrCode"
                  />
                ) || <CircleLoading />}
                <p>QR CODE FOR TICKET</p>
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
    height: 100%;
    width: 6rem;
    /* padding-bottom: 1rem; */
    margin: 0 auto;
  }

  .transaction__item {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 1rem;
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
        width: 50%;
        height: auto;
        margin-bottom: 0.25rem;
      }
    }
  }
`;
