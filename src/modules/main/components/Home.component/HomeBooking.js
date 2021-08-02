import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';
import { getCinema } from '../../../utils/constants';
import { FlexCenter, FlexHCenter, FlexVCenter } from '../../../utils/mixin';

function HomeBooking() {
  const dispatch = useDispatch();
  const { cineplexList, movieByCineplex } = useSelector(
    (state) => state.homeReducer
  );
  const [cineplex, setCineplex] = useState('BHDStar');
  // Create unique cineplex
  const cineplexByBrand = movieByCineplex.filter(
    (item) => item.maHeThongRap === cineplex
  );
  console.log(cineplexByBrand);
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
            >
              <img src={item.logo} alt='movie' />
            </div>
            /* eslint-enable */
          ))}
        </div>
        <div className="homeBooking__cineplex">
          {cineplexByBrand[0]?.lstCumRap.map((item) => (
            <div className="homeBooking__item">
              {getCinema(cineplex)}
              <div>
                <p>{item.tenCumRap}</p>
                <p>{item.diaChi}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="homeBooking__schedule">{/*  */}</div>
      </div>
    </Wrapper>
  );
}

export default HomeBooking;

const Wrapper = styled.main`
  margin: 5rem auto;
  .homeBooking {
    display: grid;
    grid-template-columns: 100px 0.5fr 1fr;
    justify-items: start;
    gap: 5rem;
    overflow: hidden;
    /*  */
    .homeBooking__cineplexLogo {
      margin: 0 auto;
      position: relative;
      height: 60rem;
      div {
        img {
          margin-bottom: 3rem;
          max-width: 6rem;
          height: 6rem;
          cursor: pointer;
          border-radius: 50%;
        }
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          height: 2px;
          width: calc(100% - 10px);
          transform: translate(-50%, -1rem);
          background-color: #fb4226;
          box-shadow: 0 -4px 10px 1px #fb4226;
        }
      }
    }
    /*  */
    .homeBooking__cineplex {
      overflow-y: scroll;
      height: 60rem;
      &::-webkit-scrollbar {
        width: 10px;
        background-color: var(--color-gray-400);
        border-radius: 10px;
      }
      &::-webkit-scrollbar-thumb {
        background-color: var(--color-gray-800);
        border: 2px solid var(--color-gray-800);
        border-radius: 10px;
      }
      .homeBooking__item {
        margin-right: 1rem;
        display: flex;
        gap: 1rem;
        position: relative;
        img {
          margin-bottom: 3rem;
          max-width: 6rem;
          height: 6rem;
        }
        &:after {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 0;
          height: 2px;
          width: calc(100% - 10px);
          transform: translate(-50%, -1rem);
          background-color: #fb4226;
          box-shadow: 0 -4px 10px 1px #fb4226;
        }
      }
    }
  }
`;
