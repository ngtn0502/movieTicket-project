import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { getCinema } from '../../../utils/constants';
import { FlexCenter, FlexHCenter, FlexVCenter } from '../../../utils/mixin';
import HomeBookingSchedule from './HomeBookingSchedule.js';

function HomeBooking() {
  const dispatch = useDispatch();
  const { cineplexList, movieByCineplex } = useSelector(
    (state) => state.homeReducer
  );
  const [cineplex, setCineplex] = useState('BHDStar');
  const [phimTheoCumRap, setPhimTheoCumRap] = useState(
    'bhd-star-cineplex-bitexco'
  );
  // Create unique cineplex
  const cineplexByBrand = movieByCineplex.filter(
    (item) => item.maHeThongRap === cineplex
  );
  // create lstCumRap
  // if dont understand - review API
  let lstCumRap;
  if (cineplexByBrand !== undefined) {
    lstCumRap = cineplexByBrand[0]?.lstCumRap;
  }
  const phimTheoCumRapArray = lstCumRap?.filter(
    (item) => item.maCumRap === phimTheoCumRap
  );
  let danhSachPhim;
  if (phimTheoCumRapArray !== undefined) {
    danhSachPhim = phimTheoCumRapArray[0]?.danhSachPhim;
  }
  // console.log(danhSachPhim);
  // console.log('cineplex', cineplex);
  // console.log('phimTheoCumRap', phimTheoCumRap);
  // lấy cụm rạp đầu tiên
  useEffect(() => {
    if (lstCumRap !== undefined) {
      setPhimTheoCumRap(lstCumRap[0].maCumRap);
    }
  }, [cineplex]);
  return (
    <Wrapper className="section-middle">
      <div className="homeBooking">
        <div className="homeBooking__cineplexLogo">
          {cineplexList.map((item) => (
            /* eslint-disable */
            <div
              onClick={() => {
                setCineplex(item.maHeThongRap);
              }}
              className={`homeBooking__logo ${
                cineplex === item.maHeThongRap ? 'active' : null
              }`}
            >
              <img src={item.logo} alt='movie' />
            </div>
            /* eslint-enable */
          ))}
        </div>
        <div className="homeBooking__main">
          <div className="homeBooking__cineplex">
            {lstCumRap?.map((item) => (
              /* eslint-disable */
              <>
                <div
                  className={`homeBooking__cineplex--item ${
                    phimTheoCumRap === item.maCumRap ? 'active' : null
                  }`}
                  onClick={() => {
                    setPhimTheoCumRap(item.maCumRap);
                  }}
                >
                  {getCinema(cineplex)}
                  <div>
                    <p className='nameMovie'>{item.tenCumRap}</p>
                    <p className='subNameMovie'>
                      {item.diaChi?.slice(0, 51)}......
                    </p>
                  </div>
                </div>
                <HomeBookingSchedule
                  danhSachPhim={danhSachPhim}
                  className='homeBooking__schedule--mobile'
                />
              </>
              /* eslint-enable */
            ))}{' '}
          </div>
          <HomeBookingSchedule
            danhSachPhim={danhSachPhim}
            className="homeBooking__schedule--destop"
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default HomeBooking;

const Wrapper = styled.main`
  margin: 5rem auto;
  background-color: rgba(300, 300, 300, 0.1);

  .homeBooking {
    gap: 2rem;
    overflow: hidden;
    /*  */
    border: 2px solid var(--color-gray-800);
    .homeBooking__schedule--mobile {
      display: none;
    }
    .homeBooking__schedule--active {
      display: block;
    }

    .homeBooking__schedule--destop {
      display: none;
    }
    .homeBooking__cineplexLogo {
      margin: 0 auto;
      height: auto;
      width: 100%;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      padding-bottom: 20px;
      img {
        width: 4rem;
        height: auto;
        border-radius: var(--radius);
      }
      .homeBooking__logo {
        position: relative;
        padding: 20px;
        height: 7rem;
        transition: var(--transition);
        opacity: 0.5;
        cursor: pointer;
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          height: 2px;
          width: calc(100% - 10px);
          transform: translate(-50%, 0rem);
          background-color: var(--color-gray-800);
          box-shadow: 0 -4px 10px 1px var(--color-gray-800);
          transition: var(--transition);
        }
        &:hover {
          opacity: 1;
          &::after {
            background-color: #fb4226;
            box-shadow: 0 -4px 10px 1px #fb4226;
          }
        }

        &:before {
          content: '';
          position: absolute;
          right: -1rem;
          bottom: 0;
          height: 10000rem;
          /* width: 2rem; */
          transform: rotateX('45deg');
          border: 1px solid var(--color-gray-800);
          background-color: var(--color-gray-800);
        }
      }
      .active {
        opacity: 1;
        &::after {
          background-color: #fb4226;
          box-shadow: 0 -4px 10px 1px #fb4226;
        }
      }
    }
    /*  */
    .homeBooking__cineplex {
      height: 42rem;
      position: relative;
      overflow: hidden;
      img {
        width: 4rem;
        height: 4rem;
        border-radius: var(--radius);
      }
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

      .homeBooking__cineplex--item {
        /* margin-right: 1rem; */
        display: flex;
        gap: 1rem;
        position: relative;
        /* padding-right: 2rem; */
        /* max-width: 90%; */
        cursor: pointer;
        padding: 20px;
        height: 7rem;
        opacity: 0.5;
        &:hover {
          opacity: 1;
          &::after {
            background-color: #fb4226;
            box-shadow: 0 -4px 10px 1px #fb4226;
          }
        }

        &:after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          height: 2px;
          min-width: calc(100% - 5rem);
          transform: translate(-50%, 0rem);
          background-color: var(--color-gray-800);
          box-shadow: 0 -4px 10px 1px var(--color-gray-800);
          transition: var(--transition);
        }
        &:before {
          content: '';
          position: absolute;
          /* right: -4rem; */
          right: 0;
          bottom: 0;
          height: 10000rem;
          /* width: 2rem; */
          transform: rotateX('45deg');
          border: 1px solid var(--color-gray-800);
          background-color: var(--color-gray-800);
        }
      }

      .active {
        opacity: 1;
        &::after {
          background-color: #fb4226;
          box-shadow: 0 -4px 10px 1px #fb4226;
        }
      }
    }
  }
  @media screen and (min-width: 992px) {
    .homeBooking {
      display: grid;
      grid-template-columns: 100px 1fr;
      .homeBooking__main {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: start;
      }
      .homeBooking__cineplexLogo {
        display: block;
        height: 42rem;
      }
      .homeBooking__schedule--mobile {
        display: none;
      }

      .homeBooking__schedule--destop {
        display: block;
      }
    }
  }
`;
